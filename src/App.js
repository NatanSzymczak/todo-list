import React, { useEffect, useState } from 'react';
import './App.css';
import { getTodos, deleteTodo } from './Requests';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/TodoList';
import Footer from './Components/Footer/Footer';

function App() {
  const [ todoList, updateTodoList ] = useState([]);

  useEffect(() => {
    getAndRenderTodos();
  }, [])

  const getAndRenderTodos = () => {
    getTodos().then(resp => {
      updateTodoList(resp.data);
    })
  }

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
      <Footer />
    </>
  );
}

export default App;
