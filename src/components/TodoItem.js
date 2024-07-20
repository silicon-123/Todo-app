import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleEdit = () => {
    const newTask = prompt('Enter new task:', todo.task);
    if (newTask && newTask.trim() !== '') {
      console.log('Dispatching editTodo with:', todo.id, newTask);
      editTodo(todo.id, newTask);  // Dispatch the action with the updated task
    }
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTodo(todo.id);       // Dispatch the action to delete the todo
      navigate('/todo');     // Navigate to the /todolist page
    }
  };

  return (
    <tr className="todo-item">
      <td style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
        {todo.task}
      </td>
      <td>{todo.taskType}</td>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
      </td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoItem;
