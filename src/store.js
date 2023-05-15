import { createStore } from 'redux';
import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');
localStorage.setItem('todos', JSON.stringify([]));
const toDoObj = JSON.parse(localStorage.getItem('todos'));

// const reducer = (state = toDoObj, action) => {
//   switch (action.type) {
//     case addToDo.type:
//       const newToDo = { text: action.payload, id: Date.now() };
//       localStorage.setItem('todos', JSON.stringify([...state, newToDo]));
//       return JSON.parse(localStorage.getItem('todos'));
//     case deleteToDo.type:
//       const delToDo = state.filter((toDo) => toDo.id !== action.payload);
//       localStorage.setItem('todos', JSON.stringify(delToDo));
//       return JSON.parse(localStorage.getItem('todos'));
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      const newToDo = state.push({ id: Date.now(), text: action.payload });
      window.localStorage.setItem('todos', JSON.stringify([...state, newToDo]));
    })
    .addCase(deleteToDo, (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    });
});

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
