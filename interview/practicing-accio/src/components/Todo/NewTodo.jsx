import React, { useState } from "react";
import ShowTodos from './ShowTodos';

function NewTodo() {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);

    console.log('rendered newTodos.js')


  const handleTodo = async () => {
    const newTodo = {
      todo,
      completed: false,
      date: Date.now(),
    };
    setAllTodos((prev) => {
      const updatedTodo = [...prev, newTodo];
      return updatedTodo;
    });
    setTodo("");
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleTodo}>Submit</button>
        <ShowTodos allTodos={allTodos} setAllTodos={setAllTodos} todo={todo} setTodo={setTodo}/>
      
    </>
  );
}

export default React.memo(NewTodo);
