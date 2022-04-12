import axios from "axios";

let URL_BASE = import.meta.env.VITE__BASE_URL

export const typesBooks = {
  GET_ALL_BOOKS: "GET_ALL_BOOKS",
};

export const getBooks = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${URL_BASE}/books`);
      return dispatch({
        type: typesBooks.GET_ALL_BOOKS,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};
