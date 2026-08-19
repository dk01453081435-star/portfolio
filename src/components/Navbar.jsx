import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Navbar = () => {
  const { name, hometown } = portfolioData.personal;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900 py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo / Brand Name */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform duration-300">
              <Terminal size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg tracking-tight uppercase group-hover:text-primary-400 transition-colors">
                {name}
              </span>
              {/* Hometown shown under name / side of name in Navbar */}
              <span className="text-slate-400 text-[10px] flex items-center gap-0.5">
                <MapPin size={10} className="text-primary-500" />
                {hometown}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/50 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* Quick Contact Badge / CTA */}
            <a
              href="#contact"
              className="bg-primary-600/10 hover:bg-primary-600 border border-primary-500/30 hover:border-primary-500 text-primary-400 hover:text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 uppercase"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen border-b border-slate-900 bg-slate-950/95 backdrop-blur-lg' : 'max-h-0'
      }`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 pb-2 px-3 border-t border-slate-900 flex justify-between items-center text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin size={12} className="text-primary-500" /> {hometown}
            </span>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold uppercase tracking-wider"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
