import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '../../Store/actions/todo.action';

import './styles.css';

const NewTodo = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div id='input-todo'>
      <input
        type='text'
        placeholder='Add new todo'
        value={inputValue}
        onChange={inputChange}
      />
      <button onClick={() => dispatch(addTodo(inputValue))}>ADD</button>
    </div>
  );
};

export default connect()(NewTodo);
