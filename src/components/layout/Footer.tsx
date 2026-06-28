import { data } from "../../data";
import { ArrowUp, Github, Linkedin, Twitter, Mail, Code } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'twitter': return <Twitter className="w-5 h-5" />;
      case 'leetcode': return <Code className="w-5 h-5" />;
      default: return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <footer className="bg-background border-t border-border py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <div>
              <div className="font-display font-bold text-2xl mb-2">{data.personal.name}</div>
              {data.personal.tagline && (
                <p className="text-muted-foreground text-center md:text-left max-w-sm mb-2">
                  {data.personal.tagline}
                </p>
              )}
            </div>

            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex gap-4">
                {data.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={social.platform}
                  >
                    {getIcon(social.icon)}
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {data.personal.name}. All rights reserved.
              </p>
            </div>
          </div>

        </div>
        
        <div className="mt-6 flex justify-center">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
