# @0xsequence/provider

## 0.31.1

### Patch Changes

- @0xsequence/wallet@0.31.1
- @0xsequence/auth@0.31.1

## 0.31.0

### Minor Changes

- - upgrading to ethers v5.5

### Patch Changes

- Updated dependencies
  - @0xsequence/abi@0.31.0
  - @0xsequence/auth@0.31.0
  - @0xsequence/config@0.31.0
  - @0xsequence/network@0.31.0
  - @0xsequence/transactions@0.31.0
  - @0xsequence/utils@0.31.0
  - @0xsequence/wallet@0.31.0

## 0.30.0

### Minor Changes

- - upgrade most deps

### Patch Changes

- Updated dependencies
  - @0xsequence/abi@0.30.0
  - @0xsequence/auth@0.30.0
  - @0xsequence/config@0.30.0
  - @0xsequence/network@0.30.0
  - @0xsequence/transactions@0.30.0
  - @0xsequence/utils@0.30.0
  - @0xsequence/wallet@0.30.0

## 0.29.9

### Patch Changes

- @0xsequence/auth@0.29.9

## 0.29.8

### Patch Changes

- update api
- Updated dependencies [undefined]
  - @0xsequence/abi@0.29.8
  - @0xsequence/auth@0.29.8
  - @0xsequence/config@0.29.8
  - @0xsequence/network@0.29.8
  - @0xsequence/transactions@0.29.8
  - @0xsequence/utils@0.29.8
  - @0xsequence/wallet@0.29.8

## 0.29.7

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/wallet@0.29.7
  - @0xsequence/auth@0.29.7

## 0.29.6

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/network@0.29.6
  - @0xsequence/auth@0.29.6
  - @0xsequence/config@0.29.6
  - @0xsequence/transactions@0.29.6
  - @0xsequence/wallet@0.29.6

## 0.29.5

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/auth@0.29.5
  - @0xsequence/config@0.29.5
  - @0xsequence/wallet@0.29.5

## 0.29.4

### Patch Changes

- @0xsequence/auth@0.29.4

## 0.29.3

### Patch Changes

- @0xsequence/auth@0.29.3

## 0.29.2

### Patch Changes

- @0xsequence/wallet@0.29.2
- @0xsequence/auth@0.29.2

## 0.29.1

### Patch Changes

- @0xsequence/auth@0.29.1

## 0.29.0

### Minor Changes

- major architectural changes in Sequence design

  - only one API instance, API is no longer a per-chain service
  - separate per-chain indexer service, API no longer handles indexing
  - single contract metadata service, API no longer serves metadata

  chaind package has been removed, indexer and metadata packages have been added

  stronger typing with new explicit ChainId type

  multicall fixes and improvements

  forbid "wait" transactions in sendTransactionBatch calls

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/auth@0.29.0
  - @0xsequence/config@0.29.0
  - @0xsequence/network@0.29.0
  - @0xsequence/transactions@0.29.0
  - @0xsequence/abi@0.29.0
  - @0xsequence/utils@0.29.0
  - @0xsequence/wallet@0.29.0

## 0.28.0

### Minor Changes

- extension provider

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.28.0
  - @0xsequence/auth@0.28.0
  - @0xsequence/config@0.28.0
  - @0xsequence/network@0.28.0
  - @0xsequence/transactions@0.28.0
  - @0xsequence/utils@0.28.0
  - @0xsequence/wallet@0.28.0

## 0.27.2

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/wallet@0.27.2
  - @0xsequence/auth@0.27.2

## 0.27.1

### Patch Changes

- @0xsequence/wallet@0.27.1
- @0xsequence/auth@0.27.1

## 0.27.0

### Minor Changes

- Add requireFreshSigner lib to sessions

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.27.0
  - @0xsequence/auth@0.27.0
  - @0xsequence/config@0.27.0
  - @0xsequence/network@0.27.0
  - @0xsequence/transactions@0.27.0
  - @0xsequence/utils@0.27.0
  - @0xsequence/wallet@0.27.0

## 0.26.0

### Minor Changes

- update relayer client bindings
  provide the wallet's address for calls to SendMetaTxn
  modify the semantics of Relayer.getNonce() to allow relayers to select nonce spaces for clients

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/wallet@0.26.0
  - @0xsequence/auth@0.26.0

## 0.25.1

### Patch Changes

