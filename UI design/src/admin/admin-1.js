import React from 'react';
import { users, products } from './data'; // 确保路径正确
import './admin.css'; // 引入样式文件

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>管理员界面</h1>
      </div>
      
      <div className="admin-section">
        <h2>用户列表</h2>
        <ul className="admin-list">
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

      <div className="admin-section">
        <h2>产品列表</h2>
        <ul className="admin-list">
          {products.map(product => (
            <li key={product.id}>{product.title} - ${product.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;

