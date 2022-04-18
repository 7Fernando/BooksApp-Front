import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/actions/books";
import { getTopic, getTopicBook } from "../../redux/actions/topic";
import { Input } from "@chakra-ui/react";
import s from "./Filter_athors.module.css";



export default function Filter_topic() {
  const dispatch = useDispatch();
  const allTopic = useSelector((state) => state.topic.allTopics);
  
  useEffect(() => {
    dispatch(getTopic());
  }, []);
  const handleFilterTopic = (e) => {
    console.log(e.target.value);
    if (e.target.value !== " ") {
      dispatch(getBooks());
    }
    dispatch(getTopicBook(e.target.value));
  };
  return (
    <div className={s.conteiner}>
      <label className={s.label}>
        Filter by topic
        <Input
          bg={"green.200"}
          maxW="auto"
          _hover={{
            background: "green.300",
          }}
          list="topic"
          name="topic"
          placeholder='Topic'
          onChange={(e) => handleFilterTopic(e)}
        />
        <datalist id="topic" className={s.dataList}>
          {allTopic &&
            allTopic.map((topic) => {
              return <option value={topic.name} key={topic.id} className={s.option}></option>;
            })}
        </datalist>
      </label>
    </div>
  );
}
