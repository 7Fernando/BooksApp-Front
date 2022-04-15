import { React } from 'react';
import userSin from '../../assets/images/userSin.png'
import {Link} from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg='black' px={3} height='150px' >
        <Flex h={40} alignItems={'center'} justifyContent={'space-between'}>
          <Link to='/home'>
            <Box color='green.300'size={'lg'} fontSize='30px'>BOOKFLIX</Box>
          </Link>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={20} >
              <Button onClick={toggleColorMode} size={'lg'} color='green.300'>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'lg'}
                    src={userSin}
                  />
                </MenuButton>
                <MenuList alignItems={'center'} position="relative"  zIndex={3}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={userSin}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Bienvenido : Username</p> 
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>My Profile</MenuItem>
                  <MenuItem>Favorites</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}