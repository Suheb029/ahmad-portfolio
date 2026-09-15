import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Layers, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'AI & Automation' | 'Management & Finance';
  description: string;
  image: string;
  tech: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  isNew?: boolean;
}

const projects: Project[] = [
  {
    id: 'expense-tracker',
    title: 'Smart Expense Tracker & Financial Analytics',
    category: 'Management & Finance',
    description: 'A comprehensive personal finance and expense tracking suite with dynamic spending visual analytics, monthly budget forecasting, transaction categorization, and recurring payment tracking.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Node.js', 'Express', 'MongoDB'],
    features: ['Dynamic Spending Visuals', 'Budget Forecasting', 'Transaction Filtering', 'Export Reports'],
    liveUrl: '#',
    githubUrl: '#',
    isNew: true,
  },
  {
    id: 'inventory-system',
    title: 'Cloud Inventory & Warehouse Management System',
    category: 'Management & Finance',
    description: 'Enterprise-grade inventory management solution featuring real-time SKU stock level monitoring, automated low-inventory alerts, supplier purchase order tracking, and sales analytics.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'REST API', 'Tailwind CSS', 'Recharts'],
    features: ['Real-Time SKU Tracking', 'Low-Stock Notifications', 'Supplier Management', 'Audit History'],
    liveUrl: '#',
    githubUrl: '#',
    isNew: true,
  },
  {
    id: 'voltway',
    title: 'VoltWay / Voltrek',
    category: 'Full-Stack',
    description: 'An EV charging experience platform that helps electric vehicle drivers discover verified charging stations, calculate travel routes, and explore charging network rates.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop',
    tech: ['React', 'JavaScript', 'Material UI', 'Leaflet Maps', 'OpenChargeMap API', 'MySQL'],
    features: ['Interactive Leaflet Maps', 'Real-time Station Status', 'Route Planning', 'Trip Calculator'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'revise-ai',
    title: 'ReviseAI - Study Assistant',
    category: 'AI & Automation',
    description: 'An AI-powered academic study platform that processes uploaded study material and PDFs to generate summaries, smart flashcards, and interactive practice exam questions.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    tech: ['Python', 'Flask', 'Gemini AI API', 'React', 'PDF Processing', 'Tailwind CSS'],
    features: ['Document Analysis', 'Automatic Summarization', 'Interactive Quizzes', 'Flashcards'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery Web App',
    category: 'Full-Stack',
    description: 'A modern food ordering web platform with restaurant catalog exploration, dish filtering, seamless cart checkout pipeline, and user order tracking.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    features: ['Restaurant Menus', 'Interactive Cart', 'Order Management', 'User Authentication'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const categories = ['All', 'Management & Finance', 'Full-Stack', 'AI & Automation'] as const;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore recent production applications, management platforms, and AI systems I've engineered."
        />

        {/* Category Filters with animated tab indicator */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'text-primary shadow-sm'
                  : 'text-textSecondary hover:text-textPrimary hover:bg-slate-200/50'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="projectFilterPill"
                  className="absolute inset-0 bg-white rounded-xl border border-slate-200/90 shadow-sm -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col p-0 overflow-hidden group bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-primary/40 transition-all duration-300">
                  {/* Card Image Banner */}
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Category & New Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="text-xs font-semibold px-3 py-1 bg-white/95 backdrop-blur-md text-slate-800 rounded-lg shadow-sm border border-slate-200/70">
                        {project.category}
                      </span>
                      {project.isNew && (
                        <span className="text-xs font-bold px-2.5 py-1 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-sm">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-textSecondary text-sm md:text-base mb-5 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features highlight pills */}
                    <div className="mb-5 space-y-1.5 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-textMuted block mb-1">
                        Key Features
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-textSecondary font-medium">
                        {project.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-1.5">
                            <CheckCircle size={13} className="text-emerald-500 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stacks */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-2 border-t border-slate-100 mt-auto">
                      <Button
                        variant="primary"
                        size="sm"
                        className="gap-2 flex-1 shadow-sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={15} /> Live Demo
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="gap-2 flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                        Source Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-md text-center max-w-2xl mx-auto flex flex-col items-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-primary mb-4 shadow-xs">
            <Layers size={28} />
          </div>
          <h3 className="text-2xl font-bold text-textPrimary mb-2">Want to see more code & contributions?</h3>
          <p className="text-textSecondary text-sm md:text-base mb-6 max-w-lg leading-relaxed">
            I continuously build, experiment with new libraries, and contribute to open-source software on GitHub.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="gap-2 shadow-xs hover:border-primary/40"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <span>Visit My GitHub Profile</span>
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
