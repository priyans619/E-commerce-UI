
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="MyIndia" className="h-8 sm:h-10 md:h-10 lg:h-12" /> 
        </Link>
        <nav>
          <Link to="/products" className="text-white mx-5">Home</Link>
          <Link to="/products" className="text-white mx-5">Products</Link>
          <Link to="/cart" className="text-white mx-5">Cart</Link>
          <Link to="/account" className="text-white mx-5">Account</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
