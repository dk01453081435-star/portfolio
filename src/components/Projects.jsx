import React from 'react';
import { Github, ExternalLink, Bot, ShieldAlert, Award, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Showcasing hackathon concepts and development builds.
          </p>
        </div>

        {/* Project Card Container */}
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-slate-700/80 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Left Side: Creative Project Visual representation (Simulated UI) */}
                <div className="md:col-span-5 bg-gradient-to-br from-primary-950 to-indigo-950 p-6 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
                  
                  {/* Subtle decorative glow */}
                  <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primary-500/20 blur-2xl" />
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="inline-flex items-center gap-1 bg-primary-600/30 text-primary-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-primary-500/20">
                      <Award size={10} /> Hackathon
                    </span>
                    <Star size={16} className="text-primary-400 fill-primary-400 animate-pulse" />
                  </div>

                  {/* Simulated Review Detection Interface UI */}
                  <div className="relative z-10 my-4 bg-slate-950/80 rounded-xl p-3 border border-slate-800 shadow-lg text-left">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                      <span className="text-[10px] text-slate-400 font-mono">analysis_engine.cpp</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-3/4 rounded bg-slate-800" />
                      <div className="h-2 w-5/6 rounded bg-slate-800" />
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[9px] text-red-400 font-semibold flex items-center gap-0.5">
                          <ShieldAlert size={8} /> Suspicious Match
                        </span>
                        <span className="text-[9px] text-emerald-400 font-mono">94% score</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 text-left">
                    <span className="text-slate-500 text-[10px] uppercase font-mono block">Engine Concept</span>
                    <span className="text-slate-200 text-xs font-semibold">AI Fake Review Detector</span>
                  </div>
                </div>

                {/* Right Side: Details & Tech */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-primary-400 text-xs sm:text-sm font-semibold mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((techItem) => (
                        <span
                          key={techItem}
                          className="bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono px-3 py-1 rounded-md"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm font-semibold transition-colors"
                      >
                        <Github size={16} />
                        GitHub Repository
                      </a>
                      
                      {project.liveUrl !== '#' ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-semibold transition-colors"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-slate-500 text-xs cursor-not-allowed">
                          <Bot size={14} />
                          Concept Phase
                        </span>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
