import {
  Button,
  Box,
  Center,
  IconButton,
  Spinner,
  Avatar,
  Tag,
  TagLabel,
  Image,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import NavBar from "../navBar/navBar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import like from "../../assets/images/like.png";
import spainFlag from "../../assets/images/spain.svg";
import dislike from "../../assets/images/dislike2.png";
import { useDispatch, useSelector } from "react-redux";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import englandFlag from "../../assets/images/england.svg";
import { addFavorites } from "../../redux/actions/favorites";
import iconProfile from "../../assets/images/Circle-icons-profile.svg";
import {
  getBookDetails,
  clearState,
  sendLike,
  sendDislike,
} from "../../redux/actions/books";
import Carousel from "../carousel";
import { SiHomeassistant } from "react-icons/si";
import { ViewIcon, ArrowDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const BookDetails = () => {
  const toast = useToast();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [prueba, setPrueba] = useState(0);
  const [disable, setDisable] = useState(false);
  const mailUser = window.localStorage.getItem("user");
  const userPlan = useSelector((state) => state.user.user.plan);
  let bookDetails = useSelector((state) => state.books.bookDetails);

  useEffect(() => {
    return () => dispatch(clearState());
  }, []);

  useEffect(() => {
    dispatch(getBookDetails(id));
  }, [prueba]);

  const likes = (id) => {
    dispatch(sendLike(id));
    setPrueba(prueba + 1);
    setDisable(true);
  };

  const notlike = (id) => {
    dispatch(sendDislike(id));
    setPrueba(prueba + 1);
    setDisable(true);
  };

  const addFavorite = async function (bookId) {
    let string = await dispatch(
      addFavorites({ userId: mailUser, bookId: bookId })
    );
    if (string.payload === "favorite already exists") {
      toast({
        title: "Already in favorite",
        description: "You can find your favorites in your profile",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Added to favorites",
        description: "You can find it in your favorites",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
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
      <div>
        <NavBar />
        <Center mt="25">
          {" "}
          <Link to="/home">
            <Button
              mr="5"
              colorScheme={"green"}
              variant="solid"
              size="sm"
              leftIcon={<SiHomeassistant />}
              w="100px"
            >
              Home
            </Button>
          </Link>
        </Center>
        <Center flexDir={"column"} flexWrap={"wrap"} mt="25">
          <Image src={bookDetails?.cover} mb={25} />
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
          <Box display={userPlan === "LOVER" ? "block" : "none"}>
            <a href={bookDetails.epub} download={bookDetails.title}>
              <Button
                rightIcon={<ArrowDownIcon />}
                colorScheme="red"
                color={"green.400"}
                _hover={{
                  color: "green.200",
                }}
                variant="outline"
                size="sm"
                onClick={() =>
                  toast({
                    title: "Download successfully.",
                    status: "success",
                    duration: 8000,
                    isClosable: true,
                  })
                }
              >
                Download
              </Button>
            </a>
          </Box>

          <Box display={userPlan !== "LOVER" ? "block" : "none"}>
            <Button
              rightIcon={<ArrowDownIcon />}
              colorScheme="red"
              color={"green.400"}
              _hover={{
                color: "green.200",
              }}
              variant="outline"
              size="sm"
              onClick={() =>
                toast({
                  title: `Downloads are allowed only in the LOVER plan.
                             You can change the plan in the user panel.`,
                  duration: 8000,
                  isClosable: true,
                })
              }
            >
              Download
            </Button>
          </Box>

          <IconButton
            bg="transparent"
            color="green.500"
            borderRadius="50"
            _hover={{
              color: "green.200",
            }}
            size="sm"
            onClick={() => addFavorite(bookDetails?.id)}
            icon={<BsFillBookmarkHeartFill size="30px" />}
          />
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
                      <TagLabel>
                        <Button
                          bg={"green.470"}
                          onClick={() => likes({ id: bookDetails.id })}
                          disabled={disable}
                        >
                          {" "}
                          {bookDetails?.like}
                        </Button>{" "}
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
                      <Avatar
                        src={dislike}
                        size="xs"
                        bg={"green.470"}
                        ml={-1}
                        mr={2}
                      ></Avatar>
                      <TagLabel>
                        <Button
                          bg={"green.470"}
                          disabled={disable}
                          onClick={() => notlike({ id: bookDetails.id })}
                        >
                          {" "}
                          {bookDetails?.dislike}
                        </Button>
                      </TagLabel>
                    </Tag>
                    <TagLabel>
                      <Button
                        bg={"green.470"}
                        onClick={() => notlike({ id: bookDetails.id })}
                      >
                        {" "}
                        {bookDetails?.dislike}
                      </Button>
                    </TagLabel>
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
                      <Box key={e.id}>
                        <Tag
                          size="lg"
                          colorScheme="red"
                          borderRadius="full"
                          m={2}
                        >
                          <TagLabel>{e.name + " "}</TagLabel>
                        </Tag>
                      </Box>
                    ))}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
        <Carousel bookDetails={bookDetails} title={"Suggestions for you"} />
        <Box mt="10">
          <Footer />
        </Box>
      </div>
    </>
  );
};
export default BookDetails;
