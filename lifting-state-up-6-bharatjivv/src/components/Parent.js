import React,{useState}from "react"

import Child from "./child"

const todoList=[{
    text:"Learn React",
    completed:false
},{
    text:"Build a React app",
    completed:false
},{
    text:"Deploy the React app",
    completed:false
}]


const Parent=()=>{
    const [todos,setTodos]=useState(todoList)

    const handleTodoState=(text)=>{
       const reWrite=todos.map(each=>each.text===text?{text:each.text,completed:true}:each)
       setTodos(reWrite)
    }

    return(
        <div>
             <h1>Parent Component</h1>
             <Child todos={todos} handleTodoState={handleTodoState}/>
        </div>
    )

}

export default Parent
