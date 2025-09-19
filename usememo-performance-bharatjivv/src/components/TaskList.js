import React from "react";

const slowDown = (ms = 2) => {
  const start = performance.now();
  while (performance.now() - start < ms) {}
};

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => {
        slowDown(); // Simulate heavy rendering
        return (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} readOnly />{" "}
            {task.text}
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;