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
import SearchResultsPage from './user/search';
import PaymentPage from './user/payment';
import OrderPage from './user/order';
import AddProduct from "./admin/addproduct";

function Logout() {
  localStorage.clear()
  return <Navigate to="/home" />
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

// The main App component
function App(props) {
    // The Routes component is used to define the different routes of the application
    // BrowserRouter is used to enable URL routing in the application
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage />}/>
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<ProtectedRoute><UserInfo/></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><CartPage/></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
          <Route path="/wishlist" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="/user-management" element={<Admin activeTab="users" />} />
          <Route path="/product-management" element={<Admin activeTab="products" />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin_login" element={<AdminLogin />} />
          <Route path="/order" element={<ProtectedRoute><OrderPage/></ProtectedRoute>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          
          
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    );
  }

// The NoMatch function is a component that is displayed when the user navigates to a route that doesn't exist
function NoMatch() {
  // useLocation is a hook from react-router-dom that returns the current location object
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
// The root constant is the root DOM node that the React application will be attached to
const root = ReactDOM.createRoot(document.querySelector('#app'));
// The render method is used to render the App component into the root DOM node
root.render(<App />);