// import TaskItem from "./TaskItem";

// const TaskList = ({ tasks, onComplete, onDelete }) => {
//     if(tasks.length === 0) return <p>No Tasks. What's on your mind...</p>

//     return (
//         <ul>
//             {
//                 tasks.map(task => (
//                     <TaskItem 
//                         key={task.id}
//                         task={task}
//                         onComplete={onComplete}
//                         onDelete={onDelete}
//                     />
//                 ))
//             }
//         </ul>
//     );
    
// }

// export default TaskList;

import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
