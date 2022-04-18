import { combineReducers } from "redux";
import books from "./books";
import authors from "./author";
import topic from "./topic";
import user from "./user";
import languages from './languages'


export default combineReducers({
  books,
  authors,
  topic,
  user,
  languages
});
