import "./App.css";
import BooksCard from "./components/booksCard/BooksCard";
import BookDetails from "./components/bookDetails/BookDetails";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<BookDetails />} />
      </Routes>
    </div>
  );
};

export default App;
