import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/actions/books";
import { getLanguage, getLanguageBook } from "../../redux/actions/language";
import {Box, Input } from "@chakra-ui/react";
import s from "./Filter_athors.module.css";

export default function Filter_language() {
  const dispatch = useDispatch();
  const allLanguage = useSelector((state) => state.languages.allLanguages);

  useEffect(() => {
    dispatch(getLanguage());
  }, []);

  const handleFilterLanguage = (e) => {

   
    if (!e.target.value) {
      dispatch(getBooks());
    }

    dispatch(getLanguageBook(e.target.value));
  };

  return (
    <div className={s.conteiner}>
      <label className={s.label}>
        <Box mb="3">Filter by Language</Box>
        <Input
          bg={"green.200"}
          maxW="auto"
          color="gray.600"
          boxShadow="xl"
          _hover={{
            background: "green.300",
            color: "gray.600",
          }}
          list="language"
          id="lenguage"
          name="language"
          placeholder="Language"
          _placeholder={{ opacity: 1, color: "gray.600" }}
          onChange={(e) => handleFilterLanguage(e)}
        />
        <datalist id="language" className={s.dataList}>
          {allLanguage &&
            allLanguage.map((l) => {
              return (
                <option value={l.name} key={l.id} className={s.option}></option>
              );
            })}
        </datalist>
      </label>
    </div>
  );
}
