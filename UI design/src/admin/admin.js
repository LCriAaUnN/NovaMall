// admin.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './admin.css'; 
import logoImage from './img/logo-1.jpg';
import api from "../api";

// Admin component
function Admin() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname.includes('product-management') ? 'products' : 'users';

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  // Function to get users
  const getUsers = () => {
    api
      .get('/user/list/')
      .then((res) => res.data) 
      .then((data) => {setUsers(data);})
      .catch((err) => alert(err));
  };

  // Function to remove user
  const handleRemoveUser = (userId) => {
    api
      .delete(`/user/delete/${userId}/`)
      .then((res) => {
        if (res.status === 204) alert("User deleted!");
        else alert("Failed to delete user.");
        getUsers();
      })
      .catch((error) => alert(error));
  };

  // Function to get products
  const getProducts = () => {
    api.get('/user/list_products/')
      .then((res) => res.data) 
      .then((data) => {setProducts(data); console.log(data);})
      .catch((err) => alert(err));
  };

  // Function to remove product
  const handleRemoveProduct = (productId) => {
    api
    .delete(`/user/delete_product/${productId}/`)
    .then((res) => {
      if (res.status === 204) alert("Product deleted!");
      else alert("Failed to delete product.");
      getProducts();
    })
    .catch((error) => alert(error));
  };

  const handleLogout = () => {
    // pop up a confirmation dialog
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      // if user selects “OK”, then navigate to the login page
      navigate('/logout');
    }
    // if user selects “Cancel”, then do nothing
  };

  return (
    <div className="admin-container">
      <nav className="admin-nav">
        <img src={logoImage} alt="Logo" className="admin-logo" />
        <button className={activeTab === 'users' ? 'active' : ''} onClick={() => navigate('/admin')}>User Management</button>
        <button className={activeTab === 'products' ? 'active' : ''} onClick={() => navigate('/product-management')}>Product Management</button>
      </nav>
      <div className="admin-content">
        <div className="admin-header-container">
          <div className="admin-header">
            {activeTab === 'users' ? 'User Management' : 'Product Management'}
          </div>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
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

// Users and Products components
function Users({ users, onRemove }) {
  return (
    <div className="user-section">
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
  const navigate = useNavigate();
  return (
    <div className="product-section">
      <div className="product-controls">
        {/* <input className="search-input" placeholder="Search Product" /> */}
        <button className="add-btn" onClick={() => navigate('/addproduct')}>Add Product</button>
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
                <td>{product.name}</td>
                <td>{product.catagory}</td>
                <td>
                  {/* <button className="edit-btn" onClick={() => onEdit(product.id)}>Edit</button> */}
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
