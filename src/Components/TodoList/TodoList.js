import React from 'react';
import './TodoList.css';

function TodoList({ todoList, deleteTodoAndRenderList }) {


  return (
    <ul id="todolist">
      {todoList.map( todo => {
        return (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button onClick={() => { deleteTodoAndRenderList(todo.id) }}>
              DELETE
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList;