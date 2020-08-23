import React, { useState } from 'react';
import { addTodo } from '../../Requests';
import './TodoForm.css';

function TodoForm({ updateTodoList }) {
  const [ todoTitle, updateTodoTitle ] = useState('');
  const [ todoDesc, updateTodoDesc ] = useState('');
  const [ todoPrior, updateTodoPrior ] = useState('');

  const [ todoTitleValidation, updateTodoTitleValidation ] = useState('');
  const [ todoDescValidation, updateTodoDescValidation ] = useState('');
  const [ todoPriorValidation, updateTodoPriorValidation ] = useState('');

  const addNewTodo = event => {
    event.preventDefault();

    if (todoTitle.length < 3) {
      updateTodoTitleValidation('Tytuł musi mieć przynajmniej 3 znaki.');
    } else {
      updateTodoTitleValidation('');
    }

    if (todoDesc.length < 5) {
      updateTodoDescValidation('Opis musi mieć przynajmniej 5 znaków.');
    } else {
      updateTodoDescValidation('');
    }

    if ( Math.round(todoPrior) < 1 || Math.round(todoPrior) > 3 ) {
      updateTodoPriorValidation('Podaj priorytet w zakresie: 1-3.');
    } else {
      updateTodoPriorValidation('');
    }

    if ( todoTitleValidation.length || todoDescValidation.length || todoPriorValidation.length ) {
      return;
    }

    const newTodo = {
      title: todoTitle,
      description: todoDesc,
      priority: todoPrior,
    }

    addTodo(newTodo).then(() => {
      updateTodoTitle('');
      updateTodoDesc('');
      updateTodoPrior('');
      updateTodoList();
    })
  }

  return (
    <form>
      <div className="form-group">
        <label forhtml="todoTitle">Task title</label>
        <input
          type="text"
          className="form-control"
          id="todoTitle"
          aria-describedby="titleValidation"
          onChange={event => {updateTodoTitle(event.target.value)}}
          value={todoTitle}
          placeholder="Enter title"
        />
        <small id="titleValidation" class="form-text text-muted form-validation-error">{todoTitleValidation}</small>
      </div>

      <div className="form-group">
        <label forhtml="todoDesc">Task description</label>
        <input
          type="text"
          className="form-control"
          id="todoDesc"
          aria-describedby="descValidation"
          onChange={event => {updateTodoDesc(event.target.value)}}
          value={todoDesc}
          placeholder="Enter description"
        />
        <small id="descValidation" class="form-text text-muted form-validation-error">{todoDescValidation}</small>
      </div>

      <div className="form-group">
        <label forhtml="todoTitle">Priority</label>
        <input
          type="number"
          min="1"
          max="3"
          className="form-control"
          id="todoPrior"
          aria-describedby="priorValidation"
          onChange={event => {updateTodoPrior(event.target.value)}}
          value={todoPrior}
          placeholder="Priority"
        />
        <small id="priorValidation" class="form-text text-muted form-validation-error">{todoPriorValidation}</small>
      </div>



      <button className="btn btn-success" onClick={addNewTodo}>ADD TODO</button>
    </form>
  )
}

export default TodoForm;