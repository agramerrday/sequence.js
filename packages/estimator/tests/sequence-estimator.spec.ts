
import { CallReceiverMock, HookCallerMock } from '@0xsequence/wallet-contracts'

import { Transaction } from '@0xsequence/transactions'

import { LocalRelayer } from '@0xsequence/relayer'

import { WalletContext, Networks } from '@0xsequence/network'
import { JsonRpcProvider } from '@ethersproject/providers'
import { ethers, Signer as AbstractSigner } from 'ethers'

import { configureLogger } from '@0xsequence/utils'

import chaiAsPromised from 'chai-as-promised'
import * as chai from 'chai'

const CallReceiverMockArtifact = require('@0xsequence/wallet-contracts/artifacts/contracts/mocks/CallReceiverMock.sol/CallReceiverMock.json')
const HookCallerMockArtifact = require('@0xsequence/wallet-contracts/artifacts/contracts/mocks/HookCallerMock.sol/HookCallerMock.json')

const { expect } = chai.use(chaiAsPromised)

configureLogger({ logLevel: 'DEBUG' })

import { Wallet } from '@0xsequence/wallet'
import { deployWalletContext } from '@0xsequence/wallet/tests/utils/deploy-wallet-context'
import { OverwriterSequenceEstimator } from '../src'
import { OverwriterEstimator } from '../dist/0xsequence-estimator.cjs'
import { encodeData } from '@0xsequence/wallet/tests/utils'

type EthereumInstance = {
  chainId: number
  provider: JsonRpcProvider
  signer: AbstractSigner
}

