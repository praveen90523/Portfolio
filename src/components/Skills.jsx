import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Terminal,
  Code2,
  Database,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { skills } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((s) => s.category === activeTab);

  const categories = [
    { id: "all", label: "All Stack", icon: Sparkles },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "backend", label: "Backend", icon: Terminal },
    { id: "database", label: "Databases", icon: Database },
    { id: "tools", label: "Tools & DevOps", icon: Cpu },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 overflow-hidden border-t border-slate-200/40 dark:border-slate-800/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-mono font-bold tracking-wider uppercase mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-rose-500" /> Capabilities
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500 font-extrabold">
              Expertise
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-slate-400 dark:text-slate-500 mt-2 uppercase tracking-widest">
            Fostering clean layouts, secure routers, and fast databases
          </p>
          <div className="w-16 h-1 bg-rose-500 rounded-full mt-3" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-semibold border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-500/25"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 dark:bg-rose-950/20 dark:border-rose-500/10 dark:text-rose-100 dark:hover:bg-rose-900/30"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${isActive ? "text-white" : "text-rose-400"}`}
                />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Animated Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.35, delay: index * 0.02 }}
                  className="relative overflow-hidden rounded-2xl glass-panel border border-slate-200/60 dark:border-rose-500/15 p-6 flex flex-col justify-between shadow-md dark:shadow-[0_4px_25px_rgba(244,63,94,0.05)] group hover:border-rose-500/35 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-rose-500/10 to-transparent group-hover:from-rose-500/20 transition-all" />

                  {/* Name and Level Label */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start text-left">
                      <span className="font-sans font-bold text-base text-slate-900 dark:text-white group-hover:text-rose-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-rose-300/40 uppercase tracking-widest mt-0.5">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic bottom details container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 text-center max-w-2xl mx-auto"
        >
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans italic leading-relaxed">
            "My technology selection focuses on delivering secure MERN
            workflows: React handles component safety, Express routes parameters
            securely, MongoDB indexes queries, and Tailwind builds eye-safe
            visual elements."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
