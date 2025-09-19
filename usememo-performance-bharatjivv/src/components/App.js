import React, { useMemo, useState } from "react";
import { generateTasks } from "./tasks";
import TaskList from "./TaskList";

const App = () => {
  const [tab, setTab] = useState("all"); // all | active | completed
  const [darkMode, setDarkMode] = useState(false);

  const tasks = useMemo(() => generateTasks(), []);

  const filteredTasks = useMemo(() => {
    console.log("Filtering tasks for:", tab);
    switch (tab) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }, [tab, tasks]);

  const appStyle = {
    background: darkMode ? "#222" : "#fff",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "Arial",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h1>📝 useMemo Performance Todo App</h1>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setTab("all")}>All</button>
        <button onClick={() => setTab("active")}>Active</button>
        <button onClick={() => setTab("completed")}>Completed</button>
        <button onClick={() => setDarkMode(!darkMode)} style={{ float: "right" }}>
          Toggle {darkMode ? "☀️ Light" : "🌙 Dark"} Mode
        </button>
      </div>

      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default App;