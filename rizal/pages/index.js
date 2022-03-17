import Head from 'next/head'
import Card from '../components/Card'
import { Flex, Button, Box, Link, Text, ChakraProvider, Input,Image, Heading, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon} from '@chakra-ui/react'
import Footer from '../components/Footer'


import Countdown from 'react-countdown';


export default function Home() {


  return (
 
    <Flex d="flex"  justify="space-around" align="center" direction="column" w={'full'} h={'full'} bgGradient='linear(to-b, #000000, #9F3AC3)'> 
        <Head>
          <title>Welcome to NFT Rizal</title>
          <meta name="description" content="Next Generation NFT Collection " />
          <link rel="icon" href="/favicon.ico" />
  
        
        </Head> 
        <Flex d="flex"  justify="space-around" align="center" direction="row" w={'full'} h="35vh">     
                <Box mt={20} justify="center">
                          <Heading fontSize="6xl" mb={2} bgClip='text'  bgGradient= 'linear(to-l, yellow.900, purple.300)' >NFT Rizal</Heading>
                          <Text mb={2} w="500px"color="white">NFT Rizal is a new collection of minted art in honor of the national hero of the Philippines, Jose Rizal.  </Text>
                          <Button colorScheme="purple"><Link href="https://opensea.io/nftrizal">Collect Now</Link></Button>
                </Box>
                <Box mt={20} justify="center">
                        <Image src="/images/hero.png" alt="hero-image" boxSize="450px" />
                        <Box border="2px"  h="100px" w="300px" borderRadius="20px "color="white" align="center" mt={-20} pos="absolute">
                             <Text fontWeight="bold" fontSize="xl" color="white">Launch Giveaways!</Text>
                             <Countdown date={Date.now() + 2500000000}>
                                 <Button>Check out New Sale</Button>
                            </Countdown>
                        </Box>
                </Box>       
               
        </Flex>
        
        <Heading mt={40} color="white">Featured Art Collections</Heading>
        <Flex d="flex" m={4} justify="space-around" align="center" direction="row">
          
          <Card title="NFT Rizal #006" price="0.02" description="Akatsuki" imageUrl="/images/006.png" link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053034387178520586"/>
          <Card title="NFT Rizal #010" price="0.02" description="LA Rams 22 Champion" imageUrl="/images/010.png" link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053038785225031681"/>
          <Card title="NFT Rizal #005" price="0.01" description="New Normal" imageUrl="/images/005.png" link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053033287666892801"/>
        </Flex>

        <Flex d="flex" maxW="4xl" mt={40}   justify="space-between"  direction="row">
          <Box d="flex" justify="flex-start" mr={20}>
            <Image src="/images/whyrizal.png" alt="thug rizal"/>
          </Box>
          <Flex d="flex" m={4} justify="space-around" align="center" direction="column">
            <Heading color="white"> Why NFT Rizal?</Heading>
                <Flex d="flex" direction="row" justify="space-evenly" >
                  <Box  m={2} border='2px' borderColor='white' boxSize="100px">
                    <Text fontSize="xl" align="center" justify="center" color="white">500 Unique Art</Text>
                  </Box >
                  <Box m={2}border='1px' borderColor='white' boxSize="100px">
                    <Text  fontSize="xl" align="center" justify="center"color="white">100 Rare</Text>
                  </Box>
                  <Box m={2}border='1px' borderColor='white' boxSize="100px">
                    <Text  fontSize="xl" align="center" justify="center" color="white">100% History</Text>
                  </Box>
                  
               </Flex>
               <Button><Link href="/about">Learn more about Rizal </Link></Button>
          </Flex>
        </Flex>
        
        <Flex d="flex" maxW="4xl" mt={40}  p={5} borderRadius="20px" justify="space-between"   
          bgImage="url('/images/roadmapbg.png')"
          bgPosition="center"
           bgRepeat="no-repeat"direction="column">
            
            <Heading align="center" justify="center" color="white">NFT Rizal Roadmap</Heading>

            <Box mt={2} d="flex" direction="row" alignItems="center">
              <Image src="/images/jeep.png"></Image>
              <Text fontWeight="bold" ml={7} color="white">Project Launch Date: April 2 2022. Will mint and list 500 collection and will have some few community followers giveaways in the first sales of NFT Rizal Art</Text>
            </Box>
            <Box mt={2} d="flex" direction="row"  alignItems="center" >
              <Image src="/images/jeep.png"></Image>
              <Text fontWeight="bold" ml={7}  color="white">Will launch all novels as NFT to support Foundation and Community affiliated to Jose Rizal</Text>
            </Box>
            <Box mt={2} d="flex" direction="row" alignItems="center">
              <Image src="/images/jeep.png"></Image>
              <Text fontWeight="bold" ml={7}  color="white"> Support Local Community in the Phillippines. Every Rizal Owner will have exclusive access to our Discord VIP Server.</Text>
            </Box>
            <Box mt={2} d="flex" direction="row" alignItems="center">
              <Image src="/images/jeep.png"></Image>
              <Text fontWeight="bold"  ml={7} color="white"> collections will be given away and One will have a lucky winner to get a Rare NFT Rizal that will value</Text>
            </Box>
        </Flex>

        <Flex d="flex" maxW="4xl" m={4} p={5} borderRadius="20px" justify="space-between" direction="column">
            <Heading mt={2} color="white">Meet the Founder</Heading>
            <Image mt={2} src="/images/Rectangle 119.png"></Image>
            <Text mt={2} fontWeight="bold" align="center" color="white">@IAMACHIPMUNKS</Text>
            <Text mt={2} fontWeight="bold" align="center" color="white">Developer and Creator of NFT Rizal</Text>
        </Flex>
        <Heading mt={2} color="white" justify="center">LOOKING FOR ANSWERS?</Heading>
        <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'purple.700', color: 'white' }}>
                    <Box flex='1' textAlign='left' >
                         When it will be launch?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                      April 2 2022 12:00 PST
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'purple.700', color: 'white' }}>
                    <Box flex='1' textAlign='left'>
                    What is the mint price??
                    </Box>
                    <AccordionIcon />
                  </AccordionButton >
                </h2>
                <AccordionPanel pb={4}>
                    Floor Price starting at 0.01 ETH
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'purple.700', color: 'white' }}>
                    <Box flex='1' textAlign='left'>
                       How many can I buy?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                      Available on OpenSea and Rarible you can  buy with your Wallet (Metamask, Coinbase)
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'purple.700', color: 'white' }}>
                    <Box flex='1' textAlign='left'>
                    Are there different types of rarity?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Over 100+ Different Rarity
                </AccordionPanel>
              </AccordionItem>
       
             <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'purple.700', color: 'white' }}>
                    <Box flex='1' textAlign='left'>
                    On which blockchain wil the NFTs be?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Polygon Matic
                </AccordionPanel>
              </AccordionItem>
         
              </Accordion>  

      <Flex d="flex"  m={4} p={5} borderRadius="20px"  direction="column">
        <Heading color="white">SUBSCRIBE FOR NEWS ABOUT NFT RIZAL</Heading>
        <Input type="email" name="email" placeholder="email" />
        <Button type="submit" mt={2}>Sign Me Up</Button>
      </Flex>


      <Footer/>`1w`
   
     </Flex>
  
  )
}



