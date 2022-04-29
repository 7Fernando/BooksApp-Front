import React, { useEffect } from "react";
import { Box, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, sortBooksByScore } from "../../redux/actions/books";

const SortByScore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  function handleSortByScore(e) {
    e.preventDefault();
    dispatch(sortBooksByScore(e.target.value));
  }

  return (
    <Box width={"216px"}  boxShadow="xl">
      <Box mb="3">Sort by popularity</Box>
      <Select
        onChange={(e) => handleSortByScore(e)}
        bg={"green.200"}
        size="md"
        color="gray.600"
      >
        <option value="selected" hidden>
          Popularity
        </option>
        <option value="Asc">Most popular</option>
        <option value="Desc">Less popular</option>
      </Select>
    </Box>
  );
};
export default SortByScore;
