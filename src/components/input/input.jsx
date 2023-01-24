import React from 'react'

export const Input = ({todo, setTodo, addTodo}) => {
  return (
    <div className='input-wrapper'>
        <input 
            type="text"
            name="todo"
            value={todo}
            placeholder="Create new todo"
            onChange={(e) => {  
                setTodo(e.target.value)
            }}
        />
        <button className='add-button' onClick={addTodo}>
            Add
        </button>
    </div>
  )
}
