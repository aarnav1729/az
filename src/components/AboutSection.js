import React from 'react';

function AboutSection() {
  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-600">Terra Lapis passionately believes in innovative placemaking and identity creation that inspire and elevate every project.</p>
        </div>
        <div className="md:w-1/2">
          <img src="/src/assets/images/screenshot2.png" alt="About Us" className="w-full"/>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;