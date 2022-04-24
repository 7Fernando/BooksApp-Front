import React, { useEffect } from "react";
import { Box, Stack, Image, Button, Center, Spinner} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { getBooks } from "../../redux/actions/books";
import { ChevronUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { postUser } from "../../redux/actions/user";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

import {addFavorites , getAllFavorites} from '../../redux/actions/favorites'




const BooksCard = () => {
  const dispatch = useDispatch();

  const { user, getAccessTokenSilently, isLoading } = useAuth0();

  const books = useSelector((state) => state.books.allBooks);
  const searchBooks = useSelector((state) => state.books.searchBook);
  const mailUser =  window.localStorage.getItem('user');


  const newUser = {
    mail: user?.email,
    name: user?.nickname,
    picture: user?.picture 
  }


  useEffect(() => {



    window.localStorage.setItem("user",newUser.mail)
    getAccessTokenSilently().then(r=>dispatch(getBooks(r)));
    ;
    if (isLoading === false) {
      dispatch(postUser(newUser));
    }
  }, [isLoading]);

  

  const addFavorite = (bookId) => {

   dispatch(addFavorites({userId:mailUser,bookId: bookId }))
   alert('Book added successfully')
      
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

                  <Button
                      rightIcon={<ArrowDownIcon size="sm" />}
                      colorScheme="red"
                      color={"green.400"}
                      _hover={{
                        color: "green.200",
                      }}
                      variant="outline"
                      size="sm"
                      onClick={()=> addFavorite(book.id)}

                    >
                      ADD
                    </Button>

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