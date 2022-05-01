import {
  Button,
  Spinner,
  Avatar,
  Tag,
  TagLabel,
  Center,
  Image,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NavBar from "../navBar/navBar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import like from "../../assets/images/like.png";
import spainFlag from "../../assets/images/spain.svg";
import dislike from "../../assets/images/dislike2.png";
import { useDispatch, useSelector } from "react-redux";
import englandFlag from "../../assets/images/england.svg";
import iconProfile from "../../assets/images/Circle-icons-profile.svg";
import { getBookDetails, clearState , sendLike, sendDislike} from "../../redux/actions/books";
import { ViewIcon, ArrowDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Carousel from "../carousel";







const BookDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [prueba, setPrueba] = useState(0);
  useEffect(() => {
    return () => dispatch(clearState());
  }, []);

  useEffect(() => {
    dispatch(getBookDetails(id));
  }, [prueba]);

 let bookDetails = useSelector((state) => state.books.bookDetails);
 

 const likes =(id) =>{
   dispatch(sendLike(id))
   setPrueba(prueba +1)
 }


 const notlike = (id) => {
  dispatch(sendDislike(id));
  setPrueba(prueba + 1)
};


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
      <NavBar />

      <Center flexDir={"column"} flexWrap={"wrap"}>
        <Center py={6}>
          <Image src={bookDetails?.cover} mb={2} />
        </Center>
        <Center mb="5">
          <Link to={`/read/${bookDetails?.id}`}>
            <Button
              mr="5"
              colorScheme="red"
              bg={"green.500"}
              size="sm"
              leftIcon={<ChevronUpIcon size="sm" />}
              _hover={{
                background: "green.400",
              }}
            >
              Read Online
            </Button>
          </Link>
          <a href={bookDetails?.epub} download={bookDetails?.title}>
            <Button
              rightIcon={<ArrowDownIcon size="sm" />}
              colorScheme="red"
              color={"green.400"}
              _hover={{
                color: "green.200",
              }}
              variant="outline"
              size="sm"
            >
              Download
            </Button>
          </a>
        </Center>

        <Center boxShadow="2xl" p="6" rounded="md" bg="white">
          <TableContainer>
            <Table variant="striped" colorScheme="green">
              <Thead>
                <Tr ml={"5"}>
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
                      <TagLabel>{bookDetails?.author[0]?.name}</TagLabel>
                    </Tag>
                  </Td>
                  <Td>
                    <Tag size="lg" colorScheme="green" borderRadius="full">
                      <TagLabel>{bookDetails?.title}</TagLabel>
                    </Tag>
                  </Td>
                  <Td>
                    <Tag
                      size="lg"
                      colorScheme="green"
                      borderRadius="full"
                      mb={2}
                    >
                      <Avatar
                        src={
                          bookDetails.language[0]?.name === "en"
                            ? englandFlag
                            : spainFlag
                        }
                        size="xs"
                        name="Segun Adebayo"
                        ml={-1}
                        mr={2}
                      />
                      <TagLabel>
                        {bookDetails?.language[0]?.name.toUpperCase()}
                      </TagLabel>
                    </Tag>
                  </Td>
                  <Td>
                    <Tag
                      size="lg"
                      colorScheme="green"
                      borderRadius="full"
                      mb={2}
                    >
                      <ViewIcon size="xs" name="Segun Adebayo" ml={-1} mr={2} />
                      <TagLabel>{bookDetails?.views}</TagLabel>
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
                      <TagLabel ><Button
                      bg={"green.470"}
                       onClick={()=>likes({id: bookDetails.id})}
                      > {bookDetails?.like}</Button> </TagLabel>
                    </Tag>
                  </Td>
                  <Td>
                    <Tag
                      size="lg"
                      colorScheme="green"
                      borderRadius="full"
                      mb={2}
                    >
                      <Avatar
                        src={dislike}
                        size="xs"
                        bg={"green.470"}
                        ml={-1}
                        mr={2}
                      ></Avatar>
                      
                      <TagLabel ><Button bg={"green.470"}
                      onClick={()=>notlike({id: bookDetails.id})}> {bookDetails?.dislike}</Button></TagLabel>
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
        <Center boxShadow="2xl" p="6" rounded="md" bg="white" m={"5"}>
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
      <Carousel bookDetails={bookDetails} title={"Recomendados"} />
      <Footer />
    </>
  );
};
export default BookDetails;
