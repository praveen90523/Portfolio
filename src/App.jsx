import { ThemeProvider } from "./components/ThemeContext";
import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ArchitectureBlueprint from "./components/ArchitectureBlueprint";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import EducationCertificates from "./components/EducationCertificates";
import Services from "./components/Services";
import GitHubSection from "./components/GitHubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      {/* Dynamic Animated Ambient Lights Background */}
      <BackgroundEffects />

      {/* Main Content Layout */}
      <div className="relative min-h-screen z-10 transition-colors duration-700">
        {/* Floating Glass Navbar */}
        <Navbar />

        {/* Hero Banner Section */}
        <Hero />

        {/* About Section & Stats */}
        <About />

        {/* Core Capabilities & Skills */}
        <Skills />

        {/* Full-Stack MERN Architecture Blueprint */}
        <ArchitectureBlueprint />

        {/* Project Showcases */}
        <Projects />

        {/* Milestones Learning Timeline */}
        <Timeline />

        {/* Academic Degree & Certified Credentials */}
        <EducationCertificates />

        {/* Professional Services */}
        <Services />

        {/* GitHub Metrics & Commit Heatmap */}
        <GitHubSection />

        {/* Full Contact Form & Map details */}
        <Contact />

        {/* High-End Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
