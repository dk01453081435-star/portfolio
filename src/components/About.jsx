import React from 'react';
import { Code2, Compass, Cpu, Rocket, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const { name, location, hometown, email, phone, college, bio, quickStats } = portfolioData.personal;

  const pillars = [
    {
      icon: <Code2 size={22} className="text-primary-400" />,
      title: "Algorithms & Logic",
      description: "Practicing C++ and Data Structures & Algorithms to strengthen problem-solving foundations."
    },
    {
      icon: <Compass size={22} className="text-indigo-400" />,
      title: "Frontend Craft",
      description: "Building responsive, modern, and accessible web experiences using React and Tailwind CSS."
    },
    {
      icon: <Cpu size={22} className="text-cyan-400" />,
      title: "AI & Machine Learning",
      description: "Exploring text processing, embeddings, and intelligent models for practical problem solving."
    },
    {
      icon: <Rocket size={22} className="text-amber-400" />,
      title: "Entrepreneurial Spirit",
      description: "Driven by the ambition to engineer impactful products and launch innovative tech ventures."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/30 border-t border-slate-900/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-14">
          <p className="text-primary-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 font-mono">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me &amp; My Journey
          </h2>
          <div className="w-12 h-1 bg-primary-500 mt-3 rounded-full" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Authentic narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            {bio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 font-normal">
                {paragraph}
              </p>
            ))}

            {/* Quote / Philosophy */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-400 text-sm italic leading-relaxed">
              "I believe great engineering comes from understanding fundamentals deeply — whether that’s memory and pointers in C++, reactive state in React, or training workflows in machine learning."
            </div>

            {/* Fast fact badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {quickStats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-mono mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pillars & Values */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider font-mono text-xs text-slate-400 mb-2">
              What I Care About
            </h3>

            <div className="space-y-3">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors duration-200 flex items-start gap-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Connect Strip */}
            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-950/40 to-indigo-950/40 border border-primary-900/30 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Mail size={14} className="text-primary-400" />
                  {email}
                </span>
                <a
                  href="#contact"
                  className="text-primary-400 hover:text-primary-300 font-medium flex items-center gap-1"
                >
                  Say Hello <ExternalLink size={12} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
