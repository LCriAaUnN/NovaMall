import './signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoImage from './img/logo.png';
import api from '../api';

const SignUpForm = ({route = "/user/register/", method = "register"}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmedPasswordChange = (event) => {
    setConfirmedPassword(event.target.value);
  };

  const showMessage = (message, isSuccess) => {
    const messageBox = document.createElement("div");
    messageBox.textContent = message;
    messageBox.className = `message-box ${isSuccess ? "success" : "failure"}`;
    document.body.appendChild(messageBox);

    setTimeout(() => {
      document.body.removeChild(messageBox);
    }, 1000);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

   
    if (password === confirmedPassword && password) {
      try {
        console.log("Route:", route);
        const rest = await api.post(route, { username, email, password })
        showMessage("Registration Successful!", true);
        setTimeout(() => navigate('/login'), 1000); // 假设注册成功后1秒钟跳转到登录页面\
      }
      catch (error) {
        console.error(error);
        showMessage("Registration  failed. Please try again.", false);
      }
      
      
    } else {
      showMessage("Password is invalid or not confirmed. Please try again.", false);
    }
  };

  return (
    <div className="signup-page">
      <Link to="/Home" className="back-button-container">
        <button className="back-button">Back</button>
      </Link>
      <img src={logoImage} alt="Logo" className="name"/>
      
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" value={confirmedPassword} onChange={handleConfirmedPasswordChange} />
          </div>
          <div className="action-buttons">
          <Link to="/login">
              <button type="button" className="login">Log in</button>
            </Link>
            <button type="button" onClick={handleSignUp} className="signup">Sign Up</button>
            {/* <Link to="/login">
              <button type="button" className="login">Log in</button>
            </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;


