import React, { useState, useEffect } from 'react';
import { LucideIcon } from './LucideIcon';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: '#home' },
    { name: 'About', id: '#about' },
    { name: 'Skills', id: '#skills' },
    { name: 'Projects', id: '#projects' },
    { name: 'Education', id: '#education' },
    { name: 'Community', id: '#community' }, // YouTube & GitHub
    { name: 'Services', id: '#services' },
    { name: 'Contact', id: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 flex items-center justify-center text-white font-display font-bold text-lg shadow-md group-hover:rotate-6 transition-transform duration-300">
                AG
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                Anil Gupta
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-1 bg-slate-100/50 dark:bg-slate-800/40 p-1 rounded-full border border-slate-200/20 dark:border-slate-700/20">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.id}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-inner border border-slate-200/20 dark:border-slate-700/20"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <LucideIcon name="Sun" className="text-amber-500 animate-pulse" size={18} />
              ) : (
                <LucideIcon name="Moon" className="text-indigo-600" size={18} />
              )}
            </button>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <LucideIcon name="Sun" className="text-amber-500" size={18} />
              ) : (
                <LucideIcon name="Moon" className="text-indigo-600" size={18} />
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <LucideIcon name="X" size={24} />
              ) : (
                <LucideIcon name="Menu" size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 transform origin-top ${
          isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.id}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-blue-600 dark:hover:text-sky-400 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
