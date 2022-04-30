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
  useColorModeValue,
  Flex,
  List,
  ListItem,
  ListIcon,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { MdCheckCircle} from "react-icons/md";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getUserByMail, modifyUser } from "../../redux/actions/user";
import { useEffect } from "react";
import { useState } from "react";
import { getAllFavorites, removeFavorites } from "../../redux/actions/favorites";


export default function SocialProfileSimple() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const favorites = useSelector((state) => state.favorites.allfavorites);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [prueba, setPrueba] = useState(0)
  const [errors, setErrors] = useState({
    name: "",
    img: "",
  });
  
  const usuario = window.localStorage.getItem("user");
  useEffect(() => {
    dispatch(getAllFavorites(usuario));
    dispatch(getUserByMail(usuario));
  }, [prueba, isShow]);

  function editProfile(e) {
    e.preventDefault();
    setImg(user.picture);
    setName(user.name);
    setIsShow(true);
  }

  const startDate = new Date(user.subInfo && user.subInfo[0].currentStart * 1000);
  const lastDate = new Date(user.subInfo && user.subInfo[0].currentEnd * 1000);
  const total = (user.subInfo && user.subInfo[0].total) / 100;
  function validate() {
    let errors = {};
    let uname = /^(?!.* (?: |$))[A-Z][a-z ]+$/i
    if (!uname.test(name)) {
      errors.name = "Nombre no valido, tener en cuenta espacios en blanco y signos";
    }
    if (/\d/.test(name)) {
      errors.name = "El nombre no puede incluir numeros";
    }
    if(name.length > 30) {
      errors.name = "El nombre debe contener menos de 30 caracteres"
    }
    if (!img) errors.img = "La imagen es requerida";
    
    let url= /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/gi;
   
    if (!url.test(img)) {
      errors.img = "La imagen debe ser una url valida (jpg,png,jpeg,gif)";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function updateProfile(e) {
    e.preventDefault();
    if (validate()) {
      dispatch(modifyUser({id: user.id, name: name, picture: img}));
      setIsShow(false);
    } 
  }

  function cancelButton(e) {
    e.preventDefault();
    setIsShow(false);
    setErrors({
      name: "",
      img: "",
    });
    setImg("");
    setName("");

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
                  <Button m={1} size={"xs"} onClick={()=> {dispatch(removeFavorites(usuario,b["book"].id ))
                setPrueba(prueba+1)}}>
                    <DeleteIcon color="red.700"  /> 
                  </Button>

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
              
              Explore Books
              </Button>
                  </Link>
              </Stack>
          )}
        </Box>
        <Center py={8} m={4}>
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
            <List spacing={1}>

            <Text
              textAlign={"center"}
              fontSize={"lg"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
              >
              Suscription: {user.plan}
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"lg"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
              >
              Period Start: {startDate.toLocaleString()}
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"lg"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
              >
              Period End: {lastDate.toLocaleString()}
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"lg"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
              >
              Total Paid: ${total}
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"lg"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
              >
              <a href={user.subInfo && user.subInfo[0].ticket} target="_blank">
                Ticket
              <ExternalLinkIcon  marginLeft={1} marginBottom={1}/>
              </a>
            </Text>
            
            
            </List>

            <Stack mt={8} direction={"row"} spacing={4}>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                onClick={(e) => editProfile(e)}
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
            {errors.img && <Text color="red.500">{errors.img}</Text>}
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
            {errors.name && <Text color="red.500">{errors.name}</Text>}
                <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                onClick={(e) => cancelButton(e)}
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
                onClick={(e) => updateProfile(e)}
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
      <Footer  />
    </>
  );
}
