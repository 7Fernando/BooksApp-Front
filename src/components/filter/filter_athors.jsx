import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthors, getAuthorsBook } from "../../redux/actions/authors";
import { getBooks } from "../../redux/actions/books";

export default function Filter_athors() {
  const dispatch = useDispatch();
  const allAthors = useSelector((state) => state.authors.allAthors);
  useEffect(() => {
    dispatch(getAuthors());
  }, []);
  const handleFilterAhutors = (e) => {
    console.log(e.target.value);
    if (e.target.value !== " ") {
      dispatch(getBooks());
    }
    dispatch(getAuthorsBook(e.target.value));
  };

  return (
    <div>
      <label>
        Filter by author:
        <input
          list="author"
          name="author"
          onChange={(e) => handleFilterAhutors(e)}
        />
        <datalist id="author">
          {allAthors &&
            allAthors.map((author) => {
              return <option value={author.name} key={author.id}></option>;
            })}
        </datalist>
      </label>
    </div>
  );
}
