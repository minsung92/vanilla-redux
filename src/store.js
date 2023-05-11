import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

localStorage.setItem('toDos', JSON.stringify([]));
const toDoObj = JSON.parse(localStorage.getItem('todos'));

const reducer = (state = toDoObj, action) => {
  switch (action.type) {
    case ADD:
      const newToDo = { text: action.text, id: Date.now() };
      localStorage.setItem('todos', JSON.stringify([...state, newToDo]));
      return JSON.parse(localStorage.getItem('todos'));
    case DELETE:
      const delToDo = state.filter((toDo) => toDo.id !== action.id);
      localStorage.setItem('todos', JSON.stringify(delToDo));
      return JSON.parse(localStorage.getItem('todos'));
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
