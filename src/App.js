import React, { useEffect, useState } from 'react';
import './App.css';
import { getTodos, deleteTodo } from './Requests';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/TodoList';

function App() {
  const [ todoList, updateTodoList ] = useState([]);


  const getAndRenderTodos = () => {
    getTodos().then(resp => {
      updateTodoList(resp.data);
    })
  }

  useEffect(() => {
    getAndRenderTodos();
  }, [])

  const deleteTodoAndRenderList = id => {
    deleteTodo(id).then(() => {
      getAndRenderTodos();
    })
  }

  return (
    <>
      <nav></nav>
      <main>
        <div className="container">
          <h1>Todo list</h1>
            <TodoForm updateTodoList={getAndRenderTodos}/>
            <TodoList
              todoList={todoList}
              deleteTodoAndRenderList={deleteTodoAndRenderList}
            />
        </div>
      </main>
      <footer>
        <div className="container">
          <p>All rights reserved 2020 (c)</p>
        </div>
      </footer>
    </>
  );
}

export default App;
