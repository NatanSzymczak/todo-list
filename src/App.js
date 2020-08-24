import React, { useEffect, useState } from 'react';
import './App.css';
import { getTodos, deleteTodo } from './Requests';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/TodoList';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';

function App() {
  const [ todoList, updateTodoList ] = useState([]);
  const [ isModalOpen, toggleModal ] = useState(false);
  const [ editedTodo, changeEditedTodo ] = useState({});

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

  const openEditModal = todo => {
    changeEditedTodo(todo);
    toggleModal(true);
  }

  const closeEditModal = () => {
    changeEditedTodo({});
    toggleModal(false);
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
              openEditModal={openEditModal}
            />
        </div>
        { isModalOpen && <Modal todo={editedTodo} getAndRenderTodos={getAndRenderTodos} closeModal={closeEditModal} /> }
      </main>
      <Footer />
    </>
  );
}

export default App;