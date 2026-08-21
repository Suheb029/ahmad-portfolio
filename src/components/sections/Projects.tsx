import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const projects = [
  {
    title: 'VoltWay / Voltrek',
    description: 'An EV charging experience platform that helps users discover charging stations, plan EV-friendly routes and explore charging-related services.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'JavaScript', 'Material UI', 'Leaflet', 'OpenChargeMap API', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Food Delivery Web App',
    description: 'A modern food ordering platform with restaurant browsing, food search, cart functionality and user authentication.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'ReviseAI',
    description: 'An AI-powered study assistant that processes study material and generates summaries, notes and quizzes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    tech: ['Python', 'Flask', 'AI API', 'PDF Processing'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Featured Projects" />
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col p-0 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-textSecondary mb-6 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-textSecondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Button variant="primary" size="sm" className="gap-2" onClick={() => window.open(project.liveUrl, '_blank')}>
                      <ExternalLink size={16} /> Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open(project.githubUrl, '_blank')}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                      GitHub
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card hoverable className="h-full flex flex-col items-center justify-center min-h-[400px] text-center border-dashed border-2 border-white/20 bg-transparent">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="mb-6" style={{color:'#9CA3AF'}}><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              <h3 className="text-2xl font-bold mb-3">More Projects</h3>
              <p className="text-textSecondary mb-8 max-w-sm">
                Explore more of my freelance work, personal projects, and open-source contributions on GitHub.
              </p>
              <Button variant="secondary" className="gap-2" onClick={() => window.open('https://github.com', '_blank')}>
                View GitHub Profile <ArrowRight size={18} />
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
