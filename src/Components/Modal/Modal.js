import React from 'react';
import TodoForm from '../TodoForm/TodoForm';
import './Modal.css'

function Modal({todo, getAndRenderTodos, closeModal}) {
  const onEditSave = () => {
    getAndRenderTodos();
    closeModal();
  }

  return (
    <div className="todo-modal">
      <button className="todo-modal-close" onClick={closeModal}>
        X
      </button>
      <div className="container">
        <h1 className="todo-modal-heading">Edit todo</h1>
        <TodoForm editedTodo={todo} updateTodoList={onEditSave} />
      </div>
    </div>
  )
}

export default Modal;