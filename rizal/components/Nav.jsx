
import {  useDisclosure, Fade, HStack, Flex,  Tooltip, Spacer, IconButton,
	Button,
	Stack, Box} from '@chakra-ui/react'
import Link from 'next/link'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useWeb3 } from "@3rdweb/hooks" 

const Nav = () => {
	const logo = "<NFT RIZAL/>"
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { connectWallet, address, error } = useWeb3();

	return (
	
		<Flex p={2} bgGradient='linear(to-l, #000000, #000000	)' justify="space-between">
			<Flex >
					<Tooltip label="Home" >
						<Button m={3} size="md" color="white" bg="none" variant='solid'><Link href="/">{logo}</Link></Button>
					</Tooltip>
			</Flex>
			
				{	error ? console.log(error) : null }
			
			
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
						<Tooltip label="Collections" >   
							<Button m={3} size="md" color="white" bg="none" variant='solid'><Link href="/collections">Collections</Link></Button>	
						</Tooltip>
						<Tooltip label="Community" > 
							<Button m={3} s	ize="md" color="white"  bg="none" variant='solid'><Link href="/community">Community</Link></Button>
						</Tooltip>
						{address?
						<Button m={3} size="md" color="gray">{address}</Button> :
						<Button m={3} size="md" color="black" onClick={()=>connectWallet("injected") }>Connect to Wallet</Button>
						}
				</Stack>
			</Box>
			</Fade>
			) : null}
			</Flex>
			<Flex justify="center" display={{ base: 'none', md: 'flex' }}>
					<Tooltip label="Home" >
						<Button m={3} size="md" color="white"  bg="none" variant='solid'><Link href="/">Home</Link></Button>
					</Tooltip>
					<Tooltip label="Collections" >   
						<Button m={3} size="md" color="white" bg="none" variant='solid'><Link href="/collections">Collections</Link></Button>	
					</Tooltip>
					<Tooltip label="Community" > 
						<Button m={3} s	ize="md" color="white"  bg="none" variant='solid'><Link href="/community">Community</Link></Button>
					</Tooltip>
					{address?
						<Button m={3} size="md" color="gray">{address}</Button> :
						<Button m={3} size="md" color="black" onClick={()=>connectWallet("injected") }>Connect to Wallet</Button>
						}
			</Flex>
			
        </Flex>
	)
}


export default Nav;	