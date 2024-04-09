// admin.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './admin.css'; 
import logoImage from './img/logo-1.jpg';
import api from "../api";

// Mock data import
//  import { products } from './data';


function Admin() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname.includes('product-management') ? 'products' : 'users';

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);


  const getUsers = () => {
    api
      .get('/user/list/')
      .then((res) => res.data) 
      .then((data) => {setUsers(data); console.log(data);})
      .catch((err) => alert(err));
  };

  // Function to remove user
  const handleRemoveUser = (userId) => {
    api
      .delete(`/user/delete/${userId}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getUsers();
      })
      .catch((error) => alert(error));
  };

  // Function to remove product
  const handleRemoveProduct = (productId) => {
    console.log('Product removed, ID:', productId);

  };

  const handleLogout = () => {
    // 显示确认对话框
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      // 用户确认登出，导航到登出页面
      navigate('/logout');
    }
    // 如果用户选择“取消”，则不做任何操作，留在当前页面
  };

  return (
    <div className="admin-container">
      <nav className="admin-nav">
        <img src={logoImage} alt="Logo" className="admin-logo" />
        <button className={activeTab === 'users' ? 'active' : ''} onClick={() => navigate('/admin')}>User Management</button>
        <button className={activeTab === 'products' ? 'active' : ''} onClick={() => navigate('/product-management')}>Product Management</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </nav>
      <div className="admin-content">
        <div className="admin-header">
          {activeTab === 'users' ? 'User Management' : 'Product Management'}
        </div>
        {activeTab === 'users' && (
          <Users
            users={users}
            onEdit={() => {}}
            onRemove={handleRemoveUser}
          />
        )}
        {activeTab === 'products' && (
          <Products
            products={products}
            onEdit={() => {}}
            onRemove={handleRemoveProduct}
          />
        )}
      </div>
    </div>
  );
}

function Users({ users, onEdit, onRemove }) {
  return (
    <div className="user-section">
      <input className="search-input" placeholder="Search User" />
      <div className="user-table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>
                  <button className="edit-btn" onClick={() => onEdit(user.id)}>Edit</button>
                  <button className="remove-btn" onClick={() => onRemove(user.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Products({ products, onEdit, onRemove }) {
  return (
    <div className="product-section">
      <div className="product-controls">
        <input className="search-input" placeholder="Search Product" />
        <button className="add-btn">Add Product</button>
      </div>
      <div className="product-table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>
                  <button className="edit-btn" onClick={() => onEdit(product.id)}>Edit</button>
                  <button className="remove-btn" onClick={() => onRemove(product.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
