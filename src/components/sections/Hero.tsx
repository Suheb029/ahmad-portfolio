import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Code2, Sparkles, Terminal, Activity, Layers, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  const [activeTab, setActiveTab] = useState<'code' | 'stack' | 'status'>('code');

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative bg-white bg-grid-pattern">
      {/* Ambient background glow effects for light background */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-100/70 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-100/70 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-100/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Intro & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Beacon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-200/70 mb-6 shadow-xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-indigo-900 tracking-wide uppercase">
                Available for Freelance & Full-Time
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-textPrimary mb-6 leading-[1.12]">
              Building Modern <br className="hidden sm:block" />
              <span className="text-gradient">Websites, Web Apps & AI Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-textSecondary mb-8 max-w-2xl leading-relaxed">
              I’m a Full-Stack Developer specializing in crafting lightning-fast responsive websites, scalable web applications, REST APIs, and custom AI integrations for startups and enterprises.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                size="lg"
                className="gap-2 shadow-lg shadow-primary/25 group w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Let's Work Together</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto hover:border-slate-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-textSecondary">
              <span className="text-xs font-semibold uppercase tracking-wider text-textMuted mr-2">Connect:</span>
              <a
                href="https://github.com/Suheb029"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-textSecondary hover:text-textPrimary transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-textSecondary hover:text-textPrimary transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a
                href="suhebah029@gmail.com"
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-textSecondary hover:text-textPrimary transition-all duration-200"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Interactive Animated Developer Card & Floating Elements */}
          <div className="lg:col-span-5 relative">
            {/* Floating Tech Pill 1 - React */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-4 z-20 px-3.5 py-1.5 bg-white/95 rounded-xl shadow-lg border border-indigo-100 flex items-center gap-2"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-800">React & TypeScript</span>
            </motion.div>

            {/* Floating Tech Pill 2 - AI Integration */}
            <motion.div
              animate={{ y: [8, -8, 8], rotate: [2, -1, 2] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-5 -right-3 z-20 px-3.5 py-1.5 bg-white/95 rounded-xl shadow-lg border border-purple-100 flex items-center gap-2"
            >
              <Sparkles size={14} className="text-purple-600" />
              <span className="text-xs font-semibold text-slate-800">AI & LLM Integration</span>
            </motion.div>

            {/* Floating Tech Pill 3 - Node / Backend */}
            <motion.div
              animate={{ y: [-5, 7, -5] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -right-6 z-20 hidden sm:flex px-3 py-1.5 bg-white/95 rounded-xl shadow-md border border-emerald-100 items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-700">Node & REST APIs</span>
            </motion.div>

            {/* Main Interactive Developer Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>

                {/* Window Tabs */}
                <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-lg text-xs font-medium text-textSecondary">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 rounded-md transition-all ${activeTab === 'code' ? 'bg-white text-primary shadow-xs font-semibold' : 'hover:text-textPrimary'
                      }`}
                  >
                    <span className="flex items-center gap-1"><Code2 size={12} /> developer.ts</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2.5 py-1 rounded-md transition-all ${activeTab === 'stack' ? 'bg-white text-primary shadow-xs font-semibold' : 'hover:text-textPrimary'
                      }`}
                  >
                    <span className="flex items-center gap-1"><Layers size={12} /> stack.json</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('status')}
                    className={`px-2.5 py-1 rounded-md transition-all ${activeTab === 'status' ? 'bg-white text-primary shadow-xs font-semibold' : 'hover:text-textPrimary'
                      }`}
                  >
                    <span className="flex items-center gap-1"><Activity size={12} /> metrics</span>
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[290px] bg-[#0F172A] text-slate-200">
                {activeTab === 'code' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-1.5"
                  >
                    <p className="text-slate-400">// Ahmad - Full-Stack Developer Profile</p>
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-300">developer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">name</span>: <span className="text-emerald-300">'Ahmad'</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">focus</span>: [
                      <span className="text-amber-300">'Web Apps'</span>,{' '}
                      <span className="text-amber-300">'REST APIs'</span>,{' '}
                      <span className="text-amber-300">'AI Solutions'</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">activeProjects</span>: [
                    </p>
                    <p className="pl-8 text-emerald-300">'Expense Tracker',</p>
                    <p className="pl-8 text-emerald-300">'Inventory Management',</p>
                    <p className="pl-8 text-emerald-300">'VoltWay EV Platform'</p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-sky-300">status</span>:{' '}
                      <span className="text-emerald-400">'Ready For Deployment'</span>
                    </p>
                    <p>&#125;;</p>
                    <p className="pt-2 text-indigo-400">
                      export default developer;
                    </p>
                  </motion.div>
                )}

                {activeTab === 'stack' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-2 text-slate-300"
                  >
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Frontend</span>
                      <span className="text-emerald-400 font-semibold">React, TypeScript, Tailwind</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Backend</span>
                      <span className="text-cyan-400 font-semibold">Node.js, Express, Python</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Databases</span>
                      <span className="text-amber-400 font-semibold">MongoDB, MySQL</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">AI / Automation</span>
                      <span className="text-purple-400 font-semibold">OpenAI, Gemini APIs, Flask</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Architecture</span>
                      <span className="text-blue-400 font-semibold">Scalable REST & Microservices</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'status' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 size={16} />
                      <span className="font-semibold">All Systems Operational</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                        <span className="text-[10px] uppercase text-slate-400 block">Fast Response</span>
                        <span className="text-sm font-bold text-white">&lt; 24h reply</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                        <span className="text-[10px] uppercase text-slate-400 block">Performance</span>
                        <span className="text-sm font-bold text-emerald-400">98+ Lighthouse</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                        <span className="text-[10px] uppercase text-slate-400 block">Testing</span>
                        <span className="text-sm font-bold text-cyan-400">100% Responsive</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                        <span className="text-[10px] uppercase text-slate-400 block">Delivery</span>
                        <span className="text-sm font-bold text-amber-400">On Time</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Window Footer / Terminal Status Bar */}
              <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Terminal size={12} className="text-primary" /> git:(main)
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  ● Build Success
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">5+</span>
            <span className="text-sm font-medium text-textSecondary mt-1">Production Web Projects</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">100%</span>
            <span className="text-sm font-medium text-textSecondary mt-1">Client Satisfaction Focus</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Full-Stack</span>
            <span className="text-sm font-medium text-textSecondary mt-1">Frontend, Backend & DB</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-extrabold text-accent tracking-tight">AI Powered</span>
            <span className="text-sm font-medium text-textSecondary mt-1">Smart Automation & APIs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
