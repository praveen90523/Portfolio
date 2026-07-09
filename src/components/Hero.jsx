import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Calendar,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Database,
  Server,
  Cpu,
  Layers,
  Activity,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const LeetCode = (props) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse movement for subtle parallax floating glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left: Classic Elegant Greetings (Screenshot 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
          >
            {/* Top Capsule Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[11px] font-mono font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              Available for freelance work
            </div>

            {/* Main Greeting Title */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-theme-text leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500 font-extrabold relative inline-block">
                {personalInfo.fullName.split(" ")[0]}
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-rose-500/20 rounded-full" />
              </span>
            </h1>

            {/* Subtitle Role */}
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-500 dark:text-pink-300 tracking-tight">
              MERN Stack Architect & UX Engineer
            </h2>

            {/* Clean Short Description */}
            <p className="text-sm sm:text-base text-theme-muted max-w-xl leading-relaxed">
              I build modern, scalable, and ultra-responsive web experiences. By
              merging robust backend services with polished, pixel-precise
              frontend interfaces, I bring ideas to life with flawless
              execution.
            </p>

            {/* Quick Info Badges */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-theme-muted">
              <div className="flex items-center gap-1.5 bg-theme-card/80 px-3 py-1.5 rounded-full border border-theme-border">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Based in {personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-theme-card/80 px-3 py-1.5 rounded-full border border-theme-border">
                <Calendar className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                <span>Available Now</span>
              </div>
            </div>

            {/* Premium Theme Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo("contact")}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-sans font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(244,63,94,0.45)] hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                target={personalInfo.resumeUrl !== "#" ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-theme-border hover:border-theme-primary/60 text-theme-muted hover:text-theme-text bg-theme-card/40 hover:bg-theme-primary/5 font-sans font-bold text-xs uppercase tracking-wider hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Follow Me Icons */}
            <div className="flex items-center gap-3.5 pt-4">
              <span className="text-[10px] font-mono font-bold tracking-widest text-theme-muted uppercase">
                Follow me:
              </span>
              <div className="flex gap-2">
                {[
                  { icon: Github, url: personalInfo.github },
                  { icon: Linkedin, url: personalInfo.linkedin },
                  { icon: LeetCode, url: personalInfo.leetcode },
                ].map((social, sIdx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={sIdx}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-theme-card/80 border border-theme-border text-theme-muted hover:text-theme-primary flex items-center justify-center transition-all duration-300"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Hero Right: Interactive "Welcome to My Portfolio" Orbit Console Widget (Screenshot 3) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y * 0.1}deg) rotateY(${mousePos.x * 0.1}deg)`,
              transition: "transform 0.15s ease-out",
            }}
            className="lg:col-span-6 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            {/* Ambient hot pink backdrop glow */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-rose-500 to-pink-600 filter blur-3xl opacity-20 -z-10" />

            {/* Core Card Container */}
            <div className="w-full max-w-lg rounded-3xl bg-theme-card/90 border border-theme-border p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              {/* Header Status Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-theme-border">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-theme-bg px-3 py-1 rounded-full border border-theme-border text-[9px] font-mono font-bold text-rose-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    System Ready
                  </div>
                  <div className="bg-theme-bg px-3 py-1 rounded-full border border-theme-border text-[9px] font-mono font-bold text-rose-400 uppercase tracking-wider">
                    Portfolio 2026
                  </div>
                </div>
                <div className="text-[10px] font-mono text-emerald-500 dark:text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1">
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Main Section Content & Orbit Wheel Side-by-Side/Stack */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-6">
                {/* Left Mini Bio / Text */}
                <div className="md:col-span-6 space-y-4">
                  <div className="text-xs font-mono text-rose-500 dark:text-rose-400/80 uppercase tracking-widest font-bold">
                    CORE UI
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-theme-text leading-tight">
                    Welcome to my Portfolio Website
                  </h3>
                  <p className="text-xs text-theme-muted leading-relaxed">
                    Building responsive, reliable, and fast digital experiences
                    with a focus on clean modular UI and solid backends.
                  </p>

                  <div className="flex gap-2.5 pt-2">
                    <button
                      onClick={() => handleScrollTo("projects")}
                      className="bg-theme-bg hover:bg-theme-card text-[10px] font-mono font-bold uppercase text-theme-text px-3 py-1.5 rounded-full border border-theme-border flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>CODE</span>
                    </button>
                    <button
                      onClick={() => handleScrollTo("about")}
                      className="bg-theme-bg hover:bg-theme-card text-[10px] font-mono font-bold uppercase text-theme-text px-3 py-1.5 rounded-full border border-theme-border flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>PROFILE</span>
                    </button>
                  </div>
                </div>

                {/* Right Interactive Orb Space (Screenshot 3) */}
                <div className="md:col-span-6 flex justify-center relative py-6">
                  {/* Central Glow Core */}
                  <div className="absolute w-28 h-28 rounded-full bg-rose-500/10 flex items-center justify-center border border-theme-border shadow-[0_0_30px_rgba(244,63,94,0.15)]">
                    <div className="absolute w-20 h-20 rounded-full bg-theme-bg/60 flex items-center justify-center animate-pulse">
                      <span className="text-[10px] font-mono font-extrabold text-theme-text tracking-widest uppercase glow-text-rose">
                        WELCOME
                      </span>
                    </div>
                  </div>

                  {/* Outer Orbital Rotating Orbit Track Circle */}
                  <div className="w-44 h-44 rounded-full border border-theme-border flex items-center justify-center relative">
                    {/* Orbit Item 1: MongoDB Node */}
                    <div className="absolute w-7 h-7 rounded-full bg-theme-card border border-theme-border flex items-center justify-center text-rose-500 dark:text-rose-400 orbit-item-1 shadow-md">
                      <Database className="w-3.5 h-3.5" />
                    </div>

                    {/* Orbit Item 2: Express Server Node */}
                    <div className="absolute w-7 h-7 rounded-full bg-theme-card border border-theme-border flex items-center justify-center text-rose-500 dark:text-rose-400 orbit-item-2 shadow-md">
                      <Server className="w-3.5 h-3.5" />
                    </div>

                    {/* Orbit Item 3: React Layer Node */}
                    <div className="absolute w-7 h-7 rounded-full bg-theme-card border border-theme-border flex items-center justify-center text-rose-500 dark:text-rose-400 orbit-item-3 shadow-md">
                      <Layers className="w-3.5 h-3.5" />
                    </div>

                    {/* Orbit Item 4: Node Runtime Node */}
                    <div className="absolute w-7 h-7 rounded-full bg-theme-card border border-theme-border flex items-center justify-center text-rose-500 dark:text-rose-400 orbit-item-4 shadow-md">
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Real-time Telemetry Stats (Screenshot 3) */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-theme-border">
                <div className="bg-theme-card/85 p-3 rounded-2xl border border-theme-border">
                  <div className="text-[15px] font-bold text-theme-text font-mono leading-none">
                    06
                  </div>
                  <div className="text-[9px] font-mono text-theme-muted uppercase tracking-wider mt-1">
                    Modules Loaded
                  </div>
                </div>
                <div className="bg-theme-card/85 p-3 rounded-2xl border border-theme-border">
                  <div className="text-[15px] font-bold text-theme-text font-mono leading-none flex items-center gap-1">
                    <span>12ms</span>
                    <Activity className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 animate-pulse" />
                  </div>
                  <div className="text-[9px] font-mono text-theme-muted uppercase tracking-wider mt-1">
                    Performance Stable
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Arrow */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 z-10 cursor-pointer"
        onClick={() => handleScrollTo("about")}
      >
        <span className="text-[9px] font-mono font-bold tracking-widest text-rose-400/60 uppercase">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-rose-500/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
