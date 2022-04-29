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
    <div className={s.conteiner}>
   
        <Select onChange={e => handleSortByName(e)} bg={"green.200"}
          _hover={{
            background: "green.300",
          }}
          color='black'
          
          >
          <option value="selected" hidden >Alphabetic</option>
          <option value="Asc">A - Z</option>
          <option value="Desc">Z - A</option>
        </Select>
        
    </div>
  );
};
export default SortByName;