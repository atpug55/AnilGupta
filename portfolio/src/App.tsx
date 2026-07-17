import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Community } from './components/Community';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LucideIcon } from './components/LucideIcon';

export default function App() {
  // Default to Dark Mode since it provides a premium glowing developer aesthetic
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Initialize Theme on Mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    } else {
      // Check user preferences
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
    }

    // Scroll listener for Back to Top Button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync Theme State with document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased font-sans">
      
      {/* Sticky Navigation bar */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Primary Layout Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Skills & Competencies Section */}
        <Skills />

        {/* Featured & Other Projects Section */}
        <Projects />

        {/* Education History Timeline Section */}
        <Education />

        {/* Creator & Developer Community Section (GitHub + YouTube) */}
        <Community />

        {/* Business & Freelance Services Section */}
        <Services />

        {/* Contact Form & Socials Section */}
        <Contact />
      </main>

      {/* Footer Branding section */}
      <Footer />

      {/* Floating Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-sky-400 dark:hover:bg-sky-500 text-white dark:text-slate-950 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 z-40 border border-white/20"
          title="Back to top"
        >
          <LucideIcon name="ChevronRight" size={20} className="-rotate-90" />
        </button>
      )}

    </div>
  );
}
