import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "../assets/styles/tailwind.css";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import logo from "../assets/images/azl.png";

import "@fortawesome/fontawesome-free/css/all.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const HeaderWithCarousel = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative">
      <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="ANZ Landscaping Company" className="h-24" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-lg flex-1 justify-center">
            <a href="#home" className={`hover:text-gray-500 ${isScrolled ? "text-black" : "text-white"}`}>Home</a>
            <a href="#studio" className={`hover:text-gray-500 ${isScrolled ? "text-black" : "text-white"}`}>Studio</a>
            <a href="#services" className={`hover:text-gray-500 ${isScrolled ? "text-black" : "text-white"}`}>Services</a>
            <a href="#projects" className={`hover:text-gray-500 ${isScrolled ? "text-black" : "text-white"}`}>Projects</a>
            <a href="#contact" className={`hover:text-gray-500 ${isScrolled ? "text-black" : "text-white"}`}>Contact Us</a>
          </nav>
          <div className="hidden md:flex items-center justify-end">
            <Link to="/" className="text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700">
              Start a project
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className={`text-gray-800 ${isScrolled ? "text-black" : "text-white"}`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-blue-600 flex flex-col items-center justify-center text-white text-2xl space-y-4 z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-3xl">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <Link to="/" className="block py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/studio" className="block py-2" onClick={toggleMenu}>Studio</Link>
          <Link to="/services" className="block py-2" onClick={toggleMenu}>Services</Link>
          <Link to="/projects" className="block py-2" onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" className="block py-2" onClick={toggleMenu}>Contact Us</Link>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
            <a href="/" className="hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
            <a href="/" className="hover:text-blue-400"><i className="fab fa-facebook"></i></a>
            <a href="/" className="hover:text-blue-400"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      )}

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".r",
          prevEl: ".l",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop
      >
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" className="w-full h-screen object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="Slide 2" className="w-full h-screen object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="Slide 3" className="w-full h-screen object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="Slide 4" className="w-full h-screen object-cover" />
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-20 right-20 flex space-x-2 z-10">
        <div className="l">
          <i className="fa-regular fa-circle-left fa-2xl"></i>
        </div>
        <div className="r">
          <i className="fa-regular fa-circle-right fa-2xl"></i>
        </div>
      </div>
    </header>
  );
};

export default HeaderWithCarousel;