import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { PROJECTS } from '../data';

export const Projects: React.FC = () => {
  // Simulator State for LifeLine Nepal early warning triggers
  const [activeSimulation, setActiveSimulation] = useState<'Normal' | 'Warning' | 'Critical'>('Normal');
  const [showSimulator, setShowSimulator] = useState(false);

  const getSimulatorColors = () => {
    switch (activeSimulation) {
      case 'Critical':
        return {
          bg: 'bg-rose-50 dark:bg-rose-950/20',
          border: 'border-rose-200 dark:border-rose-900',
          text: 'text-rose-700 dark:text-rose-400',
          badge: 'bg-rose-500 text-white',
          pulse: 'bg-rose-500'
        };
      case 'Warning':
        return {
          bg: 'bg-amber-50 dark:bg-amber-950/20',
          border: 'border-amber-200 dark:border-amber-900',
          text: 'text-amber-700 dark:text-amber-400',
          badge: 'bg-amber-500 text-slate-900',
          pulse: 'bg-amber-500'
        };
      default:
        return {
          bg: 'bg-emerald-50 dark:bg-emerald-950/20',
          border: 'border-emerald-200 dark:border-emerald-900',
          text: 'text-emerald-700 dark:text-emerald-400',
          badge: 'bg-emerald-500 text-white',
          pulse: 'bg-emerald-500'
        };
    }
  };

  const simColors = getSimulatorColors();

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold text-blue-600 dark:text-sky-400 tracking-wider uppercase font-mono"
          >
            My Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Featured Projects & Inventions
          </motion.p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Project Banner: LifeLine Nepal */}
        {PROJECTS.filter((p) => p.featured).map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8"
          >
            {/* Project Image Panel */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-full min-h-[300px] bg-slate-100 dark:bg-slate-900">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-red-600 text-white rounded-full flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  Featured Platform
                </span>
              </div>

              {/* Citizen SOS Mini Stats Badge inside image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 text-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-sky-400 font-mono">LIVE CONNECTIVITY</span>
                  <span className="flex items-center gap-1 text-[10px] bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded border border-sky-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    BCA LAB - DANG
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="bg-slate-900 p-1.5 rounded">
                    <p className="text-slate-400">IoT nodes</p>
                    <p className="font-bold text-slate-100">14 Active</p>
                  </div>
                  <div className="bg-slate-900 p-1.5 rounded">
                    <p className="text-slate-400">Alert latency</p>
                    <p className="font-bold text-emerald-400">&lt;1.8s</p>
                  </div>
                  <div className="bg-slate-900 p-1.5 rounded">
                    <p className="text-slate-400">AI prediction</p>
                    <p className="font-bold text-blue-400">Flood Index</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Copy Panel */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 font-mono">Disaster Management Innovation</span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
                  {project.title}
                </h3>
              </div>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies list */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-xs text-blue-700 dark:text-blue-300 font-medium border border-blue-100 dark:border-blue-900/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Integrated IoT Alert Simulator Widget */}
              <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setShowSimulator(!showSimulator)}
                    className="text-sm font-semibold text-blue-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                  >
                    <LucideIcon name="Cpu" size={16} />
                    <span>{showSimulator ? 'Close Live IoT Simulator' : 'Try Live IoT Sensor Simulator'}</span>
                  </button>
                  <span className="text-xs text-slate-400">Click to preview custom ESP32 triggers</span>
                </div>

                <AnimatePresence>
                  {showSimulator && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`p-4 rounded-xl border ${simColors.border} ${simColors.bg} transition-all duration-300 space-y-3`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Active Node: Babai River Gauge, Dang
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${simColors.badge}`}>
                          {activeSimulation}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="relative flex h-3.5 w-3.5">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${simColors.pulse}`} />
                            <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${simColors.pulse}`} />
                          </span>
                          <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                            {activeSimulation === 'Normal' && 'Water Level: 2.3 meters (Safe - Normal flow)'}
                            {activeSimulation === 'Warning' && 'Water Level: 4.8 meters (Warning - Nearing Flood Mark)'}
                            {activeSimulation === 'Critical' && 'Water Level: 6.2 meters (Critical - SOS alert broadcasted!)'}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">100% telemetry accuracy</span>
                      </div>

                      {/* Trigger controls */}
                      <div className="flex gap-2 pt-2 border-t border-slate-200/20 dark:border-slate-700/20">
                        <button
                          onClick={() => setActiveSimulation('Normal')}
                          className="px-2.5 py-1 text-[11px] rounded bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 hover:dark:bg-slate-800 transition-colors"
                        >
                          Trigger Normal
                        </button>
                        <button
                          onClick={() => setActiveSimulation('Warning')}
                          className="px-2.5 py-1 text-[11px] rounded bg-amber-500 text-slate-950 font-medium hover:bg-amber-600 transition-colors"
                        >
                          Trigger Warning
                        </button>
                        <button
                          onClick={() => setActiveSimulation('Critical')}
                          className="px-2.5 py-1 text-[11px] rounded bg-rose-600 text-white font-medium hover:bg-rose-700 transition-colors"
                        >
                          Trigger SOS
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-800 transition-colors"
                >
                  <LucideIcon name="Github" size={16} />
                  <span>View Source Code</span>
                </a>
                <button
                  onClick={() => alert("Simulation setup complete! This is a digital twin sandbox. Real cloud endpoint will connect to live Arduino telemetry on production.")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-blue-600 dark:text-sky-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                >
                  <LucideIcon name="ExternalLink" size={16} />
                  <span>Launch Live Demo</span>
                </button>
              </div>

            </div>
          </motion.div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.filter((p) => !p.featured).map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="flex-1 p-6 flex flex-col space-y-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400 font-semibold border border-slate-200/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/30 dark:border-slate-700/20 text-xs">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
                    >
                      <LucideIcon name="Github" size={14} />
                      <span>Repo</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <button
                      onClick={() => alert(`Opening demo environment for ${project.title}`)}
                      className="flex items-center gap-1 text-blue-600 dark:text-sky-400 hover:underline ml-auto font-medium"
                    >
                      <span>Live Demo</span>
                      <LucideIcon name="ArrowUpRight" size={14} />
                    </button>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
