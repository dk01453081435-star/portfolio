import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-14">
          <p className="text-primary-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 font-mono">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Studies
          </h2>
          <div className="w-12 h-1 bg-primary-500 mt-3 rounded-full" />
          <p className="text-slate-400 text-base mt-4">
            My formal engineering foundation in computer science and software development.
          </p>
        </div>

        {/* Education Card */}
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-primary-500/10 text-primary-400 border border-primary-500/20 shrink-0">
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary-400 block mb-1">
                      {item.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.degree}
                    </h3>
                    <p className="text-slate-300 text-base font-medium mt-0.5">
                      {item.college}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    <MapPin size={13} className="text-primary-400" />
                    {item.location}
                  </span>
                </div>

              </div>

              {/* Description & Academic Highlights */}
              <div className="space-y-4">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 space-y-2.5">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold">
                    Core Coursework &amp; Competencies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 size={16} className="text-primary-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
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

export default Education;
