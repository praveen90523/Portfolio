import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      className={`relative w-16 h-8 rounded-full p-1 cursor-pointer flex items-center justify-between border select-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500/25 ${
        isDark
          ? "bg-[#14050a]/90 border-rose-500/25 shadow-[0_0_12px_rgba(244,63,94,0.15)]"
          : "bg-slate-100 border-slate-300 shadow-sm"
      }`}
      aria-label="Toggle Theme"
    >
      {/* Sliding background indicator glow to show active choice */}
      <div className="absolute inset-0 rounded-full bg-rose-500/[0.03] dark:bg-rose-500/[0.08] pointer-events-none" />

      {/* Sun icon (left indicator) */}
      <div className="flex items-center justify-center w-6 h-6 z-10">
        <Sun className={`w-3.5 h-3.5 transition-all duration-300 ${!isDark ? "text-rose-500 scale-100 filter drop-shadow-[0_0_6px_rgba(244,63,94,0.6)]" : "text-rose-300/20 scale-75 rotate-45"}`} />
      </div>

      {/* Moon icon (right indicator) */}
      <div className="flex items-center justify-center w-6 h-6 z-10">
        <Moon className={`w-3.5 h-3.5 transition-all duration-300 ${isDark ? "text-rose-400 scale-100 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.7)]" : "text-slate-400/30 scale-75 -rotate-45"}`} />
      </div>

      {/* Sliding and Rotating Knob */}
      <motion.div
        className="absolute left-1 w-6 h-6 rounded-full bg-gradient-to-r from-rose-600 to-pink-500 shadow-[0_0_12px_rgba(244,63,94,0.5)] flex items-center justify-center z-20"
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: "tween",
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon-icon"
              initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-3.5 h-3.5 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="sun-icon"
              initial={{ rotate: 90, scale: 0.6, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-3.5 h-3.5 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}
