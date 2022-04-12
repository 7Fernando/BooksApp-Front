import {typesAuthors} from "../actions/authors"

export const initialState = {
  allAthors: [],
};

const cases = {};

cases[typesAuthors.GET_ALL_AUTHORS] = (initialState, payload) => (
     {
  ...initialState,
  allAthors: [...payload],
});

export default function authorsReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
