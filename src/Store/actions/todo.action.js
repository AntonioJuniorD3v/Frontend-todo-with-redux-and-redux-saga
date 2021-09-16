import {
  REQUEST_TODO_LIST,
  SUCCESS_TODO_LIST,
  ADD_TODO,
  SUCCESS_ADD_TODO,
  UPDATE_TODO,
  SUCCESS_UPDATE_TODO,
  REMOVE_TODO,
  SUCCESS_REMOVE_TODO,
} from './actionTypes';

//Action Creator
export const successTodoList = (value) => ({
  type: SUCCESS_TODO_LIST,
  payload: value,
});

export const requestTodoList = () => ({
  type: REQUEST_TODO_LIST,
});

export const addTodo = (value) => ({
  type: ADD_TODO,
  payload: value,
});

export const successAddTodo = (value) => ({
  type: SUCCESS_ADD_TODO,
  payload: value,
});

export const updateTodo = (id) => ({
  type: UPDATE_TODO,
  payload: id,
});

export const successUpdateTodo = (id) => ({
  type: SUCCESS_UPDATE_TODO,
  payload: id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const successRemoveTodo = (id) => ({
  type: SUCCESS_REMOVE_TODO,
  payload: id,
});
