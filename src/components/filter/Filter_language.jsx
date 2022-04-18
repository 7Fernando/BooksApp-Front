import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/actions/books";
import { getLanguage, getLanguageBook } from "../../redux/actions/language";
import { Input } from "@chakra-ui/react";
import s from "./Filter_athors.module.css";



export default function Filter_language() {
  const dispatch = useDispatch();
  const allLanguage = useSelector((state) => state.languages.allLanguages);
  

  
  useEffect(() => {
    dispatch(getLanguage());
 }, []);


  const handleFilterLanguage = (e) => {
     console.log(e.target.value);
      if (e.target.value !== " ") {
        dispatch(getBooks());
     }
    dispatch(getLanguageBook(e.target.value));
  };


  
  return (
    <div className={s.conteiner}>
      <label className={s.label}>
        Filter by Language
         <Input
          bg={"green.200"}
          maxW="auto"
          _hover={{
            background: "green.300",
          }}
          list="language"
          id="lenguage"
          name="language"
          placeholder='Language'
          onChange={(e) =>  handleFilterLanguage(e)}
        /> 
          <datalist id="language" className={s.dataList}>
          {allLanguage &&
            allLanguage.map((l) => {
              return <option value={l.name} key={l.id} className={s.option}></option>;
            })}
        </datalist>
      </label>
    </div>
  );
}
