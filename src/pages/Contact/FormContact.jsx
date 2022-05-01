import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import NavBar from "../../components/navBar/navBar";

export default function FormContact() {
  const toast = useToast();
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault(e);
    emailjs
      .sendForm(
        "service_x7dun2b",
        "template_be63qb1",
        form.current,
        "SHKb26CwJjN227AuP"
      )
      .then((res) => {
        toast({
          title: `message sent`,
          status: "success",
          isClosable: true,
        });
      })
      .catch((erros) => {
        toast({
          title: `message not sent`,
          status: "error",
          isClosable: true,
        });
      });
  };

  return (
    <>
      <NavBar />
      <Container
        bg="#9DC4FB"
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
        maxHeight="100%"
      >
        <Flex>
          <Box
            bg="#1a202c"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
            _focus="true"
          >
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <Box p={4}>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <WrapItem>
                    <Box>
                      <Heading>Contact</Heading>
                      <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                        Fill up the form below to contact
                      </Text>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}
                          >
                            +54-988888888
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}
                          >
                            bookflixemail@gmail.com
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={
                              <MdLocationOn color="#1970F1" size="20px" />
                            }
                          >
                            Argentina
                          </Button>
                        </VStack>
                      </Box>
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        px={5}
                        alignItems="center"
                      >
                        <Box>
                          <a href="https://github.com/7Fernando">
                            <IconButton
                              aria-label="github"
                              variant="ghost"
                              size="lg"
                              isRound={true}
                              _hover={{ bg: "#0D74FF" }}
                              icon={<BsGithub size="28px" />}
                            />
                            <p>7Fernando</p>
                          </a>
                        </Box>
                        <Box>
                          <a href="https://github.com/luchyGigena">
                            <IconButton
                              aria-label="github"
                              variant="ghost"
                              size="lg"
                              isRound={true}
                              _hover={{ bg: "#0D74FF" }}
                              icon={<BsGithub size="28px" />}
                            />
                            <p>luchyGigena</p>
                          </a>
                        </Box>
                        <Box>
                          <a href="https://github.com/MateoDom">
                            <IconButton
                              aria-label="github"
                              variant="ghost"
                              size="lg"
                              isRound={true}
                              _hover={{ bg: "#0D74FF" }}
                              icon={<BsGithub size="28px" />}
                            />
                            <p>MateoDom</p>
                          </a>
                        </Box>
                      </HStack>
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        px={5}
                        alignItems="center"
                      >
                        <Box>
                          <a href="https://github.com/jose1up">
                            <IconButton
                              aria-label="github"
                              variant="ghost"
                              size="lg"
                              isRound={true}
                              _hover={{ bg: "#0D74FF" }}
                              icon={<BsGithub size="28px" />}
                            />
                            <p>jose1up</p>
                          </a>
                        </Box>
                        <Box>
                          <a href="https://github.com/heredialucas">
                            <IconButton
                              aria-label="github"
                              variant="ghost"
                              size="lg"
                              isRound={true}
                              _hover={{ bg: "#0D74FF" }}
                              icon={<BsGithub size="28px" />}
                            />
                            <p>heredialucas</p>
                          </a>
                        </Box>
                        <Box>
                          <a href="https://github.com/Jo5ean">
                            <IconButton
                              aria-label="github"
                              variant="ghost"
                              size="lg"
                              isRound={true}
                              _hover={{ bg: "#0D74FF" }}
                              icon={<BsGithub size="28px" />}
                            />
                            <p>Jo5ean</p>
                          </a>
                        </Box>
                        <Box>
                          <a href="https://github.com/turrisi">
                            <IconButton
                              aria-label="github"
                              variant="ghost"
                              size="lg"
                              isRound={true}
                              _hover={{ bg: "#0D74FF" }}
                              icon={<BsGithub size="28px" />}
                            />
                            <p>turrisi</p>
                          </a>
                        </Box>
                      </HStack>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box bg="white" borderRadius="lg">
                      <Box m={8} color="#0B0E3F">
                        <VStack spacing={5}>
                          <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                              />
                              <Input
                                type="name"
                                name="name"
                                size="md"
                                {...register("name", { required: true })}
                              />
                              <span>
                                {errors.name?.type === "required" &&
                                  " (*)name is required"}
                              </span>
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.800" />}
                              />
                              <Input
                                type="email"
                                size="md"
                                {...register("email", { required: true })}
                              />
                              <span>
                                {errors.email?.type === "required" &&
                                  " (*)email is required"}
                              </span>
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              height="230px"
                              borderColor="green.200"
                              _hover={{
                                borderRadius: "green.200",
                              }}
                              placeholder="message"
                              {...register("message", { required: true })}
                            />
                            <p>
                              {errors.message?.type === "required" &&
                                " (*)message is required"}
                            </p>
                          </FormControl>
                          <FormControl id="name" float="right">
                            <Button
                              type="submit"
                              variant="solid"
                              colorScheme="red"
                              bg={"green.500"}
                              _hover={{
                                background: "green.400",
                              }}
                            >
                              Send Message
                            </Button>
                          </FormControl>
                        </VStack>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </form>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
