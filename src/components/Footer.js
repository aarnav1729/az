import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Terra Lapis</h2>
          <p className="mt-2">Wholly owned subsidiary of studio Parametric</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">What We Do</h3>
          <ul className="mt-2 space-y-2">
            <li>Interior Design</li>
            <li>Architecture Design</li>
            <li>Master Planning</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Quick Link</h3>
          <ul className="mt-2 space-y-2">
            <li>Home</li>
            <li>Studio</li>
            <li>Projects</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Legal</h3>
          <ul className="mt-2 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <div>
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1v2h16v-2h1m-2 10h1v-2h-1v-2h1v-2h-1v-2h1v-2h-1V6h-2v1H6V6H4v4H3v2h1v2H3v2h1v2H3v2h1z"></path>
              </svg>
            </div>
            <p className="text-gray-400">59/1, K.R. Road, Basavanagudi, Bangalore, 560004, India</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 01-12 0 6 6 0 0112 0zM21 21v-4a6 6 0 00-6-6H9a6 6 0 00-6 6v4"></path>
            </svg>
            <p className="text-gray-400">reachus@terralapis.com</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m0-2v-1a5 5 0 015-5h8a5 5 0 015 5v1m-6 4v6"></path>
            </svg>
            <p className="text-gray-400">080-26600886</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-gray-400">© 2024 Terra Lapis Consulting (I) Pvt. Ltd.</p>
        <p className="text-gray-400 mt-4">Made with passion by <a href="https://yourcompany.com" className="text-blue-500 hover:text-blue-600">YourCompany</a></p>
      </div>
    </footer>
  );
}

export default Footer;