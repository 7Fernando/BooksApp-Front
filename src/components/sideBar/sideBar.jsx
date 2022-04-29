import { Link } from "react-router-dom";
import SortByName from "../sorts/sortByName";
import SortByScore from "../sorts/sortByScore";
import Filter_topic from "../filter/Filter_topic";
import { Box, Flex, Button } from "@chakra-ui/react";
import Filter_language from "../filter/Filter_language";
import Filter_athors from "../../components/filter/filter_athors";
import Search from "../searchbar/search";


const SideBar = () => {
  return (
    <>
      <Flex flexDir={"column"}>
        <Box m="4">
          <Search />
        </Box>
        <Box m="4">
          <Filter_topic />
        </Box>
        <Box m="4">
          <Filter_language />
        </Box>
        <Box m="4">
          <Filter_athors />
        </Box>

        <Box m="5">
          <SortByName />
        </Box>
        <Box m="5">
          <SortByScore />
        </Box>
      </Flex>
    </>
  );
};
export default SideBar;
