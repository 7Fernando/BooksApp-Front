import { combineReducers } from "redux";
import books from "./books";
import authors from "./author";
import topic from "./topic";
import user from "./user";

export default combineReducers({
  books,
  authors,
  topic,
  user
});
