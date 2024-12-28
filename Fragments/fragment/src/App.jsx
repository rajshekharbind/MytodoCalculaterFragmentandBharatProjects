import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Container from "./components/Container";
import FoodInput from "./components/Foodinput";
import { useState } from "react";

function App() {
  //use of react fragment --->>  To remove unnecessary div section and one add extra div show after inspect in server then  <React.Fragment> </React.Fragment> or <> </> after use do not show extra div 
//   return (
//     <React.Fragment>
//       <h1>Healthy Food</h1>
//       <ul class="list-group">
//   <li class="list-group-item">Dal</li>
//   <li class="list-group-item">Green Vegitable</li>
//   <li class="list-group-item">Roti</li>
//   <li class="list-group-item">Salad</li>
//   <li class="list-group-item">Milk</li>
// </ul>
// </React.Fragment>
//   )

//...>>concept of maping and key(virtual DOM)
let foodItems = ["Dal","Green Vegitable","Roti","Salad","Milk","ghee"];

let [textToShow,setTextState] = useState("Food Item Enter buy User.");

// let textToShow= textStateArr[0];
// let setTextState = textStateArr[1];
console.log(`Current value of textState:${textToShow}`);




//let textToShow="Food Item Enter buy User.";

 const onKeyDown = (event) =>{
  if(event.key==="Enter") {
    let newFoodItem = event.target.value;
    let newItems ={...foodItems ,newFoodItem};
    console.log("Food value entered is " + newFoodItem);
  }
      //   console.log(event.target.value);
      //  setTextState(event.target.value);
     };




/*return (
  <>
  <h1>Healthy Food</h1>
  <ul className="list-group">
    {foodItems.map((item)=> (
      <li key={item} className="list-group-item">{item}</li>
    ))}
  </ul>
  </>
)*/


 //concept of conditional rendering in 

 //let foodItems =[];
//let foodItems = ["Dal","Green Vegitable","Roti","Salad","Milk","ghee"];
/*if(foodItems.length===0){
  return <h3>i am stiii hungry</h3>
}*/
//concept of ternary operater
//let emptyMessage = foodItems.length===0 ? <h3>I am still hungry</h3>:null;
return (
  <>
  <Container>
  <h1 className="food-heading">Healthy Food</h1>
  {/* {emptyMessage} */}
  {/* <FoodInput handleOnChange={handleOnChange} ></FoodInput> */}
  <FoodInput handleKeyDown={onKeyDown} ></FoodInput>
  <p>{textToShow}</p>
 <FoodItems items={foodItems}></FoodItems>
 
 <ErrorMessage items={foodItems}></ErrorMessage>
 </Container>

 <Container>
  <p>
    Above is the list of healthy foods that are good for your 
    health and well being
  </p>
 </Container>
 </>
)
}

export default App
