import React, { useState } from "react";
import TaskDisplay from "./TaskDisplay";

function Task() {
  const [task, setTask] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  const handleTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return; 
    setAllNotes((prev) => [...prev, task]);
    setTask("");
  };


  console.log('component Task')

  return (
    <div>
      <form onSubmit={handleTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">AddTask</button>
      </form>

      <TaskDisplay allNotes={allNotes} setAllNotes={setAllNotes}/>
    </div>
  );
}

export default Task;