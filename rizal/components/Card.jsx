import React from 'react'
import {Box, Image, Badge, Link, Button, Text, Heading} from '@chakra-ui/react'
import { AiOutlineHeart } from "react-icons/ai";



const Card = (props) => {

	
	return (
	<Box p={2} m={2} maxW='ld' borderWidth='1px' borderRadius='lg'
	boxShadow="2px 2px 5px black" overflow='hidden'>
    
    <Image src={props.imageUrl} alt={props.imageAlt} h="250px" align="center" />
  
     

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='red'>
            SALE
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
          {/* {props.price} */}
		  
          <Box as='span' d="flex" justify='center' direction="row" color='purple.200' fontWeight='bold' fontSize='md'>
            <Box d="flex" justify='space-evenly' direction="column">
            <Text color="purple.300" fontSize="xl" alignItems="center">{props.price}</Text><Image src="/images/ethereum.png" alt="ethereum logo"/>
           
            </Box>
            <Button ml={20} color="gray.700"><Link href={props.link}>Buy Now</Link></Button>
           
          </Box>
          
        </Box>

        {/* <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <AiOutlineHeart
                key={i}
                color={i < props.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
        
        </Box> */}
		
		<Box display='flex' mt='2' alignItems='center'>
		
		</Box>
      </Box>
    </Box>
	)
}

export default Card





