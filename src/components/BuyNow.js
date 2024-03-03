import React from "react";

const BuyNow = (props) => {
  const buy = () => {
    console.log(`The Price of "${props.title}" book is ${props.price}`);
    alert(`The Price of "${props.title}" book is ${props.price}`);
  };
  return (
    <div>
      <button
        className="bg-green-700 text-white py-2 px-8 rounded-2xl hover:translate-y-[-2px] duration-200 shadow-lg hover:shadow-green-500"
        onClick={buy}
      >
        Buy now
      </button>
    </div>
  );
};

export default BuyNow;
