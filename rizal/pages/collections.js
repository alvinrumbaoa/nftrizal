import Head from 'next/head'
import Card from '../components/Card'
import { Flex, Heading, SimpleGrid, GridItem} from '@chakra-ui/react'
import Footer from '../components/Footer'
import theme from '../components/theme.fonts'
import '@fontsource/jura'
import Countdown from 'react-countdown';
import { Spinner } from '@chakra-ui/react'





const about = () => {

	return (

   			<Flex d="flex" isLoading={<Spinner/>} justify="space-around" align="center" direction="column" w={'full'} h={'full'} bgGradient='linear(to-b, #000000, #9F3AC3)'> 
				<Heading mt={2} color="white">NFT Rizal Collection</Heading>
				<SimpleGrid data-aos="fade-up"  mt={5} columns={[2, null, 3]} spacing='40px'>
					<Card title="NFT Rizal #001" badge="SALE"price="0.01" description="Student of the Century" imageUrl="/images/001.png" openlink=""/>
					<Card title="NFT Rizal #002" badge="SALE"price="0.02" description="#watermelon" imageUrl="/images/002.png" openlink=""/>
					<Card title="NFT Rizal #003" badge="SALE"price="0.01" description="Hero of the Nation" imageUrl="/images/003.png" openlink=""/>
					<Card title="NFT Rizal #004" badge="SALE"price="0.02" description="PrayforUkraine" imageUrl="/images/004.png" openlink=""/>
					<Card title="NFT Rizal #005" badge="SALE"price="0.02" description="New Normal" imageUrl="/images/005.png" openlink=""/>
					<Card title="NFT Rizal #006" badge="SALE"price="0.01" description="Akatsuki" imageUrl="/images/006.png" openlink=""/>
					<Card title="NFT Rizal #007" badge="SALE"price="0.02" description="Metaverse" imageUrl="/images/007.png" openlink=""/>
					<Card title="NFT Rizal #008" badge="SALE"price="0.02" description="Cum Laude" imageUrl="/images/008.png" openlink=""/>
					<Card title="NFT Rizal #009" badge="SALE"price="0.01" description="Mr. loverboy" imageUrl="/images/009.png" openlink=""/>
					<Card title="NFT Rizal #010" badge="SALE"price="0.02" description="LA Rams 22 Champion" imageUrl="/images/010.png" openlink=""/>
					<Card title="NFT Rizal #011" badge="SALE"price="0.02" description="Dark Teal" imageUrl="/images/011.png" openlink=""/>
					<Card title="NFT Rizal #012" badge="SALE"price="0.01" description="Student (Maroon)" imageUrl="/images/012.png" openlink=""/>
					<Card title="NFT Rizal #013" badge="SALE"price="0.02" description="Pyramid" imageUrl="/images/013.png" openlink=""/>
					<Card title="NFT Rizal #014" badge="SALE"price="0.02" description="Pet Doge Student on New Normal" imageUrl="/images/014.png" openlink=""/>
					<Card title="NFT Rizal #015" badge="SALE"price="0.01" description="Noli Me Tangere" imageUrl="/images/015.png" openlink=""/>
					<Card title="NFT Rizal #016" badge="SALE"price="0.02" description="El Filibusterismo" imageUrl="/images/016.png" openlink=""/>
					<Card title="NFT Rizal #017" badge="SALE"price="0.02" description="Election Edition (Yellow)" imageUrl="/images/017.png" openlink=""/>
					<Card title="NFT Rizal #018" badge="SALE"price="0.01" description="Election Edition (Blue)" imageUrl="/images/018.png" openlink=""/>
					<Card title="NFT Rizal #019" badge="SALE"price="0.02" description="Election Edition (Red)" imageUrl="/images/019.png" openlink=""/>
					<Card title="NFT Rizal #020" badge="SALE"price="0.01" description="Election Edition (Pink)" imageUrl="/images/020.png" openlink=""/>
					<Card title="NFT Rizal #021" badge="SALE"price="0.02" description="Election Edition (Pinkish)" imageUrl="/images/021.png" openlink=""/>
					<Card title="NFT Rizal #022" badge="NEW"price="0.02" description="#angmamatayngdahilsayo" imageUrl="/images/022.png" openlink=""/>

				</SimpleGrid>
				
				<Footer/>
			</Flex>
	
	)
}

export default about
