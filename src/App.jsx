import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import BooksCard from "./components/books/books";
import react, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "./redux/actions/books";

function App() {
  const books = useSelector((state) => state.books.allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div className="App">
      <BooksCard />
    </div>
  );
}

export default App;
