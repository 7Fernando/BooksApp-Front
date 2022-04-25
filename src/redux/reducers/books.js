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
      : initialState.allBooks
      
      return {
  ...initialState,
  allBooks: [...sortedBooks],
      }
};

cases[typesBooks.SORT_SCORE] = (initialState, payload) => {
<<<<<<< HEAD
  console.log(payload);
  const sortedScore = 
  payload = "Asc"?
  initialState.allBooks.sort((a, b) => a.score - b.score)
  : payload = "Desc"?
  initialState.allBooks.sort((a, b) => b.score - a.score)
  : initialState.allBooks
  return {
  ...initialState,
  allBooks: [...sortedScore],
=======
  let copiaallBooks = initialState.allBooks;

  let order;

  if (payload === "Asc") {
    order = copiaallBooks.sort(function (a, b) {
      if (a.views < b.views) {
        return 1;
      }
      if (a.views > b.views) {
        return -1;
      }
      return 0;
    });
>>>>>>> 1eba65797b487237429238372076d911aaa0e46e
  }
  if (payload === "Desc") {
    order = copiaallBooks.sort(function (a, b) {
      if (a.views > b.views) {
        return 1;
      }
      if (a.views < b.views) {
        return -1;
      }
      return 0;
    });
  } else {
    order = initialState.allBooks;
  }

  return {
    ...initialState,
    allBooks: [...order],
  };
};

cases[typesBooks.SEARCH_BOOKS] = (initialState, payload) => (
  {
    ...initialState,
    searchBook: [...payload],
    allBooks: [...payload],
  }
);
cases[typesBooks.CLEAR_BOOK_DETAILS] = (initialState, payload) => (
  {
    ...initialState,
    bookDetails:{},
  }
);


export default function booksReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
