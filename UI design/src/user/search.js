import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate(); 
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search');
    
    fetch(`YOUR_BACKEND_ENDPOINT/search?query=${encodeURIComponent(searchTerm)}`)
      .then(response => response.json())
      .then(data => setSearchResults(data))
      .catch(error => console.error('Error fetching search results:', error));
  }, [location.search]);

  
  const navigateBack = () => {
    navigate('/home'); 
  };

 
  const noResultsContent = <div className="no-results">No match result</div>;

  return (
    <div className="search-results-container">
      <Button variant="secondary" onClick={navigateBack} className="mb-3">Back to Home</Button>
      {searchResults.length > 0 ? (
        searchResults.map(result => (
          <Card key={result.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={result.imageUrl} />
            <Card.Body>
              <Card.Title>{result.title}</Card.Title>
              <Card.Text>{result.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
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
