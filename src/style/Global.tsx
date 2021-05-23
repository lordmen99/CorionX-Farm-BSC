import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'corx-ui'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    
    
    background-image: url(/images/corex/background.png);
    background-size: 1100px;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
