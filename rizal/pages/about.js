import React from 'react'
import {Flex, Box, Heading, Text} from '@chakra-ui/react'
const about = () => {
	return (
		<Flex d="flex"  justify="space-around" align="center" direction="column" w={'full'} h={'full'} bgGradient='linear(to-b, #000000, #9F3AC3)'> 
				<Heading color="white">This is About Page</Heading>
		</Flex>
	)
}

export default about
