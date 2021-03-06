import {
  Box,
  Button,
  Center,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FaCheckCircle } from "react-icons/fa";
import { SiHomeassistant } from "react-icons/si";

const PriceWrapper = ({ children }) => {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
};

const Plans = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Box py={12}>
        <Center mb="5">
          <Button
            mt="6"
            colorScheme={"green"}
            variant="solid"
            leftIcon={<SiHomeassistant />}
            onClick={logout}
          >
            I already have an account!
          </Button>
        </Center>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Plans that fit your need
          </Heading>
          <Text fontSize="lg" color={"gray.500"}>
            Start today to enjoy the wonderful world of bookflix!
          </Text>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Growth
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  15
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Access to all books
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Read online
                </ListItem>
               
              </List>
              <Box w="80%" pt={7}>
                <Link to="/checkout/2">
                  <Button w="full" colorScheme="green" variant="outline">
                    Start trial
                  </Button>
                </Link>
              </Box>
            </VStack>
          </PriceWrapper>

          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue("green.300", "green.700")}
                  px={3}
                  py={1}
                  color={useColorModeValue("white")}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  Most Popular
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  Lover
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    25
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Access to all books
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Read online
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Free downloads
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Link to="/checkout/3">
                    <Button w="full" colorScheme="green">
                      Start trial
                    </Button>
                  </Link>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
        
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default Plans;
