import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="About Me" />
        
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 md:p-12 text-left">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mb-8 rounded-full" />
              
              <p className="text-lg md:text-xl text-textSecondary leading-relaxed mb-6">
                I'm a passionate Full-Stack Developer who enjoys building practical web applications and AI-powered solutions. I focus on clean UI, reliable backend systems, database integration and creating products that solve real-world problems.
              </p>
              
              <p className="text-lg md:text-xl text-textSecondary leading-relaxed mb-8">
                Whether you need a brand new web platform, want to add AI features to your existing app, or need help maintaining your systems, I can help you achieve your goals with modern technology.
              </p>
              
              <div className="inline-block bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-lg font-medium">
                Open to freelance projects, internships, collaborations and startup projects.
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
