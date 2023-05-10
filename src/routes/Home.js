import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

function Home(toDos) {
  const [text, setText] = useState('');

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    toDos.addToDo(text);
    setText('');
  }

  return (
    <>
      <h2>To DO</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{toDos && toDos.toDos.map((toDo) => <ToDo text={toDo.text} key={toDo.id} id={toDo.id} />)}</ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
