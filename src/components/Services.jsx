import { motion } from "motion/react";
import {
  Layers,
  Laptop,
  Globe,
  UserCheck,
  BarChart3,
  Database,
  CheckCircle2,
  Server,
} from "lucide-react";
import { services } from "../data/portfolioData";

// Map icons to services sequentially or based on index
const icons = [
  Server, // Full Stack
  Database, // MERN
  Laptop, // Responsive
  UserCheck, // Portfolio
  Globe, // Business
  BarChart3, // Admin
];

export default function Services() {
  return (
    <section
      id="services"
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
            <Layers className="w-3.5 h-3.5 text-rose-500" /> What I Offer
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Developer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500 font-extrabold">
              Services
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-slate-400 dark:text-slate-500 mt-2 uppercase tracking-widest">
            Delivering high-end technology solutions tailored to your unique
            specifications
          </p>
          <div className="w-16 h-1 bg-rose-500 rounded-full mt-3" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = icons[idx] || Laptop;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative overflow-hidden rounded-2xl glass-panel border border-slate-200/60 dark:border-rose-500/15 p-6 flex flex-col justify-between shadow-lg shadow-slate-900/5 group hover:border-rose-500/35 hover:-translate-y-1 transition-all duration-300 text-left"
              >
                {/* Decorative background circle indicator */}
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-rose-500/5 group-hover:bg-rose-500/10 transition-all duration-300 filter blur-xl" />

                <div>
                  {/* Service Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-rose-500/20">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-rose-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-rose-100/70 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Highlights Checkbox List */}
                <div className="mt-6 pt-5 border-t border-slate-200/40 dark:border-rose-500/10 space-y-2">
                  {service.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2 text-xs text-slate-700 dark:text-rose-100"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
