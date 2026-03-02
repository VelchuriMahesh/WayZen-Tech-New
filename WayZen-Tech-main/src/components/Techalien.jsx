"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, X, Dna, Orbit, Radio, 
  Terminal, Activity, Zap, Cpu, Scan
} from 'lucide-react';

// --- TECHALIEN CORE PROTOCOL (Training & Line Constraint) ---
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
    { role: 'assistant', text: "INVASION SUCCESSFUL.\nI am Techalien.\nNeural link established.\nScanning your biological frequency...\nI am ready to compute.\nWayZen Tech database synced.\nLine 07: Online\nLine 08: Online\nLine 09: Online\nLine 10: Online\nLine 11: Online\nLine 12: Online\nLine 13: Online\nLine 14: Online\nLine 15: Online\nLine 16: Online\nLine 17: Online\nLine 18: Online\nLine 19: Online\nLine 20: Online\nLine 21: Awaiting Input." }
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
          max_tokens: 2000 
        })
      });

      const data = await response.json();
      const aiText = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "SIGNAL INTERFERENCE\nRE-SYNCING NODE...\n(Line 03)\n...\n(Line 21)" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[1000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotateY: -90 }}
            className="mb-8 w-[95vw] md:w-[480px] h-[750px] bg-black/90 backdrop-blur-3xl rounded-none border-2 border-green-500/50 shadow-[0_0_50px_rgba(34,197,94,0.2)] flex flex-col overflow-hidden relative"
          >
            {/* --- ALIEN HUD OVERLAY --- */}
            <div className="absolute inset-0 pointer-events-none border-[20px] border-green-500/5 z-0" />
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500/20 animate-scan z-50" />

            {/* --- HEADER --- */}
            <div className="p-6 bg-green-500/10 border-b-2 border-green-500/30 flex justify-between items-center relative z-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 blur-md opacity-30 animate-pulse" />
                  <div className="w-12 h-12 border-2 border-green-500 rounded-full flex items-center justify-center bg-black">
                    <Dna className="text-green-500 animate-spin-slow" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-green-500 font-mono font-black tracking-[0.3em] text-sm uppercase italic">Techalien OS</h3>
                  <div className="flex items-center gap-2">
                    <Activity size={10} className="text-green-700" />
                    <p className="text-[8px] text-green-700 font-mono uppercase tracking-widest italic">Biometric_Sync_Active</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-green-900 hover:text-green-400 transition-all">
                <X size={32} />
              </button>
            </div>

            {/* --- DATA STREAM --- */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-green-900 relative z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'assistant' ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[90%] p-4 font-mono text-[12px] leading-[1.4] tracking-tighter relative ${
                    msg.role === 'assistant' 
                    ? 'bg-green-500/5 text-green-400 border-l-4 border-green-500 shadow-[5px_5px_0px_rgba(34,197,94,0.1)]' 
                    : 'bg-green-600 text-black font-black uppercase italic'
                  }`}>
                    {msg.role === 'assistant' && <div className="absolute -top-2 left-0 text-[8px] bg-green-500 text-black px-1">INCOMING_DATA</div>}
                    <div className="whitespace-pre-wrap">
                        {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-green-950/30 p-4 border border-green-500/20 flex flex-col gap-2">
                     <div className="flex gap-1">
                        <div className="w-3 h-3 bg-green-500 animate-pulse" />
                        <div className="w-3 h-3 bg-green-500 animate-pulse delay-100" />
                        <div className="w-3 h-3 bg-green-500 animate-pulse delay-200" />
                     </div>
                     <span className="text-[9px] text-green-800 font-black animate-pulse">PROMPTING_NEBULA_CORE...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* --- INPUT --- */}
            <div className="p-6 bg-black border-t-2 border-green-500/20 relative z-10">
              <div className="flex gap-4 items-center bg-green-900/10 border-2 border-green-500/40 p-2 focus-within:border-green-400 transition-all">
                <Terminal size={20} className="text-green-700 ml-2" />
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="INPUT_COMMAND_HERE..."
                  className="flex-1 bg-transparent border-none text-green-400 text-xs px-2 focus:outline-none placeholder:text-green-900 font-mono italic"
                />
                <button 
                    onClick={handleSendMessage} 
                    className="bg-green-500 hover:bg-green-400 text-black p-3 transition-all group"
                >
                  <Send size={20} className="group-hover:rotate-12 transition-transform" />
                </button>
              </div>
              <div className="mt-3 flex justify-between text-[7px] text-green-900 font-black uppercase tracking-[0.5em]">
                  <span>WayZen Node 01</span>
                  <span>Invading Carbon Matrix</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ALIEN TRIGGER --- */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: -15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-20 group-hover:opacity-60 animate-pulse" />
        <div className="relative z-10 w-20 h-20 bg-black rounded-full border-4 border-green-500 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)] overflow-hidden">
           <Orbit size={36} className={`text-green-500 ${isOpen ? 'rotate-180' : 'animate-spin-slow'}`} />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#22c55e33_0%,_transparent_70%)] opacity-50" />
        </div>
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-500 text-black text-[10px] font-black px-4 py-1 opacity-0 group-hover:opacity-100 transition-all uppercase whitespace-nowrap">
            Sync Techalien
        </div>
      </motion.button>

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};