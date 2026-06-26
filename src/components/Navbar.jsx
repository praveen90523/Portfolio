import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Github,
  Linkedin,
  User,
  Info,
  Folder,
  Code,
  Mail,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import { personalInfo } from "../data/portfolioData";

const LeetCode = (props) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const navItems = [
  { label: "Home", id: "home", icon: User },
  { label: "About", id: "about", icon: Info },
  { label: "Projects", id: "projects", icon: Folder },
  { label: "Services", id: "services", icon: Code },
  { label: "Contact", id: "contact", icon: Mail },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll height to apply sticky styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy to highlight active navigation link
      const scrollPosition = window.scrollY + 180;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveId(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveId(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="portfolio-navbar"
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8 flex justify-center"
    >
      {/* Unique floating capsule bar */}
      <div
        className={`w-full max-w-5xl rounded-full transition-all duration-500 flex items-center justify-between px-4 sm:px-6 py-2 border ${
          scrolled
            ? "glass-nav bg-[#14050a]/90 border-rose-500/20 shadow-[0_4px_30px_rgba(244,63,94,0.15)]"
            : "bg-[#18060c]/40 border-rose-500/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
        }`}
      >
        {/* Logo / Brand */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center font-extrabold text-white shadow-[0_0_15px_rgba(244,63,94,0.4)] group-hover:rotate-6 transition-transform duration-300">
            P
          </div>
          <div className="hidden xs:flex flex-col items-start leading-none">
            <span className="font-sans font-extrabold text-sm tracking-tight text-white">
              {personalInfo.name}
            </span>
            <span className="text-[8px] font-mono text-rose-400 font-bold tracking-widest uppercase">
              MERN Specialist
            </span>
          </div>
        </button>

        {/* Center Pill Menu (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#100306]/60 px-2 py-1 rounded-full border border-rose-500/10">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white bg-gradient-to-r from-rose-600 to-pink-500 shadow-[0_0_15px_rgba(244,63,94,0.6)] border border-rose-400/30"
                    : "text-rose-200/70 hover:text-white hover:bg-rose-500/5"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-rose-400/80"}`}
                />
                <span className="capitalize">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Social Profiles & Theme Controls */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Github */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-full text-rose-300/80 hover:text-white hover:bg-rose-500/10 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 rounded-full text-rose-300/80 hover:text-white hover:bg-rose-500/10 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* LeetCode */}
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode Profile"
            className="p-1.5 rounded-full text-rose-300/80 hover:text-white hover:bg-rose-500/10 transition-colors"
          >
            <LeetCode className="w-4 h-4" />
          </a>

          {/* Separator */}
          <div className="w-[1px] h-4 bg-rose-500/20" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full bg-rose-950/40 hover:bg-rose-900/60 text-rose-200 transition-all duration-200 cursor-pointer border border-rose-500/15"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ y: -6, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 6, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.15 }}
                >
                  <Sun className="w-4 h-4 text-rose-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ y: -6, opacity: 0, rotate: 45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 6, opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.15 }}
                >
                  <Moon className="w-4 h-4 text-rose-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Actions Drawer trigger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full bg-rose-950/40 text-rose-200 border border-rose-500/15"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-rose-400" />
            ) : (
              <Moon className="w-4 h-4 text-rose-600" />
            )}
          </button>

          {/* Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full bg-rose-950/40 text-rose-200 border border-rose-500/15"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 inset-x-4 z-40 p-4 rounded-3xl bg-[#14050a]/95 border border-rose-500/25 shadow-xl backdrop-blur-xl"
          >
            <div className="space-y-1.5">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-rose-600 to-pink-500 text-white shadow-md shadow-rose-500/10"
                        : "text-rose-200/70 hover:bg-rose-500/5 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-rose-400" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              {/* Mobile Socials */}
              <div className="pt-3 mt-3 border-t border-rose-500/10 flex items-center justify-around">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-rose-300/80 hover:text-white py-1.5 text-xs font-semibold"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-rose-300/80 hover:text-white py-1.5 text-xs font-semibold"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-rose-300/80 hover:text-white py-1.5 text-xs font-semibold"
                >
                  <LeetCode className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
