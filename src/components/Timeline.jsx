import { motion } from "motion/react";
import { CheckCircle2, CircleDot, Milestone } from "lucide-react";
import { timeline } from "../data/portfolioData";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-20 sm:py-28 overflow-hidden border-t border-theme-border"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-mono font-bold tracking-wider uppercase mb-3"
          >
            <Milestone className="w-3.5 h-3.5 text-rose-500" /> Developmental
            Path
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-text tracking-tight">
            Learning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500 font-extrabold">
              Timeline
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-theme-muted mt-2 uppercase tracking-widest">
            A chronological sequence of architectural skill acquisition
          </p>
          <div className="w-16 h-1 bg-rose-500 rounded-full mt-3" />
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative border-l-2 border-theme-border ml-4 sm:ml-32 pl-8 sm:pl-10 space-y-12">
          {timeline.map((event, idx) => {
            const isActive = event.status === "active";
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative group text-left"
              >
                {/* Timeline node marker */}
                <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 z-10">
                  {isActive ? (
                    <div className="w-6 h-6 rounded-full bg-rose-600 border-4 border-theme-bg flex items-center justify-center shadow-lg shadow-rose-500/30 animate-pulse">
                      <CircleDot className="w-3 h-3 text-white" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-theme-card border-4 border-theme-bg flex items-center justify-center group-hover:border-rose-500 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                    </div>
                  )}
                </div>

                {/* Left Side Label (Desktop Only) */}
                <div className="hidden sm:block absolute -left-[180px] top-1 text-right w-[140px]">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                      isActive
                        ? "text-rose-400"
                        : "text-theme-muted"
                    }`}
                  >
                    Step 0{idx + 1}
                  </span>
                  <div className="text-[11px] font-mono font-medium text-theme-muted mt-0.5">
                    {isActive ? "Ongoing Focus" : "Acquired"}
                  </div>
                </div>

                {/* Timeline content Card */}
                <div
                  className={`p-6 rounded-2xl glass-panel border shadow-sm group-hover:border-rose-500/25 transition-all duration-300 relative ${
                    isActive
                      ? "border-rose-500/20 bg-rose-500/[0.02] ring-1 ring-rose-500/10"
                      : "border-theme-border"
                  }`}
                >
                  {/* Card corner light */}
                  {isActive && (
                    <div className="absolute top-0 right-0 w-16 h-16 bg-radial-gradient from-rose-500/10 to-transparent pointer-events-none rounded-tr-2xl" />
                  )}

                  <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                    <h3 className="font-sans font-bold text-base sm:text-lg text-theme-text group-hover:text-rose-400 transition-colors">
                      {event.title}
                    </h3>

                    {/* Status badge */}
                    <span
                      className={`px-2 py-0.5 rounded-md text-[9px] font-mono font-bold tracking-wider uppercase border shrink-0 ${
                        isActive
                          ? "bg-rose-500/10 border-rose-500/20 text-rose-400"
                          : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-theme-muted mt-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
