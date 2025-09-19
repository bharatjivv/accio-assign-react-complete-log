// const TaskItem = ({ task, onComplete, onDelete }) => {
//     return (
//         <li>
//             <span style={{ textDecoration: task.completed ? 'line-through' : 'none'}}> {task.text}</span>
//             <button onClick={() => onComplete(task.id)}> ✔️ </button>
//             <button onClick={() => onDelete(task.id)}> 🗑️ </button>
//         </li>
//     )
// }

// export default TaskItem;


import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { deleteTask, toggleStatus } = useContext(TaskContext);

  return (
    <div>
      <p>
        {task.entityName} - {task.taskType} - {task.status}
      </p>
      <button onClick={() => toggleStatus(task.id)}>Toggle Status</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
