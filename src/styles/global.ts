import { createGlobalStyle } from 'styled-components'

// InitialStyleSettings
export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/calibre-test-light.woff') format('woff');
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Calibre-regular';
    src: url('/fonts/calibre-test-regular.woff') format('woff');
    font-style: normal;
    font-display: swap;
  }

  body {
    background:${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 16px Calibre, sans-serif ;
    line-height: 1.5;
  }
`
