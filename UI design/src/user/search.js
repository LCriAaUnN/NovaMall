import React, { useEffect, useState } from 'react';
import api from "../api";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search') || 'None';
    const minPrice = parseFloat(searchParams.get('minPrice')) || 0;
    const maxPrice = parseFloat(searchParams.get('maxPrice')) || 999999;
    const category = searchParams.get('category') || 'All';

    // 在客户端进行搜索和筛选
    // const filteredResults = products.filter(product => {
    //   const matchesName = searchTerm ? product.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    //   const matchesTerm = searchTerm ? (product.id.toString() === searchTerm.trim() || matchesName) : true;
    //   const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    //   const matchesCategory = category ? product.category === category : true;
    //   return matchesTerm && matchesPrice && matchesCategory;
    // });

    //setSearchResults(filteredResults);
    getSearchResults(searchTerm, minPrice, maxPrice, category);
  }, [location.search]);

  const getSearchResults = (searchTerm, minPrice, maxPrice, category) => {
    api
      .get(`/search/${searchTerm}/${minPrice}/${maxPrice}/${category}/`)
      .then((res) => res.data)
      .then((data) => setSearchResults(data))
      .catch((err) => alert(err));
  }

  const navigateBack = () => {
    navigate('/home');
  };

  const noResultsContent = <div className="no-results">No match result</div>;

  return (
    <div className="search-results-container">
      <Button variant="secondary" onClick={navigateBack} className="mb-3">Back to Home</Button>
      <Row>
      {searchResults.length > 0 ? (
          searchResults.map(product => (
          <Col key={product.id} sm={6} md={4} lg={3}>
          <Card className="card-product" key={product.id} style={{ width: '18rem', height: '25rem', margin: '10px' }}>
            <Card.Img variant="top" src={"http://127.0.0.1:8000"+product.image} className="card-product-img"/>
                <Card.Body className="card-product-body">
                  <div>
                  <Card.Title className="card-product-title">{product.name}</Card.Title>
                  <Card.Text className="card-product-price">Price: ${product.price}</Card.Text> {/* 这里使用Card.Text展示价格 */}
                  </div>
              <Link to={`/product/${product.id}`}>
                <Button style={{ backgroundColor: '#080808' }}>View Details</Button>
              </Link>
            </Card.Body>
              </Card>
              </Col>
        ))
      ) : (
        noResultsContent
        )}
        </Row>
    </div>
  );
}

export default SearchResultsPage;