describe('Wallet integration', function () {
  let ethnode: EthereumInstance

  let relayer: LocalRelayer
  let callReceiver: CallReceiverMock
  let hookCaller: HookCallerMock

  let context: WalletContext
  let networks: Networks

  let estimator: OverwriterSequenceEstimator

  before(async () => {
    // Provider from hardhat without a server instance
    const url = "http://127.0.0.1:10045/"
    const provider = new ethers.providers.JsonRpcProvider(url)

    ethnode = {
      chainId: (await provider.getNetwork()).chainId,
      provider: provider,
      signer: provider.getSigner()
    }

    networks = [{
      name: 'local',
      chainId: ethnode.chainId,
      provider: ethnode.provider,
      isDefaultChain: true,
      isAuthChain: true
    }]

    // Deploy Sequence env
    const [
      factory,
      mainModule,
      mainModuleUpgradable,
      guestModule,
      sequenceUtils,
      requireFreshSigner
    ] = await deployWalletContext(ethnode.signer)

    // Create fixed context obj
    context = {
      factory: factory.address,
      mainModule: mainModule.address,
      mainModuleUpgradable: mainModuleUpgradable.address,
      guestModule: guestModule.address,
      sequenceUtils: sequenceUtils.address,
      libs: {
        requireFreshSigner: requireFreshSigner.address
      }
    }

    // Deploy call receiver mock
    callReceiver = (await new ethers.ContractFactory(
      CallReceiverMockArtifact.abi,
      CallReceiverMockArtifact.bytecode,
      ethnode.signer
    ).deploy()) as CallReceiverMock

    // Deploy hook caller mock
    hookCaller = (await new ethers.ContractFactory(
      HookCallerMockArtifact.abi,
      HookCallerMockArtifact.bytecode,
      ethnode.signer
    ).deploy()) as HookCallerMock

    // Deploy local relayer
    relayer = new LocalRelayer({signer: ethnode.signer })

    // Create gas estimator
    estimator = new OverwriterSequenceEstimator(new OverwriterEstimator({ rpc: ethnode.provider }))
  })

  function sleep(ms: number) {
       return new Promise(resolve => setTimeout(resolve, ms));
    }

  beforeEach(async () => {
    await callReceiver.setRevertFlag(false)
    await callReceiver.testCall(0, [])
  })

  describe('estimate gas of transactions', () => {
    const options = [{
      name: "single signer wallet",
      getWallet: async () => {
        const pk = ethers.utils.randomBytes(32)
        const wallet = await Wallet.singleOwner(pk, context)
        return wallet.connect(ethnode.provider, relayer)
      }
    }, {
      name: "multiple signers wallet",
      getWallet: async () => {
        const signers = new Array(4).fill(0).map(() => ethers.Wallet.createRandom())

        const config = {
          threshold: 3,
          signers: signers.map((s) => ({ weight: 1, address: s.address}))
        }

        const wallet = new Wallet({ context, config }, ...signers.slice(0, 3))
        return wallet.connect(ethnode.provider, relayer)
      }
    }, {
      name: "many multiple signers wallet",
      getWallet: async () => {
        const signers = new Array(111).fill(0).map(() => ethers.Wallet.createRandom())

        const config = {
          threshold: 11,
          signers: signers.map((s) => ({ weight: 1, address: s.address}))
        }

        const wallet = new Wallet({ context, config }, ...signers.slice(0, 12))
        return wallet.connect(ethnode.provider, relayer)
      }
    }, {
      name: "nested wallet",
      getWallet: async () => {
        const EOAsigners = new Array(2).fill(0).map(() => ethers.Wallet.createRandom())

        const NestedSigners = await Promise.all(new Array(2).fill(0).map(async () => {
          const signers = new Array(3).fill(0).map(() => ethers.Wallet.createRandom())
          const config = {
            threshold: 2,
            signers: signers.map((s) => ({ weight: 1, address: s.address }))
          }
          const wallet = new Wallet({ context: context, config: config }, ...signers.slice(0, 2)).connect(ethnode.provider, relayer)
          await relayer.deployWallet(wallet.config, wallet.context)
          return wallet.connect(ethnode.provider, relayer)
        }))

        const signers = [...NestedSigners, ...EOAsigners]

        const config = {
          threshold: 3,
          signers: signers.map((s) => ({ weight: 1, address: s.address}))
        }

        const wallet = new Wallet({ context, config }, ...signers)
        return wallet.connect(ethnode.provider, relayer)
      }
    }, {
      name: "asymetrical signers wallet",
      getWallet: async () => {
        const signersA = new Array(5).fill(0).map(() => ethers.Wallet.createRandom())
        const signersB = new Array(6).fill(0).map(() => ethers.Wallet.createRandom())

        const signers = [...signersA, ...signersB]

        const config = {
          threshold: 5,
          signers: signers.map((s, i) => ({ weight: (i <= signersA.length ? 1 : 10), address: s.address}))
        }

        const wallet = new Wallet({ context, config }, ...signersA)
        return wallet.connect(ethnode.provider, relayer)
      }
    }
  ]

    options.map((o) => {
      describe(`with ${o.name}`, () => {
        let wallet: Wallet

        beforeEach(async () => {
          wallet = await o.getWallet()
        })

        describe("with deployed wallet", () => {
          let txs: Transaction[]
    
          beforeEach(async () => {
            await callReceiver.testCall(0, [])
            await relayer.deployWallet(wallet.config, wallet.context)
          })

          describe("a single transaction", () => {
            beforeEach(async () => {
              txs = [{
                delegateCall: false,
                revertOnError: false,
                gasLimit: 0,
                to: callReceiver.address,
                value: ethers.constants.Zero,
                data: await encodeData(callReceiver, "testCall", 14442, "0x112233"),
                nonce: 0
              }]
            })

            it("should use estimated gas for a single transaction", async () => {
              const estimation = await estimator.estimateGasLimits(wallet.config, wallet.context, ...txs)
              const realTx = await (await wallet.sendTransaction(estimation.transactions)).wait(1)
  
              expect(realTx.gasUsed.toNumber()).to.be.approximately(estimation.total.toNumber(), 10000)
              expect(realTx.gasUsed.toNumber()).to.be.below(estimation.total.toNumber())
  
              expect((await callReceiver.lastValA()).toNumber()).to.equal(14442)
            })
  
            it("should predict gas usage for a single transaction", async () => {
              const estimation = await estimator.estimateGasLimits(wallet.config, wallet.context, ...txs)
              const realTx = await (await wallet.sendTransaction(txs)).wait(1)
      
              expect(realTx.gasUsed.toNumber()).to.be.approximately(estimation.total.toNumber(), 10000)
              expect(realTx.gasUsed.toNumber()).to.be.below(estimation.total.toNumber())
      
              expect((await callReceiver.lastValA()).toNumber()).to.equal(14442)
            })
  
            it("should use estimated gas for a single failing transaction", async () => {
              await callReceiver.setRevertFlag(true)
              const estimation = await estimator.estimateGasLimits(wallet.config, wallet.context, ...txs)
              const realTx = await (await wallet.sendTransaction(estimation.transactions)).wait(1)
      
              expect(realTx.gasUsed.toNumber()).to.be.approximately(estimation.total.toNumber(), 10000)
              expect(realTx.gasUsed.toNumber()).to.be.below(estimation.total.toNumber())
      
              expect((await callReceiver.lastValA()).toNumber()).to.equal(0)
            })
          })

          describe("a batch of transactions", () => {
            let valB: Uint8Array

            beforeEach(async () => {
              await callReceiver.setRevertFlag(true)
              valB = ethers.utils.randomBytes(99)

              txs = [{
                delegateCall: false,
                revertOnError: false,
                gasLimit: 0,
                to: callReceiver.address,
                value: ethers.constants.Zero,
                data: await encodeData(callReceiver, "setRevertFlag", false),
                nonce: 0
              }, {
                delegateCall: false,
                revertOnError: true,
                gasLimit: 0,
                to: callReceiver.address,
                value: ethers.constants.Zero,
                data: await encodeData(callReceiver, "testCall", 2, valB),
                nonce: 0
              }]
            })

            it("should use estimated gas for a batch of transactions", async () => {
              const estimation = await estimator.estimateGasLimits(wallet.config, wallet.context, ...txs)
              const realTx = await (await wallet.sendTransaction(estimation.transactions)).wait(1)
  
              expect(realTx.gasUsed.toNumber()).to.be.approximately(estimation.total.toNumber(), 30000)
              expect(realTx.gasUsed.toNumber()).to.be.below(estimation.total.toNumber())
  
              expect(ethers.utils.hexlify(await callReceiver.lastValB())).to.equal(ethers.utils.hexlify(valB))
            })
          })
        })
      })
    })
  })
})
