import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { spawn } from "child_process";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for Python-powered chatbot
  app.post("/api/chat", (req, res) => {
    try {
      const { message } = req.body;
      const userMessage = message || "";
      
      const pythonProcess = spawn("python3", ["chatbot.py", userMessage]);
      
      let reply = "";
      
      pythonProcess.stdout.on("data", (data) => {
        reply += data.toString();
      });
      
      pythonProcess.stderr.on("data", (data) => {
        console.error(`Python Error: ${data}`);
      });
      
      pythonProcess.on("close", (code) => {
        res.json({ reply: reply.trim() });
      });

    } catch (error: any) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
