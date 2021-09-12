import breakpoints from './breakpoints'
import palette from './palette'
import typography from './typography'
import { createTheme } from '@material-ui/core/styles'

export const getThemeOptions = (palette: any): any => {
  return {
    palette,
    typography,
    spacing: 4,
    breakpoints,
    shape: { borderRadius: 4 },
  }
}

const baseTheme = createTheme(getThemeOptions(palette))

export default baseTheme
