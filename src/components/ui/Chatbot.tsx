import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "init", role: "bot", text: "Hi! I'm Swati's AI assistant. Feel free to ask me anything about her experience, projects, or skills!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleAskQuestion = async (questionText: string) => {
    if (!questionText.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", text: questionText.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      // Pass the previous messages as history
      const history = messages.slice(1).map(msg => ({
        role: msg.role,
        text: msg.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text, history }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), role: "bot", text: data.reply }]);
    } catch (error: any) {
      console.error("Chat error:", error);
      let errorMessage = "Sorry, I'm having trouble connecting right now.";
      
      if (error.message.includes("PERMISSION_DENIED") || error.message.includes("403")) {
        errorMessage = "It looks like the Gemini API key is missing or invalid. Please configure your API key in the AI Studio Settings (Secrets panel).";
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      setMessages(prev => [...prev, { id: Date.now().toString(), role: "bot", text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAskQuestion(input);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:right-6 w-[350px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-card border border-border rounded-2xl shadow-xl z-50 flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-sm">AI Assistant</h3>
                  <p className="text-xs text-muted-foreground">Ask about Swati's portfolio</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm whitespace-pre-wrap ${
                      msg.role === "user" 
                        ? "bg-primary text-primary-foreground rounded-br-sm" 
                        : "bg-muted rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-2">
                    <Loader2 size={16} className="animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-3 border-t border-border flex items-center gap-2 shrink-0">
              <select
                value={input}
                onChange={handleSelectChange}
                className="flex-1 min-w-0 bg-muted rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="" disabled>Select a question...</option>
                <option value="Tell me about yourself">Tell me about yourself</option>
                <option value="Tell me about your background">Tell me about your background</option>
                <option value="What are your future career goals?">What are your future career goals?</option>
                <option value="What projects have you built?">What projects have you built?</option>
                <option value="How does the Movie Recommender work?">How does the Movie Recommender work?</option>
                <option value="How does the Face Recognition System work?">How does the Face Recognition System work?</option>
                <option value="What React projects have you built?">What React projects have you built?</option>
                <option value="What is your tech stack?">What is your tech stack?</option>
                <option value="What frontend skills do you have?">What frontend skills do you have?</option>
                <option value="What ML algorithms do you use?">What ML algorithms do you use?</option>
                <option value="Where do you study?">Where do you study?</option>
                <option value="What is your degree?">What is your degree?</option>
                <option value="Are you looking for internships?">Are you looking for internships?</option>
                <option value="How can I contact you?">How can I contact you?</option>
                <option value="Can you share your LinkedIn profile?">Can you share your LinkedIn profile?</option>
                <option value="What is your GitHub link?">What is your GitHub link?</option>
              </select>
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 bg-primary text-primary-foreground rounded-full disabled:opacity-50 transition-opacity"
              >
                <Send size={16} className="ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center z-50 focus:outline-none"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
