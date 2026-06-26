import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, CheckCircle2, ArrowUpRight, School } from 'lucide-react';
import { education, certificates } from '../data/portfolioData';

export default function EducationCertificates() {
  return (
    <section
      id="education"
      className="relative py-20 sm:py-28 overflow-hidden border-t border-slate-200/40 dark:border-slate-800/20"
    >
      {/* Target for secondary link certificates */}
      <div id="certificates" className="absolute top-[30%] left-0 w-full h-1 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-mono font-bold tracking-wider uppercase mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5 text-rose-500" /> Background & credentials
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500 font-extrabold">
              Certifications
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-slate-400 dark:text-slate-500 mt-2 uppercase tracking-widest">
            Validating competencies with certified institutional programs
          </p>
          <div className="w-16 h-1 bg-rose-500 rounded-full mt-3" />
        </div>

        {/* Responsive Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Education timeline column (Left: cols 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <School className="w-6 h-6 text-rose-500" /> Academic Qualifications
            </h3>

            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl glass-panel border border-slate-200/60 dark:border-rose-500/15 p-6 flex flex-col justify-between shadow-md dark:shadow-[0_4px_25px_rgba(244,63,94,0.05)] group hover:border-rose-500/25 transition-all duration-300 text-left"
              >
                {/* Decorative border top */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-rose-500 to-pink-500" />

                <div className="flex items-center justify-between mb-4 flex-wrap sm:flex-nowrap gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-lg">
                    {edu.period}
                  </span>
                  
                  {/* CGPA Badge */}
                  <span className="px-2.5 py-1 text-xs font-sans font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-lg">
                    {edu.gpa}
                  </span>
                </div>

                <h4 className="font-sans font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-rose-400 transition-colors">
                  {edu.degree}
                </h4>
                
                <p className="text-sm font-mono text-rose-400 mt-1 font-semibold uppercase tracking-wider">
                  {edu.institution}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-rose-100/70 mt-4 leading-relaxed border-t border-slate-200/50 dark:border-rose-500/10 pt-4">
                  {edu.description}
                </p>

                {/* Simulated course marks bullets */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> Data Structures
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> Web Architectures
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> Database Engines
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> Operating Systems
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Certifications column (Right: cols 7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-rose-500" /> Professional Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert, idx) => (
                <motion.a
                  key={idx}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative overflow-hidden rounded-2xl glass-panel border border-slate-200/60 dark:border-rose-500/15 p-5 flex flex-col justify-between shadow-md dark:shadow-[0_4px_25px_rgba(244,63,94,0.05)] group hover:border-rose-500/30 hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  <div>
                    {/* Header: Date & Issuer */}
                    <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-rose-500" /> {cert.date}
                      </span>
                      <span className="font-semibold text-rose-400 uppercase tracking-widest">
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-sans font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-rose-400 transition-colors leading-snug">
                      {cert.title}
                    </h4>
                  </div>

                  {/* Footer link trigger */}
                  <div className="mt-5 pt-3 border-t border-slate-200/40 dark:border-rose-500/10 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-rose-400 transition-colors font-semibold">
                    <span>Verify Credential</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                </motion.a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
