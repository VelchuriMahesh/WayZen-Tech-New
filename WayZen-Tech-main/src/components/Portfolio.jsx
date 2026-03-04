import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Plus, X, Phone, ArrowRight } from 'lucide-react';

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDocs(collection(db, "projects"));
      setProjects(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetch();
  }, []);

  return (
    <section className="relative py-12 md:py-24 px-4 md:px-6 overflow-hidden min-h-screen bg-slate-50">
      
      {/* --- OPTIMIZED BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 -z-10 opacity-50 md:opacity-100">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[50%] rounded-full bg-purple-100/40 blur-[80px] md:blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[50%] rounded-full bg-blue-100/40 blur-[80px] md:blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Responsive Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter text-slate-900 leading-tight">
            Featured <br className="md:hidden" />
            <span className="text-blue-600">Projects</span>
          </h2>
          <div className="h-1.5 w-16 md:w-24 bg-blue-600 rounded-full" />
        </motion.div>

        {/* --- GRID: 1 col on mobile, 2 on tablet, 3 on desktop --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProject(p)} // Whole card clickable for mobile
              className="group relative bg-white rounded-[32px] md:rounded-[40px] p-2 md:p-3 shadow-xl shadow-slate-200/50 border border-white hover:border-blue-200 transition-colors cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[26px] md:rounded-[32px] aspect-[4/5] bg-slate-100">
                <motion.img 
                  animate={{ scale: hoveredId === p.id ? 1.05 : 1 }}
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover" 
                />

                {/* Mobile Friendly Button (Visible on mobile, Hover on desktop) */}
                <div className="absolute bottom-4 right-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl text-blue-600">
                    <Plus size={20} />
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {p.category || "Development"}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- ADVANCED DETAIL MODAL (Fully Mobile Optimized) --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-end md:items-center justify-center p-0 md:p-8">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            <motion.div 
              layoutId={selectedProject.id}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl bg-white rounded-t-[32px] md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[90vh] md:h-auto md:max-h-[85vh]"
            >
              {/* Close Button - Sticky for Mobile */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md text-slate-900 rounded-full shadow-lg z-50 hover:bg-red-50 hover:text-red-500 transition-all"
              >
                <X size={20}/>
              </button>

              {/* Image Side - Fixed height on mobile, auto on desktop */}
              <div className="w-full md:w-5/12 h-[30vh] md:h-auto shrink-0 overflow-hidden">
                <img src={selectedProject.img} className="w-full h-full object-cover" alt="" />
              </div>

              {/* Content Side - Scrollable */}
              <div className="w-full md:w-7/12 p-6 md:p-12 overflow-y-auto bg-white">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                   <div className="h-[2px] w-8 bg-blue-600" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Project Case Study</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
                  {selectedProject.title}
                </h2>

                <div className="bg-slate-50 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 mb-6 md:mb-8">
                   <p className="text-slate-600 text-sm md:text-lg leading-relaxed whitespace-pre-line">
                     {selectedProject.desc}
                   </p>
                </div>

                {/* Contact Card */}
                {selectedProject.desc?.includes("+91") && (
                   <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 mb-8">
                      <div className="shrink-0 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                         <Phone size={18} />
                      </div>
                      <div>
                         <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Inquiry Node</p>
                         <p className="text-sm font-bold text-slate-900 tracking-tight">+91 93987 24704</p>
                      </div>
                   </div>
                )}

                {/* Footer Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
                    >
                      Explore Live <ExternalLink size={18} />
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="flex md:hidden items-center justify-center gap-2 px-8 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold"
                  >
                    Back to Portfolio <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};