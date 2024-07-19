import React from 'react';

function ProjectsSection() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="/src/assets/images/screenshot6.png" alt="Project 1" className="w-full"/>
          <h3 className="text-2xl font-bold mt-4">NYCEDC</h3>
          <p className="text-gray-600">Interior Design, New York, 2015</p>
        </div>
        <div>
          <img src="/src/assets/images/screenshot7.png" alt="Project 2" className="w-full"/>
          <h3 className="text-2xl font-bold mt-4">Naveen Residence</h3>
          <p className="text-gray-600">Architecture, Bangalore, 2017</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;