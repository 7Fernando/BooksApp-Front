import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
 import {Link} from "react-router-dom"
  import { ReactNode } from 'react';
  
  const Logo = (props) => {
    return (
      <Text
        bg={useColorModeValue( 'whiteAlpha')}
        height={25}
        viewBox="0 0 120 28"
        >
            Bookflix
      </Text>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.600')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
 
        position={'relative'}
        bg={useColorModeValue('gray.900', 'gray.900')}
         borderColor={useColorModeValue('green.200', 'black.700')}
        color={useColorModeValue( 'green.400')}>
        <Container
        
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo />
          <Stack direction={'row'} spacing={6}>
          <Link to={"/about"}>About us</Link>
            <Link to={"/contact"}>Contact</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('green.200', 'green.700')}>
          <Container
            as={Stack}
            maxW={'9xl'}
            py={4}
            direction={{ base: 'center', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2022 Bookflix. All rights reserved</Text>

          </Container>
        </Box>
      </Box>
    );
  }