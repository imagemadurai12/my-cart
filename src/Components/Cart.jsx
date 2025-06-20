import React from 'react'
import '../css/cart.css';
import { useState } from 'react';


function Cart(props) {

  const[overlay,setOverlay]=useState(false);

  function changeOverlay(){
    setOverlay(!overlay);
  }

  function showCartContainer()
  {
    return overlay===true?"cart-price-container visible":"card-price-container invisible";
  }

  return (
    <div className='cart-container'>
            <button onClick={changeOverlay}>My Cart</button>
            {/* <button>My Cart</button> */}
            <div className={showCartContainer()}>
                {/* <h1>Working</h1> */}
                <ul>
                  {/* <li>Products</li>
                  <li>Products</li>
                  <li>Products</li> */}
                  {
                    props.products.map((product)=>(
                      (product.quantity)>0?<li>{`${product.pname} x ${product.quantity} = ${(product.price)*(product.quantity)}`}</li>:""
                    ))
                  }
                </ul>
            </div>
    </div>
  )
}

export default Cart
