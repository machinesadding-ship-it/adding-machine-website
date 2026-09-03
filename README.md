# ADDING MACHINE V2 — Website Revision

Static website package for the planned ADDING MACHINE V2 collection and the live $ADD ecosystem token on Robinhood Chain.

## Verified project settings

- Collection: ADDING MACHINE V2
- NFT symbol: AMV2
- Maximum NFT supply: 1,500
- V1 holder base claim ratio: 3:1
- V2 NFT contract: TBA — not deployed or verified yet
- $ADD maximum supply: 1,000,000,000
- $ADD mainnet contract: `0xcF1cC6FFcA6216354a2723d1e4B0cf9285938ea2`
- TeamVestingWallet mainnet contract: `0x45B8b222Ea39a901c89bcEFfAf775f00eB12DC16`
- Network: Robinhood Chain mainnet
- Chain ID: 4663
- Official X account: @addingmachinee
- Existing OpenSea link is labeled only as the V1 Legacy collection

## Final $ADD allocation

- NFT Farming: 70% — 700,000,000 ADD
- Community & NFT Airdrop: 21% — 210,000,000 ADD
- Liquidity: 5% — 50,000,000 ADD
- Team Vesting: 4% — 40,000,000 ADD
- Private Sale: 0% — 0 ADD

The $ADD token has a fixed supply, 0% tax and no additional mint function.

Team vesting uses a 90-day cliff followed by 900 days of linear vesting.

## Mainnet deployment record

### SC 1 — TeamVestingWallet

- Contract: `0x45B8b222Ea39a901c89bcEFfAf775f00eB12DC16`
- Blockscout: `https://robinhoodchain.blockscout.com/address/0x45B8b222Ea39a901c89bcEFfAf775f00eB12DC16`
- Deployment transaction: `0xf74eb8f5a5f6ee504d0ad26483ef26f2f4347a35e5dd2698c18fa3f295861e0e`
- Transaction link: `https://robinhoodchain.blockscout.com/tx/0xf74eb8f5a5f6ee504d0ad26483ef26f2f4347a35e5dd2698c18fa3f295861e0e`
- Block: 53213014
- Source verification: exact match
- Compiler: Solidity 0.8.24
- EVM: Shanghai
- Optimizer: enabled
- Optimizer runs: 200
- Team beneficiary: `0x3F424A647A7A307663156e3c4f285D27c09DAa1e`

### SC 2 — AddingMachineToken ($ADD)

- Contract: `0xcF1cC6FFcA6216354a2723d1e4B0cf9285938ea2`
- Blockscout: `https://robinhoodchain.blockscout.com/address/0xcF1cC6FFcA6216354a2723d1e4B0cf9285938ea2`
- Deployment transaction: `0x36866e0f8451e4bd52dda79b967b77015adbc5e281a7247bafd69ed4849a5376`
- Transaction link: `https://robinhoodchain.blockscout.com/tx/0x36866e0f8451e4bd52dda79b967b77015adbc5e281a7247bafd69ed4849a5376`
- Block: 53219719
- Source verification: exact match
- Compiler: Solidity 0.8.24
- EVM: Shanghai
- Optimizer: enabled
- Optimizer runs: 200
- Token name: Adding Machine
- Symbol: ADD
- Decimals: 18
- Total supply: 1,000,000,000 ADD

## Verified initial token distribution

- Treasury: `0xFcd4428Ae083228F09e2C8e3C660E693DdC12D9D` — 910,000,000 ADD
- Liquidity: `0x24Bd8b9F2b81240A11A515567bdCbCe4AdC3E35C` — 50,000,000 ADD
- TeamVestingWallet: `0x45B8b222Ea39a901c89bcEFfAf775f00eB12DC16` — 40,000,000 ADD

Total: 1,000,000,000 ADD.

## V2 mint architecture

- Phase 00: internal team and future-liquidity reserve
- Phase 01: V2 holder claim
- Phase 02: free mint and verified compensation
- Phase 03: Early Mint
- Phase 04: Public Mint

There are four public/community phases after internal Phase 00. Team-controlled and liquidity-controlled wallets are excluded from community rewards and compensation.

## Remaining modules

The $ADD token and TeamVestingWallet are live and verified.

The following remain locked or TBA until they are separately deployed, tested and source-verified:

- V2 NFT contract
- NFT farming contract
- LP farming contract
- Official liquidity pool
- Airdrop claim contract
- Claim dataset / proof system
- Mint prices
- Mint limits
- Final UTC schedule

Never publish seed phrases, private keys, recovery codes or private admin credentials.
