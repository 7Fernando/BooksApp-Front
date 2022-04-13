import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthors } from "../../redux/actions/authors";

export default function Filter_athors() {
  const dispatch = useDispatch();
  const allAthors = useSelector((state) => state.authors.allAthors);

  console.log(allAthors);
  useEffect(() => {
    dispatch(getAuthors());
  }, []);
  return (
    <div>
      <label>
        filter by author:
        <input list="author" name="author" />
        <datalist id="author">
          {allAthors &&
            allAthors.map((author) => {
              return <option value={author.name}></option>;
            })}
        </datalist>
      </label>
    </div>
  );
}
