
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";
import Parent from "./Parent";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn HTML', completed: false },
    { id: 3, text: 'Learn Javascript', completed: false }
  ]);

  const handleComplete = (text) => {
    setTodos((prevTodos) => {
      const updated = prevTodos.map(todo => todo.text === text ? {text:todo.text, completed: true } : todo);
      console.log("updated todos : ", updated)
      return updated;
    });
  };
  
  return (
    <div>
        {/* Do not remove the main div */}
         <h1>Parent component</h1>
        <TodoList todos = {todos} handleComplete = {handleComplete}/>
        {/* <Parent /> */}
    </div>
  )
}

export default App
