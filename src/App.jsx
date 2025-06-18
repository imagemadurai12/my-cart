import "./App.css";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
// import Testing from "./Components/Testing";

function App() {
  let products = [
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
  ];

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
            <Card key={prod.pid} pDetails={prod} />
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
