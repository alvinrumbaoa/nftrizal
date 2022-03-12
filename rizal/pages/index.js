import Head from 'next/head'
import Nav from '../components/Nav'
import { Flex, Button, Box, Text, Image, Heading} from '@chakra-ui/react'
export default function Home() {
  return (
    <Flex d="flex"  justify="space-around" align="center" direction="column" w={'full'} h='100vh'> 
        <Head>
          <title>Welcome to NFT Rizal</title>
          <meta name="description" content="Next Generation NFT Collection " />
          <link rel="icon" href="/favicon.ico" />
  
        
        </Head> 
        <Flex d="flex"  justify="space-around" align="center" direction="row" w={'full'} h='100vh' bgGradient='linear(to-b, #000000, #9F3AC3)'>     
                <Box mt={-20} justify="center">
                          <Heading fontSize="6xl" mb={2} bgClip='text'  bgGradient= 'linear(to-r, yellow.900, purple.300)' >NFT Rizal</Heading>
                          <Text mb={2} w="400px"color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices velit nisi morbi facilisi duis varius.</Text>
                          <Button colorScheme="purple">Collect Now</Button>
                </Box>
                <Box mt={-20} justify="center">
                        <Image src="/images/hero.png" alt="hero-image" boxSize="450px" />
                </Box>       
        </Flex>
        
     </Flex>
  )
}



