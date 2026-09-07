import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Navbar = () => {
  const { name, hometown, status } = portfolioData.personal;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Logo / Personal identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-600 via-indigo-600 to-indigo-500 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform duration-300">
              DK
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-primary-400 transition-colors">
                {name}
              </span>
              <span className="text-slate-400 text-[11px] flex items-center gap-1 font-normal">
                <MapPin size={11} className="text-primary-400" />
                {hometown}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <div className="flex items-center gap-1 bg-slate-900/60 border border-slate-800/70 px-3 py-1.5 rounded-full">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1 text-sm font-medium text-slate-300 hover:text-white rounded-full transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Status indicator button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {status}
            </a>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? 'max-h-96 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl'
            : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {status}
            </span>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary-600 hover:bg-primary-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
