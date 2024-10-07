import {useState} from 'react'

const TodoInput = (props) => {
  const {handleAddTodos , todoValue , setTodoValue, handleClear} = props

  const handleSubmit = () => {
    if (todoValue.trim()) {
      handleAddTodos(todoValue);
      setTodoValue("");
    }
  }


  return (
    <header>
        <input 
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          onKeyDown={ (e) => { if(e.key === "Enter") handleSubmit()}}
          placeholder='Enter todo...'
        />
        <button onClick={handleSubmit}>Add</button>
        <button onClick={handleClear}>Clear</button>
    </header>
  )
}

export default TodoInput
