import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, sortBooksByScore } from "../../redux/actions/books";
import { Box, Select } from "@chakra-ui/react";

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
    <Box>
        <Select onChange={e => handleSortByScore(e)}bg={"green.200"} size='sm' width={"10rem"} >
          <option value="selected" hidden>Popularity</option>
          <option value="Asc">Most popular</option>
          <option value="Desc">Less popular</option>
        </Select>
    </Box>
  );
};
export default SortByScore;