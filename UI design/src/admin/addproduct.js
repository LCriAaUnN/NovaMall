import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import api from '../api';
import axios from 'axios';



const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '', 
    price: '',
    description: '', 
    date: '',
    stock: '',
    catagory: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0], // update the state with the first selected file
    });
  };

  const handleSubmit = () => {
    const data = {
      name: formData.name,
      price: formData.price,
      description: formData.description,
      stock: formData.stock,
      catagory: formData.catagory,
      image: formData.image,
    }
    
    alert(data.image)
    api
      .post('/product/add/', data)
      .then((res) => {
        if (res.status === 200) alert("Product added successfully");
        else alert("Failed to add product");
      })
      .catch((err) => alert(err));
  };

return (
  <Container fluid className="addproduct" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Link to="/admin" className="btn btn-secondary my-3">Back to Admin Dashboard</Link>
      <Card style={{ width: '30rem', maxWidth: '100%' }}>
      <Card.Header className="card-header"><h2>Add Product</h2></Card.Header>
      <Card.Body className="card-body">
        <Form onSubmit={handleSubmit}>
          {/* Product name */}
          <Form.Group controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter product name"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            {/* Product price */}
            <Form.Group controlId="productPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={formData.price}
                placeholder="Enter product price"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            {/* Product description */}
            <Form.Group controlId="productDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                placeholder="Enter product description"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            {/* Product stock */}
            <Form.Group controlId="productStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={formData.stock}
                placeholder="Enter product stock"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            {/* Product category */}
            <Form.Group controlId="productCatagory">
              <Form.Label>Catagory</Form.Label>
              <Form.Control
                type="text"
                name="catagory"
                value={formData.catagory}
                placeholder="Enter product category"
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            {/* Image upload field */}
            <Form.Group controlId="productImage">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleImageChange}
                accept="image/*" // Optional: restrict file types to images only
              />
            </Form.Group>

            {/* Add Product Button */}
            <Button variant="primary" type="submit">
              Add Product
            </Button>
            
        </Form>
      </Card.Body>
      </Card>
    </Container>
);


};

export default AddProduct;