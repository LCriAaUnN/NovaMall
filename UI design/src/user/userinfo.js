import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './userinfo.css';
import api from "../api";

const UserInfo = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);
    // const [user, setUser] = useState([]); // State to store user data
  
    // useEffect(() => {
    //   getUser();
    // }, []);
  
    // const getUser = () => {

    //   api
    //     .get(`/user/profile/${username}/`)
    //     .then((res) => {
    //       setUser(res.data); 
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //         console.log('Error fetching user data:', err);
    //         alert('Error fetching user data:', err);
    //     });
    // };

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const getUsers = (username) => {
//     api
//       .get(`/user/list/${username}/`)
//       .then((res) => res.data) 
//       .then((data) => {setUsers(data); console.log(data);})
//       .catch((err) => alert(err));
//   };


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
                        <input type="text" id="name" defaultValue="ABC" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" defaultValue="ABC@example.com" />
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
            <p><strong>ID:</strong> {user?.id || 'Loading...'}</p>
            <p><strong>Name:</strong> {user?.username || 'Loading...'}</p>
            <p><strong>Email:</strong> {user?.email || 'Loading...'}</p>
            
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