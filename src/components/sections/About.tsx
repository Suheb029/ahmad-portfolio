import { motion } from 'framer-motion';
import { Sparkles, Code, Rocket, HeartHandshake, FileText } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const values = [
  {
    icon: <Code size={20} className="text-primary" />,
    title: 'Clean Architecture',
    desc: 'Scalable, maintainable, and type-safe code that teams love to work with.',
  },
  {
    icon: <Sparkles size={20} className="text-secondary" />,
    title: 'Modern Aesthetics',
    desc: 'Visually engaging interfaces with micro-animations and intuitive UX.',
  },
  {
    icon: <Rocket size={20} className="text-purple-600" />,
    title: 'Fast Performance',
    desc: 'Optimized assets, minimal re-renders, and rapid server response times.',
  },
  {
    icon: <HeartHandshake size={20} className="text-emerald-600" />,
    title: 'Collaborative Mindset',
    desc: 'Active communicator who works closely with stakeholders and clients.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="About Me"
          subtitle="A look into my background, development philosophy, and what drives my work."
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 md:p-12 text-left bg-white border border-slate-200/90 shadow-md">
              <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-accent mb-8 rounded-full" />
              
              <p className="text-lg md:text-xl text-textPrimary font-medium leading-relaxed mb-6">
                I'm Ahmad, a passionate Full-Stack Developer who specializes in turning ideas into responsive, high-performance web applications and AI-augmented tools.
              </p>
              
              <p className="text-base md:text-lg text-textSecondary leading-relaxed mb-8">
                My approach combines clean UI design with scalable backend architectures. From building real-time inventory systems and financial expense trackers to crafting intuitive food delivery apps and AI study assistants, I enjoy tackling complex challenges and delivering software that delivers tangible results.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {values.map((v) => (
                  <div key={v.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white shadow-2xs shrink-0 border border-slate-200/60">
                      {v.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-textPrimary mb-1">{v.title}</h4>
                      <p className="text-xs text-textSecondary leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/70 text-indigo-900 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open to freelance projects, contracts, and full-time opportunities.
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  className="gap-2 shadow-2xs hover:border-primary/40"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <FileText size={15} /> Get in Touch
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
