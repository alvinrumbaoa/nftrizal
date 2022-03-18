import React from 'react'
import {Flex} from '@chakra-ui/react'
const thankyou = () => {
	return (
		<Flex d="flex" isLoading={<Spinner/>} justify="space-around" align="center" direction="column" w={'full'} h={'100vh'} bgGradient='linear(to-b, #000000, #9F3AC3)'> 
				<Heading>Thank you for joining. We will notify you from upcoming events for NFT Rizal</Heading>
		</Flex>
	)
}

export default thankyou
