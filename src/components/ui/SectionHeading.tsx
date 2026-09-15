import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center', className)}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-textPrimary mb-4">
          {title}
        </h2>
        <div className={cn("w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4", centered && "mx-auto")} />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-textSecondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
