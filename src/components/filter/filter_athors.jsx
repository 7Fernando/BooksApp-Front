import { Input } from "@chakra-ui/react";
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
    // if (e.target.value !== " ") {
    //   dispatch(getBooks());
    // }
    dispatch(getAuthorsBook(e.target.value));
  };

  return (
    <div className={s.conteiner}>
      <label className={s.label}>
        Filter by author
        <Input
          bg={"green.200"}
          _hover={{
            background: "green.300",
          }}
         
          list="author"
          name="author"
          placeholder ="Author"
          _placeholder={{ opacity: 1, color: 'black' }}
          onChange={(e) => handleFilterAhutors(e)}
        />
        <datalist id="author" className={s.dataList}>
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
