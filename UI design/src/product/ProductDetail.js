// ProductDetail.js
import React, { useState, useEffect } from 'react';
import api from "../api";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'; 
// import { products } from './data.js'; 
import './ProductDetail.css'; 

// ProductDetail component
function ProductDetail() {
    let { id } = useParams();
    // const [wishlist, setWishlist] = useState(false);
    const [cartMessage, setCartMessage] = useState('');
    const [product, setProduct] = useState('');
  
    // const handleWishlistToggle = () => setWishlist(!wishlist);
    
    useEffect(() => {
      getProduct();
    }, [])

    // Get product by id
    const getProduct = () => {
      api
        .get(`/product/${id}/`)
        .then((res) => res.data)
        .then((data) => {setProduct(data); console.log(data)})
        .catch((err) => alert(err));
    }

    // Add to cart
    const handleAddToCart = () => {
      api
        .post(`/cart/add/${id}/`)
        .then((res) => {
          if (res.status === 200) alert("Item added successfully");
          else if (res.status == 204) alert("Sorry! Item out of stock");
          else alert("Failed to add item");
        })
        .catch((err) => alert(err));
    }
  
    if (!product) {
      return <div>Product not found</div>;
    }

  return (
    <div className="product-detail-container">
      {/* product pictures */}
      <img src={"http://127.0.0.1:8000"+product.image} alt="Product" className="product-image" />
       {/* product information */}
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">HKD ${product.price}</p>
        <p className="product-category">Category: {product.catagory}</p>
  
        <p className="product-description">Description: {product.description}</p>
        <p className="product-stock">In stock: {product.count}</p>
      
        {/* Wishlist & Shopping Cart button */}
        <div className="product-actions">
          <button className="button-cart" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
    </div>
      {/* alert message */}
      {cartMessage && <div className={`alert-box ${cartMessage ? 'active' : ''}`}>{cartMessage}</div>}
    </div>
  );
};

export default ProductDetail;

