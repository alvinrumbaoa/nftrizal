import { extendTheme } from '@chakra-ui/react'

import { createBreakpoints } from '@chakra-ui/theme-tools'

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: '0px',
  md: '768px',
  lg: '920px',
  xl: '1200px',
  '2xl': '1536px',
})

const theme = extendTheme({

  breakpoints,
  fonts: {
    heading: 'Jura, sans-serif',
    body: 'Jura, sans-serif',
  },
})

export default theme