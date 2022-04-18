import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import SortByName from "../sorts/sortByName";
import SortByScore from "../sorts/sortByScore";
import Filter_topic from "../filter/Filter_topic";
import Filter_language from "../filter/Filter_language";
import Filter_athors from "../../components/filter/filter_athors";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <Flex flexDir={"column"} > 
        <Box m="5">
          <Link to="/plans">
            <Button variant={"outline"}>Checkout</Button>
          </Link>
        </Box>
        <Box m="5">
          <Filter_topic />
        </Box>
        <Box m="5">
          <Filter_language />
        </Box>
        <Box m="5">
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
