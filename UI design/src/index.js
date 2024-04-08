import ReactDOM from "react-dom/client";
import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import { useMatch, useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './user/login';
import Home from './user/home';
import UserInfo from './user/userinfo';
import CartPage from './user/cart';
import WishlistPage from  './user/wishlist'
import Admin from './admin/admin'
import ProductDetail from './product/ProductDetail'; 
import Signup from './user/signup';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLogin from './user/login_admin';

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

// import {
//   Navigate
// } from 'react-router';
import HomePage from "./user/home";

const user = {
  id: null,
  name: "User"
};

function App(props) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<ProtectedRoute><UserInfo/></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          <Route path="/wishlist" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user-management" element={<Admin activeTab="users" />} />
          <Route path="/product-management" element={<Admin activeTab="products" />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin_login" element={<AdminLogin />} />
          
          
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    );
  }

function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <h3>
        <h1>404 Not Found</h1>
        <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
  
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<App />);