- Fix build typescrypt issue
- Updated dependencies [undefined]
  - @0xsequence/abi@0.25.1
  - @0xsequence/auth@0.25.1
  - @0xsequence/config@0.25.1
  - @0xsequence/network@0.25.1
  - @0xsequence/transactions@0.25.1
  - @0xsequence/utils@0.25.1
  - @0xsequence/wallet@0.25.1

## 0.25.0

### Minor Changes

- 10c8af8: Add estimator package
  Fix multicall few calls bug

### Patch Changes

- Updated dependencies [10c8af8]
  - @0xsequence/abi@0.25.0
  - @0xsequence/auth@0.25.0
  - @0xsequence/config@0.25.0
  - @0xsequence/network@0.25.0
  - @0xsequence/transactions@0.25.0
  - @0xsequence/utils@0.25.0
  - @0xsequence/wallet@0.25.0

## 0.24.1

### Patch Changes

- @0xsequence/wallet@0.24.1
- @0xsequence/auth@0.24.1

## 0.24.0

### Patch Changes

- @0xsequence/auth@0.24.0
- @0xsequence/wallet@0.24.0

## 0.23.0

### Minor Changes

- - relayer: offer variety of gas fee options from the relayer service"

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.23.0
  - @0xsequence/auth@0.23.0
  - @0xsequence/config@0.23.0
  - @0xsequence/network@0.23.0
  - @0xsequence/transactions@0.23.0
  - @0xsequence/utils@0.23.0
  - @0xsequence/wallet@0.23.0

## 0.22.2

### Patch Changes

- e1c109e: Fix authProof on expired sessions
- Updated dependencies [e1c109e]
  - @0xsequence/auth@0.22.2
  - @0xsequence/abi@0.22.2
  - @0xsequence/config@0.22.2
  - @0xsequence/network@0.22.2
  - @0xsequence/transactions@0.22.2
  - @0xsequence/utils@0.22.2
  - @0xsequence/wallet@0.22.2

## 0.22.1

### Patch Changes

- transport session cache
- Updated dependencies [undefined]
  - @0xsequence/abi@0.22.1
  - @0xsequence/auth@0.22.1
  - @0xsequence/config@0.22.1
  - @0xsequence/network@0.22.1
  - @0xsequence/transactions@0.22.1
  - @0xsequence/utils@0.22.1
  - @0xsequence/wallet@0.22.1

## 0.22.0

### Minor Changes

- e667b65: Expose all relayer options on networks

### Patch Changes

- Updated dependencies [e667b65]
  - @0xsequence/abi@0.22.0
  - @0xsequence/network@0.22.0
  - @0xsequence/utils@0.22.0
  - @0xsequence/wallet@0.22.0
  - @0xsequence/auth@0.22.0
  - @0xsequence/config@0.22.0
  - @0xsequence/transactions@0.22.0

## 0.21.5

### Patch Changes

- Give priority to metaTxnId returned by relayer
- Updated dependencies [undefined]
  - @0xsequence/abi@0.21.5
  - @0xsequence/auth@0.21.5
  - @0xsequence/config@0.21.5
  - @0xsequence/network@0.21.5
  - @0xsequence/transactions@0.21.5
  - @0xsequence/utils@0.21.5
  - @0xsequence/wallet@0.21.5

## 0.21.4

### Patch Changes

- Add has enough signers method
- Updated dependencies [undefined]
  - @0xsequence/abi@0.21.4
  - @0xsequence/auth@0.21.4
  - @0xsequence/config@0.21.4
  - @0xsequence/network@0.21.4
  - @0xsequence/transactions@0.21.4
  - @0xsequence/utils@0.21.4
  - @0xsequence/wallet@0.21.4

## 0.21.3

### Patch Changes

- add window session cache
- Updated dependencies [undefined]
  - @0xsequence/abi@0.21.3
  - @0xsequence/auth@0.21.3
  - @0xsequence/config@0.21.3
  - @0xsequence/network@0.21.3
  - @0xsequence/transactions@0.21.3
  - @0xsequence/utils@0.21.3
  - @0xsequence/wallet@0.21.3

## 0.21.2

### Patch Changes

- exception handlind in relayer
- Updated dependencies [undefined]
  - @0xsequence/abi@0.21.2
  - @0xsequence/auth@0.21.2
  - @0xsequence/config@0.21.2
  - @0xsequence/network@0.21.2
  - @0xsequence/transactions@0.21.2
  - @0xsequence/utils@0.21.2
  - @0xsequence/wallet@0.21.2

