import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { data } from "../../data";
import { Section } from "../layout/Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience & Education" subtitle="My professional journey and academic background." className="bg-secondary/30">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
              â¼
            </span>
            Work Experience
          </h3>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:to-transparent">
            {data.experience.map((exp, i) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-center justify-between group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-background bg-primary absolute left-0 -translate-x-1/2 z-10 shrink-0" />
                
                <div className="w-[calc(100%-4rem)] ml-auto p-6 rounded-2xl bg-card border border-border shadow-sm group-hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h4 className="font-bold text-lg">{exp.role}</h4>
                    <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="text-primary font-medium mb-4">{exp.company}</div>
                  <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm">
              â¼
            </span>
            Education
          </h3>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:to-transparent">
            {data.education.map((edu, i) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-center justify-between group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-background bg-foreground absolute left-0 -translate-x-1/2 z-10 shrink-0" />
                
                <div className="w-[calc(100%-4rem)] ml-auto p-6 rounded-2xl bg-card border border-border shadow-sm group-hover:border-foreground/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                      {edu.duration}
                    </span>
                  </div>
                  <div className="text-foreground/80 font-medium mb-4">{edu.institution}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
