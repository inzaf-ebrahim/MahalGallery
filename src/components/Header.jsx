import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mahal Gallery</h1>
        <nav>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/services" className="mx-2">Services</Link>
          <Link to="/about" className="mx-2">About</Link>
          <Link to="/careers" className="mx-2">Careers</Link>
          <Link to="/contact" className="mx-2">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
