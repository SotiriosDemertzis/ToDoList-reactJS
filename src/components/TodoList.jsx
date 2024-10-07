import React from 'react'
import TodoCard from './TodoCard';

const TodoList = (props) => {
    const {todos, handleDelete, handleEdit} = props;

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
            <TodoCard key={todoIndex} index={todoIndex} handleDelete={handleDelete} handleEdit={handleEdit}>
                <p>{todo}</p>
            </TodoCard>
        )
      })}
    </ul>
  )
}

export default TodoList
