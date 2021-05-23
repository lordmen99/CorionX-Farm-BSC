import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'CORX',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x3b7c8ca664ab6eb8ca8f424851e38b7182b36e5f',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x3195a1617C70AC263ab19Cf9a372a168AffB9EB0',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://oscswap.com/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
