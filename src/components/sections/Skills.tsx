import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Material UI', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'REST API'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    title: 'AI',
    skills: ['Generative AI APIs', 'Prompt Engineering', 'AI Integration', 'Python AI Applications'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Technologies I Work With" />
        
        <div className="flex flex-col gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-surface border border-white/5 rounded-xl shadow-sm hover:border-primary/50 transition-colors cursor-default"
                  >
                    <span className="font-medium text-textPrimary">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
