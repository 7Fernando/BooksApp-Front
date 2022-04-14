import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthors, getAuthorsBook } from "../../redux/actions/authors";
import { getBooks } from "../../redux/actions/books";
import s from "./Filter_athors.module.css";
import { Input } from "@chakra-ui/react";

export default function Filter_athors() {
  const dispatch = useDispatch();
  const allAthors = useSelector((state) => state.authors.allAthors);
<<<<<<< HEAD

=======
>>>>>>> d4628cc5bfb415041d059fa2a93ed794b245f3c5
  useEffect(() => {
    dispatch(getAuthors());
  }, []);
  const handleFilterAhutors = (e) => {
    if (e.target.value !== " ") {
      dispatch(getBooks());
    }
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
          placeholder="Author"
          onChange={(e) => handleFilterAhutors(e)}
        />
        <datalist id="author" className={s.dataList}>
          {allAthors &&
            allAthors.map((author) => {
<<<<<<< HEAD
              return <option value={author.name} key={author.id}></option>;
=======
              return (
                <option
                  className={s.option}
                  value={author.name}
                  key={author.id}
                ></option>
              );
>>>>>>> d4628cc5bfb415041d059fa2a93ed794b245f3c5
            })}
        </datalist>
      </label>
    </div>
  );
}
