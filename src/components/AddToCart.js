import React from 'react'


const AddToCart = (props) => {
  const addedtocart = ()=>{
    console.log(`The Book : "${props.title}" added to your cart`)
  }
  return (
    <div className='flex'>
      <button className='bg-blue-700 text-white py-2 px-6 rounded-2xl hover:translate-y-[-2px] duration-200 shadow-lg hover:shadow-blue-500' onClick={addedtocart}>
        Add to cart
      </button>
    </div>
  )
}

export default AddToCart
