import axios from "axios";

let BASE_URL = process.env.REACT_APP_BASE_URL;
export const typesBooks = {
  GET_ALL_BOOKS: "GET_ALL_BOOKS",
};

export const getBooks = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${URL_BASE}/books`);
      dispatch({
        type: GET_ALL_BOOKS,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};
