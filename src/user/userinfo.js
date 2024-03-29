import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './userinfo.css';

const UserInfo = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const demoCart = [
      { id: 1, name: 'Smartphone', price: 499, img: 'path/to/smartphone.jpg' },
      { id: 2, name: 'Headphones', price: 199, img: 'path/to/headphones.jpg' },
      { id: 3, name: 'Laptop', price: 999, img: 'path/to/laptop.jpg' }
    ];
  
    const demoWishlist = [
      { id: 1, name: 'Bluetooth Speaker', price: 999, img: 'path/to/speaker.jpg' },
      { id: 2, name: 'Smart Watch', price: 1099, img: 'path/to/watch.jpg' },
      { id: 3, name: 'Book: "The Great Gatsby"', price: 399, img: 'path/to/book.jpg' }
    ];
  
    const renderCartItems = () => {
        return demoCart.map(item => (
            <div key={item.id} className="list-item">
            <img src={item.img} className="item-image" />
            <span className="item-name">{item.name}</span>
            <div className="item-details">
              <span className="item-price">${item.price}</span>
              <button className="view-button">View Product</button>
            </div>
          </div>
        ));
      };
  
      const renderWishlistItems = () => {
        return demoWishlist.map(item => (
          <div key={item.id} className="list-item">
            <img src={item.img} className="item-image" />
            <span className="item-name">{item.name}</span>
            <div className="item-details">
              <span className="item-price">${item.price}</span>
              <button className="view-button">View Product</button>
            </div>
          </div>
        ));
      };
  
    const renderContent = () => {
      switch (activeTab) {
        case 'profile':
            return (
                <div className="tab-content">
                  <h2>Profile</h2>
                  <p><strong>Name:</strong> Jane Doe</p>
                  <p><strong>Email:</strong> janedoe@example.com</p>
                  <p><strong>Location:</strong> New York, USA</p>
                </div>
              );
        case 'cart':
          return (
            <div className="tab-content">
              <h2>Shopping Cart</h2>
              {renderCartItems()}
            </div>
          );
        case 'wishlist':
          return (
            <div className="tab-content">
              <h2>Wish List</h2>
              {renderWishlistItems()}
            </div>
          );
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
            <li><button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'active' : ''}>Profile</button></li>
            <li><button onClick={() => setActiveTab('cart')} className={activeTab === 'cart' ? 'active' : ''}>Cart</button></li>
            <li><button onClick={() => setActiveTab('wishlist')} className={activeTab === 'wishlist' ? 'active' : ''}>Wish List</button></li>
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