## 0.21.1

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/wallet@0.21.1
  - @0xsequence/auth@0.21.1

## 0.21.0

### Minor Changes

- - fix gas estimation on wallets with large number of signers
  - update to session handling and wallet config construction upon auth

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.21.0
  - @0xsequence/auth@0.21.0
  - @0xsequence/config@0.21.0
  - @0xsequence/network@0.21.0
  - @0xsequence/transactions@0.21.0
  - @0xsequence/utils@0.21.0
  - @0xsequence/wallet@0.21.0

## 0.20.0

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/auth@0.20.0

## 0.19.3

### Patch Changes

- jwtAuth visibility, package version sync
- Updated dependencies [undefined]
  - @0xsequence/abi@0.19.3
  - @0xsequence/auth@0.19.3
  - @0xsequence/config@0.19.3
  - @0xsequence/network@0.19.3
  - @0xsequence/transactions@0.19.3
  - @0xsequence/utils@0.19.3
  - @0xsequence/wallet@0.19.3

## 0.19.2

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.19.2
  - @0xsequence/auth@0.19.2
  - @0xsequence/config@0.19.2
  - @0xsequence/transactions@0.19.2
  - @0xsequence/wallet@0.19.2

## 0.19.1

### Patch Changes

- add open intent in history state

## 0.19.0

### Minor Changes

- - provider, improve dapp / wallet transport io

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.19.0
  - @0xsequence/auth@0.19.0
  - @0xsequence/config@0.19.0
  - @0xsequence/network@0.19.0
  - @0xsequence/transactions@0.19.0
  - @0xsequence/utils@0.19.0
  - @0xsequence/wallet@0.19.0

## 0.18.0

### Minor Changes

- relayer improvements and pending transaction handling

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.18.0
  - @0xsequence/auth@0.18.0
  - @0xsequence/config@0.18.0
  - @0xsequence/network@0.18.0
  - @0xsequence/transactions@0.18.0
  - @0xsequence/utils@0.18.0
  - @0xsequence/wallet@0.18.0

## 0.17.0

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/auth@0.17.0

## 0.16.1

### Patch Changes

- @0xsequence/auth@0.16.1

## 0.16.0

### Minor Changes

- relayer as its own service separate from chaind

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.16.0
  - @0xsequence/auth@0.16.0
  - @0xsequence/config@0.16.0
  - @0xsequence/network@0.16.0
  - @0xsequence/transactions@0.16.0
  - @0xsequence/utils@0.16.0
  - @0xsequence/wallet@0.16.0

## 0.15.1

### Patch Changes

- update api clients
- Updated dependencies [undefined]
  - @0xsequence/abi@0.15.1
  - @0xsequence/auth@0.15.1
  - @0xsequence/config@0.15.1
  - @0xsequence/network@0.15.1
  - @0xsequence/transactions@0.15.1
  - @0xsequence/utils@0.15.1
  - @0xsequence/wallet@0.15.1

## 0.15.0

### Patch Changes

- @0xsequence/wallet@0.15.0
- @0xsequence/auth@0.15.0
- @0xsequence/transactions@0.15.0

## 0.14.3

### Patch Changes

- Fix 0xSequence relayer dependencies
- Updated dependencies [undefined]
  - @0xsequence/abi@0.14.3
  - @0xsequence/auth@0.14.3
  - @0xsequence/config@0.14.3
  - @0xsequence/network@0.14.3
  - @0xsequence/transactions@0.14.3
  - @0xsequence/utils@0.14.3
  - @0xsequence/wallet@0.14.3

## 0.14.2

### Patch Changes

- Add debug logs to rpc-relayer
- Updated dependencies [undefined]
  - @0xsequence/abi@0.14.2
  - @0xsequence/auth@0.14.2
  - @0xsequence/config@0.14.2
  - @0xsequence/network@0.14.2
  - @0xsequence/transactions@0.14.2
  - @0xsequence/utils@0.14.2
  - @0xsequence/wallet@0.14.2

## 0.14.0

### Minor Changes

- update sequence utils finder which includes optimization

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.14.0
  - @0xsequence/auth@0.14.0
  - @0xsequence/config@0.14.0
  - @0xsequence/network@0.14.0
  - @0xsequence/transactions@0.14.0
  - @0xsequence/utils@0.14.0
  - @0xsequence/wallet@0.14.0

