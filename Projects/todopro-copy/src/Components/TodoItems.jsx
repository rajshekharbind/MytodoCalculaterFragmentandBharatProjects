import TodoItem from "./Todoitem";
import styles from './TodoItems.module.css'
import React from 'react'

const TodoItems = ({ todoItems ,onDeleteClick }) => {
   return(
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
       <TodoItem 
       key ={item.name}
       todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}> 
        </TodoItem>) )}

   </div>
   );
};
export default TodoItems;