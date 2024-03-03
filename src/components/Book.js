import React from "react";
import AddToCart from "./AddToCart";
import Title from "./Title";
import Author from "./Author";
import BuyNow from "./BuyNow";

const Book = (props) => {
  return (
    <div className="p-5 space-y-4 flex flex-col items-center">
      <img src={props.img} alt="Book" className="w-72 h-96" />
      <Title title={props.title} />
      <Author author={props.author}/>
      <div>Price: {props.price}</div>
      <AddToCart title={props.title}/>
      <BuyNow price={props.price} title={props.title}/>
    </div>
  );
};


export default Book;
