import { motion } from 'framer-motion';
import { Layout, Server, Database, Terminal, Sparkles, Cpu } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout className="text-primary" size={22} />,
    description: 'Building responsive, fast, and accessible user interfaces.',
    skills: ['React 19', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Material UI', 'Vite', 'Next.js Basics'],
  },
  {
    title: 'Backend & APIs',
    icon: <Server className="text-secondary" size={22} />,
    description: 'Architecting robust server-side logic and RESTful endpoints.',
    skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'RESTful APIs', 'Authentication / JWT', 'Middleware Architecture'],
  },
  {
    title: 'Databases & Storage',
    icon: <Database className="text-amber-500" size={22} />,
    description: 'Relational & document database schema design and querying.',
    skills: ['MongoDB', 'Mongoose', 'MySQL', 'Database Modeling', 'Query Optimization', 'CRUD Pipelines'],
  },
  {
    title: 'Artificial Intelligence',
    icon: <Sparkles className="text-purple-600" size={22} />,
    description: 'Integrating LLMs, prompt engineering, and intelligent features.',
    skills: ['OpenAI APIs', 'Google Gemini APIs', 'Prompt Engineering', 'LangChain Basics', 'Document Vectorization', 'AI Study Bots'],
  },
  {
    title: 'DevOps & Tooling',
    icon: <Terminal className="text-emerald-600" size={22} />,
    description: 'Version control, development tooling, and testing utilities.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm / pnpm', 'Vercel Deployment', 'Chrome DevTools'],
  },
  {
    title: 'Software Engineering',
    icon: <Cpu className="text-rose-500" size={22} />,
    description: 'Core concepts, algorithms, and engineering practices.',
    skills: ['Object-Oriented Design', 'Clean Code', 'Responsive Design', 'State Management', 'API Security', 'Agile Workflow'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Technologies I Work With"
          subtitle="My primary technology stack across frontend, backend, database architectures, and AI systems."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card hoverable className="h-full flex flex-col p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 shadow-2xs shrink-0">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-textPrimary">{category.title}</h3>
                  </div>
                </div>

                <p className="text-xs text-textSecondary mb-5 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2, scale: 1.04 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                      className="px-3 py-1.5 bg-slate-50 hover:bg-indigo-50/70 border border-slate-200 hover:border-primary/40 rounded-lg text-xs font-semibold text-slate-700 hover:text-primary transition-colors cursor-default shadow-2xs"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
