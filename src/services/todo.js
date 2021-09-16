import api from './api';

export async function getAllTodo() {
  const response = await api
    .get('todos')
    .then((response) => response)
    .catch((err) => err);

  return response.data;
}

export async function addTodo(data) {
  const response = await api
    .post('todos', { value: data })
    .then((response) => response)
    .catch((err) => err);

  return response.data;
}

export async function updateTodo(id) {
  const response = await api
    .put(`todos/${id}`)
    .then((response) => response)
    .catch((err) => err);

  return response.data;
}

export async function removeTodo(id) {
  const response = await api
    .delete(`todos/${id}`)
    .then((response) => response)
    .catch((err) => err);

  return response.data;
}
