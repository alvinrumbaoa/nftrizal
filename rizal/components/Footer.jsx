import{ArrowForwardIcon} from '@chakra-ui/icons'
import { Heading, Text, Box , Link,Flex, Button , Image, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {

	
	return (
		<div>
			<Flex  display="flex" justify="space-evenly" align="center"w='100%' h='400px' bgColor="pink.900">
				<Box>
					<Heading textShadow="2px 2px #000000" color="white">#opentowork</Heading>
					<Text mt={2} color="white">Would love to get meetups or interview with your company</Text>
					<Button m={2} rightIcon={<ArrowForwardIcon />} colorScheme='orange.700' variant='outline'><Link href="https://alvinrumbaoa.simplybook.me/v2/#show-on-map/yes">Let's do this</Link></Button>
			
					<Text>© 2020 theRumbaoas. All rights reserved</Text>
				</Box>
			</Flex>
		</div>
	)
}

export default Footer
