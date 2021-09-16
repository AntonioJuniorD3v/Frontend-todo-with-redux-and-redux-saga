import {
  SUCCESS_ADD_TODO,
  SUCCESS_REMOVE_TODO,
  SUCCESS_UPDATE_TODO,
  SUCCESS_TODO_LIST,
  FAILURE_TODO_LIST,
} from '../actions/actionTypes';

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_TODO_LIST:
    case SUCCESS_ADD_TODO:
    case SUCCESS_UPDATE_TODO:
    case SUCCESS_REMOVE_TODO:
      return action.payload;
    case FAILURE_TODO_LIST:
      return [];
    default:
      return state;
  }
};
