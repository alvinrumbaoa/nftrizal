import Head from 'next/head'
import Card from '../components/Card'
import { Flex,  ChakraProvider,Image, Heading, SimpleGrid, GridItem} from '@chakra-ui/react'
import Footer from '../components/Footer'
import theme from '../components/theme.fonts'
import '@fontsource/jura'
import Countdown from 'react-countdown';


const about = () => {
	return (
		<ChakraProvider theme={theme}>
   			<Flex d="flex"  justify="space-around" align="center" direction="column" w={'full'} h={'full'} bgGradient='linear(to-b, #000000, #9F3AC3)'> 
				<Heading mt={2} color="white">NFT Rizal Collection</Heading>
				<SimpleGrid mt={5} columns={[2, null, 3]} spacing='40px'>
					<Card title="NFT Rizal #001" price="0.01" description="Student of the Century" imageUrl="/images/001.png" link=""/>
					<Card title="NFT Rizal #002" price="0.02" description="#watermelon" imageUrl="/images/002.png" link=""/>
					<Card title="NFT Rizal #003" price="0.01" description="Hero of the Nation" imageUrl="/images/003.png" link=""/>
					<Card title="NFT Rizal #004" price="0.02" description="Akatsuki" imageUrl="/images/004.png" link=""/>
					<Card title="NFT Rizal #005" price="0.02" description="LA Rams 22 Champion" imageUrl="/images/005.png" link=""/>
					<Card title="NFT Rizal #006" price="0.01" description="New Normal" imageUrl="/images/006.png" link=""/>
					<Card title="NFT Rizal #007" price="0.02" description="Akatsuki" imageUrl="/images/007.png" link=""/>
					<Card title="NFT Rizal #008" price="0.02" description="LA Rams 22 Champion" imageUrl="/images/008.png" link=""/>
					<Card title="NFT Rizal #009" price="0.01" description="New Normal" imageUrl="/images/009.png" link=""/>
					<Card title="NFT Rizal #010" price="0.02" description="Akatsuki" imageUrl="/images/010.png" link=""/>
					<Card title="NFT Rizal #011" price="0.02" description="LA Rams 22 Champion" imageUrl="/images/011.png" link=""/>
					<Card title="NFT Rizal #012" price="0.01" description="New Normal" imageUrl="/images/012.png" link=""/>
					<Card title="NFT Rizal #013" price="0.02" description="Akatsuki" imageUrl="/images/013.png" link=""/>
					<Card title="NFT Rizal #014" price="0.02" description="LA Rams 22 Champion" imageUrl="/images/014.png" link=""/>
					<Card title="NFT Rizal #015" price="0.01" description="New Normal" imageUrl="/images/015.png" link=""/>
					<Card title="NFT Rizal #016" price="0.02" description="Akatsuki" imageUrl="/images/016.png" link=""/>
					<Card title="NFT Rizal #017" price="0.02" description="LA Rams 22 Champion" imageUrl="/images/017.png" link=""/>
					<Card title="NFT Rizal #018" price="0.01" description="New Normal" imageUrl="/images/018.png" link=""/>
					<Card title="NFT Rizal #019" price="0.02" description="LA Rams 22 Champion" imageUrl="/images/019.png" link=""/>
					<Card title="NFT Rizal #020" price="0.01" description="New Normal" imageUrl="/images/020.png" link=""/>
					<Card title="NFT Rizal #021" price="0.02" description="Akatsuki" imageUrl="/images/021.png" link=""/>
					<Card title="NFT Rizal #022" price="0.02" description="LA Rams 22 Champion" imageUrl="/images/022.png" link=""/>

				</SimpleGrid>
				
				<Footer/>
			</Flex>
			
     </ChakraProvider>
	)
}

export default about
