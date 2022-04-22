import React, { useState } from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar"
import Footer from '../footer/Footer';
//import CardFavorites from "./CardFavorites";
import { getAllFavorites, removeFavorites} from "../../redux/actions/favorites";
import { Box, Heading, Text } from '@chakra-ui/react';
import { WarningTwoIcon} from '@chakra-ui/icons';
import { getUser } from '../../redux/actions/user';


export default function Favorite() {
  // get user id from local storage
 

  const dispatch = useDispatch();
  var all = useSelector((state) => state.favorites. allfavorites);
  const [prueba, setPrueba] = useState(0);
  
  useEffect(() => {
      dispatch(getAllFavorites(21));
      console.log(window.localStorage);
    }, [prueba]);

  const removeFavorite = (id,bookId) => {
    dispatch(removeFavorites(id,bookId));
    console.log(prueba)
    setPrueba(prueba + 1)
  };

  
  return (
    
        <>
          <NavBar />
         
          {all.length ? (
            
             <Box textAlign="center" py={10} px={6} >
              {all.map((book) => (
                <div key={book["book"].id} >
                  <p>{book["book"].title}</p>
                  <button onClick={()=>removeFavorite(21, book["book"].id)}>X</button>
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
