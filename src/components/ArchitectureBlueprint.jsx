import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Layers,
  Server,
  Database,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Terminal,
  Code2,
} from "lucide-react";

const blueprintLayers = [
  {
    id: "frontend",
    title: "1. UI/UX & Responsive Client Layer",
    role: "Presentation & Interaction",
    tech: "React 18+, Vite, Tailwind CSS, Motion",
    icon: Layers,
    description:
      "Developing declarative, high-fidelity user interfaces designed with strict desktop-first precision and mobile-first code. I focus on modular component decoupling, optimized render cycle stability, and beautiful fluid animations.",
    principles: [
      "Declarative state management via lightweight custom hooks.",
      "Rigorous elimination of redundant render triggers and effect cycles.",
      "Responsive design driven purely by Tailwind utility systems.",
      "Semantic HTML with complete accessibility compliance.",
    ],
    codeSnippet: `// Standard Optimized Container Pattern
export function ProjectCard({ project }: ProjectCardProps) {
  // Unifying state and minimizing side effects
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <article 
      className="relative rounded-2xl overflow-hidden glass-panel border border-slate-200/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover transition-transform duration-500 scale-100 group-hover:scale-105" 
          loading="lazy"
        />
      </div>
    </article>
  );
}`,
  },
  {
    id: "security",
    title: "2. Middleware & Security Gateway",
    role: "Protection & Authentication",
    tech: "JWT, CORS policies, Helmet, express-rate-limit",
    icon: ShieldCheck,
    description:
      "Establishing robust client-to-server security borders. I implement request speed constraints, cryptographic authentication schemes, token validation layers, and sanitization of incoming client payloads.",
    principles: [
      "Cryptographic JWT authorization with secure signature validation.",
      "Granular API Rate Limiting to prevent denial-of-service attempts.",
      "Strict HTTP Header headers via Express Helmet integration.",
      "Input sanitation utilizing certified schemas to avoid injections.",
    ],
    codeSnippet: `// Custom JWT Security Authenticator
import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token expired or invalid' });
    }
    req.user = user;
    next();
  });
};`,
  },
  {
    id: "routing",
    title: "3. API Routing & Controller Engine",
    role: "Orchestration & Business Logic",
    tech: "Express.js, REST Architecture, Async Controllers",
    icon: Server,
    description:
      "Providing structural routes for client-server payloads. I write clean, fully asynchronous endpoint controllers using centralized try/catch middleware mechanisms and strictly standardized JSON payload templates.",
    principles: [
      "Adherence to standard RESTful resource endpoint naming schemas.",
      "Centralized async controller routing via wrapper middleware.",
      "Rigorous enforcement of HTTP-compliant response codes.",
      "Modular separation of schema routers and controller modules.",
    ],
    codeSnippet: `// DRY Asynchronous Routing Handler
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Clean Modular Controller
export const getProjects = asyncHandler(async (req, res) => {
  const query = req.query.featured ? { featured: true } : {};
  const projects = await Project.find(query).sort({ index: 1 });
  
  res.status(200).json({
    status: 'success',
    results: projects.length,
    data: { projects }
  });
});`,
  },
  {
    id: "database",
    title: "4. Database & Relational Modeling",
    role: "Persistence & Data Integrity",
    tech: "MongoDB, Mongoose ORM, Aggregations",
    icon: Database,
    description:
      "Designing high-performance non-relational database models. I structure modular collections with strict Mongoose validation, build multi-stage pipeline aggregate filters, and configure optimal index keys on frequent queries.",
    principles: [
      "Document schemas modeled specifically for high read efficiency.",
      "Custom database index configurations for query latency reduction.",
      "Strict virtual parameter mapping and schema pre-save hooks.",
      "Dynamic transactional operations ensuring robust data cycles.",
    ],
    codeSnippet: `// Mongoose Schema with Indexed Queries
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email field is mandatory'],
    unique: true,
    index: true,
    trim: true,
    lowercase: true
  },
  name: { type: String, required: true },
  role: { type: String, default: 'user', enum: ['user', 'admin'] }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);`,
  },
];

