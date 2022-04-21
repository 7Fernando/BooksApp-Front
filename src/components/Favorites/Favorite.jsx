import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar"
import Footer from '../footer/Footer';
//import CardFavorite from "./CardFavorite";
import { getAllFavorites, removeFavorites} from "../../redux/actions/favorites";
import { Box, Heading,  Button,Center,Flex,Image,Stack,Text,useColorModeValue,Wrap, WrapItem} from '@chakra-ui/react';
import { WarningTwoIcon} from '@chakra-ui/icons';


export default function Favorite() {
  const dispatch = useDispatch();
  const all = useSelector((state) => state.favorites.allfavorites);
  const borrar = useSelector((state)=> state.favorites.deleteFav)



useEffect(() => {
 dispatch(getAllFavorites(3));
  }, []);

 
  return (
    
        <>
          <NavBar />

         
          {all.length ? all.map((book) => (
            <Wrap>
            <WrapItem >
            <Center py={4} key={book["book"].id} >
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              w={{ sm: '100%', md: '540px' }}
              height={{ sm: '476px', md: '18rem' }}
              direction={{ base: 'column', md: 'row' }}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              padding={4}>
              <Flex flex={1} bg="blue.200">
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  src={book["book"].cover} alt='cover' />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}>
                <Heading fontSize={'1x2'} fontFamily={'body'}>
                {book["book"].title}
                </Heading>
                <Stack
                  width={'100%'}
                  mt={'2rem'}
                  direction={'row'}
                  padding={2}
                  justifyContent={'space-between'}
                  alignItems={'center'}>
                  <Link to={`/details/${book.id}`}  >
                  <Button
                    flex={1}
                    bg={'green.400'}
                    fontSize={'sm'}
                    rounded={'full'}
                    _focus={{
                      bg: 'gray.200',
                    }}>
                    Detail
                  </Button>
                  </Link>
                  <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'red.400'}
                    color={'white'}
              
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'orange.500',
                    }}
                    _focus={{
                      bg: 'orange.500',
                    }}
                    onClick={()=>dispatch(removeFavorites(3,book["book"].id))}>
                    Remove Favorite
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Center>
          </WrapItem>
          </Wrap>
              )) : 
         
           ( <Box textAlign="center" py={10} px={6}  height='650px'>
                 <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
                    <Heading as="h2" size="xl" mt={6} mb={2}>
                     No books at Favorite!!
                 </Heading>
            <Text color={'gray.500'}>
                Please, add Books at this section
            </Text>
            <Link
                  to="/home">
                  <h1>Back to home</h1>
                </Link>
            </Box>
              
            
          )}
        <Footer />
       </>
  );
}
