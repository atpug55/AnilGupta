import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { PERSONAL_INFO, INTERESTS } from '../data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-sky-500/5 dark:bg-sky-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold text-blue-600 dark:text-sky-400 tracking-wider uppercase font-mono"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Who is Anil Gupta?
          </motion.p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Info Blocks (8 columns on large screen) */}
          <div className="lg:col-span-7 space-y-8">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Aspiring Developer & Tech Enthusiast based in Dang, Nepal
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {PERSONAL_INFO.aboutIntro}
              </p>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {PERSONAL_INFO.aboutDetailed}
              </p>
            </motion.div>

            {/* Quick Stats / Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Family Business */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex gap-4"
              >
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 self-start">
                  <LucideIcon name="Store" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base">Family Enterprise</h4>
                  <p className="text-xs font-semibold text-blue-600 dark:text-sky-400 mt-0.5">{PERSONAL_INFO.businessInfo.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {PERSONAL_INFO.businessInfo.description}
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Languages */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex gap-4"
              >
                <div className="p-3 rounded-xl bg-sky-100 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 self-start">
                  <LucideIcon name="Globe" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base">Languages Spoken</h4>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {PERSONAL_INFO.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 text-xs text-slate-700 dark:text-slate-200 font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Interests Grid (5 columns on large screen) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md"
            >
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <LucideIcon name="Heart" className="text-rose-500 animate-pulse" size={20} />
                <span>Interests & Passions</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INTERESTS.map((interest, idx) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 shadow-sm transition-all"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-500 dark:text-blue-400">
                      <LucideIcon name={interest.icon} size={16} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                      {interest.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
