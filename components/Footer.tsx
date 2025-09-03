import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} JimoSpa Hachioji. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
