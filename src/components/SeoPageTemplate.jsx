import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronDown, CheckCircle2, ArrowRight, 
  MessageCircle, Phone, Globe, ShieldCheck, Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const SeoPageTemplate = ({ pageData }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!pageData) return null;

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0101] text-white pt-28 md:pt-36 pb-32 md:pb-28 px-4 md:px-8 relative overflow-hidden font-sans">
      
      {/* Background Orbital Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-36 -right-36 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-15" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="350" stroke="#cdd32c" strokeWidth="1" strokeDasharray="8 8" className="animate-make-line" />
          <circle cx="400" cy="400" r="240" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.2" />
        </svg>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#cdd32c]/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* 1. BREADCRUMBS */}
        {pageData.breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono font-medium text-slate-400 overflow-x-auto no-scrollbar">
            {pageData.breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight size={12} className="text-slate-600 shrink-0" />}
                {idx === pageData.breadcrumbs.length - 1 ? (
                  <span className="text-[#cdd32c] font-bold shrink-0">{crumb.name}</span>
                ) : (
                  <Link to={crumb.path} className="hover:text-white transition-colors shrink-0">
                    {crumb.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* 2. HERO HEADER & H1 */}
        <header className="mb-10 md:mb-16">
          {pageData.badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cdd32c]/10 border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] font-mono font-black uppercase tracking-widest mb-4">
              <Sparkles size={12} /> {pageData.badge}
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.98] mb-6">
            {pageData.h1}
          </h1>

          <div className="text-sm md:text-lg text-slate-300 leading-relaxed font-light bg-[#141419] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 shadow-xl border-l-4 border-l-[#cdd32c]">
            {pageData.intro}
          </div>
        </header>

        {/* 3. STRUCTURED TOPIC SECTIONS (H2s) */}
        {pageData.sections && pageData.sections.length > 0 && (
          <section className="space-y-6 mb-14">
            {pageData.sections.map((sec, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-[#141419] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg hover:border-[#cdd32c]/40 transition-colors"
              >
                <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-3 flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#cdd32c] shrink-0" />
                  <span>{sec.h2}</span>
                </h2>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                  {sec.content}
                </p>
              </motion.article>
            ))}
          </section>
        )}

        {/* 4. RELEVANT INTERNAL LINKS */}
        {pageData.internalLinks && pageData.internalLinks.length > 0 && (
          <section className="mb-14 bg-[#141419] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg">
            <h3 className="text-xs font-mono font-black uppercase tracking-widest text-[#cdd32c] mb-4">
              [ EXPLORE CONNECTED CAPABILITIES & LOCATIONS ]
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {pageData.internalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#cdd32c] text-slate-200 hover:text-[#0a0101] text-xs font-bold transition-all border border-white/10"
                >
                  <Globe size={13} className="text-[#cdd32c]" />
                  <span>{link.label}</span>
                  <ArrowRight size={12} />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 5. FREQUENTLY ASKED QUESTIONS (FAQS) */}
        {pageData.faqs && pageData.faqs.length > 0 && (
          <section className="mb-14">
            <div className="mb-6">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#cdd32c] bg-[#cdd32c]/10 px-2.5 py-1 rounded-md border border-[#cdd32c]/30">
                FAQ & INSIGHTS
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mt-2">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {pageData.faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-[#141419] rounded-2xl border border-white/10 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm md:text-base hover:text-[#cdd32c] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === idx ? "rotate-180 text-[#cdd32c]" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openFaqIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 text-xs md:text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. CONVERSION CTA BAR */}
        <div className="p-6 md:p-10 bg-[#101014] text-white rounded-3xl md:rounded-[36px] border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#cdd32c] text-[10px] font-mono font-black uppercase tracking-widest mb-1.5">
              <ShieldCheck size={14} /> Ready to scale your digital presence?
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
              Talk Directly with Our Lead Engineers
            </h3>
            <p className="text-xs md:text-sm text-slate-400 font-light mt-1">
              Instant free consultation, architecture planning, and transparent quotes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => window.open('https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20want%20to%20consult%20about%20' + encodeURIComponent(pageData.h1), '_blank')}
              className="px-6 py-3.5 bg-[#cdd32c] hover:bg-white text-[#0a0101] font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#cdd32c]/20 transition-all"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Connect</span>
            </button>
            <a
              href="tel:+919398724704"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all border border-white/10"
            >
              <Phone size={16} />
              <span>+91 9398724704</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SeoPageTemplate;
