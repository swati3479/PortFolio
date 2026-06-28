import { motion } from "motion/react";
import { data } from "../../data";
import { Section } from "../layout/Section";
import { Code, Layout, Lightbulb, Zap } from "lucide-react";

export function About() {
  const features = [
    { icon: <Layout className="w-6 h-6" />, title: "Design Systems", desc: "Building scalable and consistent UI architectures." },
    { icon: <Code className="w-6 h-6" />, title: "Frontend Engineering", desc: "Writing clean, performant, and accessible code." },
    { icon: <Zap className="w-6 h-6" />, title: "Interactive Experiences", desc: "Crafting fluid animations and 3D interactions." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Product Strategy", desc: "Aligning user needs with business objectives." },
  ];

  return (
    <Section id="about" title="About Me" subtitle="A brief introduction to who I am and what I do.">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="prose dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
            <p>{data.about.professionalBio}</p>
            <p>{data.about.careerObjective}</p>
          </div>
          
          <div className="pt-6 border-t border-border">
            <h3 className="text-xl font-bold font-display mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {data.about.interests.map((interest, i) => (
                <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
