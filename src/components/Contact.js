import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <div className="contact-info grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="social-icons text-3xl text-blue-500 mb-4">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
          <h2 className="text-2xl">Let's work together!</h2>
          <p className="text-xl">Email: info@yourdomain.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
