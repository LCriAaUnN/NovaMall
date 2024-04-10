import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import salesImage from './img/easter5.webp';
import salesImage2 from './img/sales_banners.jpg';
import salesImage3 from './img/easter4.webp';
import phone from './img/phone.jpg';
import clothes from './img/clothes.jpg';
import clothesImage1 from './img/clothes1.jpg';
import book from './img/book.jpg';
import hat from './img/hat3.jpg';


// 示例产品数据，实际应用中应从共享状态或API获取
const products = [
  {
    id: 1,
    title: 'iPhone 15 256G',
    price: 6999,
    imageUrl: phone,
    category: 'Electronics', 
  },
  {
    id: 2,
    title: 'Dorothee Schumacher Midi dress',
    price: 3000,
    imageUrl: clothesImage1,
    category: 'Clothing', 
  },
  {
    id: 3,
    title: 'The Black Book of Colors',
    price: 208,
    imageUrl: book,
    category: 'Book', 
  },
  {
    id: 4,
    title: 'Calvin Klein Denim Bucket Hat',
    price: 490,
    imageUrl: hat,
    category: 'Accessories', 
  },
  {
    id: 1,
    title: 'iPhone 15 256G',
    price: 6999,
    imageUrl: phone,
    category: 'Electronics', 
  },
  {
    id: 2,
    title: 'Dorothee Schumacher Midi dress',
    price: 3000,
    imageUrl: clothesImage1,
    category: 'Clothing', 
  },
  {
    id: 3,
    title: 'The Black Book of Colors',
    price: 208,
    imageUrl: book,
    category: 'Book', 
  },
  {
    id: 4,
    title: 'Calvin Klein Denim Bucket Hat',
    price: 490,
    imageUrl: hat,
    category: 'Accessories', 
  }
];

function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search');
    const minPrice = parseFloat(searchParams.get('minPrice')) || 0;
    const maxPrice = parseFloat(searchParams.get('maxPrice')) || Infinity;
    const category = searchParams.get('category');

    // 在客户端进行搜索和筛选
    const filteredResults = products.filter(product => {
      const matchesTerm = searchTerm ? product.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      const matchesCategory = category ? product.category === category : true;
      return matchesTerm && matchesPrice && matchesCategory;
    });

    setSearchResults(filteredResults);
  }, [location.search]);

  const navigateBack = () => {
    navigate('/home');
  };

  const noResultsContent = <div className="no-results">No match result</div>;

  return (
    <div className="search-results-container">
      <Button variant="secondary" onClick={navigateBack} className="mb-3">Back to Home</Button>
      {searchResults.length > 0 ? (
        searchResults.map(product => (
          <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>Price: ${product.price}</Card.Text> {/* 这里使用Card.Text展示价格 */}
              <Link to={`/product/${product.id}`}>
                <Button style={{ backgroundColor: '#080808' }}>View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      ) : (
        noResultsContent
      )}
    </div>
  );
}

export default SearchResultsPage;
