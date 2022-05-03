import SortByName from "../sorts/sortByName";
import SortByScore from "../sorts/sortByScore";
import Filter_topic from "../filter/Filter_topic";
import { Box, Flex, Button } from "@chakra-ui/react";
import Filter_language from "../filter/Filter_language";
import Filter_athors from "../../components/filter/filter_athors";


const SideBar = () => {
  return (
    <>

      <Flex flexDir={"column"} alignContent={"center"} alignItems="center">
        <Box m="3"></Box>
        <Box m="3" mt="0">
          <Filter_topic />
        </Box>
        <Box m="3">
          <Filter_language />
        </Box>
        <Box m="3">

          <Filter_athors />
        </Box>

        <Box m="3">
          <SortByName />
        </Box>
        <Box m="3">
          <SortByScore />
        </Box>
      </Flex>
    </>
  );
};
export default SideBar;
