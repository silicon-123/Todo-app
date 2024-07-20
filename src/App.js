import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Logout from './components/Logout';
import { addTodo, toggleTodo, deleteTodo, editTodo } from './actions/todoActions';
import { login, logout } from './actions/authActions';
import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const user = useSelector((state) => state.user);

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id) => {
    const newTask = prompt('Edit your task:', todos.find((todo) => todo.id === id).task);
    if (newTask && newTask.trim()) {
      dispatch(editTodo(id, newTask));
    }
  };

  const handleLogin = (user) => {
    dispatch(login(user));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <Routes>
        {user ? (
          <>
            <Route
              path="/todo"
              element={
                <>
                  <Logout onLogout={handleLogout} />
                  <Link to="/todo">Add Todo</Link>
                  <TodoList
                    todos={todos}
                    toggleComplete={handleToggleTodo}
                    deleteTodo={handleDeleteTodo}
                    editTodo={handleEditTodo}
                  />
                </>
              }
            />
            <Route
              path="/todo"
              element={<TodoForm addTodo={handleAddTodo} />}
            />
            <Route path="*" element={<Navigate to="/todo" />} />
          </>
        ) : (
          <>
            <Route path="/todo" element={<TodoForm/>}/>
            <Route path="/todolist" element={<TodoList/>}/>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
            <Route path="/" element={<Navigate to="/register" />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;