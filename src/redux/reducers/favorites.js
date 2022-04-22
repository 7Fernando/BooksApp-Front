import { typesFavorites } from "../actions/favorites";

export const initialState = {
  allfavorites: [],
  bookDetails: {},

};

const cases = {};

cases[typesFavorites.GET_ALL_FAVORITES] = (initialState, payload) => ({
  ...initialState,
  allfavorites: [...payload],

  
});

cases[typesFavorites.POST_FAVORITES]= (initialState, payload) => ({
  ...initialState,
});

cases[typesFavorites.DELETE_FAVORITES] = (initialState, payload) => ({
  ...initialState,
});


export default function favoriteReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
