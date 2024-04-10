import React, { useState, useEffect } from 'react';
import api from "../api";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './cart.css';

function CartPage() {
    const [cartItems, setCartItems] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        getCartItems();
    
    }, [])

    const getCartItems = () => {
        api
            .get("/cart/")
            .then((res) => res.data)
            .then((data)=> {setCartItems(data); console.log(data)})
            .catch((err) => alert(err));
    }

    const deleteItem = (id) => {
        api
            .delete(`/cart/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Item deleted successfully");
                else alert("Failed to delete item");
                getCartItems();
            })
            .catch((err) => alert(err));
            
    }

    const createOrder = () => {
        api
            .post("/order/create/")
            .then((res) => {
                if (res.status === 200) alert("Order created successfully");
                else alert("Failed to create order");
                navigate('/payment')
            })
            .catch((err) => alert(err));

    }

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
                                          <td>{item.product_name}</td>
                                          <td>${item.price}</td>
                                          <td>
                                              <button onClick={() => deleteItem(item.id)}>Remove</button>
                                          </td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                          <div className="cart-total">
                              Total: ${calculateTotal(cartItems)}
                          </div>
                          <button className="checkout-button" onClick={() => createOrder()}>Checkout</button>
                      </div>
                  ) : (
                      <p>Your cart is empty.</p>
                  )}
              </div></>
                
          );
}

export default CartPage;

