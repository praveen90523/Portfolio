import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Github, Linkedin, Code } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const LeetCode = (props) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => window.removeEventListener("scroll", checkScrollHeight);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkScroll = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-theme-card border-t border-theme-border pt-16 pb-12 text-theme-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-theme-border text-left">
          {/* Logo / Bio description (cols 5) */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => handleLinkScroll("home")}
              className="flex items-center gap-2 cursor-pointer group text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-600 flex items-center justify-center font-bold text-white group-hover:rotate-6 transition-transform">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-base tracking-tight text-theme-text leading-none">
                  {personalInfo.fullName}
                </span>
                <span className="text-[9px] font-mono text-rose-400 font-bold tracking-widest uppercase">
                  MERN Developer Portfolio
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-theme-muted max-w-sm leading-relaxed">
              Award-winning full stack developer specialized in creating modern,
              ultra-responsive MERN systems. Grounded on pure clean code, secure
              routes, and pixel-precise interfaces.
            </p>
          </div>

          {/* Quick links navigation (cols 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-wider text-theme-text uppercase">
              Page Sections
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Skills", id: "skills" },
                { label: "Projects", id: "projects" },
                { label: "Education", id: "education" },
                { label: "Certifications", id: "certificates" },
                { label: "GitHub", id: "github" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkScroll(item.id)}
                  className="text-left hover:text-theme-primary transition-colors py-1 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Core Credentials info (cols 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-wider text-theme-text uppercase">
              Current Base Office
            </h4>
            <div className="text-xs sm:text-sm text-theme-muted space-y-2">
              <p>{personalInfo.location}</p>
              <p className="font-sans text-xs text-rose-400 font-bold hover:underline">
                <a href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
              </p>
            </div>

            {/* Social media icons array */}
            <div className="flex gap-2.5 pt-2">
              {[
                { icon: Github, url: personalInfo.github },
                { icon: Linkedin, url: personalInfo.linkedin },
                { icon: LeetCode, url: personalInfo.leetcode },
              ].map((social, sIdx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg bg-theme-bg border border-theme-border hover:border-theme-primary/40 hover:text-white hover:bg-rose-600 flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom row copyright & details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            &copy; {currentYear} {personalInfo.fullName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2.5 text-theme-muted">
            <Code className="w-4 h-4 text-rose-500" />
            <span>Built with pure React, Tailwind v4 and Motion</span>
          </div>
        </div>
      </div>

      {/* Floating back to top button floating in bottom right */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scrollTop"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
