// ProductDetail.js
import React, { useState, useEffect } from 'react';
import api from "../api";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'; 
// import { products } from './data.js'; 
import './ProductDetail.css'; 


function ProductDetail() {
    let { id } = useParams();
    const [wishlist, setWishlist] = useState(false);
    const [cartMessage, setCartMessage] = useState('');
    const [product, setProduct] = useState('');
  
    const handleWishlistToggle = () => setWishlist(!wishlist);
    
    useEffect(() => {
      getProduct();
    }, [])

    const getProduct = () => {
      api
        .get(`/product/${id}/`)
        .then((res) => res.data)
        .then((data) => {setProduct(data); console.log(data)})
        .catch((err) => alert(err));
    }

    // 显示 "Added to cart" 的信息框
    const handleAddToCart = () => {
      api
        .post(`/cart/add/${id}/`)
        .then((res) => {
          if (res.status === 200) alert("Item added successfully");
          else if (res.status == 400) alert("Item out of stock");
          else alert("Failed to add item");
        })
        .catch((err) => alert(err));
    }
  
    if (!product) {
      return <div>Product not found</div>;
    }

  return (
    <div className="product-detail-container">
      {/* Carousel 位置 */}
      {/* <Carousel className="product-image-carousel">
        {product.image.map((image, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-container">
              <img className="carousel-image" src={image} alt={`Slide ${index}`} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel> */}
       {/* 商品信息 */}
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">HKD ${product.price}</p>
        <p className="product-category">Category: {product.catagory}</p>
  
        <p className="product-description">Description: {product.description}</p>
        <p className="product-stock">In stock: {product.count}</p>
      
        {/* Wishlist 和 Shopping Cart 按钮位置 */}
        <div className="product-actions">
          <span
            className={`button-wishlist ${wishlist ? 'active' : ''}`}
            onClick={handleWishlistToggle}
          >
            ♥
          </span>
          <button className="button-cart" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
    </div>
      {/* 信息框 */}
      {cartMessage && <div className={`alert-box ${cartMessage ? 'active' : ''}`}>{cartMessage}</div>}
    </div>
  );
};

export default ProductDetail;

