
import {typesBooks} from "../actions/books";

export const initialState = {
  allBooks: [],
};

const cases = {};

cases[typesBooks.GET_ALL_BOOKS] = (initialState, payload) => (
     {
  ...initialState,
  allBooks: [...payload],
});

export default function booksReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
