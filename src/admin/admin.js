// admin.js
import React, { useState } from 'react';
import './admin.css'; 
import logoImage from './img/logo-1.jpg';

// Mock data import
import { users, products } from './data';

function Admin() {
  const [activeTab, setActiveTab] = useState('users'); 

  // Function to remove user
  const handleRemoveUser = (userId) => {
    console.log('User removed, ID:', userId);

  };

  // Function to remove product
  const handleRemoveProduct = (productId) => {
    console.log('Product removed, ID:', productId);

  };

  return (
    <div className="admin-container">
      <nav className="admin-nav">
        <img src={logoImage} alt="Logo" className="admin-logo" />
        <button className={activeTab === 'users' ? 'active' : ''} onClick={() => setActiveTab('users')}>User Management</button>
        <button className={activeTab === 'products' ? 'active' : ''} onClick={() => setActiveTab('products')}>Product Management</button>
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
                <td>{user.name}</td>
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
