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
      title: 'Product 1',
      price: 9.99,
      imageUrl: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 19.99,
      imageUrl: 'https://example.com/product2.jpg',
    },
    // Add more products as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('Category');
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

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
        <span className="category-button-text">{selectedCategory}</span>
      </Button>
      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
          <Dropdown.Item href="#" onClick={() => handleCategoryChange('All')}>
              All
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => handleCategoryChange('Electronics')}>
              Electronics
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => handleCategoryChange('Clothing')}>
              Clothing
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => handleCategoryChange('Books')}>
              Books
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => handleCategoryChange('Accessories')}>
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
              <a href="/category/electronics">Electronics</a>
            </li>
            <li>
              <a href="/category/clothing">Clothing</a>
            </li>
            {/* Add more category links as needed */}
          </ul>
        </nav>
      </div>

      <Container>
        <Row>
          {products.map((product) => (
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