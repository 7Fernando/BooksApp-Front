import axios from "axios";
const token = window.localStorage.getItem("token");
const config = {
  headers: {
    authorization: token,
  },
};

const url = import.meta.env.VITE_BASE_URL;

export const typesBooks = {
  GET_ALL_BOOKS: "GET_ALL_BOOKS",
  SEARCH_BOOKS: "SEARCH_BOOKS",
  GET_AUTHORS_BOOK: "GET_AUTHORS_BOOK",
  GET_BOOK_DETAILS: "GET_BOOK_DETAILS",
  SORT_BOOKS: "SORT_BOOKS",
  SORT_SCORE: "SORT_SCORE",
  CLEAR_BOOK_DETAILS: "CLEAR_BOOK_DETAILS",
};

export const getBooks = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${url}/books`,config);
      return dispatch({
        type: typesBooks.GET_ALL_BOOKS,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const searchBooks = (search) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${url}/books?name=${search}`);
      return dispatch({
        type: typesBooks.SEARCH_BOOKS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: typesBooks.SEARCH_BOOKS,
        payload: ["No books found"],
      });
    }
  };
};

export const getBookDetails = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${url}/books/${id}`);
      return dispatch({
        type: typesBooks.GET_BOOK_DETAILS,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const sortBooksByName = (sort) => {
  try {
    return {
        type: typesBooks.SORT_BOOKS,
        payload: sort,
      };
  } catch (error) {
    console.error(error);
  }
};
//score todavia en desarrollo
export const sortBooksByScore = (sort) => {
  try {
    return{
        type: typesBooks.SORT_SCORE,
        payload: sort,
      };
  } catch (error) {
    console.error(error);
  }
};

export const clearState = () => {
  try {
    return {
      type: typesBooks.CLEAR_BOOK_DETAILS,
    };
  } catch (error) {
    console.error(error);
  }
};
