function TodoItems(){
  let todoName =' Buy Milk';
  let todoDate='04/10/2023';


return(

  <div class="container">
    <div class="row Kg-row">
      <div class="col-6">{todoName} </div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2">
       <button type="button" class="btn
        btn-danger Kg-button">Delete</button>
      </div>
    </div>
  </div>
)
}
export default TodoItems;