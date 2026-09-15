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
    <section className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Work Process"
          subtitle="A structured, agile development process from initial discovery to deployment."
        />
        
        <div className="relative mt-16 md:mt-24">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30 z-0" />
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="flex flex-col lg:items-center relative group"
              >
                {/* Connecting Line - Mobile/Tablet */}
                {index !== processSteps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-14 bottom-[-32px] w-0.5 bg-indigo-100 z-0" />
                )}
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -4, 4, 0] }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-2xl bg-white border-2 border-primary flex items-center justify-center text-base font-extrabold text-primary shadow-md shadow-primary/20 mb-5 z-10 shrink-0 group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  {step.num}
                </motion.div>
                
                <div className="lg:text-center pl-20 lg:pl-0 -mt-14 lg:mt-0 pt-1 lg:pt-0">
                  <h3 className="text-lg font-bold text-textPrimary mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-textSecondary text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
