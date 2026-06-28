import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { data } from "../../data";
import { Section } from "../layout/Section";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(data.projects.map(p => p.category)))];
  
  const filteredProjects = filter === "All" 
    ? data.projects 
    : data.projects.filter(p => p.category === filter);

  return (
    <Section id="projects" title="Projects" subtitle="A showcase of my recent projects and experiments.">
      
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? "bg-foreground text-background" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border flex flex-col"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Repository">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Live Demo">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
