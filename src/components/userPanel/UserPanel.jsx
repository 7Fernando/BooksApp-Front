import React from "react";
import NavBar from "../navBar/navBar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  Flex,
  List,
  ListItem,
  ListIcon,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {MdCheckCircle} from "react-icons/md";

import { EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getUserByMail } from "../../redux/actions/user";
import { useEffect } from "react";
import { useState } from "react";
import { getAllFavorites } from "../../redux/actions/favorites";


export default function SocialProfileSimple() {
  const dispatch = useDispatch();
  const usuario = window.localStorage.getItem("user");
  const user = useSelector((state) => state.user.user);
  const favorites = useSelector((state) => state.favorites.allfavorites);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    dispatch(getUserByMail(usuario));
    dispatch(getAllFavorites(usuario));
  
  }, []);

  function editProfile() {
    setIsShow(true);
  }
  function updateProfile() {
    console.log(img);
    console.log(name);
    setIsShow(false);
  }
  return (
    <>
      <NavBar />
      <Flex  alignItems={"center"} justifyContent={"space-evenly"}>
        <Box
          maxW={"350px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"} margin={3}>
            My Favorites:
          </Heading>
          {favorites?.length > 0 ? (
            <List spacing={3}>
            {favorites.map((b) => { 
              return (
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                  <Link to={`/details/${b["book"].id}`}>
                  {b["book"].title}
                  </Link>
              </ListItem> )})}
            </List>
          ) : (
            <Stack>

            <h2>No favorites</h2>
            <Link to={'/home'}>
            <Button
                flex={1}
                p={2}
                fontSize={"md"}
                rounded={"full"}
                bg={"green.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(92 183 54  / 48%), 0 10px 10px -5px rgb(92 183 54  / 43%)"
                }
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
                >
              
               Go Home and Add Books
              </Button>
                  </Link>
              </Stack>
          )}
        </Box>
        <Center py={8}>
          <Box
            maxW={"380px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Avatar
              size={"xl"}
              src={user.picture}
              alt={"Avatar Alt"}
              mb={4}
              pos={"relative"}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: "green.300",
                border: "2px solid white",
                rounded: "full",
                pos: "absolute",
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {user.name}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              {user.mail}
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"lg"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              Suscription: {user.suscribe}
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"lg"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              Expiration: Aca iria el vencimiento
            </Text>

            <Stack mt={8} direction={"row"} spacing={4}>
              <Link to={'/plans'}>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                >
                Update Subscription
              </Button>
                </Link>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                onClick={() => editProfile()}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                <EditIcon m={2} />
                Edit Profile
              </Button>
            </Stack>
          </Box>
        </Center>
        {isShow ? (
          <Box
            maxW={"380px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Avatar
              size={"xl"}
              src={user.picture}
              alt={"Avatar Alt"}
              mb={4}
              pos={"relative"}
             
            />
            <FormControl>
            <FormLabel textAlign={'center'} htmlFor="img">Change Image</FormLabel>
            <Input
              id="img"
              type="img"
              boxShadow="base"
              border="none"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="Enter the new url of the image"
            />
           
           <FormLabel m={2} textAlign={'center'} htmlFor="name">Change your Name</FormLabel>
            <Input
              id="name"
              type="name"
              boxShadow="base"
              border="none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your new Name"
            />
                <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                onClick={() => setIsShow(false)}
                _focus={{
                  bg: "gray.200",
                }}
              >
                Cancel
              </Button>
           <Button
                flex={1}
                m={2}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                onClick={() => updateProfile()}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
                >
                Submit 
              </Button>
                
                
                </Stack>
          </FormControl>
          
          </Box>
        ) : <Box  maxW={"380px"}
        w={"full"}></Box>}
      </Flex>
      <Footer />
    </>
  );
}
