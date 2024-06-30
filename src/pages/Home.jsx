import React from 'react';
import logo from '../assets/logo.png'; 

const Home = () => {
  return (
    <div className="container mx-auto mt-16 text-center " >
      <h1 className="text-3xl font-bold">Welcome to the Home Page of MyIndiaa</h1>
      <img src={logo} alt="MyIndia Logo" className="mx-auto h-50 mb-4" />
    </div>
  );
};

export default Home;
