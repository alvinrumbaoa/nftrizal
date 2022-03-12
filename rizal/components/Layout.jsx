import React from "react"
import {Box} from '@chakra-ui/react'
import Nav from './Nav'
import Footer from './Footer'


const Layout = ({children}) => {
	return (
		<Box>
			<Nav/>
				{children}
		</Box>
	)
}

export default Layout
