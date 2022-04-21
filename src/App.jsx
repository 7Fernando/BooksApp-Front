import React from "react";
import Home from "./pages/Home/index";
import Landing from "./pages/Landing/Landing";
import Plans from "./components/checkout/plans";
import { Routes, Route } from "react-router-dom";
import Favorite from "./components/Favorites/Favorite";
import EpubReader from "./components/epubReader/epubReader";
import BookDetails from "./components/bookDetails/BookDetails";
import CheckoutContainer from "./components/checkout/checkoutContainer";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/read" element={<EpubReader />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/details/:id" element={<BookDetails />} />
        <Route path="/checkout" element={<CheckoutContainer />} />
      </Routes>
    </div>
  );
};

export default App;
