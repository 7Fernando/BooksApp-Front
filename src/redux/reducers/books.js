import { typesBooks } from "../actions/books";

export const initialState = {
  allBooks: [],

  searchBook:[],

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

cases[typesBooks.SORT_BOOKS] = (initialState, payload) => {
  console.log(payload);

  const sortedBooks = 
        payload === "Asc"
      ? initialState.allBooks.sort((a, b) => a.title.localeCompare(b.title))
      : payload === "Desc"
      ? initialState.allBooks.sort((a, b) => b.title.localeCompare(a.title))
      : allBooks
      
      return {
  ...initialState,
  allBooks: [...sortedBooks],
      }
};
//score todavia en desarrollo
cases[typesBooks.SORT_SCORE] = (initialState, payload) => {
  console.log(payload);
  const sortedScore = 
  payload = "Asc"?
  initialState.allBooks.sort((a, b) => a.score - b.score)
  : payload = "Desc"?
  initialState.allBooks.sort((a, b) => b.score - a.score)
  : allBooks
  return {
  ...initialState,
  allBooks: [...sortedScore],
  }
}

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
