import { motion } from "motion/react";
import { useTheme } from "./ThemeContext";

export default function BackgroundEffects() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-700">
      {/* Background color base: Deep burgundy dark, soft rose light */}
      <div className="absolute inset-0 bg-theme-bg transition-colors duration-700" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-bg opacity-70" />

      {/* Rotating ambient radial glows */}
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -100, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full ambient-glow-rose filter blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 80, -110, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] rounded-full ambient-glow-wine filter blur-3xl"
      />

      {/* Floating high-tech node shapes */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: "20%", left: "15%" }}
          className="absolute w-12 h-12 border border-rose-500/20 rounded-xl"
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [360, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: "65%", right: "15%" }}
          className="absolute w-16 h-16 border border-rose-600/10 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "25%", left: "20%" }}
          className="absolute w-4 h-4 bg-rose-500/10 rounded-full filter blur-[1px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "10%", right: "25%" }}
          className="absolute w-3 h-3 bg-rose-600/15 rounded-full filter blur-[1px]"
        />
      </div>
    </div>
  );
}
