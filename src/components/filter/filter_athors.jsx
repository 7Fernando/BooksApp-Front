import { Box, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import s from "./Filter_athors.module.css";
import { getBooks } from "../../redux/actions/books";
import { useDispatch, useSelector } from "react-redux";
import { getAuthors, getAuthorsBook } from "../../redux/actions/authors";

export default function Filter_athors() {
  const dispatch = useDispatch();
  const allAthors = useSelector((state) => state.authors.allAthors);

  useEffect(() => {
    dispatch(getAuthors());
  }, []);

  const handleFilterAhutors = (e) => {
    if (!e.target.value) {
      dispatch(getBooks());
    }
    dispatch(getAuthorsBook(e.target.value));
  };

  return (
    <div className={s.conteiner}>
      <label className={s.label}>
        <Box mb="3">Filter by author</Box>
        <Input
          bg={"green.200"}
          boxShadow="xl"
          color="gray.600"
          _hover={{
            background: "green.300",
            opacity: 1,
          }}
          list="author"
          name="author"
          placeholder="Author"
          _placeholder={{ opacity: 1, color: "gray.600" }}
          onChange={(e) => handleFilterAhutors(e)}
        />
        <datalist id="author">
          {allAthors &&
            allAthors.map((author) => {
              return (
                <option
                  className={s.option}
                  value={author.name}
                  key={author.id}
                ></option>
              );
            })}
        </datalist>
      </label>
    </div>
  );
}
