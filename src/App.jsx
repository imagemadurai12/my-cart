import './App.css';
import Card from './Components/Card'

function App() {
  return (
    <div className="App">
      
      <header>
        <div className="wrapper">
          
        </div>        
      </header>
      <main>
        <div className="wrapper">
          <Card pHeading="Strawberry Shake" 
          pDesc="Finest Strawberries, Milk, Sugar"/>

          <Card pHeading="Chocolate Fantasy" 
          pDesc="Brownie with chocolate sauce topped with Vanilla Ice cream"/>

          <Card pHeading="Mediterranean Delight" 
          pDesc="Nuts and Dates from the soils of Algeria"/>
        </div>              
      </main>
      

    </div>
  );
}

export default App;
