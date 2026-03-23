"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, X, Dna, Orbit, 
  ShieldCheck, MessageCircle, Briefcase
} from 'lucide-react';

// --- SYSTEM PROMPT ---
const ALIEN_SYSTEM_PROMPT = `
[TECHALIEN CORE]
Motto: WayZenTech Never Disappoints.
Services: B.Tech/M.Tech Projects, Web Design, Apps, Digital Marketing.
Contact: wayzentech@gmail.com | +91 9398724704
Trust: View our proof of work on Instagram Reels.

STRICT PROTOCOL:
1. Give 1-sentence answers.
2. Use symbols ⌬ ⏣.
3. If asked for services, list: B.Tech, M.Tech, Web, Apps, Marketing.
4. If asked for contact, give the email and phone clearly.
`;

export const Techalien = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "⌬ NEURAL LINK ESTABLISHED.\nWayZenTech Foundry online.\nHow can I assist?" }
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => { 
    if (isOpen) chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); 
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async (forcedText = null) => {
    const userText = forcedText || input;
    if (!userText.trim() || isLoading) return;
    
    const currentApiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY || process.env.REACT_APP_GROQ_API_KEY;
    
    if (!currentApiKey) {
      setMessages(prev => [...prev, { role: 'assistant', text: "⌬ ERROR: SIGNAL_KEY_OFFLINE." }]);
      return;
    }

    const newMessages = [...messages, { role: 'user', text: userText }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${currentApiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: ALIEN_SYSTEM_PROMPT },
            ...newMessages.slice(-3).map(m => ({ role: m.role, content: m.text }))
          ],
          temperature: 0.3,
          max_tokens: 60, 
        })
      });

      const data = await response.json();
      const aiText = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "⌬ SIGNAL LOST. RE-SYNCING..." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-4 w-[92vw] max-w-[360px] h-[65vh] md:h-[500px] bg-black/95 backdrop-blur-xl rounded-2xl border-2 border-green-500/40 shadow-[0_0_30px_rgba(34,197,94,0.3)] flex flex-col overflow-hidden"
          >
            {/* HEADER */}
            <div className="p-4 bg-green-500/10 border-b border-green-500/20 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Dna className="text-green-500 animate-pulse" size={16} />
                <span className="text-green-500 font-mono text-[10px] font-bold tracking-widest uppercase">Techalien OS</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-green-500/50 hover:text-green-500"><X size={20} /></button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar text-left">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[90%] p-3 font-mono text-[11px] rounded-xl ${
                    msg.role === 'assistant' 
                    ? 'bg-green-500/5 text-green-400 border border-green-500/20' 
                    : 'bg-green-600 text-black font-bold uppercase'
                  }`}>
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  </div>
                </div>
              ))}
              {isLoading && <div className="text-green-500 font-mono text-[10px] animate-pulse">⌬ ANALYZING...</div>}
              <div ref={chatEndRef} />
            </div>

            {/* ACTION BUTTONS */}
            <div className="px-3 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-black/60 border-t border-green-900/30">
              <button onClick={() => handleSendMessage("List your services")} className="flex-shrink-0 flex items-center gap-1 bg-green-500/10 border border-green-500/30 px-3 py-1.5 rounded-full text-[10px] text-green-400 font-bold uppercase">
                <Briefcase size={12} /> Services
              </button>
              
              <button onClick={() => handleSendMessage("Provide your contact details")} className="flex-shrink-0 flex items-center gap-1 bg-green-500/10 border border-green-500/30 px-3 py-1.5 rounded-full text-[10px] text-green-400 font-bold uppercase">
                <MessageCircle size={12} /> Contact
              </button>

              <a href="https://www.instagram.com/way_zentech/reels/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex items-center gap-1 bg-green-500/10 border border-green-500/30 px-3 py-1.5 rounded-full text-[10px] text-green-400 font-bold uppercase">
                <ShieldCheck size={12} /> Trust (Proof)
              </a>
            </div>

            {/* INPUT */}
            <div className="p-3 bg-black border-t border-green-500/20">
              <div className="flex gap-2 items-center bg-green-900/10 border border-green-500/30 px-3 py-1 rounded-xl">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="TYPE COMMAND..."
                  className="flex-1 bg-transparent text-green-400 text-xs py-2 focus:outline-none font-mono"
                />
                <button onClick={() => handleSendMessage()} className="text-green-500"><Send size={18} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-full border-2 border-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]"
      >
         <Orbit size={28} className={`text-green-500 ${isOpen ? 'hidden' : 'animate-spin-slow'}`} />
         {isOpen && <X className="text-green-500" size={24} />}
      </motion.button>

      <style jsx global>{`
        .animate-spin-slow { animation: spin 10s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};