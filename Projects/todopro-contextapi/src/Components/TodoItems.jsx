import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./Todoitem";
import styles from './TodoItems.module.css'
import React from 'react'

const TodoItems = () => {
   //const todoItemsFromContext= useContext(TodoItemsContext);
  // console.log(`items from context:${todoItemsFromContext}`)
  //const todoItems = useContext(TodoItemsContext);

   //const contextObj =useContext(TodoItemsContext);
   //const todoItems = contextObj.todoItems;
    
   // concept of distructering
   const {todoItems} = useContext(TodoItemsContext);



   return(
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
       <TodoItem 
      key ={item.name}
      todoDate={item.dueDate}
      todoName={item.name}> 
        </TodoItem>) )}

   </div>
   );
};
export default TodoItems;