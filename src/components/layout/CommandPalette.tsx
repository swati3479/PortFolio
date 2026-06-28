import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, FileText, User, Briefcase, Mail, X } from "lucide-react";
import { data } from "../../data";

export function CommandPalette({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  const actions = [
    { id: "about", name: "Go to About", icon: <User className="w-4 h-4" />, href: "#about" },
    { id: "projects", name: "Go to Projects", icon: <Briefcase className="w-4 h-4" />, href: "#projects" },
    { id: "contact", name: "Go to Contact", icon: <Mail className="w-4 h-4" />, href: "#contact" },
    { id: "resume", name: "Download Resume", icon: <FileText className="w-4 h-4" />, href: data.personal.resumeUrl, isExternal: true },
  ];

  const filteredActions = actions.filter(action => 
    action.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[99]"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg bg-card border border-border shadow-2xl rounded-2xl z-[100] overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground"
              />
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredActions.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground text-sm">
                  No results found.
                </div>
              ) : (
                filteredActions.map((action) => (
                  <a
                    key={action.id}
                    href={action.href}
                    target={action.isExternal ? "_blank" : undefined}
                    rel={action.isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 text-sm rounded-xl hover:bg-secondary transition-colors cursor-pointer text-foreground"
                  >
                    <div className="mr-3 text-muted-foreground">
                      {action.icon}
                    </div>
                    {action.name}
                  </a>
                ))
              )}
            </div>
            <div className="px-4 py-2 border-t border-border bg-secondary/50 text-xs text-muted-foreground flex justify-between">
              <span>Use arrow keys to navigate</span>
              <span>esc to close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
