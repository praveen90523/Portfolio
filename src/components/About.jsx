import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Award, Code2, Cpu, User, Heart, Compass } from "lucide-react";
import { personalInfo, stats } from "../data/portfolioData";

// Custom single stat component that counts up to target value
function StatCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target, 10) || 0;

  useEffect(() => {
    let start = 0;
    const duration = 1.5; // seconds
    const intervalTime = 30; // milliseconds
    const stepCount = (duration * 1000) / intervalTime;
    const increment = numericTarget / stepCount;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [numericTarget]);

  return (
    <span>
      {count}
      {suffix || target.replace(/[0-9]/g, "")}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 overflow-hidden border-t border-theme-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/10 text-theme-primary text-xs font-mono font-bold tracking-wider uppercase mb-3"
          >
            <User className="w-3.5 h-3.5 text-theme-primary" /> About Me
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-text tracking-tight">
            Who Is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500 font-extrabold">
              Praveen?
            </span>
          </h2>
          <div className="w-16 h-1 bg-rose-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* About Left: Professional Stylized Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm">
              {/* Outer decorative neon border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />

              {/* Main Card */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-theme-border p-4">
                {/* Visual Avatar Frame */}
                <div className="aspect-square w-full rounded-xl bg-theme-bg overflow-hidden relative flex items-center justify-center">
                  <img
                    src="/praveen_avatar.jpeg"
                    alt="Praveen Portrait"
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full opacity-95 group-hover:scale-105 transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-transparent opacity-60" />

                  {/* Decorative float badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-theme-card/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-theme-border">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-theme-muted">
                        STATUS
                      </span>
                      <span className="text-xs font-sans font-bold text-theme-text flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                        Active Coding
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] font-mono text-theme-muted">
                        LOC
                      </span>
                      <span className="text-xs font-sans font-bold text-theme-text">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Right: Text & Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-theme-text flex items-center gap-2">
              <Compass className="w-6 h-6 text-rose-500" /> My Mission & Career
              Objective
            </h3>

            <p className="text-theme-muted leading-relaxed text-sm sm:text-base">
              {personalInfo.bio} I specialize in engineering high-fidelity
              client views in React paired with reliable, robust Express servers
              and MongoDB clusters.
            </p>

            <p className="text-theme-muted leading-relaxed text-sm sm:text-base">
              My coding philosophy centers on architectural honesty and user
              delight. Every margin, hover transition, and database query is
              crafted purposefully to ensure maximum responsiveness and clean
              usability. I continuously explore system engineering fields, clean
              patterns, and distributed structures.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { icon: Code2, label: "Full Stack Orchestration" },
                { icon: Cpu, label: "Modern Reactive UIs" },
                { icon: Award, label: "Scalable Databases" },
                { icon: Heart, label: "Passion for Open Source" },
              ].map((highlight, idx) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-theme-card p-3 rounded-xl border border-theme-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-theme-primary/10 text-theme-primary flex items-center justify-center border border-theme-border">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-sans font-semibold text-xs sm:text-sm text-theme-text">
                      {highlight.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* About Bottom: Animated Stats Bar Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 sm:mt-24">
          {stats.map((stat, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl glass-panel border border-theme-border p-6 flex flex-col items-center justify-center text-center shadow-theme-soft group hover:border-theme-primary/40 transition-colors duration-300"
              >
                {/* Background lighting */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-rose-500 to-pink-500" />

                <span className="font-sans font-black text-3xl sm:text-4xl text-theme-text flex items-center gap-0.5 tracking-tight group-hover:text-rose-400 transition-colors">
                  <StatCounter target={stat.value} />
                </span>

                <span className="font-sans font-bold text-xs sm:text-sm text-theme-text mt-2">
                  {stat.label}
                </span>

                <span className="text-[10px] font-mono text-theme-muted mt-1 uppercase tracking-wide">
                  {stat.sub}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
