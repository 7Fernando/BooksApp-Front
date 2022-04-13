import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/actions/books";
import { getTopic, getTopicBook } from "../../redux/actions/topic";


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
  return <div>
  <label>
    Filter by topic:
    <input
      list="topic"
      name="topic"
      onChange={(e) => handleFilterTopic(e)}
    />
    <datalist id="topic">
      {allTopic &&
        allTopic.map((topic) => {
          return <option value={topic.name} key={topic.id}></option>;
        })}
    </datalist>
  </label>
</div>
}
