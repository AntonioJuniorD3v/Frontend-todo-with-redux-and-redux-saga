import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  removeTodo,
  updateTodo,
  requestTodoList,
} from '../../Store/actions/todo.action';
import './styles.css';

const Todos = ({ todos }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTodoList());
  }, [dispatch]);

  return (
    <table className='todo-table'>
      <thead>
        <tr>
          <th>Check</th>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo}>
            <td>
              <input
                type='checkbox'
                checked={todo.checked && true}
                id={todo.id}
                onChange={() => dispatch(updateTodo(todo.id))}
              />
            </td>
            <td>
              {todo.checked ? <s>{todo.value}</s> : <span>{todo.value}</span>}
            </td>
            <td>
              <button
                className='todo-table-btn'
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todos);
