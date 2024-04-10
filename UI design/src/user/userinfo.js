import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './userinfo.css';
import api from "../api";

const UserInfo = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);  // State to manage the display of the edit form

  const handleEditClick = () => {
      setIsEditing(true);  // When the Edit button is clicked, show the edit form
  };

  const handleCancelClick = () => {
      setIsEditing(false);  // Hide the edit form without saving changes
  };

  const renderProfileEditForm = () => {
    if (!isEditing) return null;

    return (
        <div className="profile-edit-form-wrapper"> {/* Wrapper for positioning */}
            <div className="profile-edit-form">
                <h3>Edit Profile</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" defaultValue="Jane Doe" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" defaultValue="janedoe@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" defaultValue="New York, USA" />
                    </div>
                    <div className="form-buttons">
                        <button type="button" onClick={handleCancelClick}>Cancel</button>
                        <button type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

  const renderProfile = () => {
      return (
          <div className="tab-content">
              <div className="profile-header">
                  <h2>Profile</h2>
                  <button onClick={handleEditClick} className="edit-button">Edit</button>
              </div>
              <p><strong>Nam≠e:</strong> Jane Doe</p>
              <p><strong>Email:</strong> janedoe@example.com</p>
              <p><strong>Location:</strong> New York, USA</p>
              {renderProfileEditForm()}
          </div>
      );
  };

  const renderContent = () => {
      switch (activeTab) {
          case 'profile':
              return renderProfile();
          default:
              return <div>Welcome to your Dashboard!</div>;
      }
  };

    return (
        <div className="main-layout">
            <div className="login-button">
                <Link to="/home">
                    <button>Home</button>
                </Link>
            </div>
            <header className="main-header">
                <h1>NovaMall</h1>
            </header>
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li>
                            <button 
                                onClick={() => setActiveTab('profile')} 
                                className={activeTab === 'profile' ? 'active' : ''}
                            >
                                Profile
                            </button>
                        </li>
                        
                    </ul>
                </nav>
            </aside>
            <main className="content">
                {renderContent()}
            </main>
        </div>
    );
};

export default UserInfo;