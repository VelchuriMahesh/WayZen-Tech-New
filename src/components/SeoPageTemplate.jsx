import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronDown, CheckCircle2, ArrowRight, 
  MessageCircle, Phone, Globe, ShieldCheck, Sparkles 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const SeoPageTemplate = ({ pageData }) => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!pageData) return null;

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-4 md:px-6 relative overflow-hidden font-sans">
      
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[40%] bg-blue-100/50 blur-[100px] rounded-full" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[40%] bg-purple-100/50 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* 1. BREADCRUMBS */}
        {pageData.breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto no-scrollbar">
            {pageData.breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight size={12} className="text-slate-400 shrink-0" />}
                {idx === pageData.breadcrumbs.length - 1 ? (
                  <span className="text-blue-600 font-bold shrink-0">{crumb.name}</span>
                ) : (
                  <Link to={crumb.path} className="hover:text-slate-900 transition-colors shrink-0">
                    {crumb.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* 2. HERO HEADER & H1 */}
        <header className="mb-10 md:mb-14">
          {pageData.badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles size={12} /> {pageData.badge}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-5">
            {pageData.h1}
          </h1>

          <p className="text-sm md:text-lg text-slate-600 leading-relaxed font-normal bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200/80 shadow-sm">
            {pageData.intro}
          </p>
        </header>

        {/* 3. STRUCTURED TOPIC SECTIONS (H2s) */}
        {pageData.sections && pageData.sections.length > 0 && (
          <section className="space-y-6 mb-12">
            {pageData.sections.map((sec, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200/80 shadow-sm hover:border-blue-200 transition-colors"
              >
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight mb-3 flex items-center gap-2.5">
                  <CheckCircle2 size={20} className="text-blue-600 shrink-0" />
                  <span>{sec.h2}</span>
                </h2>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {sec.content}
                </p>
              </motion.article>
            ))}
          </section>
        )}

        {/* 4. RELEVANT INTERNAL LINKS */}
        {pageData.internalLinks && pageData.internalLinks.length > 0 && (
          <section className="mb-12 bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200/80 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
              Explore Related Services & Locations
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {pageData.internalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 text-xs font-bold transition-all border border-slate-200/60"
                >
                  <Globe size={13} className="text-blue-500" />
                  <span>{link.label}</span>
                  <ArrowRight size={12} />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 5. FREQUENTLY ASKED QUESTIONS (FAQS) */}
        {pageData.faqs && pageData.faqs.length > 0 && (
          <section className="mb-12">
            <div className="mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                FAQ & Insights
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mt-2">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {pageData.faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm md:text-base hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === idx ? "rotate-180 text-blue-600" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openFaqIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 pt-0 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
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
        <div className="p-6 md:p-10 bg-slate-900 text-white rounded-3xl md:rounded-[36px] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1.5">
              <ShieldCheck size={14} /> Ready to Scale Your Digital Presence?
            </div>
            <h3 className="text-xl md:text-2xl font-black tracking-tight">
              Talk Directly with Our Lead Engineers
            </h3>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Instant free consultation, architecture planning, and transparent quotes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => window.open('https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20want%20to%20consult%20about%20' + encodeURIComponent(pageData.h1), '_blank')}
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow transition-all"
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
