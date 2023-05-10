import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store';

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const toDo = useSelector((state) => state);
  const detail = toDo.find((toDo) => toDo.id === parseInt(params.id));

  const onDelete = () => {
    dispatch(actionCreators.deleteToDo(parseInt(params.id)));
    navigate('/');
  };
  return (
    <>
      <h1>Detail</h1>
      {detail && (
        <>
          <h2>{detail.text}</h2>
          <h5>Created at: {detail?.id}</h5>
          <button onClick={onDelete}>DEL</button>
        </>
      )}
    </>
  );
}

export default Detail;
