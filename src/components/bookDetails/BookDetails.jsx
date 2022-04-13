import React from "react";
import { useSelector } from "react-redux";
import {
  Spinner,
  Avatar,
  Tag,
  TagLabel,
  Center,
  Image,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
} from "@chakra-ui/react";
import iconProfile from "../../assets/images/Circle-icons-profile.svg";
import { ViewIcon } from "@chakra-ui/icons";
import englandFlag from "../../assets/images/england.svg";
import spainFlag from "../../assets/images/spain.svg";
import like from "../../assets/images/like.png";
import dislike from "../../assets/images/dislike2.png";
const BookDetails = () => {
  const bookDetails = useSelector((state) => state.books.bookDetails);
  console.log(11, bookDetails);
  if (Object.keys(bookDetails).length === 0) {
    return (
      <Center py={12}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#553C9A"
          size="xl"
        />
      </Center>
    );
  }
  return (
    <>
      <Center flexDir={"column"} flexWrap={"wrap"}>
        <Center py={6} >
          <Image src={bookDetails.cover} mb={2}></Image>
        </Center>
        <Center boxShadow='2xl' p='6' rounded='md' bg='white'>
        <TableContainer >
          <Table
            variant="striped"
            colorScheme="green"
            // width={5}
            // border={"solid"}
            // borderColor={"red"}
            // borderRadius="200"
           
          >
            <Thead>
              <Tr  ml={"5"}>
                <Th>Author </Th>
                <Th>Title</Th>
                <Th>Language</Th>
                <Th>Views</Th>
                <Th>Likes</Th>
                <Th>Dislikes</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Tag size="lg" colorScheme="green" borderRadius="full">
                    <Avatar
                      src={iconProfile}
                      size="xs"
                      name="Segun Adebayo"
                      ml={-11}
                      mr={2}
                    />
                    <TagLabel>{bookDetails.author[0].name}</TagLabel>
                  </Tag>
                </Td>
                <Td>
                  <Tag size="lg" colorScheme="green" borderRadius="full">
                    <TagLabel>{bookDetails.title}</TagLabel>
                  </Tag>
                </Td>
                <Td>
                  <Tag size="lg" colorScheme="green" borderRadius="full" mb={2}>
                    <Avatar
                      src={
                        bookDetails.language[0].name === "en"
                          ? englandFlag
                          : spainFlag
                      }
                      size="xs"
                      name="Segun Adebayo"
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>
                      {bookDetails.language[0].name.toUpperCase()}
                    </TagLabel>
                  </Tag>
                </Td>
                <Td>
                  <Tag size="lg" colorScheme="green" borderRadius="full" mb={2}>
                    <ViewIcon size="xs" name="Segun Adebayo" ml={-1} mr={2} />
                    <TagLabel>{bookDetails.views}</TagLabel>
                  </Tag>
                </Td>
                <Td>
                  <Tag size="lg" colorScheme="green">
                    <Avatar
                      src={like}
                      size="xs"
                      bg={"green.470"}
                      ml={-1}
                      mr={2}
                    ></Avatar>
                    <TagLabel>{bookDetails.like} </TagLabel>
                  </Tag>
                </Td>
                <Td>
                  <Tag size="lg" colorScheme="green" borderRadius="full" mb={2}>
                  <Avatar
                      src={dislike}
                      size="xs"
                      bg={"green.470"}
                      ml={-1}
                      mr={2}
                    ></Avatar>
                    <TagLabel>{bookDetails.dislike}</TagLabel>
                  </Tag>
                </Td>
              </Tr>
              {/* <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td>30.48</Td>
              </Tr> */}
            </Tbody>
          </Table>
        </TableContainer>
        </Center>
        <Center boxShadow='2xl' p='6' rounded='md' bg='white' m={"5"}>
          <TableContainer>
            <Table
              variant="striped"
              colorScheme="green"
              width={5}
              // border={"solid"}
              // borderColor={"red"}
              // borderRadius="2"
              
            >
              <Thead>
                <Tr>
                  <Th>Topics</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td flexDir={"column"}>
                    {bookDetails.topic.map((e) => (
                      <Tag
                        size="lg"
                        colorScheme="red"
                        borderRadius="full"
                        m={2}
                      >
                        <TagLabel colorScheme="yellow">{e.name + " "}</TagLabel>
                      </Tag>
                    ))}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
      </Center>
    </>
  );
};
export default BookDetails;
