import React from 'react';
import { Github, Linkedin, ArrowUpRight, Mail, FileText, MapPin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { name, headline, location, hometown, college, github, linkedin, resumeUrl, avatar, email } =
    portfolioData.personal;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Subtle ambient lighting - tasteful, not overblown */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Quick status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Computer Science Undergraduate</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{college}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hey, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-indigo-300 to-indigo-400">{name}</span>.
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 font-medium leading-snug">
                {headline}
              </p>
            </div>

            {/* Human Intro Paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              I’m pursuing B.Tech in CSE at SVIET (Banur, Punjab), originally from Koderma, Jharkhand. 
              I focus on core problem-solving with C++ and DSA, build responsive user interfaces with React and Tailwind CSS, and actively explore machine learning concepts.
            </p>

            {/* Location & Quick Context */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800/80">
                <MapPin size={13} className="text-primary-400" />
                {location} &amp; {hometown}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800/80">
                <GraduationCap size={13} className="text-indigo-400" />
                B.Tech CSE Student
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-medium px-6 py-3 rounded-xl shadow-md shadow-primary-600/20 hover:shadow-primary-500/30 transition-all duration-200"
              >
                View My Projects
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium px-5 py-3 rounded-xl transition-all duration-200"
              >
                <Mail size={16} />
                Get in Touch
              </a>

              {resumeUrl && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-900 border border-slate-800/80 text-slate-400 hover:text-slate-200 font-medium px-4 py-3 rounded-xl transition-all duration-200"
                >
                  <FileText size={16} />
                  Resume
                </a>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2 text-slate-500">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect</span>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-sm"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-sm"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Natural Photo Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              
              {/* Subtle back card glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/30 to-indigo-600/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
              
              {/* Card container */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-3.5 shadow-2xl overflow-hidden max-w-sm">
                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 relative">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt={name}
                      className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-600">
                      No Photo
                    </div>
                  )}
                </div>

                {/* Micro caption on the photo card */}
                <div className="pt-3.5 pb-1 px-2 flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-semibold">{name}</p>
                    <p className="text-slate-400 text-xs">CSE Undergraduate • Banur</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Available
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
