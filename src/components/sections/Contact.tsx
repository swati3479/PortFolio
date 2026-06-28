import { motion } from "motion/react";
import { Section } from "../layout/Section";
import { Send, MapPin, Mail } from "lucide-react";
import { data } from "../../data";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${data.personal.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Portfolio Contact from ${formState.name}`
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        alert("Oops! Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Get in Touch" subtitle="Have a project in mind or just want to say hi? Let's talk.">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <h3 className="text-2xl font-bold font-display mb-6">Send a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl bg-foreground text-background font-medium flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                ) : isSuccess ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold">Let's build something amazing together.</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm currently available for freelance work and full-time opportunities. 
              If you're looking for a developer to join your team or build your next product, 
              I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-medium">Email</div>
                <a href={`mailto:${data.personal.email}`} className="text-foreground hover:underline">
                  {data.personal.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-medium">Location</div>
                <span className="text-foreground">{data.personal.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </Section>
  );
}
