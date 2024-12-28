import React from 'react'
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from '../store/todo-items-store';
import { useContext } from 'react';
import { use } from 'react';


const WelcomeMessage = () =>{
    //const contextObj= useContext(TodoItemsContext);
   // const todoItems =contextObj.todoItems;

    //concept of destructering it means convert two line in one for example above two line converted in single line
    const { todoItems} = useContext(TodoItemsContext)
    return(
      todoItems.length === 0 &&<p className={styles.welcome}>Enjoy Your Day.</p>
    );
    
};
export default WelcomeMessage;