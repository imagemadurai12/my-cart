import React from 'react'
import { useState } from 'react'

function Testing() {

    // const [color,setColor]=useState("Red");

    // function changeColor(){
    //     setColor('Blue');
    // }

    const [car,setCar]=useState(
        {
            brand:"Ford",
            modal:"Mustang",
            launch:1986,
            color:"Red"
        }
    );

    function changeCarDetails()
    {
        setCar(
            previousState=>{
                return {...previousState,color:"Yellow"}
            }
        )
    }

  return (
    <div className='testing'>
        {/* <h1>My Favourite Color is {color}</h1> */}
        {/* <button onClick={()=>setColor("Blue")}>Click here!</button> */}
        {/* <button onClick={changeColor}>Click here!</button> */}

        {/* Car details modifying */}
        <h1>My Favourite car is {car.brand} , {car.modal} with {car.color} color and the modal was {car.launch}.</h1>
        <button onClick={changeCarDetails}>Click here!</button>
    </div>
  )
}

export default Testing
