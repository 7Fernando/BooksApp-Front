import React from "react";
import Home from "./pages/Home/index";
import Landing from "./pages/Landing/Landing";
import Plans from "./components/checkout/plans";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./components/bookDetails/BookDetails";
import CheckoutContainer from "./components/checkout/checkoutContainer";
import  Favorite  from  './components/Favorites/Favorite'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/details/:id" element={<BookDetails />} />
        <Route path="/checkout" element={<CheckoutContainer />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
  );
};

export default App;