## 0.13.0

### Minor Changes

- Update SequenceUtils deployed contract

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.13.0
  - @0xsequence/auth@0.13.0
  - @0xsequence/config@0.13.0
  - @0xsequence/network@0.13.0
  - @0xsequence/transactions@0.13.0
  - @0xsequence/utils@0.13.0
  - @0xsequence/wallet@0.13.0

## 0.12.4

### Patch Changes

- provider: set timeout to open wallet to 30s

## 0.12.3

### Patch Changes

- provider: proxy message event support

## 0.12.2

### Patch Changes

- proxy transport improvements

## 0.12.1

### Patch Changes

- npm bump
- Updated dependencies [undefined]
  - @0xsequence/abi@0.12.1
  - @0xsequence/auth@0.12.1
  - @0xsequence/config@0.12.1
  - @0xsequence/network@0.12.1
  - @0xsequence/transactions@0.12.1
  - @0xsequence/utils@0.12.1
  - @0xsequence/wallet@0.12.1

## 0.12.0

### Minor Changes

- provider: improvements to window transport

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.12.0
  - @0xsequence/auth@0.12.0
  - @0xsequence/config@0.12.0
  - @0xsequence/network@0.12.0
  - @0xsequence/transactions@0.12.0
  - @0xsequence/utils@0.12.0
  - @0xsequence/wallet@0.12.0

## 0.11.4

### Patch Changes

- update api client
- Updated dependencies [undefined]
  - @0xsequence/abi@0.11.4
  - @0xsequence/auth@0.11.4
  - @0xsequence/config@0.11.4
  - @0xsequence/network@0.11.4
  - @0xsequence/transactions@0.11.4
  - @0xsequence/utils@0.11.4
  - @0xsequence/wallet@0.11.4

## 0.11.3

### Patch Changes

- improve openWindow state options handling
- Updated dependencies [undefined]
  - @0xsequence/abi@0.11.3
  - @0xsequence/auth@0.11.3
  - @0xsequence/config@0.11.3
  - @0xsequence/network@0.11.3
  - @0xsequence/transactions@0.11.3
  - @0xsequence/utils@0.11.3
  - @0xsequence/wallet@0.11.3

## 0.11.2

### Patch Changes

- Fix multicall proxy scopes
- Updated dependencies [undefined]
  - @0xsequence/abi@0.11.2
  - @0xsequence/auth@0.11.2
  - @0xsequence/config@0.11.2
  - @0xsequence/network@0.11.2
  - @0xsequence/transactions@0.11.2
  - @0xsequence/utils@0.11.2
  - @0xsequence/wallet@0.11.2

## 0.11.1

### Patch Changes

- Add support for dynamic and nested signatures
- Updated dependencies [undefined]
  - @0xsequence/abi@0.11.1
  - @0xsequence/auth@0.11.1
  - @0xsequence/config@0.11.1
  - @0xsequence/network@0.11.1
  - @0xsequence/transactions@0.11.1
  - @0xsequence/utils@0.11.1
  - @0xsequence/wallet@0.11.1

## 0.11.0

### Minor Changes

- Update wallet context to 1.7 contracts

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.11.0
  - @0xsequence/auth@0.11.0
  - @0xsequence/config@0.11.0
  - @0xsequence/network@0.11.0
  - @0xsequence/transactions@0.11.0
  - @0xsequence/utils@0.11.0
  - @0xsequence/wallet@0.11.0

## 0.10.9

### Patch Changes

- add support for public addresses as signers in session.open
- Updated dependencies [undefined]
  - @0xsequence/abi@0.10.9
  - @0xsequence/auth@0.10.9
  - @0xsequence/config@0.10.9
  - @0xsequence/network@0.10.9
  - @0xsequence/transactions@0.10.9
  - @0xsequence/utils@0.10.9
  - @0xsequence/wallet@0.10.9

## 0.10.8

### Patch Changes

- Multicall production configuration
- Updated dependencies [undefined]
  - @0xsequence/abi@0.10.8
  - @0xsequence/auth@0.10.8
  - @0xsequence/config@0.10.8
  - @0xsequence/network@0.10.8
  - @0xsequence/transactions@0.10.8
  - @0xsequence/utils@0.10.8
  - @0xsequence/wallet@0.10.8

