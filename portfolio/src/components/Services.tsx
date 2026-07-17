import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { SERVICES } from '../data';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold text-blue-600 dark:text-sky-400 tracking-wider uppercase font-mono"
          >
            What I Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            My Professional Services
          </motion.p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-lg hover:border-blue-500/40 hover:dark:border-sky-400/40 transition-all duration-300 flex flex-col h-full"
            >
              {/* Service Icon with Glow */}
              <div className="relative w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-xl bg-blue-600 dark:bg-sky-400 blur-md opacity-0 group-hover:opacity-20 transition-opacity" />
                <LucideIcon name={service.iconName} size={24} className="relative z-10" />
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Bottom Decorative Arrow */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                <span>Inquire details</span>
                <LucideIcon name="ChevronRight" size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
