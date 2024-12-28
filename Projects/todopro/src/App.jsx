
import AppName from "./Components/AppName";
import Addtodo from "./Components/Addtodo";
import TodoItems from "./Components/TodoItems";
import TodoItem1 from "./Components/TodoItem1";
import "./App.css";


function App() {
  return (
   <center className="todo-container">
   < AppName />
   <Addtodo />
   <div className='items-container'>
   <TodoItems />
   <TodoItem1></TodoItem1>
   </div>
   </center>
  );
}
export default App;
