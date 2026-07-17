import React from 'react';
import { LucideIcon } from './LucideIcon';
import { PERSONAL_INFO } from '../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', id: '#home' },
    { name: 'About', id: '#about' },
    { name: 'Skills', id: '#skills' },
    { name: 'Projects', id: '#projects' },
    { name: 'Education', id: '#education' },
    { name: 'Community', id: '#community' },
    { name: 'Services', id: '#services' },
    { name: 'Contact', id: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    { name: 'Github', icon: 'Github', url: 'https://github.com/anilatpug' },
    { name: 'Linkedin', icon: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Youtube', icon: 'Youtube', url: 'https://youtube.com/@buildwithatpug' },
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com' }
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200/50 dark:border-slate-800/50 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-slate-200/50 dark:border-slate-800/50">
          
          {/* Brand/Signature */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-display font-bold text-sm">
                AG
              </div>
              <span className="font-display font-bold text-lg text-slate-800 dark:text-white">
                Anil Gupta
              </span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              BCA Student & Future Software Engineer
            </p>
          </div>

          {/* Quick Links Navigation */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-md mx-auto text-center">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.id}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Channels Row */}
          <div className="flex justify-center md:justify-end gap-3.5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-200/50 hover:bg-blue-600 dark:bg-slate-900 dark:hover:bg-sky-400 text-slate-500 hover:text-white dark:text-slate-400 dark:hover:text-slate-950 border border-slate-200/10 transition-all"
                title={social.name}
              >
                <LucideIcon name={social.icon} size={16} />
              </a>
            ))}
          </div>

        </div>

        {/* Copyright, Location Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-center text-[11px] text-slate-400 dark:text-slate-500 gap-4">
          <p>
            © {currentYear} {PERSONAL_INFO.name}. All Rights Reserved. Designed & Crafted with React & Tailwind.
          </p>
          <p className="flex items-center gap-1">
            <LucideIcon name="MapPin" size={12} className="text-rose-500" />
            <span>Tulsipur, Dang, Nepal</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
