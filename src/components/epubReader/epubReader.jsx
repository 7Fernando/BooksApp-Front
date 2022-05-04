import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { ReactReader } from "react-reader";
import { Box } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import { getBookDetails } from "../../redux/actions/books";
// import Home from '../../pages/Home'


const EpubReader = () => {
  const dispatch= useDispatch();
  const { id } = useParams(); 
  const [location, setLocation] = useState(null);
  useEffect(async () => {
   dispatch(await getBookDetails(id))
  }, [dispatch, getBookDetails])
  const book = useSelector((state) => state.books.bookDetails);

  const locationChanged = (epubcifi) => {
    setLocation(epubcifi);
  };
  const url= book.epub?.split(".images")[0]
  return (
    <>
      <Box height="95vh" >

        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url= {url}
        />

        <Link to="/home">Back to shelf</Link>
      </Box>
    </>
  );
};

export default EpubReader;
