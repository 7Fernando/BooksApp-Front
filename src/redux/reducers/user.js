import { typesUser } from "../actions/user";

export const initialState = {
  allUser: [],
};

const cases = {};

cases[typesUser.POST_USER] = (initialState, payload) => ({
  ...initialState
});

cases[typesUser.GET_ALL_USER] = (initialState, payload) => ({
  ...initialState,
  allUser: [...payload],
});

export default function userReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}