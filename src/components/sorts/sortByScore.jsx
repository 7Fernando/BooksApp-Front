import React, { useEffect } from "react";
import { Box, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, sortBooksByScore } from "../../redux/actions/books";
import s from '../filter/Filter_athors.module.css'


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
    <div className={s.conteiner}>
   
        <Select onChange={e => handleSortByScore(e)} bg={"green.200"}
          _hover={{
            background: "green.300",
          }}
          color='black'>
          <option value="selected" hidden bg={"white"}>Popularity</option>
          <option value="Asc">Most popular</option>
          <option value="Desc">Less popular</option>
        </Select>
   
    </div>
  );
};
export default SortByScore;