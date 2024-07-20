import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      console.log('Login successful');
      navigate('/todo');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-form-container">
      <div className="form-wrapper">
        <div className="form-section">
          <form onSubmit={handleLogin} className="login-form">
            <h2>Login</h2>
            <label>
              Username
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="image-section">
          <img src="https://uploads.sitepoint.com/wp-content/uploads/2016/06/14691935581467021528ill-01.png" alt="Login illustration" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
