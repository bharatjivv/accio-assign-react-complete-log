import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("ALL");

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), title: text, completed: false }
    ]);

    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "COMPLETED") return todo.completed;
    if (filter === "PENDING") return !todo.completed;
    return true;
  });

  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>Add</button>

      <div>
        <button onClick={() => setFilter("ALL")}>All</button>
        <button onClick={() => setFilter("COMPLETED")}>Completed</button>
        <button onClick={() => setFilter("PENDING")}>Pending</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
