import {Link} from 'react-router-dom';
import landing from "../../assets/images/landing.jpg"
import {Button,Flex,Heading,Image,Stack,Text,useBreakpointValue} from '@chakra-ui/react';
  
  export default function Landing() {
	return (
	  <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
		<Flex p={8} flex={1} align={'center'} justify={'center'}>
		  <Stack spacing={6} w={'full'} maxW={'lg'}>
			<Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
			  <Text
				as={'span'}
				position={'relative'}
				_after={{
				  content: "''",
				  width: 'full',
				  height: useBreakpointValue({ base: '20%', md: '30%' }),
				  position: 'absolute',
				  bottom: 1,
				  left: 0,
				  bg: 'green.400',
				  zIndex: -1,
				}}>
				BOOKFLIX
			  </Text>
			  <br />{' '}
			  <Text color={'green.400'} as={'span'}>
			  Welcome to the Bookflix Community
			  </Text>{' '}
			</Heading>
			<Text fontSize={{ base: 'md', lg: 'lg' }} color={'white.500'}>
			The platform with more than 60 books available Online. Subscribe to our platform and start enjoying!
			</Text>
			<Stack >
			<Link to='/home'>	
			  <Button
			  	size={'lg'}
				px={6}  
				rounded={'full'}
				bg={'green.400'}
				color={'white'}
				_hover={{
				  bg: 'green.900',
				}}>Sing In</Button>
				</Link>
			</Stack>
		  </Stack>
		</Flex>
		<Flex flex={1}>
		  <Image
		  	filter='auto' brightness='60%'
			alt={'Login Image'}
			objectFit={'cover'}
			src={landing}
 />
		</Flex>
	  </Stack>
	);
  }