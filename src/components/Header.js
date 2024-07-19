import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="text-gray-800">Terra Lapis</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
        <nav className={`md:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="text-gray-600 hover:text-gray-800 block py-2">Home</Link>
          <Link to="/studio" className="text-gray-600 hover:text-gray-800 block py-2">Studio</Link>
          <Link to="/services" className="text-gray-600 hover:text-gray-800 block py-2">Services</Link>
          <Link to="/projects" className="text-gray-600 hover:text-gray-800 block py-2">Projects</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800 block py-2">Contact Us</Link>
          <Link to="/" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 block py-2">Start a project</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;