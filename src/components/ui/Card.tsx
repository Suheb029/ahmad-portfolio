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
        whileHover={hoverable ? { y: -5 } : undefined}
        transition={{ duration: 0.2 }}
        className={cn(
          'glass-card rounded-2xl p-6 md:p-8',
          hoverable && 'hover:shadow-2xl hover:border-primary/30 transition-all',
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
