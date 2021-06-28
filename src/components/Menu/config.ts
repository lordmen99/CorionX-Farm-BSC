import { MenuEntry } from 'corx-ui'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x141383CDB8158982fB3469C3e49cC82F8026d968',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x141383CDB8158982fB3469C3e49cC82F8026d968',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'DeFi on ETH',
    icon: 'PoolIcon',
    href: 'https://farm.corion.io/',
  },
  {
     label: 'Bridge',
     icon: 'SunIcon',
     href: 'https://bscbridge.corion.io/',
   },
  {
     label: 'Partnership',
     icon: 'NftIcon',
     href: 'https://forms.gle/hHs52znCgrotJUTNA',
   },
  
  // {
  //  label: 'poolss',
  //  icon: 'PoolIcon',
  //  href: '/poolss',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
 {
   label: 'Security Audit',
   icon: 'NftIcon',
   href: 'https://corion.io/wp-content/uploads/2020/06/CORX-Standart-Smart-Contract-Security-Audit.pdf',
 },
  {
    label: 'Info',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Website',
        href: 'https://corion.io/',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/corionx/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/corionx',
      },
      
      {
        label: 'Bscscan',
        href: 'https://bscscan.com/token/0x141383CDB8158982fB3469C3e49cC82F8026d968',
      },
      {
        label: 'Github',
        href: 'https://github.com/CORIONplatform',
      },  
    ],
  },
  //  {
  //    label: 'Audit',
  //    icon: 'AuditIcon',
  //    href: 'https://oseeafoundation.org/file/osc-swap.pdf',
  //  },
]

export default config
