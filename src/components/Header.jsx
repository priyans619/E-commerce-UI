
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="MyIndia" className="h-2 sm:h-8 md:h-10 lg:h-12" /> 
        </Link>
        <nav className='text-xl text-black sm:mx-3 md:mx-4 lg:mx-5'>
          <Link to="/products" className=" mx-5">Home</Link>
          <Link to="/products" className=" mx-5">Products</Link>
          <Link to="/cart" className=" mx-5">Cart</Link>
          <Link to="/account" className="">Account</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
