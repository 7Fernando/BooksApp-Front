
import react, { useState, useEffect } from "react";
import "./App.css";
import BooksCard from "./components/booksCard/BooksCard";
import BookDetails from "./components/bookDetails/BookDetails";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "./redux/actions/books";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/index"


function App() {
  return (
    
    <div className="App">
      <Routes>
         <Route path='/' element={<Landing/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<BookDetails />} />

     

      <Route exact path="/" element={<Landing />} />
 
 
      </Routes>

    </div>
    
  );
}

export default App;
