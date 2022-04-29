import { useEffect } from "react";
import Contact from "./pages/Contact/Contact";
import Landing from "./pages/Landing/Landing";
import { useAuth0 } from "@auth0/auth0-react";
import Validation from "./components/validation";
import { Routes, Route } from "react-router-dom";
import Favorite from "./components/Favorites/Favorite";
import EpubReader from "./components/epubReader/epubReader";
import BookDetails from "./components/bookDetails/BookDetails";
import CheckoutContainer from "./components/checkout/checkoutContainer";
import About from './pages/About/About'


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
      </Routes>
    </div>
  );
};

export default App;
