import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";
import { data } from "../../data";
import { Menu, X, Moon, Sun, Terminal } from "lucide-react";

export function Navbar({ toggleTheme, isDark, onOpenCmd }: { toggleTheme: () => void, isDark: boolean, onOpenCmd: () => void }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.userAgent.toUpperCase().indexOf('MAC') >= 0);
    }
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground text-background rounded flex items-center justify-center font-bold font-mono">
              {data.personal.name.charAt(0)}
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
              {data.personal.name}
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium rounded-full border border-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new opportunities
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={onOpenCmd} className="hidden md:flex items-center gap-2 p-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-sm font-mono" title={`Command Palette (${isMac ? "⌘K" : "Ctrl+K"})`}>
               <Terminal className="w-4 h-4" />
               <span className="opacity-70">{isMac ? "⌘K" : "Ctrl+K"}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-secondary text-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-b border-border shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
              >
                {link.name}
              </a>
            ))}
            <div className="mx-3 mt-4 flex items-center gap-2 px-3 py-2 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium rounded-full border border-green-500/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new opportunities
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
