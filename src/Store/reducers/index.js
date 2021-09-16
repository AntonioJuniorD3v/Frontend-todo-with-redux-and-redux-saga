import { todoReducer } from './todo.reducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  todos: todoReducer,
});
