import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

const processSteps = [
  {
    num: '01',
    title: 'Discuss',
    description: "Understand the client's idea and requirements.",
  },
  {
    num: '02',
    title: 'Plan',
    description: 'Define features, technology and project structure.',
  },
  {
    num: '03',
    title: 'Develop',
    description: 'Build the frontend, backend and required integrations.',
  },
  {
    num: '04',
    title: 'Test',
    description: 'Test functionality, responsiveness and performance.',
  },
  {
    num: '05',
    title: 'Deliver',
    description: 'Deploy the project and provide the final product.',
  },
];

export function WorkProcess() {
  return (
    <section className="py-20 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Work Process" subtitle="How I bring your ideas to life from start to finish." />
        
        <div className="relative mt-16 md:mt-24">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-[60px] z-0" />
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col lg:items-center relative"
              >
                {/* Connecting Line - Mobile/Tablet */}
                {index !== processSteps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-16 bottom-[-32px] w-0.5 bg-white/10 z-0" />
                )}
                
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xl font-bold text-primary shadow-[0_0_15px_rgba(79,70,229,0.3)] mb-6 z-10 shrink-0">
                  {step.num}
                </div>
                
                <div className="lg:text-center pl-24 lg:pl-0 -mt-20 lg:mt-0 pt-2 lg:pt-0">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-textSecondary text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
