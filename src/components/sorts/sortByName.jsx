import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, sortBooksByName, sortBooksByScore } from "../../redux/actions/books";
import { Box, Select } from "@chakra-ui/react";

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
    <Box>
        <Select onChange={e => handleSortByName(e)} bg={"green.200"} size='sm' width={"10rem"}>
          <option value="selected" hidden >Alphabetic</option>
          <option value="Asc">A - Z</option>
          <option value="Desc">Z - A</option>
        </Select>
    </Box>
  );
};
export default SortByName;