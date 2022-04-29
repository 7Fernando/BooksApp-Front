
import React, { useEffect } from "react";
import Home from "./pages/Home/index";


import Landing from "./pages/Landing/Landing";

import Validation from "./components/validation";
import { Routes, Route } from "react-router-dom";
import Favorite from "./components/Favorites/Favorite";
import EpubReader from "./components/epubReader/epubReader";
import BookDetails from "./components/bookDetails/BookDetails";
import CheckoutContainer from "./components/checkout/checkoutContainer";
import About from './pages/About/About'

import UserPanel from "./components/userPanel/UserPanel";
import Contact from './pages/Contact/Contact'

import { useAuth0 } from "@auth0/auth0-react";



const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Validation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/read/:id" element={<EpubReader />} />
        <Route path="/details/:id" element={<BookDetails />} />
        <Route path="/checkout/:id" element={<CheckoutContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<UserPanel/>} />
      </Routes>
    </div>
  );
};

export default App;
