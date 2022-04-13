import { useState } from "react";

import "./App.css";
import BooksCard from "./components/books/books";
import react, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "./redux/actions/books";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home"

function App() {
  const books = useSelector((state) => state.books.allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home />} />
      {/* <BooksCard /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
