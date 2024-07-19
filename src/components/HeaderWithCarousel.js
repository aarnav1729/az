import React from "react";
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

import "@fortawesome/fontawesome-free/css/all.min.css"; 

SwiperCore.use([Navigation, Pagination, Autoplay]);

const HeaderWithCarousel = () => {
  return (
    <header className="relative">
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold">Terra Lapis</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-500">
              Home
            </a>
            <a href="#studio" className="hover:text-gray-500">
              Studio
            </a>
            <a href="#services" className="hover:text-gray-500">
              Services
            </a>
            <a href="#projects" className="hover:text-gray-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-500">
              Contact Us
            </a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Start a project
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-800">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop
      >
        <SwiperSlide>
          <img
            src={slide1}
            alt="Slide 1"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt="Slide 2"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt="Slide 3"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide4}
            alt="Slide 4"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-20 right-20 flex space-x-2 z-10">
        <div>      
            <i class="fa-regular fa-circle-left fa-2xl"></i>
        </div>
        <div>      
            <i class="fa-regular fa-circle-right fa-2xl"></i>
        </div>
      </div>
    </header>
  );
};

export default HeaderWithCarousel;