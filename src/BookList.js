import React from "react";
import Book from "./components/Book";

const BookList = () => {
  return (
    <div className="flex flex-col space-y-20 md:flex-row md:space-y-0 md:space-x-10 max-w-screen">
      <Book
        number="1"
        price="₹150"
        img="https://m.media-amazon.com/images/I/61pZyTuNDYL._AC_UL480_FMwebp_QL65_.jpg"
        title="The monk who sold his ferrari"
        author="Robin Sharma"
        link="link one"     
      />
      <Book
        number="2"
        price="₹250"
        img="https://m.media-amazon.com/images/I/715qi-cIbML._AC_UY327_FMwebp_QL65_.jpg"
        title="Don't believe everything you think"
        author="Joseph Nguyen"
        link="link two"     
      />
      <Book
        number="3"
        price="₹100"
        img="https://m.media-amazon.com/images/I/71YjdCMBmQL._AC_UY327_FMwebp_QL65_.jpg"
        title="The blue umbrella"
        author="Ruskin Bond"
        link={"link three"}     
      />
      <Book
        number="4"
        price="₹320"
        img="https://m.media-amazon.com/images/I/61tVw-EYRGL._AC_UY327_FMwebp_QL65_.jpg"
        title="Read people like a book"
        author="Patrick King"
        link="link four"     
      />
    </div>
  );
};

export default BookList;
