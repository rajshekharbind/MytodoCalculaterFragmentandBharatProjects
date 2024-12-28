//import { useState } from "react";
import { useContext, useRef, useState } from "react";

import React from 'react'
import { TodoItemsContext } from "../store/todo-items-store";
function Addtodo(){
//concept of useRef() by uses performance enhance more
  //const todoNameElement = useRef();
 // const dueDateElement = useRef();
  
  const {addNewItem } = useContext(TodoItemsContext);


// concept of useState and event handling
  const [todoName,setTodoName] = useState("");
  const [dueDate,setDueDate] =useState("");

  const handleNameChange =(event) =>{
     setTodoName(event.target.value);
  }
  const handleDateChange =(event) =>{
    setDueDate(event.target.value);
  };
  

  const handleAddButtonClicked = (event) =>{
    //use concept of form {event.preventDefault}
    event.preventDefault();
    {/*const todoName= todoNameElement.current.value;
    const dueDate= dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value=""; */}
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  }




return (
 
<div className="container">

 <form className="row Kg-row" onSubmit={handleAddButtonClicked}>
  <div className="col-6">
    <input type="text" 
   // ref={todoNameElement}
    placeholder="Enter ToDo Here.." 
    value={todoName}
    onChange={handleNameChange}
    />
    </div>
    <div className="col-4">
      <input type="date"
     // ref={dueDateElement}
    value={dueDate}
    onChange={handleDateChange}
     />
     </div>
    <div className="col-2">
    <button type="button" className="btn btn-success Kg-button"
    onClick={handleAddButtonClicked}>
      Add
      </button>
    </div>
   </form>
  </div>
  );
}
export default Addtodo;