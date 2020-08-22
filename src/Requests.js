import axios from 'axios';

export const getTodos = () => {
  return axios.get('http://51.75.120.145:3000/todo');
}

export const addTodo = todo => {
  return axios.post('http://51.75.120.145:3000/todo', todo);
}

export const editTodo = (id, todo) => {
  return axios.put(`http://51.75.120.145:3000/todo/${id}`, todo);
}

export const deleteTodo = id => {
  return axios.delete(`http://51.75.120.145:3000/todo/${id}`);
}