import React from "react";
import Home from "./pages/Home/index";
import Contact from "./pages/Contact/Contact";
import Landing from "./pages/Landing/Landing";
import Plans from "./components/checkout/plans";
import Validation from "./components/validation";
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
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/home" element={<Validation />} />
        {/* <Route path="/plans" element={<Plans />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/read/:id" element={<EpubReader />} />
        <Route path="/details/:id" element={<BookDetails />} />
        <Route path="/checkout/:id" element={<CheckoutContainer />} />
      </Routes>
    </div>
  );
};

export default App;