## 0.10.7

### Patch Changes

- allow provider transport to force disconnect
- Updated dependencies [undefined]
  - @0xsequence/abi@0.10.7
  - @0xsequence/auth@0.10.7
  - @0xsequence/config@0.10.7
  - @0xsequence/network@0.10.7
  - @0xsequence/transactions@0.10.7
  - @0xsequence/utils@0.10.7
  - @0xsequence/wallet@0.10.7

## 0.10.6

### Patch Changes

- - fix getWalletState method
- Updated dependencies [undefined]
  - @0xsequence/abi@0.10.6
  - @0xsequence/auth@0.10.6
  - @0xsequence/config@0.10.6
  - @0xsequence/network@0.10.6
  - @0xsequence/transactions@0.10.6
  - @0xsequence/utils@0.10.6
  - @0xsequence/wallet@0.10.6

## 0.10.5

### Patch Changes

- update relayer gas refund options
- Updated dependencies [undefined]
  - @0xsequence/abi@0.10.5
  - @0xsequence/auth@0.10.5
  - @0xsequence/config@0.10.5
  - @0xsequence/network@0.10.5
  - @0xsequence/transactions@0.10.5
  - @0xsequence/utils@0.10.5
  - @0xsequence/wallet@0.10.5

## 0.10.4

### Patch Changes

- Update api proto
- Updated dependencies [undefined]
  - @0xsequence/abi@0.10.4
  - @0xsequence/auth@0.10.4
  - @0xsequence/config@0.10.4
  - @0xsequence/network@0.10.4
  - @0xsequence/transactions@0.10.4
  - @0xsequence/utils@0.10.4
  - @0xsequence/wallet@0.10.4

## 0.10.3

### Patch Changes

- Fix loading config cross-chain
- Updated dependencies [undefined]
  - @0xsequence/abi@0.10.3
  - @0xsequence/auth@0.10.3
  - @0xsequence/config@0.10.3
  - @0xsequence/network@0.10.3
  - @0xsequence/transactions@0.10.3
  - @0xsequence/utils@0.10.3
  - @0xsequence/wallet@0.10.3

## 0.10.2

### Patch Changes

- - message digest fix
- Updated dependencies [undefined]
  - @0xsequence/abi@0.10.2
  - @0xsequence/auth@0.10.2
  - @0xsequence/config@0.10.2
  - @0xsequence/network@0.10.2
  - @0xsequence/transactions@0.10.2
  - @0xsequence/utils@0.10.2
  - @0xsequence/wallet@0.10.2

## 0.10.1

### Patch Changes

- upgrade deps
- Updated dependencies [undefined]
  - @0xsequence/abi@0.10.1
  - @0xsequence/auth@0.10.1
  - @0xsequence/config@0.10.1
  - @0xsequence/network@0.10.1
  - @0xsequence/transactions@0.10.1
  - @0xsequence/utils@0.10.1
  - @0xsequence/wallet@0.10.1

## 0.10.0

### Minor Changes

- Deployed new contracts with ERC1271 signer support

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.10.0
  - @0xsequence/auth@0.10.0
  - @0xsequence/config@0.10.0
  - @0xsequence/network@0.10.0
  - @0xsequence/transactions@0.10.0
  - @0xsequence/utils@0.10.0
  - @0xsequence/wallet@0.10.0

## 0.9.6

### Patch Changes

- Update ABIs for latest sequence contracts
- Updated dependencies [undefined]
  - @0xsequence/auth@0.9.6
  - @0xsequence/config@0.9.6
  - @0xsequence/network@0.9.6
  - @0xsequence/transactions@0.9.6
  - @0xsequence/utils@0.9.6
  - @0xsequence/wallet@0.9.6
  - @0xsequence/abi@0.9.6

## 0.9.5

### Patch Changes

- Implemented session class
- Updated dependencies [undefined]
  - @0xsequence/auth@0.9.5
  - @0xsequence/config@0.9.5
  - @0xsequence/network@0.9.5
  - @0xsequence/transactions@0.9.5
  - @0xsequence/utils@0.9.5
  - @0xsequence/wallet@0.9.5

## 0.9.4

### Patch Changes

- - session improvements

## 0.9.3

### Patch Changes

