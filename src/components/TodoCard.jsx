import React  from 'react'

const TodoCard = (props) => {
    const {children , index, handleDelete, handleEdit} = props;

  return (
    <li className="todoItem" key={index}>
        {children}
        <div className='actionsContainer'>
            <button onClick={ () => {
              handleEdit(index)
            }}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={ () => {
                handleDelete(index);
              }}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
  )
}

export default TodoCard
