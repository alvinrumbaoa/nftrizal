
import {  useDisclosure, Fade, HStack, Flex,  Tooltip, Spacer, IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useColorModeValue,
	Stack, useColorMode, Box, Image} from '@chakra-ui/react'
import Link from 'next/link'
import Metamask from './metamask'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Nav = () => {
	const logo = "<NFT RIZAL/>"
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		
		<Flex p={2} bgGradient='linear(to-l, #000000, #000000	)' justify="space-between">
			<Flex >
					<Tooltip label="Home" >
						<Button m={3} size="md" color="white" bg="none" variant='solid'><Link href="/">{logo}</Link></Button>
					</Tooltip>
			</Flex>
			
		
			
			
			<Flex display="flex" direction="column">
			<IconButton
            size={'sm'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          	/>
			{ 
			isOpen ? (
			<Fade in={isOpen}>
			<Box display={{ md: 'none' }}>
				<Stack as={'nav'} spacing={2}>
						<Tooltip label="Home" >
							<Button m={3} size="md" color="white" bg="none" variant='solid'><Link href="/">Home</Link></Button>
						</Tooltip>
						<Tooltip label="Marketplace" >   
							<Button m={3} size="md" color="white" bg="none" variant='solid'><Link href="/about">Marketplace</Link></Button>	
						</Tooltip>
						<Tooltip label="Community" > 
							<Button m={3} s	ize="md" color="white"  bg="none" variant='solid'><Link href="/projects">Community</Link></Button>
						</Tooltip>
						<Button m={3} size="md" color="gray" >Connect to Wallet</Button>
				</Stack>
			</Box>
			</Fade>
			) : null}
			</Flex>
			<Flex justify="center" display={{ base: 'none', md: 'flex' }}>
					<Tooltip label="Home" >
						<Button m={3} size="md" color="white"  bg="none" variant='solid'><Link href="/">Home</Link></Button>
					</Tooltip>
					<Tooltip label="Marketplace" >   
						<Button m={3} size="md" color="white" bg="none" variant='solid'><Link href="/about">Marketplace</Link></Button>	
					</Tooltip>
					<Tooltip label="Community" > 
						<Button m={3} s	ize="md" color="white"  bg="none" variant='solid'><Link href="/projects">Community</Link></Button>
					</Tooltip>
					<Button m={3} size="md" color="GRAY.900" >Connect to Wallet</Button>
			</Flex>
			
        </Flex>
	)
}


export default Nav;	