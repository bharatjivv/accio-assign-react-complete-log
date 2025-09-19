import React from 'react'

const TodoList = ({todos, handleComplete}) => {

  return (
    <div>
      <h2>Child Component - inside todolist</h2>
      <ul>
            {
                todos.map(todo => (
                <li key={todo.id}>
                    <p>{todo.text}</p>
                    {
                        (!todo.completed) && (
                            <button onClick={() => handleComplete(todo.text)}>Complete</button>
                        ) 
                    }
                </li>

                ))
            }
      </ul>
    </div>
  )
}

export default TodoList
