import React from 'react'
import '../css/card.css'

function Card({pHeading,pDesc}) {
  return (
    <div className='card-container'>

      <div className="card-info-container">
        <h1>{pHeading}</h1>
        <p>{pDesc}</p>
      </div>

      <div className="card-quantity-info">
        <h1>Quantity</h1>
      </div>

    </div>
  )
}

export default Card
