"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, X, Dna, MessageCircle, Phone, 
  Briefcase, Sparkles, MessageSquare, Bot
} from 'lucide-react';

// --- SYSTEM RESPONSES FOR OFFLINE / INSTANT MODE ---
const getSmartResponse = (query) => {
  const q = query.toLowerCase();

  if (q.includes("service") || q.includes("what do you do") || q.includes("work")) {
    return "⌬ SERVICES CORE:\n1. Custom Web & Web App Development\n2. AI Automation & Intelligent Chatbots\n3. Mobile App Development (iOS & Android)\n4. High-Performance SEO & Google Ads\n5. Custom Billing & Business Management Software\n6. Premium Academic (B.Tech/M.Tech) Project Solutions.";
  }

  if (q.includes("price") || q.includes("cost") || q.includes("rate") || q.includes("quot")) {
    return "⌬ PRICING NODE:\nOur project pricing is customized based on scope, features, and timeline. Contact our engineering desk at +91 9398724704 or WhatsApp for an instant free quote.";
  }

  if (q.includes("contact") || q.includes("call") || q.includes("number") || q.includes("phone") || q.includes("email")) {
    return "⌬ DIRECT SYNC:\n• Phone: +91 9398724704\n• WhatsApp: +91 9398724704\n• Email: wayzentech@gmail.com\n• Instagram: @way_zentech";
  }

  if (q.includes("location") || q.includes("where") || q.includes("address") || q.includes("city")) {
    return "⌬ GEOGRAPHIC REACH:\nHeadquartered in Narasaraopet (Palnadu District, AP) with active delivery across Guntur, Vijayawada, Hyderabad, Bangalore, and nationwide.";
  }

  if (q.includes("student") || q.includes("b.tech") || q.includes("m.tech") || q.includes("academic") || q.includes("ieee")) {
    return "⌬ ACADEMIC INCUBATOR:\nWe provide end-to-end B.Tech/M.Tech IEEE major projects with complete source code, documentation, PPTs, viva guidance, and 1-on-1 deployment support.";
  }

  if (q.includes("whatsapp") || q.includes("chat")) {
    return "⌬ WHATSAPP NODE:\nClick the green WhatsApp button or open wa.me/919398724704 to chat with our lead engineer right now.";
  }

  if (q.includes("ai") || q.includes("automation") || q.includes("bot")) {
    return "⌬ AI SYSTEMS:\nWe engineer custom OpenAI/LLM workflows, WhatsApp bots, automated lead capture pipelines, and autonomous business workflows to cut 70%+ manual tasks.";
  }

  return "⌬ NEURAL LINK ACTIVE:\nWayZenTech specializes in Web Development, AI Automation, Mobile Apps, and Enterprise Software. Type 'Services', 'Pricing', or 'Contact' for instant info, or click WhatsApp to talk directly with our engineers!";
};

