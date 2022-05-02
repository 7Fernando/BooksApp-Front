import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import userSin from "../../assets/images/userSin.png";
import { getBooks } from "../../redux/actions/books";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserByMail } from "../../redux/actions/user";
import Search from "../searchbar/search";
  
  export default function NavBar() {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user.user);
  const { logout, user, getAccessTokenSilently } = useAuth0();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleLogout = () => {
    window.localStorage.removeItem("user");
    logout();
    window.localStorage.removeItem("token");
    getAccessTokenSilently().then((r) =>
      window.localStorage.setItem("token", r)
    );
  };
  const userMail = window.localStorage.getItem("user");
  useEffect(() => {
    dispatch(getUserByMail(userMail));
  }, []);

  return (
    <>

      <Box bg="black" px={10} height="95px">
        <Flex h={"95px"} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/home">
            <Text
              color="green.300"
              size={"lg"}
              fontSize="30px"
              fontWeight={"bold"}
            >

              BOOKFLIX
            </Text>
          </Link>


          <Search/>


          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={2} >
              <Button
                onClick={toggleColorMode}
                size={"lg"}
                color="green.300"
                bg="transparent"
                _hover={{bg:"transparent"}}
                mt="5%"
                
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"lg"}
                    src={usuario ? usuario?.picture : userSin}
                  />
                </MenuButton>
                <MenuList alignItems={"center"} position="relative" zIndex={3}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={usuario ? usuario?.picture : userSin}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Welcome : {usuario ? usuario.name : " "}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Link to="/profile">
                    <MenuItem>My Profile Panel</MenuItem>
                  </Link>
                  <Link to="/favorites">
                    <MenuItem>My Favorites</MenuItem>
                  </Link>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
