import React from 'react';
import '../Styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Kids</a></li>
        <li><a href="#">Your Orders</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href='#'>Cart</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
