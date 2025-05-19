import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <GraduationCap className={`h-8 w-8 ${isScrolled ? 'text-blue-700' : 'text-white'} mr-2`} />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              Data Engineering School
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-300 transition-colors font-medium`}>
              About
            </a>
            <a href="#curriculum" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-300 transition-colors font-medium`}>
              Curriculum
            </a>
            <a href="#testimonials" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-300 transition-colors font-medium`}>
              Testimonials
            </a>
            <a 
              href={`https://wa.me/919391946765?text=I'm%20interested%20in%20enrolling%20for%20Data%20Engineering%20School`} 
              target="_blank" 
              rel="noreferrer"
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium"
            >
              Enroll Now
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute w-full">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#curriculum" 
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Curriculum
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href={`https://wa.me/919391946765?text=I'm%20interested%20in%20enrolling%20for%20Data%20Engineering%20School`} 
              target="_blank" 
              rel="noreferrer"
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium text-center"
            >
              Enroll Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;