import { motion } from 'framer-motion';
import { Target, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const reasons = [
  {
    title: 'Client Focused',
    description: 'I understand the requirement before starting development.',
    icon: <Target className="text-primary" size={28} />,
  },
  {
    title: 'Clean & Modern',
    description: 'I build responsive and easy-to-use interfaces.',
    icon: <Sparkles className="text-secondary" size={28} />,
  },
  {
    title: 'Reliable Development',
    description: 'I focus on scalable code and proper testing.',
    icon: <ShieldCheck className="text-primary" size={28} />,
  },
  {
    title: 'On-Time Delivery',
    description: 'I communicate clearly and keep the project on track.',
    icon: <Clock className="text-secondary" size={28} />,
  },
];

export function WhyChooseMe() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Why Work With Me?" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hoverable className="h-full text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{reason.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
