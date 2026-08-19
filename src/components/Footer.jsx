import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const { name, github, linkedin, email } = portfolioData.personal;
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Name & Copyright */}
        <div className="text-center md:text-left space-y-2">
          <span className="text-white font-extrabold text-base tracking-widest uppercase">
            {name}
          </span>
          <p className="text-slate-500 text-xs sm:text-sm">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-6 text-slate-500">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${email}`}
            className="hover:text-white transition-colors duration-300 hover:scale-110"
            aria-label="Email Me"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Right Side: Scroll back to top */}
        <div>
          <button
            onClick={handleScrollTop}
            className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 group hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="group-hover:animate-pulse" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
