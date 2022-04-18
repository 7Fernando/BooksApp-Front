import { typesLanguages } from "../actions/language";
import { typesBooks } from "../actions/books";

export const initialState = {
 
  allLanguages: [],

};

const cases = {};

cases[typesLanguages.GET_ALL_LANGUAGE] = (initialState, payload) => ({
  ...initialState,
  allLanguages: [...payload],
});



export default function languageReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
