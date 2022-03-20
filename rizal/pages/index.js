import React, { useState} from 'react'
import Head from 'next/head'
import Card from '../components/Card'
import { Flex, Button, SimpleGrid, Box, Link, Text,  Input,Image, Heading, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon} from '@chakra-ui/react'
import Footer from '../components/Footer'
// import emailjs from '@emailjs/browser';
import Countdown from 'react-countdown';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const [email, setEmail] = useState("");


  // emailjs.send("service_2bj6vaa","template_3zc94oi", email, 'k8qitowSIRDEqmYI1')
	// .then((response) => {
	//    console.log('SUCCESS!', response.status, response.text);
  //    router.push("/thankyou")
	// }, (err) => {
	//    console.log('FAILED...', err);
	// });


  return (
 
    <Flex d="flex"  justify="space-around" align="center" direction="column" w={'full'} h={'full'} bgGradient='linear(to-b, #000000, #9F3AC3)'> 
        <Head>
          <title>Welcome to NFT Rizal</title>
          <meta name="description" content="Next Generation NFT Collection " />
          <link rel="icon" href="/favicon.ico" />
  
        
        </Head> 
        <Flex d="flex"  justify="space-around" align="center" direction={{sm:"column", lg:"row"}} w={'full'} h={'full'}>     
                <Box data-aos="fade-down" mt={20} justify="center">
                          <Heading fontSize="6xl" fontWeight="bold" mb={2} bgClip='text'  bgGradient= 'linear(to-l, yellow.700, purple.300)' textShadow="1px 1px 1px white" >NFT Rizal</Heading>
                          <Text mb={2} w="500px"color="white">NFT Rizal is a new collection of minted art in honor of the national hero of the Philippines, Jose Rizal.  </Text>
                          <Button colorScheme="purple"><Link href="https://opensea.io/nftrizal">Collect Now</Link></Button>
                </Box>
                <Box data-aos="fade-down"mt={20} justify="center">
                        <Image src="/images/hero.png" alt="hero-image" boxSize="450px" />
                        <Box border="2px" fontWeight="bold" fontSize="xl" h="100px" w="300px" borderRadius="20px "color="white" align="center" mt={-20} pos="absolute">
                             <Text fontWeight="bold" textShadow="2px 2px 2px white" color="purple.100">Launch Giveaways!</Text>
                             <Countdown date={Date.now() + 2500000000}>
                                 <Button>Check out New Sale</Button>
                            </Countdown>
                        </Box>
                </Box>       
               
        </Flex>
        
        <Heading mt={40} color="white">Featured Art Collections</Heading>
        <Flex data-aos="fade-up" d="flex" m={4} justify="space-around" align="center" direction={{xs:"column",sm:"column", lg:"row"}}>
         <SimpleGrid data-aos="fade-up"  mt={5} columns={[1, null, 3]} spacing='40px'>
          <Card  title="NFT Rizal #006" badge="SALE" price="0.02" description="Akatsuki" imageUrl="/images/006.png" openlink="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053034387178520586"/>
          <Card  title="NFT Rizal #010" badge="SALE" price="0.02" description="LA Rams 22 Champion" imageUrl="/images/010.png" openlink="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053038785225031681"/>
          <Card  title="NFT Rizal #005" badge="SALE" price="0.01" description="New Normal" imageUrl="/images/005.png" openlink="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053033287666892801"/>
          </SimpleGrid>
        </Flex>

        <Flex data-aos="zoom-in" d="flex" maxW="4xl" mt={40}   justify="space-between"  direction={{sm:"column", lg:"row"}}>
          
          <Image src="/images/whyrizal.png" borderRadius="20px" boxShadow="3px 2px 2px black"alt="thug rizal"/>
         
          <Flex d="flex" m={4} justify="space-around" align="center" direction="column">
            <Heading color="white" fontWeight="bold"> Why NFT Rizal?</Heading>
                <Flex mt={2} d="flex" direction="row" justify="space-evenly" >
                  <Box p={5}  m={2} border='2px' borderColor='white' borderRadius="20px" boxSize="120px">
                    <Text fontSize="xl" align="center" color="white">10,000 Rizal</Text>
                  </Box >
                  <Box p={5} m={2} border='2px' align="center" borderColor='white' borderRadius="20px" boxSize="120px">
                    <Text  fontSize="xl" align="center" color="white">1000 Unique</Text>
                  </Box>
                  <Box p={5} m={2} border='2px'align="center" borderColor='white' borderRadius="20px"  boxSize="120px">
                    <Text  fontSize="xl" align="center"   color="white">100% History</Text>
                  </Box>
                  
               </Flex>
             
               <Button mt={10} colorScheme="purple.800" solid=""><Link href="https://en.wikipedia.org/wiki/Jos%C3%A9_Rizal">Learn more about Rizal </Link></Button>
          </Flex>
        </Flex>
        
        <Flex data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" d="flex" maxW="4xl" mt={40}  p={5} borderRadius="20px" justify="space-between"   
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

        <Flex data-aos="zoom-in" duration="3000" d="flex" maxW="4xl" m={4} p={5} borderRadius="20px" justify="space-between" direction="column">
            <Heading mt={2} color="white">Meet the Founder</Heading>
            <Image mt={2} src="/images/Rectangle 119.png"></Image>
            <Text mt={2} fontWeight="bold" align="center" color="white">@IAMACHIPMUNKS</Text>
            <Text mt={2} fontWeight="bold" align="center" color="white">Developer and Creator of NFT Rizal</Text>
        </Flex>
        <Heading data-aos="fade-down"mt={2} color="white" justify="center">LOOKING FOR ANSWERS?</Heading>
        <Accordion mt={5} data-aos="fade-up" width="600px">
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'purple.700', color: 'white' }}>
                    <Box flex='1' color="white" textAlign='left' >
                    <Text color="white" fontWeight="semibold" align="center"> When it will be launch?</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Text color="white" fontWeight="semibold" align="center">April 2 2022 12:00 PST</Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'purple.700', color: 'white' }}>
                    <Box flex='1' color="white" textAlign='left'>
                    <Text color="white" fontWeight="semibold" align="center">What is the mint price??</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton >
                </h2>
                <AccordionPanel pb={4}>
                <Text color="white" fontWeight="semibold" align="center">Floor Price starting at 0.01 ETH</Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'purple.700', color: 'white' }}>
                    <Box flex='1' color="white" textAlign='left'>
                    <Text color="white" fontWeight="semibold" align="center">  How many can I buy? </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Text color="white" fontWeight="semibold" align="center">Available on OpenSea and Rarible you can  buy with your Wallet (Metamask, Coinbase)</Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'purple.700', color: 'white' }}>
                    <Box flex='1' color="white" textAlign='left'>
                    <Text color="white" fontWeight="semibold" align="center">Are there different types of rarity?</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Text color="white" fontWeight="semibold" align="center"> Over 100+ Different Rarity</Text>
                </AccordionPanel>
              </AccordionItem>
       
             <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'purple.700', color: 'white' }}>
                    <Box flex='1' color="white" textAlign='left'>
                    <Text color="white" fontWeight="semibold" align="center">On which blockchain wil the NFTs be?</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Text color="white" fontWeight="semibold" align="center">Polygon Matic</Text>
                </AccordionPanel>
              </AccordionItem>
         
              </Accordion>  

      <Flex data-aos="zoom-out"  d="flex"  m={4} p={5} borderRadius="20px"  direction="column">
        <Heading color="white">SUBSCRIBE FOR NEWS ABOUT NFT RIZAL</Heading>
        <Input type="email" name="email" placeholder="email" />
        <Button type="submit" value={email} onSubmit={(e)=> setEmail(e.target.value)} mt={2}>Sign Me Up</Button>
      </Flex>


      <Footer/>
   
     </Flex>
  
  )
}



