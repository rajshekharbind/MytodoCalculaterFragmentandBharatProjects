import React from 'react'
import AppName from "./Components/AppName";
import Addtodo from "./Components/Addtodo";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import "./App.css";
import WelcomeMessage from "./Components/Welcomemessage";


function App() {
  const initialTodoItems = [
    {
      name:"Buy Milk",
      dueDate:"04/10/2023 ",
    },
    {
      name:" Go to College",
      dueDate:"04/10/2023 ",
    },
    {
      name:" Like this Video",
      dueDate:"right now",
    },
  ];

  const [todoItems,setTodoItems] = useState(initialTodoItems);

  
  const handleNewItem =(itemName,itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`)
    const newTodoItems = [
      ...todoItems,//spread operater old value present at this position
      {name:itemName,dueDate: itemDueDate},
    ];
    setTodoItems(newTodoItems);
  };



  const handleDeleteItem =(todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }



   return (
   <center className="todo-container">
   < AppName />
   <Addtodo onNewItem={handleNewItem} />
   <WelcomeMessage></WelcomeMessage>
   <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
  
   </center>
  );
}
export default App;
