import React from 'react'
import {Flex, Badge,Link, Button,Stack, Heading,Text, Image} from '@chakra-ui/react'
import{FaTwitter,FaInstagram, FaDiscord} from "react-icons/fa";
const community = () => {
	return (
		<Flex d="flex" justify="center" align="center" direction="column" bgImage="url('/images/roadmapbg.png')"
		bgPosition="center" bgRepeat="no-repeat" w={'full'} h={'100vh'} bgGradient='linear(to-b, #000000, #9F3AC3)'> 
		<Heading data-aos="fade-up" mb={10} color="white"> Join OUR NFT Rizal Community </Heading>
		<Image data-aos="zoom-out" src="/images/com.png" h="400px"/>
		<Stack direction='row' spacing={4}>
		<Button data-aos="fade-up" h="70px" w="200px" colorScheme='purple'size='lg' leftIcon={<FaDiscord />}>
			<Link href="https://discord.gg/JRruvSKCkk">	Discord<Badge colorScheme="red">Soon</Badge></Link>
		</Button>
		<Button data-aos="fade-up"h="70px" w="200px"colorScheme='twitter' size='lg'leftIcon={<FaTwitter />}>
			<Link href="https://twitter.com/nftrizal">	Twitter</Link>
		</Button>
		<Button data-aos="fade-up" h="70px" w="200px"colorScheme='blue' size='lg'leftIcon={<Image src="/images/Vector.png" boxSize="20px"/>}>
			<Link href="https://opensea.io/nftrizal">OpenSea</Link>
		</Button>
		 <Button data-aos="fade-up" h="70px" w="200px"colorScheme='yellow'size='lg' leftIcon={<Image src="/images/rarible.png" boxSize="20px"/>}>
			 <Link href="https://rarible.com/nftrizal/">Rarible</Link>
		</Button>
		<Button data-aos="fade-up" h="70px" w="200px" colorScheme='pink'size='lg' leftIcon={<FaInstagram />}>
			<Link href="https://www.instagram.com/nftrizal/">Instagram</Link>	
		</Button>

		</Stack>
		
</Flex>
	)
}

export default community
