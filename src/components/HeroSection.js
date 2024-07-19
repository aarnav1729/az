import React from 'react';

function HeroSection() {
  return (
    <section className="relative bg-black text-white h-screen">
      <img src="/src/assets/images/screenshot1.png" alt="Hero" className="object-cover w-full h-full opacity-50"/>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-5xl font-bold">Welcome to Terra Lapis</h1>
        <p className="mt-4 text-xl">Innovative Placemaking and Identity Creation</p>
      </div>
    </section>
  );
}

export default HeroSection;