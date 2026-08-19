import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowRight, Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { name, roles, tagline, github, linkedin, resumeUrl, avatar } = portfolioData.personal;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-600/20 glow-orb" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 glow-orb" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Intro Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-xs sm:text-sm font-medium tracking-wide mb-6 animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-primary-400" />
          Welcome to my Developer Portfolio
        </div>

        {/* Profile Image */}
        {avatar && (
          <div className="mb-6 relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-500 blur-md opacity-50 animate-pulse-slow" />
            <img
              src={avatar}
              alt={name}
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-slate-900 shadow-2xl"
            />
          </div>
        )}

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-indigo-300 to-indigo-500">{name}</span>
        </h1>

        {/* Dynamic Role / Subtitle */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-8">
          <span className="text-xl sm:text-3xl font-semibold text-slate-300">
            I am a{' '}
            <span className="text-primary-400 border-r-2 border-primary-400 animate-pulse px-1">
              {roles[currentRoleIndex]}
            </span>
          </span>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10">
          {tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-primary-600/20 hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Me
            <Mail size={18} />
          </a>
          <a
            href={resumeUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 text-slate-500">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* Down Arrow / Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll Down</span>
        <div className="w-1 h-3 rounded-full bg-slate-500" />
      </div>
    </section>
  );
};

export default Hero;
