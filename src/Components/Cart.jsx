import React from 'react'
import '../css/cart.css';
import { useState } from 'react';


function Cart() {

  const[overlay,setOverlay]=useState(false);

  function changeOverlay(){
    setOverlay(!overlay);
  }

  function showCartContainer()
  {
    return overlay===true?"cart-price-container":"card-price-container-none";
  }

  return (
    <div className='cart-container'>
            <button onClick={changeOverlay}>My Cart</button>
            {/* <button>My Cart</button> */}
            <div className={showCartContainer()}>
                {/* <h1>Working</h1> */}
            </div>
    </div>
  )
}

export default Cart
