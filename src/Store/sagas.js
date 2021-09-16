import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  successTodoList,
  successAddTodo,
  successUpdateTodo,
  successRemoveTodo,
} from './actions/todo.action';

import {
  REQUEST_TODO_LIST,
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
} from './actions/actionTypes';
import { addTodo, getAllTodo, updateTodo, removeTodo } from '../services/todo';

function* getTodoList() {
  try {
    const response = yield call(getAllTodo);
    yield put(successTodoList(response));
  } catch (err) {
    yield put({ type: 'FAILURE_TODO_LIST' });
  }
}

function* addTodoList({ payload }) {
  try {
    const response = yield call(addTodo, payload);
    yield put(successAddTodo(response));
  } catch (err) {
    yield put({ type: 'FAILURE_TODO_LIST' });
  }
}

function* updateTodoList({ payload }) {
  try {
    const response = yield call(updateTodo, payload);
    yield put(successUpdateTodo(response));
  } catch (err) {
    yield put({ type: 'FAILURE_TODO_LIST' });
  }
}

function* removeTodoList({ payload }) {
  try {
    const response = yield call(removeTodo, payload);
    yield put(successRemoveTodo(response));
  } catch (err) {
    yield put({ type: 'FAILURE_TODO_LIST' });
  }
}

export default function* root() {
  yield all([
    takeLatest(REQUEST_TODO_LIST, getTodoList),
    takeLatest(ADD_TODO, addTodoList),
    takeLatest(UPDATE_TODO, updateTodoList),
    takeLatest(REMOVE_TODO, removeTodoList),
  ]);
}
