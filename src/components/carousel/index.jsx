import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Center,
  Stack,
  Image,
  Button,
  Text,
  color,
} from "@chakra-ui/react";
import { ChevronUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { set } from "lodash";

// Settings for the slider
var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Carousel({ bookDetails, title }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const allTopics = useSelector((state) => state.topic.allTopics);
  const [slider, setSlider] = useState(null);
  let books = useSelector((state) => state.books.bkBooks);
  const searching = useSelector((state) => state.books.allBooks);
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes

  if (bookDetails?.topic) {
    allTopics.forEach((topic) => {
      if (topic?.name === bookDetails?.topic[0]?.name) {
        books = topic.book;
      }
    });
  }

  books.sort(function (a, b) {
    if (a.views < b.views) {
      return 1;
    }
    if (a.views > b.views) {
      return -1;
    }
    return 0;
  });

  return (
    <>
      {searching.length < 63 ? null : (
        <Box
          position={"relative"}
          height={"450px"}
          width={"full"}
          overflow={"hidden"}
        >
          <Text
            m={5}
            colorScheme={"gray.800"}
            fontWeight={"semibold"}
            color={"green.400"}
            fontSize="2xl"
          >
            {title ? `${title}` : "Popular"} in BookFlix:
          </Text>
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {books.slice(0, 8).map((e) => (
              <Box
                key={e.id}
                pb={6}
                pt={6}
                maxW={"250px"}
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
                <Link to={`/details/${e.id}`}>
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"250px"}
                  >
                    <Center>
                      <Image height={250} src={e.cover} />
                    </Center>
                  </Box>
                </Link>
                <Center>
                  <Stack direction="row" spacing={1} marginTop={5}>
                    <Link to="/read">
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
                    <a href={e.epub} download={e.title}>
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
                  </Stack>
                </Center>
              </Box>
            ))}
          </Slider>
        </Box>
      )}
    </>
  );
}
