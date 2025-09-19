import React from "react";

const Child=({todos,handleTodoState})=>{
    return(
        <ul>
            <h2>Child component</h2>
            {
                todos.map(each=>{
                    return(
                        <li key={each.text}>
                            <p>{each.text}</p>
                            {!each.completed&&<button onClick={()=>handleTodoState(each.text)}>Completed</button>}
                        </li>
                    )
                })
            }
        </ul>
    )

}

export default Child;

