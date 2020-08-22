import React, { useEffect, useState } from 'react';
import './App.css';
import { getTodos, addTodo, deleteTodo } from './Requests';

function App() {
  const [ todoList, updateTodoList ] = useState([]);
  const [ inputTitleValue, updateInputTitleValue ] = useState('');
  const [ textareaValue, updateTextareaValue ] = useState('');

  const getAndRenderTodos = () => {
    getTodos().then(resp => {
      updateTodoList(resp.data);
    })
  }

  useEffect(() => {
    getAndRenderTodos();
  }, [])

  const addNewTodo = event => {
    event.preventDefault();

    let newTodo = {
      title: inputTitleValue,
      description: textareaValue,
    }

    addTodo(newTodo).then(() => {
        updateInputTitleValue('');
        updateTextareaValue('');
        getAndRenderTodos();
    })
  }

  const deleteTodoFromList = id => {
    deleteTodo(id).then(() => {
      getAndRenderTodos();
    })
  }

  return (
    <>
      <nav></nav>
      <main>
        <h1>Todo list</h1>

          <form>
            <input
              onChange={event => {updateInputTitleValue(event.target.value)}}
              value={inputTitleValue}
              type="text"
              placeholder="Enter title"
            />

            <textarea
              onChange={event => {updateTextareaValue(event.target.value)}}
              value={textareaValue}
              placeholder="Enter description"
            />

            <button onClick={addNewTodo}>ADD TODO</button>
          </form>

        <ul>
          {todoList.map( todo => {
            return (
              <li key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <button onClick={() => { deleteTodoFromList(todo.id) }}>DELETE</button>
              </li>
            )
          })}
        </ul>
      </main>
      <footer>
        <p>All rights reserved 2020 (c)</p>
      </footer>
    </>
  );
}

export default App;
