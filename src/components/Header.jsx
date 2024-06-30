
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-300 p-4 border-b border-gray-400 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
        <img src={logo} alt="MyIndia" className="h-7 sm:h-8 md:h-10 lg:h-12" /> 
        </Link>
        <nav className='text-xl text-black sm:mx-3 md:mx-4 lg:mx-5'>
          <Link to="/" className=" mx-5">Home</Link>
          <Link to="/products" className=" mx-5">Products</Link>
          <Link to="/cart" className=" mx-5">Cart</Link>
          <Link to="/account" className="">Account</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
