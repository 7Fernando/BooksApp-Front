import axios from "axios";
const url = import.meta.env.VITE_BASE_URL;
import { autorizacion , authorizationPay} from "../../helpers/token";


const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

export const typesBooks = {
  GET_ALL_BOOKS: "GET_ALL_BOOKS",
  SEARCH_BOOKS: "SEARCH_BOOKS",
  GET_AUTHORS_BOOK: "GET_AUTHORS_BOOK",
  GET_BOOK_DETAILS: "GET_BOOK_DETAILS",
  SORT_BOOKS: "SORT_BOOKS",
  SORT_SCORE: "SORT_SCORE",
  CLEAR_BOOK_DETAILS: "CLEAR_BOOK_DETAILS",
  PUT_LIKE: 'PUT_LIKE',
  PUT_DISLIKE:'PUT_DISLIKE'
};




const authorizationAdmin = {
  headers: { authorization: `Bearer ${token}`, user: user },
};

export const getBooks = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${url}/books`, authorizationPay());

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
      const { data } = await axios.get(
        `${url}/books?name=${search}`,
        authorizationPay()
      );
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
      const { data } = await axios.get(`${url}/books/${id}`,authorizationPay());
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
    return {
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


export const sendLike =(id) =>{
  return async (dispatch)=>{ 
    try {
    const res = await axios.put(`${url}/books/incrementlike`,id,  authorizationPay());
   return dispatch({
      type: typesBooks.PUT_LIKE,
      payload:res.data
    });
  } catch (error) {
    console.log(error);
  }
};
};

export const sendDislike =(id) =>{
  return async (dispatch)=>{ 
    try {
    const res = await axios.put(`${url}/books/decrementlike`,id,  authorizationPay());
    
    return dispatch({
      type: typesBooks.PUT_DISLIKE,
      payload:res.data
    });
  } catch (error) {
    console.log(error);
  }
};
};


