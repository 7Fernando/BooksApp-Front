import axios from "axios";

let BASE_URL = import.meta.env.BASE_URL

export const typesBooks = {
  GET_ALL_BOOKS: "GET_ALL_BOOKS",
};

export const getBooks = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`http://localhost:3001/api/books`);
      console.log(data)
      return dispatch({
        type: typesBooks.GET_ALL_BOOKS,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};
