import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { PERSONAL_INFO, YOUTUBE_VIDEOS } from '../data';

export const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'github'>('youtube');

  // Simulated GitHub Contribution Graph (365 boxes representing a year of committing)
  const generateContributionDays = () => {
    const days = [];
    const levels = [0, 1, 2, 3, 4];
    // We generate 14 rows x 7 cols (98 days) for a sleek, responsive mini-graph representation
    for (let i = 0; i < 112; i++) {
      // Weight towards more commits (levels 1-3) to make it look active!
      const level = Math.random() > 0.35 ? levels[Math.floor(Math.random() * 4)] : 0;
      days.push(level);
    }
    return days;
  };

  const contributionDays = generateContributionDays();

  // Colors for GitHub squares
  const getContributionColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-emerald-900/40 dark:bg-emerald-900/40';
      case 2: return 'bg-emerald-700/60 dark:bg-emerald-700/60';
      case 3: return 'bg-emerald-500 dark:bg-emerald-500';
      case 4: return 'bg-emerald-400 dark:bg-emerald-400';
      default: return 'bg-slate-100 dark:bg-slate-800';
    }
  };

  return (
    <section id="community" className="py-24 bg-white dark:bg-slate-900 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold text-blue-600 dark:text-sky-400 tracking-wider uppercase font-mono"
          >
            My Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Code Logs & Content Creation
          </motion.p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
            <button
              onClick={() => setActiveTab('youtube')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'youtube'
                  ? 'bg-white dark:bg-slate-900 text-red-600 dark:text-red-400 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <LucideIcon name="Youtube" size={18} />
              <span>YouTube: BUILD WITH ATPUG</span>
            </button>
            <button
              onClick={() => setActiveTab('github')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'github'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <LucideIcon name="Github" size={18} />
              <span>GitHub: @anilatpug</span>
            </button>
          </div>
        </div>

        {/* Dynamic Section Contents */}
        <div>
          {activeTab === 'youtube' ? (
            /* YOUTUBE HUB PANEL */
            <motion.div
              key="youtube-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Channel Profile/Stats */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Banner/Avatar header */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center font-display font-extrabold text-2xl shadow-lg border-2 border-white dark:border-slate-800">
                      B
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                        {PERSONAL_INFO.youtubeChannel}
                      </h4>
                      <p className="text-xs text-rose-600 dark:text-rose-400 font-mono font-semibold">Tech & Web Educator</p>
                    </div>
                  </div>

                  {/* Channel Description */}
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {PERSONAL_INFO.youtubeDescription}
                  </p>

                  {/* Channel Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                    <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800/50 text-center">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Subscribers</p>
                      <p className="text-base sm:text-lg font-display font-extrabold text-slate-900 dark:text-white mt-0.5">3.2K+</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800/50 text-center">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Tutorials</p>
                      <p className="text-base sm:text-lg font-display font-extrabold text-slate-900 dark:text-white mt-0.5">45+ Videos</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <LucideIcon name="Youtube" size={18} />
                    <span>Subscribe on YouTube</span>
                  </a>
                </div>
              </div>

              {/* Video Cards list */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {YOUTUBE_VIDEOS.map((video) => (
                  <motion.div
                    key={video.title}
                    whileHover={{ y: -4 }}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-800/50"
                  >
                    {/* Thumbnail placeholder with play hover button */}
                    <div className="relative aspect-video overflow-hidden bg-slate-900">
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        referrerPolicy="no-referrer"
                      />
                      {/* Play overlay button */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <LucideIcon name="Play" size={20} className="ml-1" />
                        </div>
                      </div>
                      {/* Video length tag */}
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-[10px] font-bold text-white font-mono">
                        {video.duration}
                      </span>
                    </div>

                    {/* Description Copy */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <h4 className="text-sm font-display font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {video.title}
                      </h4>
                      
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                        <LucideIcon name="Eye" size={12} />
                        <span>{video.views}</span>
                        <span>•</span>
                        <span>BCA Learner guides</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* GITHUB CODE HUB PANEL */
            <motion.div
              key="github-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* GitHub Profile Card */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-2xl shadow-md border border-slate-800">
                      <LucideIcon name="Github" size={28} />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                        {PERSONAL_INFO.name}
                      </h4>
                      <p className="text-xs text-blue-600 dark:text-sky-400 font-mono font-semibold">@{PERSONAL_INFO.githubUsername}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    Welcome to my open source repository log. I actively push my BCA lab projects, custom PHP/MySQL suppliers systems, ESP32 configurations, and web projects here!
                  </p>

                  {/* GitHub Statistics Layout */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                    <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800/50">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Repos</p>
                      <p className="text-base sm:text-lg font-display font-extrabold text-slate-900 dark:text-white mt-0.5">23</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800/50">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Stars</p>
                      <p className="text-base sm:text-lg font-display font-extrabold text-slate-900 dark:text-white mt-0.5">18 Stars</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800/50">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Followers</p>
                      <p className="text-base sm:text-lg font-display font-extrabold text-slate-900 dark:text-white mt-0.5">45</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800/50">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Prs Merged</p>
                      <p className="text-base sm:text-lg font-display font-extrabold text-slate-900 dark:text-white mt-0.5">14</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href="https://github.com/anilatpug"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-colors border border-slate-800"
                  >
                    <LucideIcon name="Github" size={18} />
                    <span>Follow @anilatpug</span>
                  </a>
                </div>
              </div>

              {/* GitHub Contributions Interactive Card Layout */}
              <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                      Contribution Activity Map
                    </h4>
                    <span className="text-xs text-emerald-500 font-mono font-bold flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      542 Commits This Year
                    </span>
                  </div>

                  {/* Simulated GitHub Grid */}
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50">
                    <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto select-none py-1">
                      {contributionDays.map((level, i) => (
                        <div
                          key={i}
                          className={`w-3.5 h-3.5 rounded-[3px] transition-all hover:scale-125 duration-150 ${getContributionColor(level)}`}
                          title={`Day ${i + 1}: ${level * 2} commits`}
                        />
                      ))}
                    </div>
                    {/* Grid Legend */}
                    <div className="flex items-center justify-end gap-2 text-[10px] text-slate-400 font-medium font-mono pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
                      <span>Less</span>
                      <div className="w-3 h-3 rounded-[2px] bg-slate-100 dark:bg-slate-800" />
                      <div className="w-3 h-3 rounded-[2px] bg-emerald-900/40" />
                      <div className="w-3 h-3 rounded-[2px] bg-emerald-700/60" />
                      <div className="w-3 h-3 rounded-[2px] bg-emerald-500" />
                      <div className="w-3 h-3 rounded-[2px] bg-emerald-400" />
                      <span>More</span>
                    </div>
                  </div>
                </div>

                {/* Open Source Highlight Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-sky-400">ACTIVE REPO</span>
                    <h5 className="font-display font-bold text-slate-900 dark:text-slate-100 text-sm">lifeline-nepal</h5>
                    <p className="text-xs text-slate-400 leading-snug line-clamp-2">Smart IoT flood gauges warnings and GIS integration system.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-sky-400">CLASS LAB</span>
                    <h5 className="font-display font-bold text-slate-900 dark:text-slate-100 text-sm">bca-4th-sem-labs</h5>
                    <p className="text-xs text-slate-400 leading-snug line-clamp-2">C++ advanced classes, PHP database systems, and networking labs.</p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};
