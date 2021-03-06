import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/calibre-test-regular.woff') format('woff'),url('/fonts/calibre-test-medium.woff') format('woff');
    font-style: normal;
    font-display: swap;
  }



  body {
    background:${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font:  200px Calibre, sans-serif ;
  }
`
