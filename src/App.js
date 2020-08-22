import React, { useEffect, useState } from 'react';
import './App.css';
import { getTodos, addTodo } from './Requests';

function App() {
  const [ todoList, updateTodoList ] = useState([]);
  const [ inputTitleValue, updateInputTitleValue ] = useState('');

  useEffect(() => {
    getTodos().then(resp => {
      updateTodoList(resp.data);
    })
  }, [])

  const addNewTodo = event => {
    event.preventDefault();
    addTodo({title: inputTitleValue}).then(() => {
      getTodos().then(resp => {
        updateTodoList(resp.data)
      })
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
            <button onClick={addNewTodo}>ADD TODO</button>
          </form>

        <ul>
          {todoList.map( todo => {
            return (
              <li key={todo.id}>
                <h2>{todo.title}</h2>
                <span>{todo.author}</span>
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
