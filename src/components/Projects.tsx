import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ShieldAlert, Layers, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'mern' | 'frontend'>('all');

  const filteredProjects = projects.filter(proj => {
    if (filter === 'mern') return proj.tech.includes('MongoDB') || proj.tech.includes('Node.js');
    if (filter === 'frontend') return !proj.tech.includes('MongoDB') && !proj.tech.includes('Node.js');
    return true;
  });

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 overflow-hidden border-t border-slate-200/40 dark:border-slate-800/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-mono font-bold tracking-wider uppercase mb-3"
          >
            <Briefcase className="w-3.5 h-3.5 text-rose-500" /> Project Portfolio
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500 font-extrabold">
              Creations
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-slate-400 dark:text-slate-500 mt-2 uppercase tracking-widest">
            A selective snapshot of full-stack and front-end solutions
          </p>
          <div className="w-16 h-1 bg-rose-500 rounded-full mt-3" />
        </div>

        {/* Project Filters */}
        <div className="flex justify-center gap-2.5 mb-14">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'mern', label: 'MERN Full Stack' },
            { id: 'frontend', label: 'Frontend & UI' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-semibold border transition-all duration-300 cursor-pointer ${
                filter === btn.id
                  ? 'bg-rose-600 border-rose-500 text-white shadow-md shadow-rose-500/15'
                  : 'bg-slate-100 dark:bg-rose-950/20 border-slate-200 dark:border-rose-500/10 text-slate-700 dark:text-rose-100 hover:bg-slate-200 dark:hover:bg-rose-900/30'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Alternating Project Cards List */}
        <div className="space-y-16 sm:space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
                >
                  
                  {/* Left Column (Image Frame) - alternates left/right */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} w-full`}>
                    <div className="relative group overflow-hidden rounded-2xl glass-panel border border-slate-200/50 dark:border-rose-500/15 p-3 shadow-xl hover:border-rose-500/35 transition-all duration-300">
                      
                      {/* Image tag with no-referrer policy */}
                      <div className="overflow-hidden rounded-xl aspect-[16/10] bg-[#1a050d] relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="object-cover w-full h-full opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                        />
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#14050a] via-transparent to-transparent opacity-60" />
                        
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg shadow-md shadow-rose-500/20">
                            MERN Stack
                          </div>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Right Column (Text details) - alternates right/left */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2 text-left' : 'lg:order-1 text-left'}`}>
                    
                    {/* Project Subtitle */}
                    <span className="text-xs font-mono font-bold tracking-widest text-rose-400 uppercase">
                      {project.subtitle}
                    </span>
                    
                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {project.title}
                    </h3>
                    
                    {/* Project Description */}
                    <p className="text-sm sm:text-base text-slate-600 dark:text-rose-100/70 mt-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-5 space-y-2">
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-rose-300/40 uppercase tracking-wider block">
                        Key Deliverables:
                      </span>
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-slate-700 dark:text-rose-100 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-6">
                      {project.tech.map((tc) => (
                        <span
                          key={tc}
                          className="px-2.5 py-1 text-[10px] font-mono font-semibold bg-slate-100 dark:bg-[#200711] text-slate-700 dark:text-rose-100 rounded-lg border border-slate-200/40 dark:border-rose-500/10"
                        >
                          {tc}
                        </span>
                      ))}
                    </div>

                    {/* Button Controls */}
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                      {/* Live Link */}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-sans font-semibold text-xs sm:text-sm shadow-md shadow-rose-500/10 hover:shadow-rose-500/30 transition-all duration-300"
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      {/* Code Link */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#1a050d] hover:bg-slate-200 dark:hover:bg-[#2a0916] text-slate-700 dark:text-rose-200 font-sans font-semibold text-xs sm:text-sm border border-slate-200/50 dark:border-rose-500/15 transition-all duration-300"
                      >
                        Source Code
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
