import { HStack, Image,  Link } from '@chakra-ui/react'

const Social = () => {

	
	return (
	<HStack align="center" spacing='30px' h="100px" justifyContent='center' >
		<Link href="https://opensea.io/nftrizal">
		  <Image src="/images/Vector.png" alt="opensea" boxSize="50px" objectFit="cover"/>
		</Link> 
		<Link href="https://discord.gg/JRruvSKCkk">
		  <Image src="/images/Discord.png" alt="discord" boxSize="50px" objectFit="cover"/>
		</Link>
		<Link href="https://www.instagram.com/nftrizal/">
		  <Image src="/images/Instagram.png" alt="instagram" boxSize="50px" objectFit="cover"/>
		</Link>
		<Link href="https://twitter.com/nftrizal">
		  <Image src="/images/Twitter.png" alt="twitter" boxSize="40px" objectFit="cover"/>
		</Link>
		<Link href="https://rarible.com/nftrizal/">
		  <Image src="/images/rarible.png" alt="rarible" boxSize="40px" objectFit="cover"/>
		</Link>
	</HStack>
	)
}

export default Social
