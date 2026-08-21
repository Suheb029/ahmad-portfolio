import { motion } from 'framer-motion';
import { MonitorSmartphone, Layout, Server, BrainCircuit, MessageSquareCode, Wrench } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'Modern and responsive web applications using React, Node.js, Express, and databases.',
    icon: <MonitorSmartphone size={32} className="text-primary" />,
  },
  {
    title: 'Frontend Development',
    description: 'Fast, responsive and user-friendly interfaces using React, Vite, JavaScript and modern UI libraries.',
    icon: <Layout size={32} className="text-secondary" />,
  },
  {
    title: 'Backend & REST APIs',
    description: 'Secure and scalable backend systems, authentication, APIs and database integration.',
    icon: <Server size={32} className="text-primary" />,
  },
  {
    title: 'AI Integration',
    description: 'AI-powered features using Python, AI APIs, automation and intelligent application workflows.',
    icon: <BrainCircuit size={32} className="text-secondary" />,
  },
  {
    title: 'AI Chatbot Development',
    description: 'Custom AI chatbots for websites and businesses using GPT, Gemini and other AI APIs with smart conversation flows.',
    icon: <MessageSquareCode size={32} className="text-primary" />,
  },
  {
    title: 'Bug Fixing & Maintenance',
    description: 'Fix existing website issues, improve performance, add features and maintain applications.',
    icon: <Wrench size={32} className="text-secondary" />,
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="What I Can Build For You" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hoverable className="h-full flex flex-col">
                <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-textSecondary leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}
