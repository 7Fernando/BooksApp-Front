import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Text, useToast } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { postUser } from "../../redux/actions/user";
import { getBooks } from "../../redux/actions/books";
import { useSelector, useDispatch } from "react-redux";
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { addFavorites } from "../../redux/actions/favorites";
import {
  ChevronUpIcon,
  ArrowDownIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Image,
  Button,
  Center,
  Spinner,
  IconButton,
} from "@chakra-ui/react";


const BooksCard = () => {

  const toast = useToast();
  const dispatch = useDispatch();
  const mailUser = window.localStorage.getItem("user");
  const books = useSelector((state) => state.books.allBooks);
  const { user, getAccessTokenSilently, isLoading } = useAuth0();
  const searchBooks = useSelector((state) => state.books.searchBook);
 
  const newUser = {
    mail: user?.email,
    name: user?.nickname,
    picture: user?.picture,
  };

  useEffect(() => {

    const f = async () => {
      const token = await getAccessTokenSilently();
      localStorage.setItem("token", token);
      localStorage.setItem("user", newUser.mail);
      const email2 = localStorage.getItem("user");
      dispatch(getBooks(token, email2));
    };
    f();

    if (isLoading === false) {
      dispatch(postUser(newUser));
    }
  }, [isLoading]);

  const addFavorite = async function (bookId) {
    let string = await dispatch(addFavorites({ userId: mailUser, bookId: bookId }))
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
      })
    }
  };

  if (books.length === 0 || undefined) {
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
      <Center py={12} flexWrap={"wrap"}>
        {searchBooks?.[0] === "No books found" ? (
          <Text fontSize="5xl" fontWeight="bold">
            No books found :(
          </Text>
        ) : (
          books?.length &&
          books?.map((book) => (
            <Box
              key={book.id}
              role={"group"}
              pb={6}
              pt={6}
              maxW={"300px"}
              w={"full"}
              bg={"gray.800"}
              boxShadow="md"
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
              m={"5"}
              transitionProperty={"transform"}
              transitionDuration={"0.8s"}
              _hover={{
                transform: "translateY(-1%)",
              }}
            >
              <Link to={`/details/${book.id}`}>
                <Box rounded={"lg"} mt={-12} pos={"relative"} height={"310px"}>
                  <Center>
                    <Image height={300} src={book.cover} />
                  </Center>
                </Box>
              </Link>
              <Center>
                <Stack direction="row" spacing={2} m={5}>
                  <Link to={`/read/${book.id}`}>
                    <Button
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

                  <a href={book.epub} download={book.title}>
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


                  <IconButton
                    bg="gray.800"
                    color="green.500"
                    borderRadius="50"
                    _hover={{
                      color: "green.200",
                    }}
                    size="sm"
                    onClick={() => addFavorite(book.id)}
                    icon={<BsFillBookmarkHeartFill size="sm" />}
                  />

                </Stack>
              </Center>
            </Box>
          ))
        )}
      </Center>
    </>
  );
};
export default BooksCard;
