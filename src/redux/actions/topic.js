import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");
const autorizacion = {
  headers: { authorization: `Bearer ${token}` },
};

export const typesTopics = {
  GET_ALL_TOPIC:"GET_ALL_TOPIC",
  GET_TOPIC_BOOK:"GET_AUTHORS_BOOK"
};

export const getTopic = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${url}/topic`,autorizacion);
      return dispatch({
        type: typesTopics.GET_ALL_TOPIC,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};
export const getTopicBook = (name) => {
    try {
      return async (dispatch) => {
        const { data } = await axios.get(`${url}/topic/S?name=${name}`, autorizacion);
        console.log(data.book);
        return dispatch({
          type: typesTopics.GET_TOPIC_BOOK,
          payload: data.book,
        });
      };
    } catch (error) {
      console.error(error);
    }
  };