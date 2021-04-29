/* eslint-disable */
// chaind v0.1.0 cc433c812330197c7087fb887d55bcd0eaaa8a05
// --
// This file has been generated by https://github.com/webrpc/webrpc using gen/typescript
// Do not edit by hand. Update your webrpc schema and re-generate.

// WebRPC description and code-gen version
export const WebRPCVersion = "v1"

// Schema version of your RIDL schema
export const WebRPCSchemaVersion = "v0.1.0"

// Schema hash generated from your RIDL schema
export const WebRPCSchemaHash = "cc433c812330197c7087fb887d55bcd0eaaa8a05"


//
// Types
//
export enum SortOrder {
  DESC = 'DESC',
  ASC = 'ASC'
}

export interface Balance {
  id: number
  contractAddress: string
  contractAlias: string
  accountAddress: string
  tokenID: string
  amountLatest: string
  amountConfirmed: string
  blockHash: string
  blockHeight: number
  
  updatedAt: string
  createdAt: string
}

export interface EtherBalance {
  accountAddress: string
  amountLatestWei: string
  amountConfirmedWei: string
  lastBlockHeight: number
}

export interface GasReceipt {
  gasFee: string
  gasLimit: Array<string>
}

export interface MetaTxn {
  contract: string
  input: string
  digest?: string
}

export interface TxnObj {
  to: string
  objs: Array<TxnObj>
  txnStatus: string
  txnRevertReason: string
  logs?: Array<any>
}

export interface MetaTxnReceipt {
  id: string
  status: string
  revertReason: string
  gasUsed: number
  txnReceipt: string
  batch: TxnObj
}

export interface TokenTransfer {
  recipientAddress: string
  tokenID: string
  tokenAmount: string
}

export interface RuntimeStatus {
  chainState: Array<any>
}

export interface SmartWalletContext {
  factory: string
  module: string
  guestModule: string
}

export interface MetaTxSigner {
  address: string
  weight: number
}

export interface MetaTxSig {
  address: string
  signature: string
  digest?: string
}

export interface WalletConfigImage {
  imageHash: string
  threshold: number
  signers: Array<MetaTxSigner>
}

export interface WalletImage {
  walletAddress: string
  imageHash: string
}

export interface Version {
  webrpcVersion: string
  schemaVersion: string
  schemaHash: string
  appVersion: string
}

export interface Page {
  pageSize?: number
  page?: number
  totalRecords?: number
  column?: string
  before?: any
  after?: any
  sort?: Array<SortBy>
}

export interface SortBy {
  column: string
  order: SortOrder
}

export interface ChaindService {
  ping(headers?: object): Promise<PingReturn>
  version(headers?: object): Promise<VersionReturn>
  runtimeStatus(headers?: object): Promise<RuntimeStatusReturn>
  etherBalance(args: EtherBalanceArgs, headers?: object): Promise<EtherBalanceReturn>
  contractBalanceOf(args: ContractBalanceOfArgs, headers?: object): Promise<ContractBalanceOfReturn>
  contractBalanceOfTokenIDs(args: ContractBalanceOfTokenIDsArgs, headers?: object): Promise<ContractBalanceOfTokenIDsReturn>
  contractBalanceSync(args: ContractBalanceSyncArgs, headers?: object): Promise<ContractBalanceSyncReturn>
  contractBalanceSyncTokenIDs(args: ContractBalanceSyncTokenIDsArgs, headers?: object): Promise<ContractBalanceSyncTokenIDsReturn>
  contractCall(args: ContractCallArgs, headers?: object): Promise<ContractCallReturn>
  sendMetaTxn(args: SendMetaTxnArgs, headers?: object): Promise<SendMetaTxnReturn>
  getMetaTxnReceipt(args: GetMetaTxnReceiptArgs, headers?: object): Promise<GetMetaTxnReceiptReturn>
  getMetaTxnNonce(args: GetMetaTxnNonceArgs, headers?: object): Promise<GetMetaTxnNonceReturn>
  getSmartWalletContext(headers?: object): Promise<GetSmartWalletContextReturn>
  getChainID(headers?: object): Promise<GetChainIDReturn>
  tokenFee(headers?: object): Promise<TokenFeeReturn>
  getEstimatedTime(headers?: object): Promise<GetEstimatedTimeReturn>
  updateMetaTxnGasLimits(args: UpdateMetaTxnGasLimitsArgs, headers?: object): Promise<UpdateMetaTxnGasLimitsReturn>
  getMetaTxnNetworkFeeOptions(args: GetMetaTxnNetworkFeeOptionsArgs, headers?: object): Promise<GetMetaTxnNetworkFeeOptionsReturn>
  pushMetaTxn(args: PushMetaTxnArgs, headers?: object): Promise<PushMetaTxnReturn>
  getMetaTxn(args: GetMetaTxnArgs, headers?: object): Promise<GetMetaTxnReturn>
}

