import { combineReducers } from "redux";
import books from "./books";
import authors from "./author";

export default combineReducers({
  books,
  authors,
});
