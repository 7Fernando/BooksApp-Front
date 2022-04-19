import { typesUser } from "../actions/user";

export const initialState = {
  allUser: [],
};

const cases = {};

cases[typesUser.POST_USER] = (initialState, payload) => ({
  ...initialState
});

export default function userReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}