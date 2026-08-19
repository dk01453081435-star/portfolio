import React from 'react';
import { Calendar, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
  const educationList = portfolioData.education;

  return (
    <section id="education" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-primary-400">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Academic foundation and study path.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 sm:pl-10 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800 last:before:hidden pb-12"
            >
              {/* Icon Marker */}
              <div className="absolute left-0 top-0.5 w-6.5 h-6.5 rounded-full bg-slate-900 border-2 border-primary-500 flex items-center justify-center text-primary-400 shadow-md shadow-primary-500/20">
                <GraduationCap size={12} />
              </div>

              {/* Timeline Card */}
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-slate-700/80 transition-all duration-300">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 bg-primary-600/10 border border-primary-500/20 text-primary-400 text-xs font-semibold px-3 py-1 rounded-md">
                    <Calendar size={12} />
                    {edu.duration}
                  </span>
                  
                  <span className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-medium">
                    <MapPin size={14} className="text-primary-500" />
                    {edu.location}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                  {edu.degree}
                </h3>
                
                <h4 className="text-slate-300 font-semibold text-sm sm:text-base mb-6">
                  {edu.college}
                </h4>

                {/* Achievements/Bullet lists */}
                {edu.details && edu.details.length > 0 && (
                  <div className="space-y-3 pt-2 border-t border-slate-800/80">
                    {edu.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-primary-400 mt-0.5 shrink-0" />
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
