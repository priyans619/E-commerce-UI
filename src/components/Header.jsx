
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">MyIndia</Link>
        <nav>
          <Link to="/products" className="text-white mx-3">Home</Link>
          <Link to="/products" className="text-white mx-3">Products</Link>
          <Link to="/cart" className="text-white mx-3">Cart</Link>
          <Link to="/account" className="text-white mx-3">Account</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
