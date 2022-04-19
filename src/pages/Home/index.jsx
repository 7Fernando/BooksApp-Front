import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BooksCard from "../../components/booksCard/BooksCard";
import Footer from '../../components/footer/Footer'

export default function Home() {

  return (
    <div>
      <NavBar />
      <BooksCard/>
      <Footer />
    </div>
  );
}
