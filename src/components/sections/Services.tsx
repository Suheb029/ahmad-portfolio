import { motion } from 'framer-motion';
import { MonitorSmartphone, Layout, Server, BrainCircuit, MessageSquareCode, Wrench } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'End-to-end responsive web applications using React, TypeScript, Node.js, Express, and modern database solutions.',
    icon: <MonitorSmartphone size={28} className="text-primary" />,
    badgeBg: 'bg-indigo-50 border-indigo-100',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Frontend & UI/UX Engineering',
    description: 'Pixel-perfect, high-performance user interfaces built with Vite, Tailwind CSS, Framer Motion, and mobile-first best practices.',
    icon: <Layout size={28} className="text-secondary" />,
    badgeBg: 'bg-sky-50 border-sky-100',
    tags: ['Tailwind CSS', 'Framer Motion', 'Responsive'],
  },
  {
    title: 'Backend & RESTful APIs',
    description: 'Secure, scalable API architectures, authentication pipelines (JWT/OAuth), relational databases, and microservices.',
    icon: <Server size={28} className="text-emerald-600" />,
    badgeBg: 'bg-emerald-50 border-emerald-100',
    tags: ['REST APIs', 'PostgreSQL', 'MySQL', 'Node'],
  },
  {
    title: 'AI Solutions & API Integration',
    description: 'Custom AI workflows, generative AI features, automation pipelines, and LLM integrations (OpenAI, Google Gemini).',
    icon: <BrainCircuit size={28} className="text-purple-600" />,
    badgeBg: 'bg-purple-50 border-purple-100',
    tags: ['Gemini API', 'OpenAI', 'Python', 'Flask'],
  },
  {
    title: 'AI Chatbot & Automation Bots',
    description: 'Intelligent conversational agents and custom chatbots designed to streamline customer queries and automate support.',
    icon: <MessageSquareCode size={28} className="text-amber-600" />,
    badgeBg: 'bg-amber-50 border-amber-100',
    tags: ['Smart Chatbots', 'Prompt Design', 'Webhooks'],
  },
  {
    title: 'Code Refactoring & Optimization',
    description: 'Fixing bugs, improving Google Lighthouse performance, enhancing security, and scaling existing web applications.',
    icon: <Wrench size={28} className="text-rose-600" />,
    badgeBg: 'bg-rose-50 border-rose-100',
    tags: ['Performance', 'SEO', 'Bug Fixing', 'Security'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="What I Can Build For You"
          subtitle="Specialized development services tailored for modern startups, businesses, and agency projects."
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hoverable className="h-full flex flex-col bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10">
                <div className={`mb-6 p-3.5 rounded-2xl border ${service.badgeBg} inline-block w-fit shadow-2xs`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-3">{service.title}</h3>
                <p className="text-textSecondary text-sm md:text-base leading-relaxed mb-6 flex-1">{service.description}</p>
                
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="shadow-lg shadow-primary/25"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}
