import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CustomCursor } from "./components/layout/CustomCursor";
import { CommandPalette } from "./components/layout/CommandPalette";
import { LoadingScreen } from "./components/layout/LoadingScreen";

import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { Chatbot } from "./components/ui/Chatbot";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    // Simulate asset loading
    setTimeout(() => setLoading(false), 2000);
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <div className={`relative ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        {!loading && <CustomCursor />}
        <CommandPalette isOpen={cmdOpen} setIsOpen={setCmdOpen} />
        
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[100]"
          style={{ scaleX }}
        />

        <Navbar toggleTheme={() => setIsDark(!isDark)} isDark={isDark} onOpenCmd={() => setCmdOpen(true)} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
        <Chatbot />
      </div>
    </>
  );
}
