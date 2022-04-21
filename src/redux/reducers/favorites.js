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



export default function favoriteReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
