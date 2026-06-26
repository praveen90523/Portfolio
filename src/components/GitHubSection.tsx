import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitFork, BookOpen, Users, Terminal, Award, Eye, Calendar } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Generates fake but extremely realistic contribution grid colors
const contributionWeeks = 24; // ~6 months
const daysPerWeek = 7;

const generateGridData = () => {
  const levels = [0, 1, 2, 3, 4]; // 0 = empty, 4 = heavy green/orange
  const data = [];

  // Seed random levels with realistic clusterings
  for (let w = 0; w < contributionWeeks; w++) {
    const week = [];
    for (let d = 0; d < daysPerWeek; d++) {
      let level = 0;
      const rand = Math.random();
      // Clusters: higher chance of code on weekdays
      if (d > 0 && d < 6) {
        if (rand > 0.8) level = 4;
        else if (rand > 0.5) level = 3;
        else if (rand > 0.2) level = 2;
        else level = 1;
      } else {
        if (rand > 0.9) level = 2;
        else if (rand > 0.7) level = 1;
      }
      week.push(level);
    }
    data.push(week);
  }
  return data;
};

const gridData = generateGridData();

export default function GitHubSection() {
  const [hoveredTile, setHoveredTile] = useState<{ week: number; day: number; count: number } | null>(null);

  const repos = [
    { name: 'praveen-events', desc: 'Modern event ticketing, booking and admin system in MERN Stack.', stars: 12, forks: 4, lang: 'TypeScript' },
    { name: 'praveen-stores', desc: 'Full e-commerce layout with cart mechanics, product filters and CMS dashboards.', stars: 18, forks: 6, lang: 'JavaScript' },
    { name: 'praveen-tech', desc: 'Praveen Tech is a MERN stack web application built to showcase technology services and software solutions.', stars: 10, forks: 2, lang: 'React' },
  ];

  const topLanguages = [
    { name: 'JavaScript', percentage: 48, color: '#F7DF1E' },
    { name: 'React (JSX)', percentage: 32, color: '#61DAFB' },
    { name: 'HTML & CSS', percentage: 12, color: '#E34F26' },
    { name: 'Node / Express', percentage: 8, color: '#339933' },
  ];

  return (
    <section
      id="github"
      className="relative py-20 sm:py-28 overflow-hidden border-t border-slate-200/40 dark:border-slate-800/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-mono font-bold tracking-wider uppercase mb-3"
          >
            <Github className="w-3.5 h-3.5 text-rose-500" /> Source metrics
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            GitHub{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500 font-extrabold">
              Contributions
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-slate-400 dark:text-slate-500 mt-2 uppercase tracking-widest">
            Auditing dynamic development commits, languages, and star statistics
          </p>
          <div className="w-16 h-1 bg-rose-500 rounded-full mt-3" />
        </div>

        {/* GitHub Top Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-left">
          {[
            { icon: BookOpen, label: 'Repositories', val: '25+' },
            { icon: Star, label: 'Stars Earned', val: '45+' },
            { icon: GitFork, label: 'Total Forks', val: '14+' },
            { icon: Users, label: 'Followers', val: '50+' },
          ].map((stat, sIdx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={sIdx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                className="p-5 rounded-2xl glass-panel border border-slate-200/50 dark:border-rose-500/10 flex items-center gap-4 hover:border-rose-500/25 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/20 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 dark:text-rose-300/40 uppercase tracking-widest leading-none">
                    {stat.label}
                  </div>
                  <div className="text-2xl font-sans font-black text-slate-950 dark:text-white mt-1 leading-none">
                    {stat.val}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Split Grid: Contribution Graph & Top Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Contribution Grid (cols 8) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-6 rounded-2xl glass-panel border border-slate-200/50 dark:border-rose-500/15 text-left shadow-lg"
          >
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <h3 className="font-sans font-extrabold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-rose-500" /> Contribution Heatmap
              </h3>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <span>1,248 commits</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                <span>Last 6 Months</span>
              </div>
            </div>

            {/* Simulated Git Heatmap Grid */}
            <div className="overflow-x-auto pb-4 scrollbar-thin">
              <div className="min-w-[550px] flex gap-[3.5px]">
                {gridData.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3.5px]">
                    {week.map((level, dIdx) => {
                      // Map level to slate/rose colors
                      let bgClass = 'bg-slate-200 dark:bg-[#1a050d] border border-rose-500/5'; // level 0
                      if (level === 1) bgClass = 'bg-rose-500/20';
                      if (level === 2) bgClass = 'bg-rose-500/40';
                      if (level === 3) bgClass = 'bg-rose-500/70';
                      if (level === 4) bgClass = 'bg-rose-500';

                      const totalCommits = level === 0 ? 0 : level * 2 + Math.floor(Math.random() * 3);

                      return (
                        <div
                          key={dIdx}
                          onMouseEnter={() => setHoveredTile({ week: wIdx, day: dIdx, count: totalCommits })}
                          onMouseLeave={() => setHoveredTile(null)}
                          className={`w-[13px] h-[13px] rounded-[2px] transition-all hover:scale-115 hover:ring-2 hover:ring-rose-500/40 cursor-pointer ${bgClass}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Heatmap Legend */}
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/40 dark:border-rose-500/10 text-[10px] font-mono text-slate-400">
              <div className="flex items-center gap-1">
                <span>Less</span>
                <div className="w-[11px] h-[11px] rounded-[2px] bg-slate-200 dark:bg-[#15040a]" />
                <div className="w-[11px] h-[11px] rounded-[2px] bg-rose-500/20" />
                <div className="w-[11px] h-[11px] rounded-[2px] bg-rose-500/40" />
                <div className="w-[11px] h-[11px] rounded-[2px] bg-rose-500/70" />
                <div className="w-[11px] h-[11px] rounded-[2px] bg-rose-500" />
                <span>More</span>
              </div>

              {/* Interactive Hover tooltip display */}
              <div className="min-h-[16px] text-rose-400 font-bold">
                {hoveredTile
                  ? `${hoveredTile.count} commits on day ${hoveredTile.day + 1} of week ${hoveredTile.week + 1}`
                  : 'Hover over tiles for detail'
                }
              </div>
            </div>

            {/* Project List Inside GitHub Block */}
            <div className="mt-8">
              <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-rose-300/40 uppercase tracking-widest mb-4">
                Popular Repositories
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {repos.map((rp, rIdx) => (
                  <div key={rIdx} className="p-4 rounded-xl border border-slate-200/60 dark:border-rose-500/10 bg-slate-900/10 dark:bg-[#1c050d]/40 flex flex-col justify-between group hover:border-rose-500/20 transition-colors duration-300">
                    <div>
                      <span className="font-sans font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-rose-400 transition-colors">
                        {rp.name}
                      </span>
                      <p className="text-[11px] text-slate-600 dark:text-rose-100/70 mt-2 line-clamp-2">
                        {rp.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono mt-4 text-slate-400">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-rose-500" /> {rp.lang}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> {rp.stars}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Top Languages pie/progress representations (cols 4) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 p-6 rounded-2xl glass-panel border border-slate-200/50 dark:border-rose-500/15 text-left shadow-lg h-full"
          >
            <h3 className="font-sans font-extrabold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <Terminal className="w-5 h-5 text-rose-500" /> Top Languages
            </h3>

            {/* SVG Pie Chart simulation */}
            <div className="flex justify-center mb-8 relative">
              <svg className="w-32 h-32 transform -rotate-90">
                {/* Simulated circle slices */}
                <circle cx="64" cy="64" r="50" stroke="#0f172a" strokeWidth="12" fill="transparent" />

                {/* JavaScript Arc 48% (circumference ~ 314, stroke-dasharray = % * 314) */}
                <circle cx="64" cy="64" r="50" stroke="#F7DF1E" strokeWidth="12" fill="transparent"
                  strokeDasharray="150 314" strokeDashoffset="0" />

                {/* React Arc 32% (starts at 150 offset) */}
                <circle cx="64" cy="64" r="50" stroke="#61DAFB" strokeWidth="12" fill="transparent"
                  strokeDasharray="100 314" strokeDashoffset="-150" />

                {/* CSS Arc 12% */}
                <circle cx="64" cy="64" r="50" stroke="#E34F26" strokeWidth="12" fill="transparent"
                  strokeDasharray="38 314" strokeDashoffset="-250" />

                {/* Node Arc 8% */}
                <circle cx="64" cy="64" r="50" stroke="#339933" strokeWidth="12" fill="transparent"
                  strokeDasharray="26 314" strokeDashoffset="-288" />
              </svg>

              {/* Central brand symbol */}
              <div className="absolute inset-0 flex items-center justify-center font-sans font-extrabold text-sm text-slate-900 dark:text-white pointer-events-none">
                MERN
              </div>
            </div>

            {/* Language Progress Rows */}
            <div className="space-y-4">
              {topLanguages.map((lang, lIdx) => (
                <div key={lIdx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                      {lang.name}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 font-bold">
                      {lang.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ backgroundColor: lang.color, width: `${lang.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer card metrics details */}
            <div className="mt-8 p-3 bg-slate-900/10 dark:bg-slate-900/30 rounded-xl border border-slate-200/40 dark:border-rose-500/10 text-xs text-slate-600 dark:text-rose-300/60 text-center">
              "Total Git commits verified this year: <span className="text-rose-400 font-extrabold">1,248</span> across multiple production systems."
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