export const Techalien = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "⌬ NEURAL LINK ESTABLISHED.\nWelcome to WayZenTech Foundry OS.\nHow can I accelerate your business today?" }
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => { 
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async (forcedText = null) => {
    const userText = forcedText || input;
    if (!userText.trim() || isLoading) return;

    const newMessages = [...messages, { role: 'user', text: userText }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const currentApiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY || process.env.REACT_APP_GROQ_API_KEY;

    if (currentApiKey) {
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
              { 
                role: "system", 
                content: "You are Techalien AI for WayZenTech. Provide crisp, professional answers. Contact: wayzentech@gmail.com, +91 9398724704. Services: Web, AI Automation, Mobile Apps, SEO, Billing Software, Academic Projects." 
              },
              ...newMessages.slice(-4).map(m => ({ role: m.role, content: m.text }))
            ],
            temperature: 0.4,
            max_tokens: 150, 
          })
        });

        const data = await response.json();
        if (data?.choices?.[0]?.message?.content) {
          setMessages(prev => [...prev, { role: 'assistant', text: data.choices[0].message.content }]);
          setIsLoading(false);
          return;
        }
      } catch (err) {
        console.warn("Groq API fallback to offline neural rules:", err);
      }
    }

    // High-speed instant fallback
    setTimeout(() => {
      const reply = getSmartResponse(userText);
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="fixed bottom-20 md:bottom-8 right-3 md:right-8 z-[90] flex flex-col items-end gap-2 md:gap-3 pointer-events-auto">
      
      {/* 1. FLOATING CALL BUTTON (Desktop only - Mobile has direct access in top drawer and footer) */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href="tel:+919398724704"
        title="Call WayZenTech (+91 9398724704)"
        className="hidden md:flex w-14 h-14 bg-[#141419] hover:bg-[#cdd32c] text-white hover:text-[#0a0101] border border-white/15 rounded-full items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all cursor-pointer group"
      >
        <Phone size={20} className="group-hover:animate-bounce" />
      </motion.a>

      {/* 2. FLOATING WHATSAPP BUTTON (Desktop only - Mobile has direct WhatsApp in top pill and bottom dock) */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open('https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20want%20to%20inquire%20about%20your%20services', '_blank')}
        title="Chat on WhatsApp (+91 9398724704)"
        className="hidden md:flex w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all cursor-pointer"
      >
        <MessageCircle size={22} fill="currentColor" />
      </motion.button>

      {/* 3. AI CHATBOT MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-2 w-[92vw] max-w-[380px] h-[70vh] max-h-[520px] bg-[#0a0101]/95 backdrop-blur-2xl rounded-[28px] border-2 border-[#cdd32c]/50 shadow-[0_10px_40px_rgba(205,211,44,0.25)] flex flex-col overflow-hidden text-white"
          >
            {/* CHATBOT HEADER */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#cdd32c]/20 border border-[#cdd32c]/40 flex items-center justify-center text-[#cdd32c]">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#cdd32c] font-mono text-xs font-black tracking-widest uppercase">Techalien AI</span>
                    <span className="w-2 h-2 rounded-full bg-[#cdd32c] animate-ping" />
                  </div>
                  <p className="text-[9px] text-slate-400 font-sans">WayZenTech Virtual Engineer</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* MESSAGES CONTAINER */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-left custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'assistant' 
                    ? 'bg-white/5 text-slate-200 border border-white/10 shadow-sm whitespace-pre-wrap font-mono' 
                    : 'bg-[#cdd32c] text-[#0a0101] font-bold rounded-br-xs'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-[#cdd32c] font-mono text-[10px] animate-pulse">
                  <Sparkles size={12} />
                  <span>⌬ COMPUTING RESPONSE...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* QUICK ACTIONS */}
            <div className="px-3 py-2 flex gap-1.5 overflow-x-auto no-scrollbar bg-black/60 border-t border-white/10">
              <button 
                onClick={() => handleSendMessage("List your services")} 
                className="flex-shrink-0 flex items-center gap-1 bg-[#cdd32c]/10 hover:bg-[#cdd32c]/20 border border-[#cdd32c]/30 px-2.5 py-1 rounded-full text-[10px] text-[#cdd32c] font-bold uppercase transition-colors"
              >
                <Briefcase size={11} /> Services
              </button>
              
              <button 
                onClick={() => handleSendMessage("Give contact details and phone number")} 
                className="flex-shrink-0 flex items-center gap-1 bg-[#cdd32c]/10 hover:bg-[#cdd32c]/20 border border-[#cdd32c]/30 px-2.5 py-1 rounded-full text-[10px] text-[#cdd32c] font-bold uppercase transition-colors"
              >
                <Phone size={11} /> Contact
              </button>

              <button 
                onClick={() => window.open('https://wa.me/919398724704', '_blank')} 
                className="flex-shrink-0 flex items-center gap-1 bg-[#25D366] hover:bg-[#20ba5a] px-2.5 py-1 rounded-full text-[10px] text-white font-black uppercase transition-colors shadow"
              >
                <MessageSquare size={11} /> WhatsApp
              </button>
            </div>

            {/* INPUT BOX */}
            <div className="p-3 bg-[#0a0101] border-t border-white/10">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2 items-center bg-white/5 border border-white/10 px-3 py-1.5 rounded-2xl"
              >
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about our services..."
                  className="flex-1 bg-transparent text-white text-xs py-1 focus:outline-none placeholder:text-slate-500"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-1.5 bg-[#cdd32c] hover:bg-white disabled:opacity-30 text-[#0a0101] rounded-xl transition-all"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. FLOATING AI CHATBOT TRIGGER BUTTON */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-11 h-11 md:w-14 md:h-14 bg-[#0a0101] text-[#cdd32c] rounded-full border-2 border-[#cdd32c] flex items-center justify-center shadow-[0_0_25px_rgba(205,211,44,0.35)] cursor-pointer backdrop-blur-md"
        title="Open Techalien AI Chatbot"
      >
        {isOpen ? (
          <X size={18} className="md:w-5 md:h-5 text-[#cdd32c]" />
        ) : (
          <Dna size={18} className="md:w-6 md:h-6 text-[#cdd32c] animate-pulse" />
        )}
      </motion.button>
    </div>
  );
};

export default Techalien;