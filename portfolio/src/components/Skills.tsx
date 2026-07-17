import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { SKILLS } from '../data';

export const Skills: React.FC = () => {
  // Extract unique categories in the order we want to display
  const categories: Array<'Frontend' | 'Backend & Database' | 'Tools & Platforms' | 'Other Interests'> = [
    'Frontend',
    'Backend & Database',
    'Tools & Platforms',
    'Other Interests'
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold text-blue-600 dark:text-sky-400 tracking-wider uppercase font-mono"
          >
            My Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Technical Skills & Tech Stack
          </motion.p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIdx) => {
            const filteredSkills = SKILLS.filter((s) => s.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm"
              >
                {/* Category Header */}
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-sky-400" />
                  <span>{category}</span>
                </h3>

                {/* Skills Progress list */}
                <div className="space-y-5">
                  {filteredSkills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-2 group">
                      {/* Title & value */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2.5 font-medium text-slate-700 dark:text-slate-300">
                          <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                            <LucideIcon name={skill.iconName} size={16} />
                          </div>
                          <span>{skill.name}</span>
                        </div>
                        <span className="font-mono text-xs text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors font-semibold">
                          {skill.progress}%
                        </span>
                      </div>

                      {/* Progress bar container */}
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIdx * 0.1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
