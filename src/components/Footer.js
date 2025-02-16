import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center py-8">
      <p>&copy; {currentYear} Andres Franco. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
