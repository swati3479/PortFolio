import { motion } from "motion/react";
import { data } from "../../data";
import { Section } from "../layout/Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills & Expertise" subtitle="Technologies and tools I use to bring ideas to life." className="bg-secondary/30">
      <div className="grid md:grid-cols-3 gap-8">
        {data.skills.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              {category.title}
            </h3>
            
            <div className="space-y-5">
              {category.skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5 text-sm font-medium">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                      className="h-full bg-foreground rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Achievements / Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {data.achievements.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold font-display text-foreground mb-2">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
