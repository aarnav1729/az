import React from 'react';

function ContactSection() {
  return (
    <section className="container mx-auto py-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-8">Contact us for any questions or assistance. Our team is here to help, and we’re just a message away. Reach out, and we’ll get back to you promptly.</p>
        <button className="text-white bg-blue-600 px-6 py-3 rounded hover:bg-blue-700">Contact Us</button>
      </div>
    </section>
  );
}

export default ContactSection;