import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
// import Testing from "./Components/Testing";

function App() {
  // let products = ;
  let [products,setProducts] = useState([
    {
      pid: 1,
      pname: "Strawberry Shake",
      pdesc: "Finest Strawberries, Milk, Sugar",
      pimage: "./product1.jpg",
      price: 169,
      quantity: 0,
    },
    {
      pid: 2,
      pname: "Chocolate Fantasy",
      pdesc: "Brownie with chocolate sauce topped with Vanilla Ice cream",
      price: 269,
      quantity: 0,
    },
    {
      pid: 3,
      pname: "Mediterranean Delight",
      pdesc: "Nuts and Dates from the soils of Algeria",
      price: 369,
      quantity: 0,
    },
  ]);

  function onQuanIncrease(prod,e)
  {
    e.stopPropagation();
    // console.log(e);
    // alert('Increment working');

    let selectedProducts=[...products];
    let selProdIndex=selectedProducts.indexOf(prod);
    selectedProducts[selProdIndex].quantity++;
    // console.log(selectedProducts);
    // console.log(selProdIndex);
    // console.log(prod);

    if(selectedProducts[selProdIndex].quantity>10)
    {
      selectedProducts[selProdIndex].quantity=10;
      alert('WARNING : You have limit to add maximum 10 Products');
    }


    setProducts(selectedProducts);



  }

  function onQuanDecrease(prod,e)
  {
    e.stopPropagation();
    let selectedProducts=[...products];
    let selProdIndex=selectedProducts.indexOf(prod);
    console.log(selectedProducts[selProdIndex].quantity--);
    
    // console.log(selectedProducts);
    // console.log(prod);
    // console.log(selProdIndex);

    if(selectedProducts[selProdIndex].quantity<=0)
    {
      selectedProducts[selProdIndex].quantity=0;
    }

    setProducts(selectedProducts);
    
    // alert('Decrement working');
  }

  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <Cart />
        </div>
      </header>
      
      {/* Use State testing purpose start */}
          {/* <Testing/> */}
      {/* Use State testing purpose end */}

      <main>
        <div className="wrapper">
          {products.map((prod) => (
            <Card key={prod.pid} pDetails={prod} 
            onIncrement={(e)=>onQuanIncrease(prod,e)}
            onDecrement={(e)=>onQuanDecrease(prod,e)}
            />
          ))}

          {/* <Card pHeading="Strawberry Shake" 
          pDesc="Finest Strawberries, Milk, Sugar"/>

          <Card pHeading="Chocolate Fantasy" 
          pDesc="Brownie with chocolate sauce topped with Vanilla Ice cream"/>

          <Card pHeading="Mediterranean Delight" 
          pDesc="Nuts and Dates from the soils of Algeria"/> */}
        </div>
      </main>
    </div>
  );
}

export default App;
