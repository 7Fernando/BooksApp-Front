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
  useToast,
} from "@chakra-ui/react";
import {
  getAllFavorites,
  removeFavorites,
} from "../../redux/actions/favorites";
import NavBar from "../navBar/navBar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UpdateSub from "../checkout/updateSub";
import { MdCheckCircle } from "react-icons/md";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { getUserByMail, modifyUser } from "../../redux/actions/user";
import CancelSub from "../checkout/cancelSub";


export default function SocialProfileSimple() {
  const toast = useToast();
  const dispatch = useDispatch();

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [res, setRes] = useState(false);
  const [prueba, setPrueba] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const user = useSelector((state) => state.user.user);
  const favorites = useSelector((state) => state.favorites.allfavorites);
  const [errors, setErrors] = useState({
    name: "",
    img: "",
  });


  const usuario = window.localStorage.getItem("user");
  useEffect(() => {
    dispatch(getAllFavorites(usuario));
    dispatch(getUserByMail(usuario));
  }, [prueba, isShow, res]);

  function editProfile(e) {
    e.preventDefault();
    setImg(user.picture);
    setName(user.name);
    setIsShow(true);
  }

  const startDate = new Date(
    user.subInfo && user.subInfo[ user.subInfo.length-1].currentStart * 1000
  );
  const lastDate = new Date(user.subInfo && user.subInfo[user.subInfo.length-1].currentEnd * 1000);
  const total =
    (user.subInfo && user.subInfo[user.subInfo.length - 1].total) / 100;
  function validate() {
    let errors = {};
    let uname = /^[a-zA-Z].*[\s\.]*$/i;
    if (!uname.test(name)) {
      errors.name =
        "Nombre no valido";
    }
   
    if (name.length > 30) {
      errors.name = "El nombre debe contener menos de 30 caracteres";
    }
    if (!img) errors.img = "La imagen es requerida";

    let url = /https?:\/\//g;

    if (!url.test(img)) {
      errors.img = "La imagen debe ser una url valida";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function updateProfile(e) {
    e.preventDefault();
    if (validate()) {
      dispatch(modifyUser({ id: user.id, name: name, picture: img }));
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
      <Flex justifyContent={"space-evenly"} mb="50">
        <Box
          maxW={"350px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"} margin={3} mb="5">
            My Favorites:
          </Heading>
          {favorites?.length > 0 ? (
            <List spacing={3}>
              {favorites.map((b) => {
                return (
                  <ListItem
                    key={b.id}
                    width={"300px"}
                    mb="5"
                    h="50px"
                    overflow="hidden"
                    boxShadow={"2xl"}
                    borderRadius={"3xl"}
                  >
                    <Box display={"flex"} justifyContent="space-around">
                      <Box w="20px" mt="9px" ml="2">
                        <ListIcon as={MdCheckCircle} color="green.500" />
                      </Box>
                      <Box w="200px" mt="10px" h="24px" overflow={"hidden"}>
                        <Link to={`/details/${b["book"].id}`}>
                          {b["book"].title}
                        </Link>
                      </Box>
                      <Box w="25px" mt="8px" mr="3">
                        <Button
                          m={1}
                          size={"xs"}
                          onClick={() => {
                            dispatch(removeFavorites(usuario, b["book"].id));
                            setPrueba(prueba + 1);
                          }}
                        >
                          <DeleteIcon color="red.700" />
                        </Button>
                      </Box>
                    </Box>
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <Stack>
              <h2>No favorites</h2>
              <Link to={"/home"}>
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
        <Box>
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
            <List spacing={3}>
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
                <a
                  href={user.subInfo && user.subInfo[user.subInfo.length - 1].ticket}
                  target="_blank"
                >
                  Last payment ticket
                  <ExternalLinkIcon marginLeft={1} marginBottom={1} />
                </a>
              </Text>
              <Text
                textAlign={"center"}
                fontSize={"lg"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Total for next month : ${total}
              </Text>
            </List>

            <Stack mt={8} direction={"row"} spacing={4}>
              <Button
                flex={1}
                fontSize={"sm"}
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

            <Box>
              <UpdateSub userPlan={user.plan} toast={toast} setRes={setRes} />
            </Box>
            <Box>
            <CancelSub  toast={toast} setRes={setRes}></CancelSub>
            </Box>
          </Box>
        </Box>
        <Box display={isShow ? "block" : "none"}>
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
              <FormLabel textAlign={"center"} htmlFor="img">
                Change Image
              </FormLabel>
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
              <FormLabel m={2} textAlign={"center"} htmlFor="name">
                Change your Name
              </FormLabel>
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
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
