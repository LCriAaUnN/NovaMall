import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './wishlist.css';

// Fake wishlist data
const initialWishlistItems = [
  { id: 1, title: 'Product A', price: 24.99 },
  { id: 2, title: 'Product B', price: 49.99 },
  { id: 3, title: 'Product C', price: 74.99 },
];

function WishlistPage() {
  // State for wishlist items
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  // Function to remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== productId));
  };

  return (
    <><Link to="/" className="back-to-home">Back to Home</Link><div className="wishlist-page">

          <h1>Your Wishlist</h1>
          {wishlistItems.length > 0 ? (
              <div>
                  <ul className="wishlist-items">
                      {wishlistItems.map((item) => (
                          <li key={item.id} className="wishlist-item">
                              <div className="item-details">
                                  <h3>{item.title}</h3>
                                  <p >${item.price}</p>
                              </div>
                              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
                          </li>
                      ))}
                  </ul>
              </div>
          ) : (
              <p>Your wishlist is empty.</p>
          )}
      </div></>
  );
}

export default WishlistPage;
