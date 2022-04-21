import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar"
import Footer from '../footer/Footer';
//import CardFavorites from "./CardFavorites";
import { getAllFavorites} from "../../redux/actions/favorites";
import { Box, Heading, Text } from '@chakra-ui/react';
import { WarningTwoIcon} from '@chakra-ui/icons';


export default function Favorite() {
  const dispatch = useDispatch();
  const all = useSelector((state) => state.favorites. allfavorites);

  // useEffect(() => {
  //     dispatch(getAllFavorites());
  // }, []);

  return (
    
        <>
          <NavBar />
         
          {all.length ? (
            
             <Box textAlign="center" py={10} px={6} >
              {all.map(( index) => (
                <div key={index} >
                  {/* <CardFavorites shop={p} /> */}
                </div>
              ))}
            </Box>
           
      
          ) : (
          
               <Box textAlign="center" py={10} px={6}  height='650px'>
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
