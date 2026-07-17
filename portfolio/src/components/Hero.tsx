import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { PERSONAL_INFO } from '../data';

export const Hero: React.FC = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  useEffect(() => {
    const fullText = PERSONAL_INFO.taglines[taglineIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Add character
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        if (currentText === fullText) {
          // Pause and then delete
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Remove character
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, taglineIndex]);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSec = document.querySelector('#contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-sky-500/10 dark:bg-sky-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-600/5 rounded-full blur-2xl" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text (Left column in desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 Order-2 lg:order-1">
            
            {/* Tag badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/50 dark:border-blue-900/50 text-blue-700 dark:text-blue-400 font-medium text-xs sm:text-sm shadow-sm"
            >
              <LucideIcon name="Sparkles" size={14} className="animate-spin" />
              <span>BCA 4th Semester Student</span>
            </motion.div>

            {/* Main Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              Hello, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400">
                {PERSONAL_INFO.name}
              </span>
            </motion.h1>

            {/* Typewritten Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="min-h-[48px] flex items-center justify-center lg:justify-start"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300">
                <span className="text-blue-600 dark:text-sky-400 font-mono font-bold">&gt;&nbsp;</span>
                {currentText}
                <span className="inline-block w-1 h-6 bg-blue-600 dark:bg-sky-400 ml-1 animate-pulse" />
              </p>
            </motion.div>

            {/* Quick Location & Univ */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <LucideIcon name="MapPin" size={16} className="text-rose-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LucideIcon name="GraduationCap" size={16} className="text-blue-500" />
                <span>{PERSONAL_INFO.university}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Contact Me</span>
                <LucideIcon name="Send" size={18} />
              </a>
              <button
                onClick={() => {
                  alert("Thank you! Downloading Anil Gupta's Interactive Developer Resume. (Under construction: Downloading CV template).");
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-medium text-base border border-slate-200 dark:border-slate-800 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Download CV</span>
                <LucideIcon name="Download" size={18} />
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 w-full justify-center lg:justify-start"
            >
              <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold font-mono">Connect With Me:</span>
              <div className="flex gap-3">
                <a href="https://github.com/anilatpug" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
                  <LucideIcon name="Github" size={18} />
                </a>
                <a href="https://youtube.com/@buildwithatpug" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-500 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
                  <LucideIcon name="Youtube" size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
                  <LucideIcon name="Linkedin" size={18} />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Profile Image (Right column in desktop) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Outer Neon Rings */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-sky-400 to-cyan-300 rounded-3xl rotate-6 opacity-30 dark:opacity-20 blur-xl animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-600 via-sky-400 to-cyan-300 rounded-3xl -rotate-6 opacity-20 dark:opacity-10 blur-xl" />

              {/* Styled Image Frame */}
              <div className="absolute inset-0 rounded-3xl bg-slate-200 dark:bg-slate-800 p-3 shadow-2xl border border-white/50 dark:border-slate-700/50 backdrop-blur-3xl overflow-hidden group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glass Card Overlay inside image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-slate-800/20 shadow-lg text-left">
                    <p className="text-xs font-mono text-blue-600 dark:text-sky-400 font-bold uppercase tracking-wider">Nepal Innovation</p>
                    <p className="text-sm font-display font-semibold text-slate-800 dark:text-white mt-0.5">Disaster Response Tech</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
