/* eslint @typescript-eslint/no-empty-interface: "off" */

// @Styled-component-ColorPaletteLoading
import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
