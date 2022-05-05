import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../navBar/navBar";
import Footer from "../footer/Footer";
import {
  getAllFavorites,
  removeFavorites,
} from "../../redux/actions/favorites";
import {
  Box,
  Heading,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

import { getUser } from "../../redux/actions/user";

import { WarningIcon, DeleteIcon } from "@chakra-ui/icons";
import { SiHomeassistant } from "react-icons/si";

export default function Favorite() {
  // get user id from local storage

  const dispatch = useDispatch();
  const [prueba, setPrueba] = useState(0);
  const usuario = window.localStorage.getItem("user");
  const all = useSelector((state) => state.favorites.allfavorites);

  useEffect(() => {
    // window.localStorage.getItem('user')
    dispatch(getAllFavorites(usuario));
  }, [prueba]);

  const removeFavorite = (id, bookId) => {
    dispatch(removeFavorites(id, bookId));
    setPrueba(prueba + 1);
  };

  return (
    <>
      <NavBar />
      <Center flexWrap={"wrap"} mb="35" minH="calc(100vh - 95px)">
        {all.length ? (
          all.map((book) => (
            <Box justify="center" mr="5" key={book["book"].id}>
              <Center pt={10}>
                <Stack
                  borderWidth="1px"
                  borderRadius="lg"
                  w={{ sm: "100%", md: "400px" }}
                  height={{ sm: "476px", md: "270px" }}
                  direction={{ base: "column", md: "row" }}
                  bg="green.400"
                  boxShadow={"2xl"}
                  p="1"
                >
                  <Flex m="3">
                    <Image
                      boxSize="235px"
                      objectFit="cover"
                      src={book["book"].cover}
                      alt="cover"
                    />
                  </Flex>
                  <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    textAlign="center"
                  >
                    <Heading fontSize={"1x2"} fontFamily={"body"} color="white">
                      {book["book"].title}
                    </Heading>

                    <Stack
                      mt={"2rem"}
                      direction={"row"}
                      padding={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Link to={`/details/${book["book"].id} `}>
                        <Button
                          flex={1}
                          fontSize={"lg"}
                          rounded={"full"}
                          color={"black"}
                          _focus={{
                            bg: "grey.500",
                          }}
                        >
                          See details
                        </Button>
                      </Link>
                      <Button
                        flex={1}
                        fontSize={"lg"}
                        rounded={"full"}
                        bg={"grey.400"}
                        color={"black"}
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          bg: "red.500",
                        }}
                        _focus={{
                          bg: "red.500",
                        }}
                        onClick={() => removeFavorite(usuario, book["book"].id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Center>
            </Box>
          ))
        ) : (
          <Box textAlign="center" py={10} px={6} height="650px">
            <WarningIcon boxSize={"50px"} color={"blue.300"} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
              No books at Favorite!
            </Heading>
            <Text color={"gray.500"} fontSize="20">
              Please, add Books at this section
            </Text>
            <Link to="/home">
              <Button
                mt="6"
                colorScheme={"green"}
                variant="solid"
                leftIcon={<SiHomeassistant />}
              >
                Back to home
              </Button>
            </Link>
          </Box>
        )}
      </Center>

      <Footer />
    </>
  );
}