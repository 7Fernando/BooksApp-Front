import "./App.css";
import BookDetails from "./components/bookDetails/BookDetails";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/index"

function App() {
  return (
 const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<BookDetails />} />
      </Routes>
    </div>
  );
};

export default App;