export default function ArchitectureBlueprint() {
  const [activeId, setActiveId] = useState("frontend");
  const activeLayer =
    blueprintLayers.find((layer) => layer.id === activeId) ||
    blueprintLayers[0];

  return (
    <section
      id="blueprint"
      className="relative py-20 sm:py-28 overflow-hidden border-t border-theme-border bg-theme-bg"
    >
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-mono font-bold tracking-wider uppercase mb-3"
          >
            <Code2 className="w-3.5 h-3.5 text-rose-500" /> Engineering
            Architecture
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-text tracking-tight">
            Full-Stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500 font-extrabold">
              MERN Blueprint
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-theme-muted mt-2 uppercase tracking-widest max-w-xl">
            Interactive visualization of my structural implementation & code
            standard
          </p>
          <div className="w-16 h-1 bg-rose-500 rounded-full mt-3" />
        </div>

        {/* Blueprint Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Stack Map */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-left mb-2 px-1">
              <span className="text-[10px] font-mono text-rose-400/80 font-bold uppercase tracking-widest block">
                Lifecycle Stack
              </span>
              <p className="text-xs text-theme-muted mt-1">
                Select a layer to view architectural standards and code
                structure.
              </p>
            </div>

            {blueprintLayers.map((layer) => {
              const Icon = layer.icon;
              const isSelected = layer.id === activeId;

              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveId(layer.id)}
                  className={`w-full p-5 rounded-2xl border text-left flex items-center gap-4 transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? "border-rose-500 bg-theme-card text-theme-text shadow-md"
                      : "border-theme-border bg-theme-card hover:border-theme-primary/30 text-theme-text"
                  }`}
                >
                  {/* Decorative glowing background for selection */}
                  {isSelected && (
                    <div className="absolute inset-0 bg-radial-gradient from-rose-500/10 to-transparent pointer-events-none" />
                  )}

                  {/* Left Icon Area */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all ${
                      isSelected
                        ? "bg-rose-500/25 border-rose-500/40 text-rose-400"
                        : "bg-theme-bg border-theme-border text-theme-muted group-hover:text-rose-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text details */}
                  <div className="flex-1 min-w-0">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wide block ${
                        isSelected
                          ? "text-rose-400"
                          : "text-theme-muted"
                      }`}
                    >
                      {layer.role}
                    </span>
                    <h3
                      className={`text-sm sm:text-base font-bold font-sans mt-0.5 transition-colors ${
                        isSelected
                          ? "text-theme-text"
                          : "text-theme-text group-hover:text-rose-400"
                      }`}
                    >
                      {layer.title.replace(/^[0-9]\.\s/, "")}
                    </h3>
                  </div>

                  {/* Active Indicator Chevron */}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 shrink-0 ${
                      isSelected
                        ? "text-rose-400 translate-x-0.5"
                        : "text-theme-muted group-hover:text-rose-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Code & Standards Viewer */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col gap-6"
              >
                {/* Details Card */}
                <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-theme-border shadow-lg text-left relative overflow-hidden bg-theme-card/95">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-rose-500/10 to-transparent pointer-events-none" />

                  {/* Header */}
                  <div>
                    <span className="px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold tracking-wide">
                      {activeLayer.tech}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-theme-text mt-4 tracking-tight">
                      {activeLayer.title}
                    </h3>
                    <p className="text-theme-muted text-sm leading-relaxed mt-2.5">
                      {activeLayer.description}
                    </p>
                  </div>

                  {/* Key Implementation Priorities */}
                  <div className="mt-6 pt-6 border-t border-theme-border">
                    <h4 className="text-xs font-mono text-rose-400/80 uppercase font-bold tracking-widest mb-3">
                      Core Architectural Priorities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {activeLayer.principles.map((principle, index) => (
                        <div key={index} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span className="text-xs text-theme-muted leading-normal font-sans">
                            {principle}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Classic Clean Code Container */}
                <div className="rounded-3xl border border-theme-border shadow-xl overflow-hidden text-left flex flex-col bg-theme-card">
                  {/* Custom Header bar resembling a terminal */}
                  <div className="bg-theme-bg px-5 py-3 border-b border-theme-border flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-rose-400" />
                      <span className="text-[10px] font-mono text-rose-400 dark:text-rose-300/80 font-bold uppercase tracking-wider">
                        implementation_standard.ts
                      </span>
                    </div>
                    {/* Circle buttons */}
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-pink-500/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30" />
                    </div>
                  </div>

                  {/* Code Area */}
                  <div className="p-5 sm:p-6 overflow-x-auto">
                    <pre className="font-mono text-[11px] sm:text-xs text-rose-500 dark:text-rose-100/90 leading-relaxed whitespace-pre">
                      <code>{activeLayer.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
