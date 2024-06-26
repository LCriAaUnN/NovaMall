import './login.css'; 
import api from '../api';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoImage from './img/logo.png';
//import LoadingIndicator from "./LoadingIndicator";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

const LoginForm = ({ route = "token/" , method = "login"}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState('user');
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'failure'
  const navigate = useNavigate();

  
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    if (event.target.value === 'admin') {
      navigate('/admin_login'); 
    }
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
    setLoading(true)
    event.preventDefault();
    
    // check if the username and password are empty
    if (!username) {
      displayMessage('failure', 'Please input your username.');
      setLoading(false);  
      return;  
    }
    
    // check if the password is empty
    if (!password) {
        displayMessage('failure', 'Please input your password.');
        setLoading(false); 
        return; 
    }

    // check if the username is NovaMall
    if(username === "NovaMall") {
        displayMessage('failure', 'This username is not allowed to login. Please try another one.');
        setLoading(false);
        return;
    }

    // use the api to send the username and password to the server
    try {
        console.log("Route:", route);
        const res = await api.post(route, { username, password });
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/home"); // if login is successful, navigate to home page
    } catch (error) { // if login is unsuccessful, display error message
        console.log("Error:", error);
        displayMessage('failure', 'Login failed. Please check your Username or Password and try again.');
    } finally {
        setLoading(false); 
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
          <div className="form-group-login">
            <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="form-group-login">
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="action-buttons">
          <Link to="/signup" className="signup-link">
              <button type="button" className="signup">Sign Up</button>
            </Link>
            <button type="submit" className="login"> Log in </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
