import React from 'react'
import {Box, Image, Badge, Spinner, Link, Button, Text, Heading} from '@chakra-ui/react'
import { AiOutlineHeart } from "react-icons/ai";



const Card = (props) => {

	
	return (
	<Box p={2} m={2} maxW='ld' borderWidth='1px' borderRadius='lg'
	boxShadow="2px 2px 5px black" overflow='hidden'>
          <Box align="center" justify="center" >
          <Image isLoading spinner={<Spinner/>}src={props.imageUrl} alt={props.imageAlt} h="250px" boxShadow="2px 2px 5px black"/>
  
          </Box>
    
     

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='red'>
           {props.badge}
          </Badge>
        </Box>

        <Box
          mt='1'
          fontWeight='bold'
          as='h2'
          lineHeight='tight'
          isTruncated
          color="white"
        >
          {props.title}
		
        </Box>
		  <Box display='flex' mt='2' alignItems='center'  color="gray.400" fontWeight='semibold'>
			  {props.description}
    	 </Box>
        <Box>
        
		  
          <Box as='span' mt={2} d="flex" justify='center' direction="row" color='purple.200' fontWeight='bold' fontSize='md'>
            <Box d="flex" justify='space-evenly' direction="column">
            <Text color="purple.100" fontSize="4xl" alignItems="center">{props.price}</Text><Image src="/images/ethereum.png" alt="ethereum logo"/>
           
            </Box>
            <Button ml={20} colorScheme="facebook"><Link href={props.openlink}>Opensea</Link></Button>
            <Button ml={2} variant='solid' colorScheme="yellow"><Link href={props.rarlink}>Rarible</Link></Button>
          </Box>
          
        </Box>
      </Box>
    </Box>
	)
}

export default Card





