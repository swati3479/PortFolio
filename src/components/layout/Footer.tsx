import { data } from "../../data";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-6">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-primary text-primary-foreground shadow-md hover:scale-110 transition-transform flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} {data.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
