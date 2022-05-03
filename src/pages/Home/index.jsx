import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Carousel from "../../components/carousel";
import NavBar from "../../components/navBar/navBar";
import Footer from '../../components/footer/Footer';
import SideBar from "../../components/sideBar/sideBar";
import BooksCard from "../../components/booksCard/BooksCard";


export default function Home() {
  return (
    <>

      <NavBar search={true} />

       <Flex>

        <Box width={"20%"} boxShadow="dark-lg">
          <SideBar />
        </Box>
        <Box width={"80%"}>
          <Carousel />
          <BooksCard />
        </Box>
        
      </Flex>
     
    <Footer />

    </> 
  
  );
}
