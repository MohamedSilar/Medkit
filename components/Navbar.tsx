import React, { useState, useEffect } from 'react';
import { HeartPulse } from 'lucide-react';
import { APP_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-teal-600 p-2 rounded-xl text-white">
              <HeartPulse size={24} strokeWidth={2.5} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-teal-900' : 'text-teal-900 lg:text-white lg:drop-shadow-md'}`}>
              {APP_NAME}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;