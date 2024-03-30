// ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'; 
import { products } from './data.js'; 
import './ProductDetail.css'; 

const ProductDetail = () => {
    let { id } = useParams();
    const [wishlist, setWishlist] = useState(false);
    const [cartMessage, setCartMessage] = useState('');
    const product = products.find(product => product.id === parseInt(id));
  
    const handleWishlistToggle = () => setWishlist(!wishlist);
    
    // 显示 "Added to cart" 的信息框
    const handleAddToCart = () => {
      setCartMessage('Added to cart');
      setTimeout(() => {
        setCartMessage('');
      }, 500); 
    };
  
    if (!product) {
      return <div>Product not found</div>;
    }

  return (
    <div className="product-detail-container">
      {/* Carousel 位置 */}
      <Carousel className="product-image-carousel">
        {product.imageUrl.map((image, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-container">
              <img className="carousel-image" src={image} alt={`Slide ${index}`} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
       {/* 商品信息 */}
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">HKD ${product.price}</p>
        <p className="product-category">Category: {product.category}</p>
  
        <p className="product-description">Description: {product.description}</p>
        <p className="product-stock">In stock: {product.stock}</p>
      
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

