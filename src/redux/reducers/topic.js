import { typesTopics } from "../actions/topic";

export const initialState = {
  allTopics: [],
};

const cases = {};

cases[typesTopics.GET_ALL_TOPIC] = (initialState, payload) => ({
  ...initialState,
  allTopics: [...payload],
});

export default function topicReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
