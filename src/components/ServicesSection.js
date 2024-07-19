import React from 'react';

function ServicesSection() {
  const services = [
    { title: 'Architectural Design', image: 'screenshot3.png' },
    { title: 'Master Planning', image: 'screenshot4.png' },
    { title: 'Interior Design', image: 'screenshot5.png' },
  ];

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <img src={`/src/assets/images/${service.image}`} alt={service.title} className="w-full mb-4"/>
            <h3 className="text-2xl font-bold">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;