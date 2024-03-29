import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './home.css';
import Dropdown from 'react-bootstrap/Dropdown'
import Carousel from 'react-bootstrap/Carousel';
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';
import salesImage from './img/year.jpg';
import salesImage2 from './img/sales_banners.jpg';
import phone from './img/phone.jpg';
import clothes from './img/clothes.jpg';



function HomePage() {
  const events = [
    {
      src: salesImage,
      alt: 'Event 1',
      caption: 'Event 1 Caption',
      description: 'Event 1 Description'
    },
    {
      src: salesImage2,
      alt: 'Event 2',
      caption: 'Event 2 Caption',
      description: 'Event 2 Description'
    },
    {
      src: salesImage2,
      alt: 'Event 2',
      caption: 'Event 2 Caption',
      description: 'Event 2 Description'
    },
    {
      src: salesImage2,
      alt: 'Event 3',
      caption: 'Event 3 Caption',
      description: 'Event 3 Description'
    },
    {
      src: salesImage2,
      alt: 'Event 4',
      caption: 'Event 4 Caption',
      description: 'Event 4 Description'
    },
    {
      src: salesImage2,
      alt: 'Event 5',
      caption: 'Event 5 Caption',
      description: 'Event 5 Description'
    },
    // ... more event items ...
  ];

  const products = [
    {
      id: 1,
      title: 'Electronic 1',
      price: 9.99,
      imageUrl: phone,
      category: 'Electronics', 
    },
    {
      id: 2,
      title: 'Clothing 1',
      price: 19.99,
      imageUrl: clothes,
      category: 'Clothing', 
    },
    {
      id: 3,
      title: 'Clothing 2',
      price: 29.99,
      imageUrl: clothes,
      category: 'Clothing', 
    },
    {
      id: 4,
      title: 'Clothing 3',
      price: 39.99,
      imageUrl: clothes,
      category: 'Clothing', 
    },
    {
      id: 5,
      title: 'Clothing 4',
      price: 49.99,
      imageUrl: clothes,
      category: 'Clothing', 
    },
    // ... more products ...
  ];

  // Define your category data
const categories = [
  {
    name: 'Electronics',
    imageUrl: 'path_to_electronics_image', // replace with your image path
  },
  {
    name: 'Clothing',
    imageUrl: 'path_to_clothing_image', // replace with your image path
  },
  {
    name: 'Books',
    imageUrl: 'path_to_books_image', // replace with your image path
  },
  {
    name: 'Accessories',
    imageUrl: 'path_to_accessories_image', // replace with your image path
  },
  // ... other categories
];

const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    // Navigate to the specific category page
    navigate(`/category/${categoryName}`);
  };  

  // State for the dropdown button
  const [dropdownCategory, setDropdownCategory] = useState('All');

  // State for the navbar category
  const [navbarCategory, setNavbarCategory] = useState('All');
  
  const handleDropdownCategoryChange = (category) => {
    setDropdownCategory(category);
  };

  const handleNavbarCategoryChange = (category) => {
    setNavbarCategory(category);
  };

  // Use navbarCategory for filtering the products
  const filteredProducts = navbarCategory === 'All' 
    ? products 
    : products.filter(product => product.category === navbarCategory);

  return (
    <div className='background'>
      <div className="header">
        <div className="mall-name">NovaMall</div>
        
        <div className="login-button">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
      <div className="search-bar" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className="search-group">
      <div className='input-wrapper'>
      <Dropdown as={ButtonGroup}>
      <Button variant="success" id="dropdown-basic">
        <span className="category-button-text">{dropdownCategory}</span>
      </Button>
      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#" onClick={() => handleDropdownCategoryChange('All')}>
          All
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => handleDropdownCategoryChange('Electronics')}>
          Electronics
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => handleDropdownCategoryChange('Clothing')}>
          Clothing
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => handleDropdownCategoryChange('Books')}>
          Books
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => handleDropdownCategoryChange('Accessories')}>
          Accessories
        </Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      
        <FaSearch id='search-icon'/>
        <input type="text" placeholder="Search products" />
        <button className="search-button">Search</button>
        </div>
        </div>


        <div className="wishlist-cart-icons">
            <Link to="/wishlist" className="icon-link">
              <FaHeart className="icon" />
            </Link>
            <Link to="/cart" className="icon-link">
              <FaShoppingCart className="icon" />
            </Link>
          </div>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <a href="#" onClick={() => handleNavbarCategoryChange('All')}>All</a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavbarCategoryChange('Electronics')}>Electronics</a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavbarCategoryChange('Clothing')}>Clothing</a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavbarCategoryChange('Blook')}>Book</a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavbarCategoryChange('Accessories')}>Accessories</a>
            </li>
            {/* Add more category links as needed */}
          </ul>
        </nav>
      </div>

      <div className="banner">
        <Carousel className="custom-carousel">
          {events.map((event, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={event.src}
                alt={event.alt}
              />
            {/* Separate container for the caption and description */}
            <div className="carousel-caption-container">
              <h3>{event.caption}</h3>
              <p>{event.description}</p>
            </div>
        </Carousel.Item>
          ))}
          </Carousel>
      </div>

      <div className="category-section">
  <Row>
    {categories.map((category, index) => (
      <Col key={index} sm={6} md={4} lg={3}>
        <div
          className="category-block"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
          onClick={() => handleCategoryClick(category.name)}
        >
          <div className="category-block-overlay">
            <h2 className="category-block-title">{category.name}</h2>
          </div>
        </div>
      </Col>
    ))}
  </Row>
</div>

      <Container>
  <Row>
    {filteredProducts.map((product) => (
      <Col key={product.id} sm={6} md={4} lg={3}>
        <Card className="card-product">
          {/* Set a class for the image to control its size */}
          <Card.Img variant="top" src={product.imageUrl} className="card-product-img" />
          {/* Flex container for the card body */}
          <Card.Body className="card-product-body">
            <div>
              {/* Separate div to contain title and price */}
              <Card.Title className="card-product-title">{product.title}</Card.Title>
              <Card.Text className="card-product-price">${product.price.toFixed(2)}</Card.Text>
            </div>
            <Link to={`/product/${product.id}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
    </div>
  );
}

export default HomePage;