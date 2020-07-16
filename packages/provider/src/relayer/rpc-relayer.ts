import { ArcadeumTransaction, ArcadeumWalletConfig, ArcadeumContext } from '../types'
import { TransactionResponse, Provider, BlockTag } from 'ethers/providers'

import { ChaindService } from './gen/chaind.gen'
import { BaseRelayer } from './base-relayer'

import * as pony from 'fetch-ponyfill'
import { ethers } from 'ethers'
import { addressOf, readArcadeumNonce, appendNonce, MetaTransactionsType, arcadeumTxAbiEncode } from '../utils'

import { IRelayer } from '.'

type RelayerTxReceipt = {
  blockHash: string;
  blockNumber: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  logs: {
    address: string;
    blockHash: string;
    blockNumber: string;
    data: string;
    logIndex: string;
    removed: boolean;
    topics: string[];
    transactionHash: string;
    transactionIndex: string;
  }[],
  logsBloom: string;
  root: string;
  status: string;
  transactionHash: string;
  transactionIndex: string;
}

export class RpcRelayer extends BaseRelayer implements IRelayer {
  private readonly chaindApp: ChaindService

  constructor(
    url: string,
    bundleDeploy: boolean = false,
    provider?: Provider
  ) {
    super(bundleDeploy, provider)
    this.chaindApp = new ChaindService(url, pony().fetch)
  }

  async waitReceipt(
    metaTxHash: string,
    wait: number = 500
  ) {
    let result = await this.chaindApp.getMetaTxnReceipt({ metaTxID: metaTxHash })

    while(!result.receipt.txnReceipt || result.receipt.txnReceipt === 'null') {
      await new Promise(r => setTimeout(r, wait))
      result = await this.chaindApp.getMetaTxnReceipt({ metaTxID: metaTxHash })
    }

    return result
  }

  async gasRefundOptions(
    config: ArcadeumWalletConfig,
    context: ArcadeumContext,
    ...transactions: ArcadeumTransaction[]
  ): Promise<ArcadeumTransaction[][]> {
    // chaind only supports refunds on a single token
    // TODO: Add compatiblity for different refund options
    const tokenFee = (await this.chaindApp.tokenFee()).fee

    // No gas refund required, return transactions as-is
    if (tokenFee === ethers.constants.AddressZero) {
      return [transactions]
    }

    const addr = addressOf(config, context)
    const prevNonce = readArcadeumNonce(...transactions)

    // Set temporal nonce to simulate meta-txn
    if (prevNonce === undefined) {
      transactions = appendNonce(transactions, await this.getNonce(config, context))
    }

    const encoded = ethers.utils.defaultAbiCoder.encode([MetaTransactionsType], [arcadeumTxAbiEncode(transactions)])
    const res = await this.chaindApp.estimateMetaTxnGasReceipt({
      feeToken: tokenFee,
      call: {
        contract: addr,
        payload: encoded,
        signers: config.signers.length
      }
    })

    const decoded = ethers.utils.defaultAbiCoder.decode([MetaTransactionsType], `0x${res.res.payload}`)[0]
    return prevNonce === undefined ? [appendNonce(decoded, prevNonce)] : [decoded]
  }

  async estimateGasLimits(
    config: ArcadeumWalletConfig,
    context: ArcadeumContext,
    ...transactions: ArcadeumTransaction[]
  ): Promise<ArcadeumTransaction[]> {
    if (transactions.length == 0) {
      return []
    }

    const addr = addressOf(config, context)
    const prevNonce = readArcadeumNonce(...transactions)

    // Set temporal nonce to simulate meta-txn
    if (prevNonce === undefined) {
      transactions = appendNonce(transactions, await this.getNonce(config, context))
    }

    const encoded = ethers.utils.defaultAbiCoder.encode([MetaTransactionsType], [arcadeumTxAbiEncode(transactions)])
    const res = await this.chaindApp.estimateMetaTxnGasReceipt({
      feeToken: ethers.constants.AddressZero,
      call: {
        contract: addr,
        payload: encoded,
        signers: config.signers.length
      }
    })

    const decoded = ethers.utils.defaultAbiCoder.decode([MetaTransactionsType], `0x${res.res.payload}`)[0]
    const modTxns = transactions.map((t, i) => ({ ...t, gasLimit: decoded[i].gasLimit}))

    // Remove placeholder nonce if previously defined
    return prevNonce === undefined ? appendNonce(modTxns, prevNonce) : modTxns
  }

  async getNonce(
    config: ArcadeumWalletConfig,
    context: ArcadeumContext,
    space?: number,
    blockTag?: BlockTag
  ): Promise<number> {
    const addr = addressOf(config, context)
    const resp = await this.chaindApp.getMetaTxnNonce({ walletContractAddress: addr })
    return ethers.utils.bigNumberify(resp.nonce).toNumber()
  }

  async relay(
    config: ArcadeumWalletConfig,
    context: ArcadeumContext,
    signature: string | Promise<string>,
    ...transactions: ArcadeumTransaction[]
  ): Promise<TransactionResponse> {
    const prep = await this.prepare(config, context, signature, ...transactions)
    const result = this.chaindApp.sendMetaTxn({
      call: {
        contract: prep.to,
        input: prep.data
      }
    })

    const receipt = (await this.waitReceipt((await result).txnHash)).receipt
    const txReceipt = JSON.parse(receipt.txnReceipt) as RelayerTxReceipt

    return ({
      blockHash: txReceipt.blockHash,
      blockNumber: ethers.utils.bigNumberify(txReceipt.blockNumber).toNumber(),
      confirmations: 1,
      from: addressOf(config, context),
      raw: receipt.txnReceipt,
      wait: async () => this.provider.waitForTransaction(txReceipt.transactionHash)
    } as TransactionResponse)
  }
}
