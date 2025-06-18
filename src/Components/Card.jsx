import React from 'react'
import '../css/card.css'
import { useState } from 'react'

function Card(props) {

  const[overlay,setOverlay]=useState(false);

  function changeOverlay()
  {
    setOverlay(!overlay);
  }

  function cardColorChange()
  {
    return overlay===true?"card-container card-selected":"card-container card-not-selected";
  }

  function cardVisibility()
  {
    return overlay===true?"card-quantity-info card-quantity-visible":"card-quantity-info card-quantity-invisible";
  }


  return (
    // <div className='card-container card-not-selected' onClick={changeOverlay}>
    <div className={cardColorChange()} onClick={changeOverlay}>

      <div className="card-info-container">
        <h1>{props.pDetails.pname}</h1>
        <p>{props.pDetails.pdesc}</p>
      </div>

      <div className={cardVisibility()}>
        <p>Quantity</p>
        <span>ZERO</span>
        <button>+</button>
        <button>-</button>
      </div>

    </div>
  )
}

export default Card
