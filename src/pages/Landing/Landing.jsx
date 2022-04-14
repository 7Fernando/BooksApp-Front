import { Stack,Heading, Spacer, Center, Image,  Text, Grid,GridItem, Flex, Box, Container,Square, Button, Wrap} from "@chakra-ui/react";
// import { useEffect } from "react";
 import { Link } from "react-router-dom";
// import { Formik, Form } from "formik";




const Landing = () => {


	return (
		
	
		<Grid
		h='100vh'
		templateRows='repeat(2)'
		templateColumns='repeat(2, 2fr)'
		gap={3}
		bg="black"
	  	>

			   <GridItem colSpan={2} bg='black' color='white'  >
			   <Flex  bg="black" >
				<Box p='5' mt='10'>
		  		<Heading size='lg' color='green.400'>BookFlix</Heading>
				</Box>
				<Spacer />
				<Box  p='5' mt='7'>
		  		<Button bg='green.400' size='lg' mr='4' >Sign Up</Button>
				</Box>
	  			</Flex>
				</GridItem>

			<GridItem colSpan={4} bg='black' >
			<Flex color='white' >
	
  			<Square bg='clack.500'   w={[200, 300, 700]}>
		  
 			<Text fontSize={{ base: '15px', md: '25px', lg: '38px' }}>
The platform with more than 60 books available Online. Subscribe to our platform and start enjoying!</Text>

  			</Square>
	  		<Square bg='clack.500'  height="400px" flexWrap='wrap' w={[300, 300, 700]}>
	  		<Square bg='clack.500'  height="50px" w={[300, 400, 800]}>
			<Heading as="h2" fontSize={{ base: '17px', md: '30px', lg: '35px' }}>
			Welcome to the Bookflix Community.
  			</Heading>
			</Square>	
		  	<Link to='/home'>
	  			<Button bg='green.400' size='lg' >Start to discover</Button>
	  		</Link>
  			</Square>

	</Flex>
				</GridItem>
				
				


			

	</Grid>

	)
};

export default Landing;
