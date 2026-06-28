import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
    >
      <div className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-8">
        Portfolio
        <span className="text-primary animate-pulse">.</span>
      </div>
      
      <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-foreground"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div className="mt-4 text-sm font-mono text-muted-foreground">
        {Math.min(progress, 100)}%
      </div>
    </motion.div>
  );
}
