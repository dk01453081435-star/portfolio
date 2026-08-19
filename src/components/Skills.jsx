import React from 'react';
import { Code, Layout, Wrench, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const { languages, frontend, tools } = portfolioData.skills;

  const categories = [
    {
      title: 'Languages',
      icon: <Code className="text-primary-400" size={24} />,
      skillsList: languages,
      gradient: 'from-violet-500/10 to-purple-500/5',
      borderColor: 'group-hover:border-violet-500/50',
      badgeColor: 'bg-violet-500/10 text-violet-300'
    },
    {
      title: 'Frontend Development',
      icon: <Layout className="text-indigo-400" size={24} />,
      skillsList: frontend,
      gradient: 'from-indigo-500/10 to-blue-500/5',
      borderColor: 'group-hover:border-indigo-500/50',
      badgeColor: 'bg-indigo-500/10 text-indigo-300'
    },
    {
      title: 'Developer Tools',
      icon: <Wrench className="text-cyan-400" size={24} />,
      skillsList: tools,
      gradient: 'from-cyan-500/10 to-teal-500/5',
      borderColor: 'group-hover:border-cyan-500/50',
      badgeColor: 'bg-cyan-500/10 text-cyan-300'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-primary-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Here are the technologies and tools I actively use in my development workflow.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`group relative rounded-2xl bg-gradient-to-br ${category.gradient} border border-slate-800 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/5 hover:-translate-y-1`}
            >
              {/* Highlight Border effect */}
              <div className={`absolute inset-0 rounded-2xl border border-transparent transition-colors duration-300 ${category.borderColor}`} />
              
              <div className="relative z-10">
                {/* Header Icon + Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg sm:text-xl">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Cards Stack */}
                <div className="space-y-4">
                  {category.skillsList.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-primary-500" />
                        <span className="text-slate-200 font-medium text-sm sm:text-base">
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full ${category.badgeColor}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
