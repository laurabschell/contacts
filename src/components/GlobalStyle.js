import { createGlobalStyle }  from 'styled-components';
import { Colors, Fonts } from './styling-variables'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${Colors.bodyBgColor};
        color: ${Colors.fontColor};
        font-family: ${Fonts.main};
    }
`

export default GlobalStyle