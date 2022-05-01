import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Landing from "./pages/Landing/Landing";
import Validation from "./components/validation";
import { Routes, Route } from "react-router-dom";
import Favorite from "./components/Favorites/Favorite";
import UserPanel from "./components/userPanel/UserPanel";
import EpubReader from "./components/epubReader/epubReader";
import BookDetails from "./components/bookDetails/BookDetails";
import CheckoutContainer from "./components/checkout/checkoutContainer";
import FormContact from "./pages/Contact/FormContact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Validation />} />
        <Route path="/contact" element={<FormContact />} />
        <Route path="/profile" element={<UserPanel />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/read/:id" element={<EpubReader />} />
        <Route path="/details/:id" element={<BookDetails />} />
        <Route path="/checkout/:id" element={<CheckoutContainer />} />
      </Routes>
    </div>
  );
};

export default App;
