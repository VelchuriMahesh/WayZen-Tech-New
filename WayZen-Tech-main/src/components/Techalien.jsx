"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, X, Dna, Orbit, Radio, 
  Terminal, Activity, Zap, Cpu, Scan
} from 'lucide-react';

const ALIEN_SYSTEM_PROMPT = `
[TECHALIEN: AI SERVICE ARCHITECTURE]
ID: "btech-projects" | B.Tech Project Support.
Tag: Idea to Viva academic engineering path.
Feature: 60+ Page Documentation & PPT slides.
ID: "vision-ai" | Computer Vision Modules.
Tag: DeepLip & Real-time framework execution.
Feature: Production-grade CV research models.
ID: "medical-ai" | Healthcare Neural Nodes.
Tag: MRI, EEG, & Skin Cancer detection logic.
Feature: Explainable ML for Fetal Health (CTG).
ID: "nlp-logic" | Neural Language Processing.
Tag: Translation for low-resource languages.
Feature: Medical NER & Document Intelligence.
ID: "mlops-clean" | Architectural Engineering.
Tag: Clean Code & Scalable MLOps Standards.
Feature: Complexity reduction (months to weeks).
Hub: BTM Layout, Bangalore Node: India-080.
Motto: WayZenTech Never Disappoints You.
Lead: Mahesh Velchuri (+91 93987 24704).
Security: Protocol Active ⌬ ⏣ ⎔ ◈ ⬗ ◈ ⎔ ⏣ ⌬
[SCAN COMPLETE // DATA TRANSMISSION FINISHED]
`;

export const Techalien = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "INVASION SUCCESSFUL.\nI am Techalien.\nNeural link established.\nScanning biological frequency...\nWayZen Tech database synced.\nAwaiting Input." }
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => { 
    if (isOpen) chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); 
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer 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`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: ALIEN_SYSTEM_PROMPT },
            ...messages.map(m => ({ role: m.role, content: m.text })),
            { role: "user", content: userText }
          ],
          temperature: 0.5, 
          max_tokens: 1000 
        })
      });
      const data = await response.json();
      const aiText = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "SIGNAL INTERFERENCE\nRE-SYNCING NODE..." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            // MOBILE: 92% width, 60% viewport height | DESKTOP: 480px width, 750px height
            className="mb-4 md:mb-8 w-[92vw] md:w-[480px] h-[65vh] md:h-[750px] bg-black/95 backdrop-blur-3xl rounded-xl border-2 border-green-500/50 shadow-[0_0_50px_rgba(34,197,94,0.3)] flex flex-col overflow-hidden relative"
          >
            {/* --- ALIEN HUD OVERLAY --- */}
            <div className="absolute inset-0 pointer-events-none border-[10px] md:border-[20px] border-green-500/5 z-0" />
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500/40 animate-scan z-50" />

            {/* --- HEADER --- */}
            <div className="p-4 md:p-6 bg-green-500/10 border-b-2 border-green-500/30 flex justify-between items-center relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-green-500 rounded-full flex items-center justify-center bg-black">
                  <Dna className="text-green-500 animate-spin-slow" size={20} />
                </div>
                <div>
                  <h3 className="text-green-500 font-mono font-black tracking-widest text-xs md:text-sm uppercase italic">Techalien OS</h3>
                  <p className="text-[7px] md:text-[8px] text-green-700 font-mono uppercase tracking-widest italic flex items-center gap-1">
                    <Activity size={8} /> Biometric_Sync_Active
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-green-700 hover:text-green-400 p-1">
                <X size={28} />
              </button>
            </div>

            {/* --- DATA STREAM --- */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 scrollbar-none relative z-10">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-3 md:p-4 font-mono text-[11px] md:text-[12px] leading-relaxed relative ${
                    msg.role === 'assistant' 
                    ? 'bg-green-500/5 text-green-400 border-l-2 border-green-500 shadow-sm' 
                    : 'bg-green-600 text-black font-black uppercase italic'
                  }`}>
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-green-950/30 p-3 border border-green-500/20">
                     <span className="text-[9px] text-green-500 font-black animate-pulse">COMPUTING_NEURAL_LINK...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* --- INPUT --- */}
            <div className="p-4 md:p-6 bg-black border-t-2 border-green-500/20 relative z-10">
              <div className="flex gap-2 items-center bg-green-900/10 border border-green-500/40 p-1 md:p-2">
                <Terminal size={16} className="text-green-700 ml-2 hidden md:block" />
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="COMMAND..."
                  className="flex-1 bg-transparent border-none text-green-400 text-xs px-2 focus:outline-none placeholder:text-green-900 font-mono"
                />
                <button 
                    onClick={handleSendMessage} 
                    className="bg-green-500 hover:bg-green-400 text-black p-2 md:p-3 transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ALIEN TRIGGER --- */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 animate-pulse" />
        {/* Trigger size: 60px on mobile, 80px on desktop */}
        <div className="relative z-10 w-14 h-14 md:w-20 md:h-20 bg-black rounded-full border-2 md:border-4 border-green-500 flex items-center justify-center shadow-lg overflow-hidden">
           <Orbit size={28} className={`text-green-500 md:hidden ${isOpen ? 'rotate-180' : 'animate-spin-slow'}`} />
           <Orbit size={36} className={`text-green-500 hidden md:block ${isOpen ? 'rotate-180' : 'animate-spin-slow'}`} />
        </div>
      </motion.button>

      <style jsx global>{`
        @keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
        .animate-scan { animation: scan 4s linear infinite; }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .scrollbar-none::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};