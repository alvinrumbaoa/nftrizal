import { HStack, Image,  Link } from '@chakra-ui/react'

const Social = () => {

	
	return (
	<HStack align="center" spacing='30px' h="100px" justifyContent='center' >
		<Link href="https://www.instagram.com/iamachipmunks/">
		  <Image src="/images/Vector.png" alt="opensea" boxSize="50px" objectFit="cover"/>
		</Link> 
		<Link href="https://github.com/xenodochy23">
		  <Image src="/images/Discord.png" alt="discord" boxSize="50px" objectFit="cover"/>
		</Link>
		<Link href="https://www.linkedin.com/in/alvinrumbaoa/">
		  <Image src="/images/Instagram.png" alt="instagram" boxSize="50px" objectFit="cover"/>
		</Link>
		<Link href="https://dribbble.com/alvinrumbaoa">
		  <Image src="/images/twitter.png" alt="twitter" boxSize="40px" objectFit="cover"/>
		</Link>
		<Link href="https://dribbble.com/alvinrumbaoa">
		  <Image src="/images/rarible.png" alt="rarible" boxSize="40px" objectFit="cover"/>
		</Link>
	</HStack>
	)
}

export default Social
