import React,{useEffect} from "react"
import {Box ,ChakraProvider} from '@chakra-ui/react'
import Nav from './Nav'
import '@fontsource/jura'
import theme from '../components/theme.fonts'
import Aos from "aos";
import "aos/dist/aos.css"


const Layout = ({children}) => {

	useEffect(() =>{
		Aos.init({duration: 1000})
		},[]);

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
