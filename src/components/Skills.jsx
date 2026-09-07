import React from 'react';
import { Terminal, Layers, Cpu, Sparkles, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const { programming, frontend, tools, learningNow } = portfolioData.skills;

  const skillGroups = [
    {
      title: "Core Programming",
      icon: <Terminal size={20} className="text-primary-400" />,
      skills: programming,
      gradient: "from-primary-500/10 to-indigo-500/5",
      border: "border-slate-800"
    },
    {
      title: "Frontend & Web",
      icon: <Layers size={20} className="text-indigo-400" />,
      skills: frontend,
      gradient: "from-indigo-500/10 to-cyan-500/5",
      border: "border-slate-800"
    },
    {
      title: "Tools & Workflow",
      icon: <Cpu size={20} className="text-cyan-400" />,
      skills: tools,
      gradient: "from-cyan-500/10 to-emerald-500/5",
      border: "border-slate-800"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-left max-w-2xl mb-14">
          <p className="text-primary-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 font-mono">
            Technical Toolkit
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <div className="w-12 h-1 bg-primary-500 mt-3 rounded-full" />
          <p className="text-slate-400 text-base mt-4">
            Languages, frameworks, and tools I use to build projects and solve algorithmic problems.
          </p>
        </div>

        {/* Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-gradient-to-b ${group.gradient} ${group.border} border p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    {group.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg">{group.title}</h3>
                </div>

                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium text-sm sm:text-base">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs font-normal">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Banner - High Human Authenticity */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400 border border-primary-500/20">
              <BookOpen size={20} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base">
                Currently Exploring &amp; Expanding
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Actively strengthening these areas through coursework, projects, and self-study.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {learningNow.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
