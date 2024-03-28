import React, { useState } from 'react';
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

function HomePage() {
  const products = [
    {
      id: 1,
      title: 'Electronic 1',
      price: 9.99,
      imageUrl: 'https://example.com/product1.jpg',
      category: 'Electronics', 
    },
    {
      id: 2,
      title: 'Clothing 1',
      price: 19.99,
      imageUrl: 'https://example.com/product2.jpg',
      category: 'Clothing', 
    },
    // ... more products ...
  ];
  

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
    <div>
      <div className="header">
        <div className="mall-name">NovaMall</div>
        <div className="login-button">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
      <div className="search-bar">
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
        <input type="text" placeholder="Search products" />
        <button className="search-button">Search</button>
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
            {/* Add more category links as needed */}
          </ul>
        </nav>
      </div>

      <Container>
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product.id} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price.toFixed(2)}</Card.Text>
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