import react, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../redux/actions/books";

const BooksCard = () => {
  const books = useSelector((state) => state.books.allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div>
      <h2>hola</h2>
    </div>
  );
};
export default BooksCard;
