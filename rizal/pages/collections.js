import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Card from '../components/Card'
import { Flex, Heading, SimpleGrid, Input, GridItem} from '@chakra-ui/react'
import Footer from '../components/Footer'
import theme from '../components/theme.fonts'
import '@fontsource/jura'
import Countdown from 'react-countdown';
import { Spinner } from '@chakra-ui/react'





const about = () => {
	const [search, setSearch] = useState('');

	const cards =[
		{ 
			title: "NFT Rizal #001",
			badge: "SALE",
			price: "0.01",
			description: "test 1",
			imageUrl: "/images/001.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053027790108753921",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #002",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/002.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053028889620381796",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #003",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/003.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053027790108753921",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #004",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/004.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053027790108753921",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #005",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/005.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053033287666892801",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #006",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/006.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053034387178520586/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #007",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/007.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053035486690148452/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #008",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/008.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053036586201776129",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #009",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/009.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053037685713403905/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #010",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/010.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053038785225031681/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #011",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/011.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053039884736659457/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #012",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/012.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053040984248287233/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #013",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/013.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053042083759915009/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #014",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/014.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053043183271542785/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #015",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/015.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053045382294798337/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #016",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/016.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053046481806426113/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #017",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/017.png",
			openlink:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053047581318053889/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #018",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/018.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053048680829681665/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #019",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/019.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053049780341309441/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #020",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/020.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053050879852937217/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #021",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/021.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053051979364564993/",
			rarlink:"",
		},
		{ 
			title: "NFT Rizal #022",
			badge: "SALE",
			price: "0.01",
			description: "",
			imageUrl: "/images/022.png",
			openlink: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49490063564165837410746899416964571604195468147687052563142053053078876192769/",
			rarlink:"",
		},


	]
	const filteredCards = cards.filter((card) =>
    	card.title.toLowerCase().includes(search.toLowerCase())
  	);

	return (

   			<Flex d="flex" justify="space-around" align="center" direction="column" w={'full'} h={'full'} bgGradient='linear(to-b, #000000, #9F3AC3)'> 
				<Heading mt={2} color="white">NFT Rizal Collection</Heading>
				<Input w="200px" color="purple.100" type="text"  onChange={(e) => setSearch(e.target.value)}></Input>
				<SimpleGrid data-aos="fade-up"  mt={5} columns={[1, null, 3]} spacing='40px'>
					
					{	
						filteredCards.map( (nft, index) => 	
							<Card key={index} title={nft.title} badge={nft.badge} price={nft.price} description={nft.description} imageUrl={nft.imageUrl} openlink={nft.openlink} />			
						)
					}
				</SimpleGrid>
				
				<Footer/>
			</Flex>
	
	)
}

export default about
