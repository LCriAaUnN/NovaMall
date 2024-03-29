import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

// Fake cart data
const initialCartItems = [
  { id: 1, title: 'Product 1', price: 10.99 },
  { id: 2, title: 'Product 2', price: 12.99 },
  { id: 3, title: 'Product 3', price: 9.99 },
];

function CartPage() {
  // State for cart items
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Calculate the total price of the cart
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <><Link to="/" className="back-to-home">Back to Home</Link><div className="cart-page" >
          <h1>Your Shopping Cart</h1>
          {cartItems.length > 0 ? (
              <div>
                  <table className="cart-table">
                      <thead>
                          <tr>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Remove</th>
                          </tr>
                      </thead>
                      <tbody>
                          {cartItems.map((item) => (
                              <tr key={item.id}>
                                  <td>{item.title}</td>
                                  <td>${item.price}</td>
                                  <td>
                                      <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
                  <div className="cart-total">
                      Total: ${calculateTotal(cartItems)}
                  </div>
              </div>
          ) : (
              <p>Your cart is empty.</p>
          )}
      </div></>
  );
}

export default CartPage;

