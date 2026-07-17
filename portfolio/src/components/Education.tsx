import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { EDUCATION } from '../data';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold text-blue-600 dark:text-sky-400 tracking-wider uppercase font-mono"
          >
            My Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Education & Academic Timeline
          </motion.p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line for Desktop, Left Line for Mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-sky-500 to-cyan-400 dark:from-blue-600 dark:via-sky-500 dark:to-cyan-400 -translate-x-1/2 rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {EDUCATION.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-stretch">
                  
                  {/* Timeline Badge/Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900 ${
                        item.status === 'Ongoing'
                          ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white animate-pulse'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {item.status === 'Ongoing' ? (
                        <LucideIcon name="Clock" size={18} />
                      ) : (
                        <LucideIcon name="Check" size={18} className="text-emerald-500 font-bold" />
                      )}
                    </motion.div>
                  </div>

                  {/* Left spacer / Panel Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, type: 'spring', stiffness: 90 }}
                      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-shadow relative group"
                    >
                      {/* Arrow marker for desktop */}
                      <div
                        className={`hidden md:block absolute top-6 w-3 h-3 bg-white dark:bg-slate-900 border-t border-r border-slate-200/40 dark:border-slate-800/50 ${
                          isEven
                            ? 'right-0 translate-x-1.5 rotate-45'
                            : 'left-0 -translate-x-1.5 -rotate-135'
                        }`}
                      />

                      {/* Header info */}
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
                        {item.duration}
                      </span>
                      
                      <h3 className="text-lg sm:text-xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
                        {item.degree}
                      </h3>
                      
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1 flex items-center gap-1.5 justify-start md:justify-end group-even:md:justify-start">
                        <LucideIcon name="GraduationCap" size={16} className="text-blue-500 shrink-0" />
                        <span>{item.institution}</span>
                      </p>

                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 flex items-center gap-1 justify-start md:justify-end group-even:md:justify-start">
                        <LucideIcon name="MapPin" size={12} className="shrink-0" />
                        <span>{item.location}</span>
                      </p>

                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Current Semester Badge if applicable */}
                      {item.status === 'Ongoing' && (
                        <div className="mt-4 flex justify-start md:justify-end">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/40 dark:border-blue-900/40 text-xs text-blue-600 dark:text-sky-400 font-semibold animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            Active BCA 4th Semester Student
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Empty right/left column space spacer for layout */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
