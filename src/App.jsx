import "./App.css";
import BooksCard from "./components/booksCard/BooksCard";
import BookDetails from "./components/bookDetails/BookDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BooksCard />} />
        <Route path="/details" element={<BookDetails />} />
      </Routes>
     
    </div>
  );
}

export default App;
