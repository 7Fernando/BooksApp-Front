
import {typesBooks} from "../actions/books";

export const initialState = {
  allBooks: [],
  searchBook:[],
};

const cases = {};

cases[typesBooks.GET_ALL_BOOKS] = (initialState, payload) => (
     {
  ...initialState,
  allBooks: [...payload],
  

});
cases[typesBooks.SEARCH_BOOKS] = (initialState, payload) => (
  {
    ...initialState,
    searchBook: [...payload],
    allBooks: [...payload],
  }
);

export default function booksReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