export interface PingArgs {
}

export interface PingReturn {
  status: boolean  
}
export interface VersionArgs {
}

export interface VersionReturn {
  version: Version  
}
export interface RuntimeStatusArgs {
}

export interface RuntimeStatusReturn {
  status: RuntimeStatus  
}
export interface EtherBalanceArgs {
  accountAddress: string
}

export interface EtherBalanceReturn {
  balance: EtherBalance  
}
export interface ContractBalanceOfArgs {
  contractHandle: string
  accountAddress: string
}

export interface ContractBalanceOfReturn {
  status: boolean
  balances: Array<Balance>  
}
export interface ContractBalanceOfTokenIDsArgs {
  contractHandle: string
  accountAddress: string
  tokenIDs: Array<string>
}

export interface ContractBalanceOfTokenIDsReturn {
  status: boolean
  balances: Array<Balance>  
}
export interface ContractBalanceSyncArgs {
  contractHandle: string
  accountAddress: string
}

export interface ContractBalanceSyncReturn {
  status: boolean
  balances: Array<Balance>  
}
export interface ContractBalanceSyncTokenIDsArgs {
  contractHandle: string
  accountAddress: string
  tokenIDs: Array<string>
}

export interface ContractBalanceSyncTokenIDsReturn {
  status: boolean
  balances: Array<Balance>  
}
export interface ContractCallArgs {
  contract: string
  inputExpr: string
  outputExpr: string
  args: Array<string>
}

export interface ContractCallReturn {
  returns: Array<string>  
}
export interface SendMetaTxnArgs {
  call: MetaTxn
}

export interface SendMetaTxnReturn {
  status: boolean
  txnHash: string  
}
export interface GetMetaTxnReceiptArgs {
  metaTxID: string
}

export interface GetMetaTxnReceiptReturn {
  receipt: MetaTxnReceipt  
}
export interface GetMetaTxnNonceArgs {
  walletContractAddress: string
  space?: string
}

export interface GetMetaTxnNonceReturn {
  nonce: string  
}
export interface GetSmartWalletContextArgs {
}

export interface GetSmartWalletContextReturn {
  data: SmartWalletContext  
}
export interface GetChainIDArgs {
}

export interface GetChainIDReturn {
  chainID: number  
}
export interface TokenFeeArgs {
}

export interface TokenFeeReturn {
  isFee: boolean
  fee: string  
}
export interface GetEstimatedTimeArgs {
}

export interface GetEstimatedTimeReturn {
  seconds: number  
}
export interface UpdateMetaTxnGasLimitsArgs {
  walletAddress: string
  payload: string
}

export interface UpdateMetaTxnGasLimitsReturn {
  payload: string  
}
export interface GetMetaTxnNetworkFeeOptionsArgs {
  walletAddress: string
  payload: string
  signers: number
}

export interface GetMetaTxnNetworkFeeOptionsReturn {
  options: Array<string>  
}
export interface PushMetaTxnArgs {
  call: MetaTxn
}

export interface PushMetaTxnReturn {
  status: boolean  
}
export interface GetMetaTxnArgs {
  call: MetaTxn
}

