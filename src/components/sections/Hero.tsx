import { motion, useScroll, useTransform } from "motion/react";
import { data } from "../../data";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-12 overflow-hidden bg-grid-black dark:bg-grid-white">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl"
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
            >
              Hi, I'm {data.personal.name}.<br />
              <span className="text-gradient">{data.personal.role}</span>
            </motion.h1>
            
            {data.personal.tagline && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                {data.personal.tagline}
              </motion.p>
            )}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-all w-full sm:w-auto"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={data.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors w-full sm:w-auto border border-border"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative hidden lg:flex justify-center items-center h-[500px]"
          >
            {data.personal.profileImage ? (
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                <img
                  src={data.personal.profileImage}
                  alt={data.personal.name}
                  className="relative w-full h-full object-cover rounded-3xl border-2 border-border shadow-2xl"
                />
              </div>
            ) : (
              <motion.div
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative w-64 h-64 transform-style-3d"
              >
                <div className="absolute inset-0 border-4 border-foreground/20 rounded-xl" style={{ transform: "translateZ(50px)" }} />
                <div className="absolute inset-0 border-4 border-foreground/20 rounded-full" style={{ transform: "translateZ(-50px) rotateX(45deg)" }} />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center">
                   <div className="w-20 h-20 bg-foreground/10 rounded-full animate-pulse" />
                </div>
              </motion.div>
            )}
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
}
