// src/actions/todoActions.js
export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
  });
  
  export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    payload: id,
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id,
  });
  
  export const editTodo = (id, task) => ({
    type: 'EDIT_TODO',
    payload: { id, task },
  });
  export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO='TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';






