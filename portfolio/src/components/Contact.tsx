import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { PERSONAL_INFO } from '../data';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate sending email to Anil Gupta via backend API
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const socialLinks = [
    { name: 'Github', icon: 'Github', url: 'https://github.com/anilatpug', color: 'hover:bg-slate-800 hover:text-white dark:hover:bg-slate-700' },
    { name: 'Linkedin', icon: 'Linkedin', url: 'https://linkedin.com', color: 'hover:bg-blue-600 hover:text-white' },
    { name: 'Youtube', icon: 'Youtube', url: 'https://youtube.com/@buildwithatpug', color: 'hover:bg-red-600 hover:text-white' },
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com', color: 'hover:bg-blue-700 hover:text-white' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com', color: 'hover:bg-pink-600 hover:text-white' }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold text-blue-600 dark:text-sky-400 tracking-wider uppercase font-mono"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Contact Me & Let's Build Together
          </motion.p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Left Block */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Have an exciting project idea, a business consultation request, or just want to discuss web development? Drop me a message and I will reply as soon as possible!
              </p>
            </motion.div>

            {/* Direct Channels */}
            <div className="space-y-5">
              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"
              >
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 shrink-0">
                  <LucideIcon name="MapPin" size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 dark:text-slate-100 text-sm">Location</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">{PERSONAL_INFO.location}</p>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"
              >
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shrink-0">
                  <LucideIcon name="Mail" size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 dark:text-slate-100 text-sm">Direct Email</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">anilatpug01@gmail.com</p>
                </div>
              </motion.div>
            </div>

            {/* Social Icons Section */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold font-mono">Connect Globally</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all border border-slate-200/20 dark:border-slate-700/20 shadow-sm ${social.color}`}
                    title={social.name}
                  >
                    <LucideIcon name={social.icon} size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Block Right */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md"
            >
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Anil Gupta"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-sky-400 transition-all text-sm"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-sky-400 transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Collaboration, Web Development Inquiry, etc."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-sky-400 transition-all text-sm"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-sky-400 transition-all text-sm resize-none"
                    required
                  />
                </div>

                {/* Form response states */}
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-400 text-xs font-medium flex items-center gap-2"
                    >
                      <LucideIcon name="Check" size={16} />
                      <span>Thank you! Your message has been successfully simulated and saved.</span>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-400 text-xs font-medium flex items-center gap-2"
                    >
                      <LucideIcon name="X" size={16} />
                      <span>Please fill in all required fields marked with * before sending.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <LucideIcon name="Send" size={16} />
                    </>
                  )}
                </button>
              </form>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
