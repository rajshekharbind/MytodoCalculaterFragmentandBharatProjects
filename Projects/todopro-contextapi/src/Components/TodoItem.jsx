import React, { useContext } from 'react'
import { TodoItemsContext } from '../store/todo-items-store';

function TodoItem({ todoName,todoDate }){
  const {deleteItem} = useContext(TodoItemsContext);
    // let todoName =' Buy Milk';
    // let todoDate='04/10/2023';
  return(
  
    <div className="container">
      <div className="row Kg-row">
        <div className="col-6">{todoName} </div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
         <button type="button" className="btn
          btn-danger Kg-button" onClick={() =>
           deleteItem(todoName)}>Delete</button>
        </div>
      </div>
    </div>
  );
  }
  export default TodoItem;