import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = { username, email, phone, password };
    
    // Store user data in local storage
    localStorage.setItem('registeredUser', JSON.stringify(user));
    console.log('User registered and saved to localStorage:', user); // Debugging statement

    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div className="register-form-container">
      <div className="form-wrapper">
        <div className="form-section">
          <form onSubmit={handleSubmit} className="register-form">
            <h2>Register</h2>
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
              Email
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Phone Number
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="image-section">
          <img src="https://uploads.sitepoint.com/wp-content/uploads/2016/06/14691935581467021528ill-01.png" alt="Register illustration" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
