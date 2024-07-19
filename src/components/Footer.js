import React from 'react';
import logo from '../assets/images/azl.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        <div className="md:w-1/4">
          <img src={logo} alt="ANZ Landscaping Company" className="h-40 mb-4" />
        </div>
        <div className="md:w-1/4">
          <h3 className="font-semibold mb-4">What We Do</h3>
          <ul className="space-y-2">
            <li>Interior Design</li>
            <li>Architecture Design</li>
            <li>Master Planning</li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Studio</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h3 className="font-semibold mb-4">Subscribe for more updates!</h3>
          <p className="text-sm mb-4">Stay updated with our latest design insights by entering your email below.</p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="your email!"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-gray-500"
            />
            <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">Submit</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex justify-between items-center border-t border-gray-700 pt-8">
        <p className="text-sm">Copy Rights © 2024 ANZ Landscaping Company (I) Pvt. Ltd.</p>
        <p className="text-sm pl-4">Made with passion by [Your Company Logo Here]</p>
      </div>
    </footer>
  );
};

export default Footer;