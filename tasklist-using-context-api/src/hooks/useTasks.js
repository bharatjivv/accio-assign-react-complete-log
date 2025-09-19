import { useState } from 'react';

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };

        setTasks(prevTasks => [...prevTasks, newTask]);
    }

    const deleteTask = (id) => {
        setTasks(prevTasks => 
            prevTasks.filter(task => task.id !== id)
        )
    }

    const toggleComplete = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task => task.id === id ? {...task, completed: !task.completed} : task)
        )
    }

    
    return { tasks, addTask, toggleComplete, deleteTask };
}

