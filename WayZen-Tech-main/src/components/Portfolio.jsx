import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Plus, X, Globe, Phone, MapPin } from 'lucide-react';

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
    <section className="relative py-24 px-6 overflow-hidden min-h-screen bg-slate-50">
      
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-200/40 blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-200/40 blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-7xl font-black mb-6 tracking-tighter text-slate-900">Featured <span className="text-blue-600">Projects</span></h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full" />
        </motion.div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white rounded-[40px] p-3 shadow-xl shadow-slate-200/50 border border-white/50"
            >
              <div className="relative overflow-hidden rounded-[32px] aspect-[4/5] bg-slate-100">
                <motion.img 
                  animate={{ scale: hoveredId === p.id ? 1.1 : 1 }}
                  transition={{ duration: 0.8 }}
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover" 
                />

                {/* HOVER OVERLAY */}
                <AnimatePresence>
                  {hoveredId === p.id && (
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-slate-900/40 backdrop-blur-md flex flex-col items-center justify-center gap-4"
                    >
                      <button
                        onClick={() => setSelectedProject(p)}
                        className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold shadow-xl flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all scale-100 hover:scale-105"
                      >
                        View Details <Plus size={18} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="p-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{p.category || "Development"}</span>
                <h3 className="text-2xl font-black text-slate-900 mt-4 tracking-tight">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- ADVANCED DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
            />

            <motion.div 
              layoutId={selectedProject.id}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="relative w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Image Side */}
              <div className="w-full md:w-5/12 h-64 md:h-auto overflow-hidden">
                <img src={selectedProject.img} className="w-full h-full object-cover" alt="" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-7/12 p-8 md:p-14 overflow-y-auto custom-scrollbar">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 bg-slate-100 text-slate-500 rounded-full hover:bg-red-50 hover:text-red-500 transition-all z-20"
                >
                  <X size={24}/>
                </button>

                <div className="flex items-center gap-3 mb-6">
                   <div className="h-[2px] w-8 bg-blue-600" />
                   <span className="text-xs font-black uppercase tracking-widest text-blue-600">Project Overview</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
                  {selectedProject.title}
                </h2>

                {/* --- THE TEXT WITH PROPER SPACING --- */}
                <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100 mb-8">
                   <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                     {selectedProject.desc}
                   </p>
                </div>

                {/* Contact Detail Card */}
                {selectedProject.desc.includes("+91") && (
                   <div className="flex items-center gap-4 p-5 bg-blue-50 rounded-3xl border border-blue-100 mb-8">
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                         <Phone size={20} />
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Direct Inquiries</p>
                         <p className="font-bold text-slate-900">+91 9945 196777</p>
                      </div>
                   </div>
                )}

                <div className="flex flex-wrap gap-4 mt-auto">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1"
                    >
                      Visit Project <ExternalLink size={18} />
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                  >
                    Close
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