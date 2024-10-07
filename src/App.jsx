import React, { useState , useEffect } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  
  const [todos,setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const persistData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
    console.log('Current localStorage: ', JSON.parse(localStorage.getItem('todos')));
  }

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos,newTodo];
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  const handleDelete = (index) => {
    const newTodoList = todos.filter( (todo,todoIndex) => {
      return todoIndex !== index;
    })
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  const handleEdit = (index) => {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDelete(index);
  }

  const handleClear = () => {
    setTodos([]);
    persistData([]);
  }

  useEffect( () => {
    console.log('Initial localStorage:', JSON.parse(localStorage.getItem('todos')));

    if(!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos');
    if(!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);

  } , [])

  return (
    <>
      <TodoInput todoValue={todoValue} handleAddTodos={handleAddTodos} setTodoValue={setTodoValue} handleClear={handleClear}/>
      <TodoList todos={todos} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}

export default App
