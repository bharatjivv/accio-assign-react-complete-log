import React from "react";

function ShowTodos({ allTodos, setAllTodos, todo, setTodo }) {
  const handleCompleted = (date) => {
    setAllTodos((prev) => {
      return prev.map((todo) =>
        todo.date === date ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const handleDelete = (date) => {
    setAllTodos((prev) => prev.filter((todo) => todo.date !== date))
  }

  return (
    <>
      <ul>
        {allTodos.map((todo) => (
          <li
            key={todo.date}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "pink" : "black",
            }}
          >
            {todo.todo}
            <button onClick={() => handleCompleted(todo.date)}>
              {" "}
              {todo.completed ? "notDone" : "Completed"}
            </button>

            <button onClick={() => handleDelete(todo.date)}>
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default React.memo(ShowTodos);