export interface GetMetaTxnReturn {
  status: boolean
  signedMetaTxn: MetaTxn  
}


  
//
// Client
//
export class ChaindService implements ChaindService {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/ChaindService/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = fetch
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }
  
  ping = (headers?: object): Promise<PingReturn> => {
    return this.fetch(
      this.url('Ping'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status)
        }
      })
    })
  }
  
  version = (headers?: object): Promise<VersionReturn> => {
    return this.fetch(
      this.url('Version'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          version: <Version>(_data.version)
        }
      })
    })
  }
  
  runtimeStatus = (headers?: object): Promise<RuntimeStatusReturn> => {
    return this.fetch(
      this.url('RuntimeStatus'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <RuntimeStatus>(_data.status)
        }
      })
    })
  }
  
  etherBalance = (args: EtherBalanceArgs, headers?: object): Promise<EtherBalanceReturn> => {
    return this.fetch(
      this.url('EtherBalance'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          balance: <EtherBalance>(_data.balance)
        }
      })
    })
  }
  
  contractBalanceOf = (args: ContractBalanceOfArgs, headers?: object): Promise<ContractBalanceOfReturn> => {
    return this.fetch(
      this.url('ContractBalanceOf'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          balances: <Array<Balance>>(_data.balances)
        }
      })
    })
  }
  
  contractBalanceOfTokenIDs = (args: ContractBalanceOfTokenIDsArgs, headers?: object): Promise<ContractBalanceOfTokenIDsReturn> => {
    return this.fetch(
      this.url('ContractBalanceOfTokenIDs'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          balances: <Array<Balance>>(_data.balances)
        }
      })
    })
  }
  
  contractBalanceSync = (args: ContractBalanceSyncArgs, headers?: object): Promise<ContractBalanceSyncReturn> => {
    return this.fetch(
      this.url('ContractBalanceSync'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          balances: <Array<Balance>>(_data.balances)
        }
      })
    })
  }
  
  contractBalanceSyncTokenIDs = (args: ContractBalanceSyncTokenIDsArgs, headers?: object): Promise<ContractBalanceSyncTokenIDsReturn> => {
    return this.fetch(
      this.url('ContractBalanceSyncTokenIDs'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          balances: <Array<Balance>>(_data.balances)
        }
      })
    })
  }
  
  contractCall = (args: ContractCallArgs, headers?: object): Promise<ContractCallReturn> => {
    return this.fetch(
      this.url('ContractCall'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          returns: <Array<string>>(_data.returns)
        }
      })
    })
  }
  
  sendMetaTxn = (args: SendMetaTxnArgs, headers?: object): Promise<SendMetaTxnReturn> => {
    return this.fetch(
      this.url('SendMetaTxn'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          txnHash: <string>(_data.txnHash)
        }
      })
    })
  }
  
  getMetaTxnReceipt = (args: GetMetaTxnReceiptArgs, headers?: object): Promise<GetMetaTxnReceiptReturn> => {
    return this.fetch(
      this.url('GetMetaTxnReceipt'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          receipt: <MetaTxnReceipt>(_data.receipt)
        }
      })
    })
  }
  
  getMetaTxnNonce = (args: GetMetaTxnNonceArgs, headers?: object): Promise<GetMetaTxnNonceReturn> => {
    return this.fetch(
      this.url('GetMetaTxnNonce'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          nonce: <string>(_data.nonce)
        }
      })
    })
  }
  
  getSmartWalletContext = (headers?: object): Promise<GetSmartWalletContextReturn> => {
    return this.fetch(
      this.url('GetSmartWalletContext'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          data: <SmartWalletContext>(_data.data)
        }
      })
    })
  }
  
  getChainID = (headers?: object): Promise<GetChainIDReturn> => {
    return this.fetch(
      this.url('GetChainID'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          chainID: <number>(_data.chainID)
        }
      })
    })
  }
  
  tokenFee = (headers?: object): Promise<TokenFeeReturn> => {
    return this.fetch(
      this.url('TokenFee'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          isFee: <boolean>(_data.isFee), 
          fee: <string>(_data.fee)
        }
      })
    })
  }
  
  getEstimatedTime = (headers?: object): Promise<GetEstimatedTimeReturn> => {
    return this.fetch(
      this.url('GetEstimatedTime'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          seconds: <number>(_data.seconds)
        }
      })
    })
  }
  
  updateMetaTxnGasLimits = (args: UpdateMetaTxnGasLimitsArgs, headers?: object): Promise<UpdateMetaTxnGasLimitsReturn> => {
    return this.fetch(
      this.url('UpdateMetaTxnGasLimits'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          payload: <string>(_data.payload)
        }
      })
    })
  }
  
  getMetaTxnNetworkFeeOptions = (args: GetMetaTxnNetworkFeeOptionsArgs, headers?: object): Promise<GetMetaTxnNetworkFeeOptionsReturn> => {
    return this.fetch(
      this.url('GetMetaTxnNetworkFeeOptions'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          options: <Array<string>>(_data.options)
        }
      })
    })
  }
  
  pushMetaTxn = (args: PushMetaTxnArgs, headers?: object): Promise<PushMetaTxnReturn> => {
    return this.fetch(
      this.url('PushMetaTxn'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status)
        }
      })
    })
  }
  
  getMetaTxn = (args: GetMetaTxnArgs, headers?: object): Promise<GetMetaTxnReturn> => {
    return this.fetch(
      this.url('GetMetaTxn'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          signedMetaTxn: <MetaTxn>(_data.signedMetaTxn)
        }
      })
    })
  }
  
}

  
export interface WebRPCError extends Error {
  code: string
  msg: string
	status: number
}

const createHTTPRequest = (body: object = {}, headers: object = {}): object => {
  return {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {})
  }
}

const buildResponse = (res: Response): Promise<any> => {
  return res.text().then(text => {
    let data
    try {
      data = JSON.parse(text)
    } catch(err) {
      throw { code: 'unknown', msg: `expecting JSON, got: ${text}`, status: res.status } as WebRPCError
    }
    if (!res.ok) {
      throw data // webrpc error response
    }
    return data
  })
}

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>
