import React from 'react'
function TodoItem({ todoName,todoDate ,onDeleteClick }){
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
           onDeleteClick(todoName)}>Delete</button>
        </div>
      </div>
    </div>
  );
  }
  export default TodoItem;