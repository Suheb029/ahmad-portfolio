import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { ComponentProps } from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends Omit<ComponentProps<typeof motion.div>, "ref"> {
  hoverable?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverable ? { y: -6 } : undefined}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={cn(
          'glass-card rounded-2xl p-6 md:p-8 bg-white/90 border border-slate-200/80 shadow-sm',
          hoverable && 'hover:shadow-xl hover:shadow-indigo-500/10 hover:border-primary/40 transition-all duration-300',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = 'Card';

export { Card };
