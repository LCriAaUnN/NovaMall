import ReactDOM from "react-dom/client";
import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import {
  Navigate
} from 'react-router';
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
          <Route path="/login" element={<Login />}/>
          <Route path="/user" element={<UserInfo />}/>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />

          
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
        No match for:
        <br></br>
        <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
  
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<App />);