import React, { useState, useEffect } from 'react';
import api from "../api";
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
import { FaHeart, FaSearch, FaShoppingCart,  FaUserCircle, FaSignOutAlt, FaRegListAlt } from 'react-icons/fa';
import salesImage from './img/easter5.webp';
import salesImage2 from './img/sales_banners.jpg';
import salesImage3 from './img/easter4.webp';
import phone from './img/phone.jpg';
import clothes from './img/clothes.jpg';
import clothesImage1 from './img/clothes1.jpg';
import book from './img/book.jpg';
import hat from './img/hat3.jpg';



function HomePage() {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const events = [
    {
      src: salesImage3,
      alt: 'Event 1',
      caption: 'Easter Sale !',
      description: 'Extra 20% off daily Easter Deals with code EASTER20'
    },
    {
      src: salesImage,
      alt: 'Event 2',
      caption: 'Easter Sale Last Call !!',
      description: 'Shop now and make the most of these amazing discounts while supplies last!'
    },
    {
      src: salesImage2,
      alt: 'Event 3',
      caption: 'BIG SALE !!!',
      description: 'This is your chance to snag incredible bargains with up to 50% off on select products.'
    },


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

const [searchTerm, setSearchTerm] = useState('');

const handleSearchInputChange = (event) => {
  setSearchTerm(event.target.value);
};

// const handleSearch = () => {
//   if (searchTerm.trim() !== '') {
//     navigate(`/search?search=${encodeURIComponent(searchTerm)}`);
//   } else {
//     alert('Please enter a search term.');
//   }
  // };
  
// const handleSearch = () => {
//   let searchQuery = `/search?search=${encodeURIComponent(searchTerm)}`;
//   if (minPrice.trim() !== '') {
//     searchQuery += `&minPrice=${encodeURIComponent(minPrice)}`;
//   }
//   if (maxPrice.trim() !== '') {
//     searchQuery += `&maxPrice=${encodeURIComponent(maxPrice)}`;
//   }
//   if (searchTerm.trim() !== '' || minPrice.trim() !== '' || maxPrice.trim() !== '') {
//     navigate(searchQuery);
//   } else {
//     alert('Please enter a search term or price range.');
//   }
  // };

const handleSearch = () => {
  let searchQuery = `/search?search=${encodeURIComponent(searchTerm)}`;
  if (minPrice.trim() !== '') {
    searchQuery += `&minPrice=${encodeURIComponent(minPrice)}`;
  }
  if (maxPrice.trim() !== '') {
    searchQuery += `&maxPrice=${encodeURIComponent(maxPrice)}`;
  }

  if (dropdownCategory && dropdownCategory !== 'All') {
    searchQuery += `&category=${encodeURIComponent(dropdownCategory)}`;
  }
  
  if (searchTerm.trim() !== '' || minPrice.trim() !== '' || maxPrice.trim() !== '' || dropdownCategory !== 'All') {
    navigate(searchQuery);
  } else {
    alert('Please enter a search term, price range, or select a category.');
  }
};

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

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(navbarCategory);
  }, [navbarCategory]);

  const getProducts = (navbarCategory) => {
    console.log(navbarCategory);
    api
      .get(`/products/${navbarCategory}/`)
      .then((res) => res.data)
      .then((data) => {setProducts(data); console.log(data)})
      .catch((err) => alert(err));
  }

  // Use navbarCategory for filtering the products
  // const filteredProducts = navbarCategory === 'All' 
  //   ? products 
  //   : products.filter(product => product.category === navbarCategory);

  return (
    <div className='background'>
      <div className="header">
        <div className="mall-logo"></div>
        
    
      <div className="search-group">
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '0' }}>
      <input
        type="text"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        style={{ width: '100%', maxWidth: '100px', boxSizing: 'border-box', backgroundColor: '#f2f2f2', border: 'none', textAlign: 'center', borderRadius: '5px', height: '30px' }}
      />
      <span style={{ margin: '0 5px' }}>-</span>
      <input
        type="text"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        style={{ width: '100%', maxWidth: '100px', boxSizing: 'border-box', backgroundColor: '#f2f2f2', border: 'none', textAlign: 'center',borderRadius: '5px', height: '30px' }}
      />
      </div>
      <div className='input-wrapper'>
      <Dropdown as={ButtonGroup}>
      <Button variant="success" id="dropdown-basic" style={{ backgroundColor: '#f2f2f2', width: '120px', maxWidth: '200px', height: '30px'}}>
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
        <Dropdown.Item href="#" onClick={() => handleDropdownCategoryChange('Clothings')}>
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
      
      <FaSearch id='search-icon' style={{ fontSize: '20px', lineHeight: '30px' }}/>
        <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchInputChange}
        style={{
          width: '300px', // 根据需要调整宽度
          height: '40px', // 增加高度
          borderRadius: '25px', // 圆角效果
          border: '1px solid #ccc', // 可选，为了更好的视觉效果可能需要设置边框
          marginLeft: '0', // 如果需要，调整左边距以向左移动
          marginRight: '10px', // 根据布局调整右边距
          border: 'none',
          backgroundColor: '#f2f2f2'
        }}
      />
        <button style={{ backgroundColor: '#080808' }} onClick={handleSearch}>Search</button>
        </div>
        </div>

        <div className="wishlist-cart-icons">
            <Link to="/user" className="icon-link">
              <FaUserCircle className="icon" /> 
            </Link>
            <Link to="/cart" className="icon-link">
              <FaShoppingCart className="icon" />
          </Link>
          <Link to="/order" className="icon-link">
          <FaRegListAlt className="icon" />
          </Link>
          </div>
      </div>
      
      {/* <div className="navbar">
        <nav>
          <ul>
            <li>
              <a href="#" onClick={() => handleNavbarCategoryChange('All')}>All</a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavbarCategoryChange('Electronics')}>Electronics</a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavbarCategoryChange('Clothings')}>Clothings</a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavbarCategoryChange('Books')}>Books</a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavbarCategoryChange('Accessories')}>Accessories</a>
            </li>
          </ul>
        </nav>
      </div> */}

      <div className="login-button">
          <Link to="/login">
          <button style={{ backgroundColor: '#080808' }}>Login</button>
          </Link>
          <button
            onClick={() => {
              navigate('/logout');
              }}
            style={{ backgroundColor: '#080808', marginLeft: '8px' }}
            >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <div className="banner" style={{ marginBottom: '-20px' }}>
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

      <div className="navbar">
        <nav style={{ padding: '10px 0' }}> {/* 增加内边距来增加高度 */}
          <ul style={{ display: 'flex', justifyContent: 'space-between' }}> {/* 使用flex布局来分散类别 */}
            <li style={{ marginRight: '20px' }}> {/* 增加右边距来分开类别 */}
              <a href="#" onClick={() => handleNavbarCategoryChange('All')}>All</a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a href="#" onClick={() => handleNavbarCategoryChange('Electronics')}>Electronics</a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a href="#" onClick={() => handleNavbarCategoryChange('Clothings')}>Clothings</a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a href="#" onClick={() => handleNavbarCategoryChange('Books')}>Books</a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a href="#" onClick={() => handleNavbarCategoryChange('Accessories')}>Accessories</a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a href="#" onClick={() => handleNavbarCategoryChange('Recommendation')}>Recommendation</a>
            </li>
            {/* Add more category links as needed */}
          </ul>
        </nav>
      </div>

      {/* <div className="category-section">
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
</div> */}

  <Container>
  <Row>
    {products.map((product) => (
      <Col key={product.id} sm={6} md={4} lg={3}>
        <Card className="card-product">
          <Card.Img variant="top" src={"http://127.0.0.1:8000"+product.image} className="card-product-img" />
          <Card.Body className="card-product-body">
            <div>
              <Card.Title className="card-product-title">{product.name}</Card.Title>
              <Card.Text className="card-product-price">${product.price.toFixed(2)}</Card.Text>
            </div>
            <Link to={`/product/${product.id}`}>
              <Button style={{ backgroundColor: '#080808' }}>View Details</Button>
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