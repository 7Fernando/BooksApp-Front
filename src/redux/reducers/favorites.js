import { typesFavorites } from "../actions/favorites";

export const initialState = {
  allfavorites: [],
  deleteFav: []
 

};

const cases = {};

cases[typesFavorites.GET_ALL_FAVORITES] = (initialState, payload) => ({
  ...initialState,
  allfavorites: [...payload],

  
});
cases[typesFavorites.PUT_FAVORITES] = (initialState) => ({
  ...initialState,
  
});

cases[typesFavorites.DELETE_FAVORITES] = (initialState, payload) => ({
  ...initialState,

 
  
});




export default function favoriteReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
