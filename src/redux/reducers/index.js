import { combineReducers } from "redux";
import books from "./books";
import authors from "./author";
import topic from "./topic";
import languages from './languages'

export default combineReducers({
  books,
  authors,
  topic,
  languages
  
});
