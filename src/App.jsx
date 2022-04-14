import react, { useState, useEffect } from "react";
import "./App.css";
import BooksCard from "./components/booksCard/BooksCard";
import BookDetails from "./components/bookDetails/BookDetails";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "./redux/actions/books";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<BooksCard />} />
        <Route path="/details" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
