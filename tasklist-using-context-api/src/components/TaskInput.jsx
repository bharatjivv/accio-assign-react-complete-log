// import { useState } from "react";

// const TaskInput = ({ onAdd }) => {
//     const [ text, setText ] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if(!text.trim()) return ;
//         onAdd(text);
//         setText('');
//     }
    
    
//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//                 type="text"
//                 placeholder="Enter task ..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             />
//             <button type="submit">Add Task</button>
//         </form>
//     );
// }

// export default TaskInput;



import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskInput = () => {
  const { addTask } = useContext(TaskContext);
  const [formData, setFormData] = useState({
    entityName: "",
    taskType: "",
    time: "",
    contactPerson: "",
    note: "",
    status: "open",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...formData,
      id: Date.now().toString(),
    };
    addTask(newTask);
    setFormData({
      entityName: "",
      taskType: "",
      time: "",
      contactPerson: "",
      note: "",
      status: "open",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="entityName"
        placeholder="Entity Name"
        value={formData.entityName}
        onChange={handleChange}
      />
      <input
        name="taskType"
        placeholder="Task Type"
        value={formData.taskType}
        onChange={handleChange}
      />
      <input
        name="time"
        placeholder="Time"
        value={formData.time}
        onChange={handleChange}
      />
      <input
        name="contactPerson"
        placeholder="Contact Person"
        value={formData.contactPerson}
        onChange={handleChange}
      />
      <textarea
        name="note"
        placeholder="Note"
        value={formData.note}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
