import{ArrowForwardIcon} from '@chakra-ui/icons'
import { Heading, Text, Box , Link,Flex, Button , Image, useColorModeValue } from '@chakra-ui/react'
import Social from '../components/Social'
const Footer = () => {

	
	return (
		<div>
			<Flex  display="flex" justify="space-evenly" align="center" w='100%'>
				<Box align="center">
					<Social/>
					<Text p={5} color="white">©2022 theRumbaoas. All rights reserved</Text>
				</Box>
			</Flex>
		</div>
	)
}

export default Footer
