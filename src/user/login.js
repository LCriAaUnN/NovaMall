import './login.css'; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoImage from './img/logo.jpg';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'failure'
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

  const displayMessage = (type, content) => {
    setMessageType(type);
    setMessageContent(content);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1000); // Hide the message box after 5 seconds
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
      } else {
        try {
          const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }), // Modify the body to match the expected keys in the server code
          });

          if (response.ok) {
            navigate('/user');
          } else {
            displayMessage('failure', 'Login failed. Please check your Username or Password and try again.');
          }
        } catch (error) {
          displayMessage('failure', 'Login failed. Please check your Username or Password and try again.');
        }
      }
    } else {
      displayMessage('failure', 'Login failed. Please check your Username or Password and try again.');
    }
  };

  return (
    <div className="login-page">
      {showMessage && (
        <div className={`message-box ${messageType}`}>
          {messageContent}
        </div>
      )}
      <Link to="/Home" className="back-button-container">
        <button className="back-button">Back</button>
      </Link>
      <img src={logoImage} alt="NovaMall Logo" className="name"/>
      
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
          <div className="form-group">
            <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="action-buttons">
            <button type="submit" className="login">Log in</button>
            <Link to="/signup" className="signup-link">
              <button type="button" className="signup">Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
