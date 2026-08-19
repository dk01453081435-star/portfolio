import React from 'react';
import { User, GraduationCap, MapPin, Target, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const { name, tagline, location, hometown, email, phone, avatar } = portfolioData.personal;
  const education = portfolioData.education[0];

  return (
    <section id="about" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Story & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-primary-400 font-semibold text-sm uppercase tracking-wider">
              <Sparkles size={16} />
              Professional Background
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              Hi, I'm <strong className="text-white font-semibold">{name}</strong>. {tagline}
            </p>

            <div className="border-l-4 border-primary-500 pl-4 py-1 bg-slate-900/30 rounded-r-lg">
              <p className="italic text-slate-400 text-sm">
                "Developing concept-driven AI systems and high-quality frontend experiences with C++, React, and Tailwind CSS."
              </p>
            </div>

            {/* Core Values / Interest Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 mb-3">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Current Studies</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Pursuing B.Tech CSE at {education.college}.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3">
                  <Target size={20} />
                </div>
                <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Long-Term Goal</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Striving to become a professional AI Engineer and entrepreneur.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Details Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-5 mb-5">
                {avatar ? (
                  <img
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover border border-slate-800 shadow-md"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-primary-400">
                    <User size={22} />
                  </div>
                )}
                <div>
                  <h3 className="text-white font-bold text-lg">Personal Details</h3>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">Fast Facts</p>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-slate-900">
                  <span className="text-slate-400">Full Name</span>
                  <span className="text-white font-medium">{name}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-900">
                  <span className="text-slate-400">Current Location</span>
                  <span className="text-white font-medium flex items-center gap-1">
                    <MapPin size={14} className="text-primary-500" />
                    {location}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-900">
                  <span className="text-slate-400">Hometown</span>
                  <span className="text-white font-medium">{hometown}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-900">
                  <span className="text-slate-400">Email</span>
                  <a href={`mailto:${email}`} className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    {email}
                  </a>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-900">
                  <span className="text-slate-400">Phone</span>
                  <a href={`tel:${phone}`} className="text-white font-medium hover:text-primary-400 transition-colors">
                    +91 {phone}
                  </a>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">College</span>
                  <span className="text-white font-medium">{education.college}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
