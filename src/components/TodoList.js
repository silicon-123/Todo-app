import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TodoList.css';
import TodoItem from './TodoItem';
import { deleteTodo, editTodo, toggleTodo } from '../actions/todoActions';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  
  // Retrieve username from localStorage
  const storedUser = JSON.parse(localStorage.getItem('registeredUser'));
  
  return (
    <div className="todo-list-page">
      {/* Display username at the top */}
      <div className="username-display">
        <h2>{storedUser.username}, here are your tasks:</h2>
      </div>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Type</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={(id) => dispatch(toggleTodo(id))}
              deleteTodo={(id) => dispatch(deleteTodo(id))}
              editTodo={(id, task) => dispatch(editTodo(id, task))}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
