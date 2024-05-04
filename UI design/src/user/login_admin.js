import './login_admin.css'; 
import api from '../api';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoImage from './img/logo.png';
//import LoadingIndicator from "./LoadingIndicator";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Admin from '../admin/admin';

const AdminLogin = ({ route = "token/" , method = "login"}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState('admin');
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'failure'
  const navigate = useNavigate();

  // function to handle user type change
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    if (event.target.value === 'user') {
      navigate('/login'); 
    }
  };

  // function to get username
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // function to get password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // function to display message
  const displayMessage = (type, content) => {
    setMessageType(type);
    setMessageContent(content);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1000); // Hide the message box after 5 seconds
  };

  // function to handle form submit
  const handleFormSubmit = async (event) => {
    setLoading(true)
    event.preventDefault();

    // check if the username is NovaMall and password is correct
    if(username === "NovaMall") {
      try {
        console.log("Route:", route);
        const res = await api.post(route, { username, password })
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/admin") // if login is successful, navigate to admin page
      } catch (error) { // if login is unsuccessful, display error message
        console.log("Error:", error); 
        displayMessage('failure', 'Login failed. Please check your Username or Password and try again.');
      }
    }
    else { // if username is not NovaMall, display error message
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
          <div className="form-group-login-admin">
            <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="form-group-login-admin">
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="action-buttons">
            <button type="submit" className="login">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
