const primary: DefaultPalette = {
  get main() {
    return this[600]
  },
  get contrastText() {
    return accent.main
  },
  50: '#ffff00',
  100: '#ffff00',
  200: '#fff100',
  300: '#ffd200',
  400: '#ffbc00',
  500: '#ffa600',
  600: '#ff9100 ',
  700: '#d87b00',
  800: '#b26500',
  900: '#8c4f00',
}

const secondary: DefaultPalette = {
  get main() {
    return this[600]
  },
  get contrastText() {
    return accent.main
  },
  50: '#ffffff',
  100: '#ffffff',
  200: '#ffe0e0',
  300: '#ffc9c9',
  400: '#ffb2b2',
  500: '#ff9b9b',
  600: '#FF9B9B',
  700: '#d88383',
  800: '#b26c6c',
  900: '#8c5555',
}

const neutral: DefaultPalette = {
  get main() {
    return this[500]
  },
  get contrastText() {
    return accent.main
  },
  50: '#EFF4F8',
  100: '#EDEEF1',
  200: '#D3DAE5',
  300: '#ADB6C5',
  400: '#6D7686',
  500: '#4F596A',
  600: '#303F4E',
  700: '#253543',
  800: '#17212A',
  900: '#101921',
}

const grey = {
  get main() {
    return this[9]
  },
  '0': '#000000',
  '1': '#1b1b1b',
  '2': '#222222',
  '3': '#252525',
  '4': '#2e2e2e',
  '5': '#333333',
  '6': '#373737',
  '7': '#414141',
  '8': '#4F4F4F',
  '9': '#828282',
  '10': '#BDBDBD',
  '11': '#E0E0E0',
  '12': '#F2F2F2',
}

const white = {
  5: '#ffffff0D',
  10: '#ffffff1A',
  15: '#ffffff26',
  20: '#ffffff33',
  30: '#ffffff4D',
  50: '#ffffff80',
  100: '#ffffff',
}

const accent = {
  get main() {
    return '#840CF9'
  },
}

const error = {
  get main() {
    return '#ED0063'
  },
}

const errorLight = {
  get main() {
    return '#FFE3EF'
  },
}

const warning = {
  get main() {
    return '#FFB84D'
  },
}

const success = {
  get main() {
    return '#16A689'
  },
}

const pastel = {
  red: '#FF9B9B',
  yellow: '#FFE297',
  green: '#DAFFBD',
  cyan: '#A0FFEE',
  blue: '#5BD8FF',
  purple: '#94BFFF',
}

const palette: IPalette = {
  primary,
  secondary,
  neutral,
  grey,
  accent,
  error,
  errorLight,
  success,
  warning,
  white,
  surface: {
    default: '#fff',
  },
  background: {
    default: '#F8FCFF',
    paper: '#fafafa',
  },
  onBackground: {
    default: '#17212A',
  },
  pastel,
}

export default palette
