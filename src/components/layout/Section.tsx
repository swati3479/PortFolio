import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "../../utils";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function Section({ id, className, children, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("py-10 md:py-16 relative", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-12 flex flex-col items-start"
          >
            {title && (
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4 relative inline-block">
                {title}
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mt-4">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