- - minor improvements
- Updated dependencies [undefined]
  - @0xsequence/abi@0.9.3
  - @0xsequence/auth@0.9.3
  - @0xsequence/config@0.9.3
  - @0xsequence/network@0.9.3
  - @0xsequence/transactions@0.9.3
  - @0xsequence/utils@0.9.3
  - @0xsequence/wallet@0.9.3

## 0.9.1

### Patch Changes

- - patch bump
- Updated dependencies [undefined]
  - @0xsequence/abi@0.9.1
  - @0xsequence/auth@0.9.1
  - @0xsequence/config@0.9.1
  - @0xsequence/network@0.9.1
  - @0xsequence/transactions@0.9.1
  - @0xsequence/utils@0.9.1
  - @0xsequence/wallet@0.9.1

## 0.9.0

### Minor Changes

- - provider transport hardening

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.9.0
  - @0xsequence/auth@0.9.0
  - @0xsequence/config@0.9.0
  - @0xsequence/network@0.9.0
  - @0xsequence/transactions@0.9.0
  - @0xsequence/utils@0.9.0
  - @0xsequence/wallet@0.9.0

## 0.8.5

### Patch Changes

- - use latest wallet-contracts
- Updated dependencies [undefined]
  - @0xsequence/abi@0.8.5
  - @0xsequence/auth@0.8.5
  - @0xsequence/config@0.8.5
  - @0xsequence/network@0.8.5
  - @0xsequence/transactions@0.8.5
  - @0xsequence/utils@0.8.5
  - @0xsequence/wallet@0.8.5

## 0.8.4

### Patch Changes

- - minor improvements, name updates and comments
- Updated dependencies [undefined]
  - @0xsequence/abi@0.8.4
  - @0xsequence/auth@0.8.4
  - @0xsequence/config@0.8.4
  - @0xsequence/network@0.8.4
  - @0xsequence/transactions@0.8.4
  - @0xsequence/utils@0.8.4
  - @0xsequence/wallet@0.8.4

## 0.8.3

### Patch Changes

- - refinements

  - normalize signer address in config

  - provider: getWalletState() method to WalletProvider

- Updated dependencies [undefined]
  - @0xsequence/abi@0.8.3
  - @0xsequence/auth@0.8.3
  - @0xsequence/config@0.8.3
  - @0xsequence/network@0.8.3
  - @0xsequence/transactions@0.8.3
  - @0xsequence/utils@0.8.3
  - @0xsequence/wallet@0.8.3

## 0.8.2

### Patch Changes

- - field rename and ethauth dependency bump
- Updated dependencies [undefined]
  - @0xsequence/abi@0.8.2
  - @0xsequence/auth@0.8.2
  - @0xsequence/config@0.8.2
  - @0xsequence/network@0.8.2
  - @0xsequence/transactions@0.8.2
  - @0xsequence/utils@0.8.2
  - @0xsequence/wallet@0.8.2

## 0.8.1

### Patch Changes

- - variety of optimizations
- Updated dependencies [undefined]
  - @0xsequence/abi@0.8.1
  - @0xsequence/auth@0.8.1
  - @0xsequence/config@0.8.1
  - @0xsequence/network@0.8.1
  - @0xsequence/transactions@0.8.1
  - @0xsequence/utils@0.8.1
  - @0xsequence/wallet@0.8.1

## 0.8.0

### Minor Changes

- - changeset fix

### Patch Changes

- Updated dependencies [undefined]
  - @0xsequence/abi@0.8.0
  - @0xsequence/auth@0.8.0
  - @0xsequence/network@0.8.0
  - @0xsequence/transactions@0.8.0
  - @0xsequence/utils@0.8.0
  - @0xsequence/wallet@0.8.0

## 0.7.1

### Patch Changes

- 02377ab: Minor improvements
- Updated dependencies [02377ab]
- Updated dependencies [1fe4379]
  - @0xsequence/network@0.7.1
  - @0xsequence/utils@0.7.1
  - @0xsequence/wallet@0.7.1

## 0.7.0

### Patch Changes

- 6f11ed7: sequence.js, init release
- Updated dependencies [6f11ed7]
  - @0xsequence/abi@0.7.0
  - @0xsequence/auth@0.7.0
  - @0xsequence/network@0.7.0
  - @0xsequence/transactions@0.7.0
  - @0xsequence/utils@0.7.0
  - @0xsequence/wallet@0.7.0
