import { typesBooks } from "../actions/books";

export const initialState = {
  allBooks: [],
  bkBooks: [],
  bookDetails: {},
};

const cases = {};

cases[typesBooks.GET_ALL_BOOKS] = (initialState, payload) => ({
  ...initialState,
  allBooks: [...payload],
  bkBooks: [...payload],
});

cases[typesBooks.GET_AUTHORS_BOOK] = (initialState, payload) => ({
  ...initialState,

  allBooks: [...payload],
});
cases[typesBooks.GET_BOOK_DETAILS] = (initialState, payload) => ({
  ...initialState,
  bookDetails: { ...payload },
});

export default function booksReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
