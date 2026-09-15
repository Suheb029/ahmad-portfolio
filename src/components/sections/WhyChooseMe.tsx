import { motion } from 'framer-motion';
import { Target, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const reasons = [
  {
    title: 'Client-Focused Approach',
    description: 'I deeply analyze your business goals, target audience, and feature roadmap before writing a line of code.',
    icon: <Target className="text-primary" size={26} />,
    bg: 'bg-indigo-50 border-indigo-100/80',
  },
  {
    title: 'Modern & Clean UI',
    description: 'Ultra-fast, fully responsive interfaces designed with crisp typography, smooth animations, and zero clutter.',
    icon: <Sparkles className="text-secondary" size={26} />,
    bg: 'bg-sky-50 border-sky-100/80',
  },
  {
    title: 'Production-Grade Code',
    description: 'Type-safe TypeScript, modular architecture, REST standards, and strict error handling for scalability.',
    icon: <ShieldCheck className="text-emerald-600" size={26} />,
    bg: 'bg-emerald-50 border-emerald-100/80',
  },
  {
    title: 'On-Time Delivery',
    description: 'Transparent communication, regular milestone updates, and prompt delivery without compromising quality.',
    icon: <Clock className="text-purple-600" size={26} />,
    bg: 'bg-purple-50 border-purple-100/80',
  },
];

export function WhyChooseMe() {
  return (
    <section className="py-20 md:py-32 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Why Work With Me?"
          subtitle="Commitment to quality engineering, clear collaboration, and lasting business value."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <Card hoverable className="h-full text-center flex flex-col items-center p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10">
                <div className={`w-14 h-14 rounded-2xl ${reason.bg} border flex items-center justify-center mb-6 shadow-2xs`}>
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-textPrimary mb-3">{reason.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{reason.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
