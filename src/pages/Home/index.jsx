import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../../components/navBar/navBar";
import SideBar from "../../components/sideBar/sideBar";
import BooksCard from "../../components/booksCard/BooksCard";
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <Flex>
        <Box width={"20%"} boxShadow="dark-lg">
          <SideBar />
        </Box>
        <Box width={"80%"}>
          <BooksCard />
        </Box>
        
      </Flex>
      <Footer />
    </>
   
  );
}
