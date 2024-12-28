import React from 'react'
import AppName from "./Components/AppName";
import Addtodo from "./Components/Addtodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import WelcomeMessage from "./Components/Welcomemessage";
import TodoItemsContextProvider from './store/todo-items-store';



/*const todoItemsReducer = (currTodoItems,action) =>{
let newTodoItems = currTodoItems;
if(action.type === "NEW_ITEM"){
   newTodoItems = [
    ...currTodoItems,//spread operater old value present at this position
    { name:action.payload.itemName, dueDate: action.payload.itemDueDate},
  ];
  
}
else if (action.type === "DELETE_ITEM"){
   newTodoItems = currTodoItems.filter((item) => 
    item.name !== action.payload.itemName
  );
}
return newTodoItems;
};*/


function App() {
  // const initialTodoItems = [
  //   {
  //     name:"Buy Milk",
  //     dueDate:"04/10/2023 ",
  //   },
  //   {
  //     name:" Go to College",
  //     dueDate:"04/10/2023 ",
  //   },
  //   {
  //     name:" Like this Video",
  //     dueDate:"right now",
  //   },
  // ];

 // const [todoItems,setTodoItems] = useState([]);

 /* const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer,[]);
  const addNewItem =(itemName,itemDueDate) => {
  const newItemAction ={
    type: "NEW_ITEM",
    payload: {
      itemName,
      itemDueDate,
    },
  };
  dispatchTodoItems(newItemAction);
};*/



   /* console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`)
    const newTodoItems = [
      ...todoItems,//spread operater old value present at this position
      {name:itemName,dueDate: itemDueDate},
    ];
    setTodoItems(newTodoItems);*/
 


  
  //   const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
  //   setTodoItems(newTodoItems);
 /* const deleteItem =(todoItemName) => {
    const deleteItemAction ={
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  }*/
  //const defaultTodoItems = [{name: "Buy Ghee",dueDate:"Today"}]
  /* return (
    <TodoItemsContext.Provider 
    value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>*/


  return (
    <TodoItemsContextProvider>
    <center className="todo-container">
   <AppName />
   <Addtodo  />
   <WelcomeMessage ></WelcomeMessage>
   <TodoItems></TodoItems>
   </center>
   </TodoItemsContextProvider>
  )
  
  //);
}
export default App;
