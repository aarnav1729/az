import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/azd.png";
import "../assets/styles/tailwind.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-10 bg-white shadow-md transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="ANZ Landscaping Company" className="h-20" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-lg flex-1 justify-center">
          <Link to="/" className="text-gray-600 hover:text-blue-700">
            Home
          </Link>
          <Link to="/studio" className="text-gray-600 hover:text-blue-700">
            Studio
          </Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-700">
            Services
          </Link>
          <Link to="/projects" className="text-gray-600 hover:text-blue-700">
            Projects
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-700">
            Contact Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center justify-end">
          <Link
            to="/"
            className="text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Start a project
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-blue-600 flex flex-col items-center justify-center text-white text-2xl space-y-4 z-50">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <Link to="/" className="block py-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/studio" className="block py-2" onClick={toggleMenu}>
            Studio
          </Link>
          <Link to="/services" className="block py-2" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/projects" className="block py-2" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="/contact" className="block py-2" onClick={toggleMenu}>
            Contact Us
          </Link>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="hover:text-blue-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="hover:text-blue-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/" className="hover:text-blue-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;