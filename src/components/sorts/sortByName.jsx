import React, { useEffect } from "react";
import { Box, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, sortBooksByName, sortBooksByScore } from "../../redux/actions/books";
import s from '../filter/Filter_athors.module.css'



const SortByName = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  function handleSortByName(e) {
    e.preventDefault();
    dispatch(sortBooksByName(e.target.value));
  }

  return (

    <Box  width={"216px"}  boxShadow="xl">
      <Box mb="3">Sort by name</Box>
      <Select
        onChange={(e) => handleSortByName(e)}
        bg={"green.200"}
        size="md"
        color="gray.600"
      >
        <option value="selected" hidden>
          Alphabetic
        </option>
        <option value="Asc">A - Z</option>
        <option value="Desc">Z - A</option>
      </Select>
    </Box>

  );
};
export default SortByName;
