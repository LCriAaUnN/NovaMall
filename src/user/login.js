import './login.css'; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const navigate = useNavigate();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check if the entered username and password match the admin credentials
    if (userType === 'admin' && username === 'Admin' && password === 'Admin') {
      navigate('/admin');
    }
    // Check if the entered username and password match the user credentials
    else if (userType === 'user') {
      if (username === 'user' && password === 'user') {
        navigate('/user');
      }
      try {
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }), // Modify the body to match the expected keys in the server code
        });

        const data = await response; //.json();

        if (response.ok) {
          const path = userType === 'admin' ? '/admin' : '/user';
          navigate(path);
        } else {
          console.error('Login failed:', data.error);
          alert('Login failed. Please check your Username or Password and try again.');
        }
      } catch (error) {
        console.error('Network error:', error);
        alert('Login failed due to a network error. Please try again later.');
      }
    } else {
      alert('Login failed. Please check your Username or Password and try again.');
    }
  };

  return (
    <div className="login-page">
      <Link to="/Home" className="back-button-container">
        <button className="back-button">Back</button>
      </Link>
      <h1 className="name">NovaMall</h1>
      
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="toggle-container">
            <label>
              <input
                type="radio"
                value="user"
                checked={userType === 'user'}
                onChange={handleUserTypeChange}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                value="admin"
                checked={userType === 'admin'}
                onChange={handleUserTypeChange}
              />
              Admin
            </label>
          </div>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleUsernameChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div>
            <button type="submit" className="login">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;