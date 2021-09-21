import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string


export enum ChainId {
  MAINNET = 333999,
  SPARTA = 333888,
  BSC = 56,
  MUMBAI = 80001
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const INIT_CODE_HASH: string = '0xb1bd7b3014b09e6cb402b38089eb6c07219bb8621a7d4b07d2eec56bd1dda746'

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x4523Ad2e05c455d0043910c84c83236a6c98B40B',
  [ChainId.SPARTA]: '0x6f032f18330029345fD34C925c1154BBDce6567E',
  [ChainId.BSC]: '',
  [ChainId.MUMBAI]: ''
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x103ce09bE9eF5cc13c0904ec5D64Ff6c4cba5fb9',
  [ChainId.SPARTA]: '0x50db5A60009f655f59703d2266819491a977634d',
  [ChainId.BSC]: '',
  [ChainId.MUMBAI]: ''
}

export const SOUL_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.SPARTA]: '0xc9Ec2EDD1BA38918a55B5ab637dd0Ac02e6e4058',
  [ChainId.BSC]: '',
  [ChainId.MUMBAI]: ''
}

export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.SPARTA]: '0xb4BE34C7430FF011b653166570E211C15a03e4fA',
  [ChainId.BSC]: '',
  [ChainId.MUMBAI]: ''
}


export const TIMELOCK_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.SPARTA]: '',
  [ChainId.BSC]: '',
  [ChainId.MUMBAI]: ''
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.SPARTA]: '0x6e7EA729A4716b6823E5F93f51f77A6D6Aa4969D',
  [ChainId.BSC]: '',
  [ChainId.MUMBAI]: ''
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.SPARTA]: '0xC94A2FbeAc7094790F04412873CeF3f23b024f7D',
  [ChainId.BSC]: '',
  [ChainId.MUMBAI]: ''
}

export const DAI_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.SPARTA]: '0x388ABBB063608924d8033F1B1266B64C93F1a3a3',
  [ChainId.BSC]: '',
  [ChainId.MUMBAI]: ''
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
