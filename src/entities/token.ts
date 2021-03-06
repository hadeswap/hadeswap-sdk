import { ChainId } from '../constants'
import { Currency } from './currency'
import invariant from 'tiny-invariant'
import { validateAndParseAddress } from '../utils'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

// In reality this is a map of the wrapped version of the native token for a given network.
// TODO: Rename to WNATIVE for sanity
export const WETH = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x6FC851B8D66116627Fb1137b9D5FE4E2e1BeA978',
    18,
    'WPOLIS',
    'Wrapped Polis'
  ),
  [ChainId.BSC]: new Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.SPARTA]: new Token(
    ChainId.SPARTA,
    '0xC614405267eCDbF01FB5b425e3F2EC657160101A',
    18,
    'WETH',
    'Wrapped ETH'
  ),
  [ChainId.MUMBAI]: new Token(
      ChainId.MUMBAI,
      '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa',
      18,
      'WETH',
      'Wrapped ETH'
  ),
  [ChainId.MATIC]: new Token(
      ChainId.MATIC,
      '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      18,
      'WMATIC',
      'Wrapped MATIC'
  ),
  [ChainId.FANTOM]: new Token(
      ChainId.FANTOM,
      '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
      18,
      'WFTM',
      'Wrapped Fantom'
  ),
  [ChainId.ETHEREUM]: new Token(
      ChainId.ETHEREUM,
      '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      18,
      'WETH',
      'Wrapped ETH'
  ),
}
