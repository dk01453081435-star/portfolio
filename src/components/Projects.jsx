import React from 'react';
import { Github, ExternalLink, Award, Sparkles, CheckCircle2, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-slate-900/30 border-t border-slate-900/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-14">
          <p className="text-primary-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 font-mono">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects &amp; Hackathon Builds
          </h2>
          <div className="w-12 h-1 bg-primary-500 mt-3 rounded-full" />
          <p className="text-slate-400 text-base mt-4">
            Practical applications and research concepts built during college and hackathons.
          </p>
        </div>

        {/* Featured Project Showcase */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl hover:border-slate-700/80 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Project Story & Details */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Badge & Title */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-semibold uppercase tracking-wider mb-3">
                      <Award size={13} className="text-primary-400" />
                      {project.badge}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-primary-400 text-sm sm:text-base font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Overview */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-1">
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold">
                      Key Highlights &amp; Approach
                    </h4>
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-medium text-sm px-5 py-2.5 rounded-xl border border-slate-800 transition-colors"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  </div>

                </div>

                {/* Right: Architectural / Conceptual Card */}
                <div className="lg:col-span-4 bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <span className="text-xs font-mono uppercase text-slate-400">Concept Architecture</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/60">
                      <p className="text-primary-400 font-semibold mb-1">1. Review Ingestion</p>
                      <p className="text-slate-400">Raw customer feedback text sanitized and tokenized.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/60">
                      <p className="text-indigo-400 font-semibold mb-1">2. Semantic Embeddings</p>
                      <p className="text-slate-400">Contextual vector representations to detect pattern similarities.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/60">
                      <p className="text-cyan-400 font-semibold mb-1">3. Classification Model</p>
                      <p className="text-slate-400">Scores authenticity probability against baseline organic reviews.</p>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 italic pt-1">
                    *Presented as an applied AI proof-of-concept during our collegiate hackathon.
                  </p>
                </div>

              </div>
            </div>
          ))}

          {/* Authentic "What's Next" Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/60 border border-slate-800/80 border-dashed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-primary-400 shrink-0">
                <FolderGit2 size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-base sm:text-lg mb-1">
                  More Projects in Active Development
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                  I'm continuously writing code, solving DSA problems in C++, and prototyping new web and AI applications. Follow along with my latest commits on GitHub!
                </p>
              </div>
            </div>

            <a
              href="https://github.com/dk01453081435-star"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-3 rounded-xl border border-slate-800 transition-colors shrink-0"
            >
              Explore GitHub Profile
              <ArrowUpRight size={15} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
