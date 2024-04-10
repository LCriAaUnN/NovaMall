import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './userinfo.css';
import api from "../api";

const UserInfo = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);
    const [users, setUser] = useState([]); // State to store user data
    const [editedUser, setEditedUser] = useState({ name: '', email: '' });
  
    useEffect(() => {
      getUser();
    }, []);
  
    const getUser = () => {
        api
          .get('/user/profile/')
          .then((res) => res.data) 
          .then((data) => {setUser(data); console.log(data);})
          .catch((err) => alert(err));
    };
    
    const user = users[0] || {}; // Get the first user object from the array
    

  const handleEditClick = () => {
      setIsEditing(true);  // When the Edit button is clicked, show the edit form
  };

  const handleCancelClick = () => {
      setIsEditing(false);  // Hide the edit form without saving changes
  };

  const renderProfileEditForm = () => {
    if (!isEditing) return null;

    // Handle form field changes and update the state
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEditedUser({ ...editedUser, [id]: value });
  };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await api.put('', editedUser);
          if (response.status === 200) {
            setUser([response.data]);
            setIsEditing(false);  // Hide the edit form after saving changes
            
          } else {
            console.error('Failed to update profile. Status code:', response.status);
          }
        } catch (error) {
          console.error('There was an error updating the profile:', error);
        }
      };

    return (
        <div className="profile-edit-form-wrapper">
        <div className="profile-edit-form">
          <h3>Edit Profile</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={editedUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={editedUser.email}
                onChange={handleInputChange}
              />
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
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email }</p>
            
            {isEditing && renderProfileEditForm()}
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