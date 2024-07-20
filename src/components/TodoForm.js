import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo } from '../actions/todoActions';
import './TodoForm.css';

const TodoForm = () => {
  const [task, setTask] = useState('');
  const [taskType, setTaskType] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Retrieve and parse username from localStorage
  const storedUserString = localStorage.getItem('registeredUser');
  let username = 'Guest'; // Default username if not found

  if (storedUserString) {
    try {
      const storedUser = JSON.parse(storedUserString);
      username = storedUser.username || 'Guest'; // Fallback if username is missing
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && taskType.trim()) {
      const newTodo = {
        id: Date.now(),
        task,
        taskType,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setTask('');
      setTaskType('');
      navigate('/todolist'); // Navigate to the todo list page
    }
  };

  return (
    <div className="form-background">
      <div className="username-display">
          <h2>Welcome, {username}!</h2>
        </div>
      <div className="form-container">
        
        
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
          <select
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            required
          >
            <option value="" disabled>Select task type</option>
            <option value="School">School</option>
            <option value="Homework">Homework</option>
            <option value="College">College</option>
            <option value="Office">Office</option>
            <option value="House">House</option>
          </select>
          <button type="submit">Add Todo</button>
        </form>
        <div className="form-image">
          <img src="https://static.vecteezy.com/system/resources/previews/019/015/370/non_2x/flat-people-fill-out-a-form-done-job-long-paper-document-and-to-do-list-with-checkboxes-concept-outline-design-style-minimal-illustration-for-landing-page-web-banner-hero-images-vector.jpg" alt="Placeholder" />
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
