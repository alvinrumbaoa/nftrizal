import React from "react"
import {Box ,ChakraProvider} from '@chakra-ui/react'
import Nav from './Nav'
import '@fontsource/jura'
import theme from '../components/theme.fonts'
const Layout = ({children}) => {
	return (
		<Box>
			 <ChakraProvider theme={theme}>
				<Nav/>
					{children}
			 </ChakraProvider>
			
				
		</Box>
	)
}

export default Layout
