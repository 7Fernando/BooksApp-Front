import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, getBookDetails } from "../../redux/actions/books";
import { Box, Center, Stack, Image, Button, Spinner } from "@chakra-ui/react";

import { ChevronUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import Filter_athors from "../../components/filter/filter_athors";

import { ChevronUpIcon, ArrowDownIcon, StarIcon } from "@chakra-ui/icons";


const BooksCard = () => {
  const books = useSelector((state) => state.books.allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const getDetails =(id)=>{
    dispatch(getBookDetails(id))
  }
  if (books.length === 0) {
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
      <Filter_athors />
      <Center py={12} flexWrap={"wrap"}>
        {books?.map((e) => (
          <Box
            key={e.id}
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
            <Link to="/details" onClick={()=>getDetails(e.id)}>
              <Box rounded={"lg"} mt={-12} pos={"relative"} height={"310px"}>
                <Center>
                  <Image
                    height={300}
                    src={e.cover}
                  />
                </Center>
              </Box>
            </Link>
            <Center>
              <Stack direction="row" spacing={2} m={5}>
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
              </Stack>
            </Center>
          </Box>
        ))}
      </Center>
    </>
  );
};
export default BooksCard;
