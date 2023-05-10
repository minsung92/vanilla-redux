import React from 'react';
import { actionCreators } from '../store';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(actionCreators.deleteToDo(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onClick}>DEL</button>
      </Link>
    </li>
  );
}

export default ToDo;
