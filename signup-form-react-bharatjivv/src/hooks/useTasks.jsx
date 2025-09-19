import { useState } from "react"

export const useTasks = () => {
    const [ tasks, setTasks ] = useState([]);

    const addTasks = () => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        }

        setTasks([...prevTasks, newTask]);

    }

    const deleteTasks = (id) => {

    }

    const toggleComplete = (id) => {

    }


     return {tasks, addTasks, toggleComplete, deleteTasks};
}