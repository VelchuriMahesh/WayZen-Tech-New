import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Instagram, Plus, X, Phone, Globe } from 'lucide-react';

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snap = await getDocs(collection(db, "projects"));
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (data.length > 0) {
          setProjects(data);
        } else {
          // Default showcase projects if firestore is empty
          setProjects([
            {
              id: 'p1',
              title: 'NextGen AI Dashboard',
              category: 'AI & Web App',
              desc: 'High-speed business analytics and AI workflow automation platform engineered with MERN stack & OpenAI APIs.',
              img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
              link: 'https://www.wayzentechofficial.com',
              instagram: 'https://instagram.com/way_zentech'
            },
            {
              id: 'p2',
              title: 'Luxury Retail & E-Commerce',
              category: 'E-Commerce',
              desc: 'Modern online storefront with instant payment gateways, live order tracking, and ultra-fast responsive design.',
              img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
              link: 'https://www.wayzentechofficial.com',
              instagram: 'https://instagram.com/way_zentech'
            },
            {
              id: 'p3',
              title: 'HealthCare Clinic Suite',
              category: 'Custom Software',
              desc: 'Patient appointment management, billing system, and automated WhatsApp appointment reminders.',
              img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
              link: 'https://www.wayzentechofficial.com',
              instagram: 'https://instagram.com/way_zentech'
            },
            {
              id: 'p4',
              title: 'Smart Billing & POS System',
              category: 'Billing Software',
              desc: 'Offline-ready custom invoice generation, GST tax reporting, inventory control and WhatsApp receipt delivery.',
              img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
              link: 'https://www.wayzentechofficial.com',
              instagram: 'https://instagram.com/way_zentech'
            }
          ]);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="relative py-14 md:py-28 px-4 md:px-6 overflow-hidden min-h-screen bg-[#edf1f2] border-t border-slate-300/80">
      
      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[50%] rounded-full bg-[#cdd32c]/10 blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[50%] rounded-full bg-slate-300/30 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-300 text-[#0a0101] text-[10px] font-mono font-black uppercase tracking-widest mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#cdd32c]" />
            Proof of Work // Live Deployments
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-[#0a0101] leading-none">
            FEATURED <span className="underline decoration-[#cdd32c] decoration-4 md:decoration-8">PROJECTS.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xl mt-3">
            Real products built for real businesses. From high-converting e-commerce to automated POS engines and political portals.
          </p>
        </motion.div>

        {/* --- GRID: 2 COLUMNS IN MOBILE (1:1 SIZE), 4 COLUMNS IN DESKTOP (1:1 SIZE) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {projects.map((p, index) => {
            const liveLink = p.link || 'https://www.wayzentechofficial.com';
            const instaLink = p.instagram || p.instaLink || 'https://instagram.com/way_zentech';

            return (
              <motion.div
                key={p.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative bg-white rounded-2xl md:rounded-[32px] p-2.5 md:p-3.5 shadow-lg shadow-slate-300/40 border border-slate-200/80 hover:border-[#cdd32c] hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                {/* 1:1 SQUARE ASPECT RATIO CONTAINER */}
                <div 
                  onClick={() => setSelectedProject(p)}
                  className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-square bg-slate-100 cursor-pointer"
                >
                  <motion.img 
                    animate={{ scale: hoveredId === p.id ? 1.06 : 1 }}
                    transition={{ duration: 0.3 }}
                    src={p.img || '/logo.png'} 
                    alt={p.title} 
                    className="w-full h-full object-cover" 
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Badge & Quick Action */}
                  <div className="absolute top-2 left-2 md:top-3 md:left-3">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-wider text-[#0a0101] bg-[#cdd32c] backdrop-blur-md px-2 py-0.5 rounded-md shadow">
                      {p.category || "Live"}
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-white/95 backdrop-blur-sm p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-lg text-[#0a0101] opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <Plus size={14} className="md:w-4 md:h-4" />
                  </div>
                </div>

                {/* PROJECT DESCRIPTION & DETAILS */}
                <div className="pt-2.5 md:pt-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 
                      onClick={() => setSelectedProject(p)}
                      className="text-xs sm:text-sm md:text-base font-black text-slate-900 tracking-tight group-hover:text-[#0a0101] transition-colors line-clamp-1 cursor-pointer"
                    >
                      {p.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {p.desc || "Modern digital solution engineered for performance, scalability, and seamless user experience."}
                    </p>
                  </div>

                  {/* ACTION LINKS (LIVE WEBSITE + INSTAGRAM BUTTONS - EQUAL BIG BUTTONS) */}
                  <div className="grid grid-cols-2 gap-2 pt-3 mt-2 border-t border-slate-100">
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-[#0a0101] hover:bg-[#cdd32c] hover:text-[#0a0101] text-white py-2.5 px-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
                      title="Open Live Website"
                    >
                      <Globe size={13} className="shrink-0" />
                      <span className="truncate">Website</span>
                      <ExternalLink size={11} className="shrink-0 opacity-70" />
                    </a>

                    <a
                      href={instaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:opacity-95 text-white py-2.5 px-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
                      title="View on Instagram"
                    >
                      <Instagram size={13} className="shrink-0" />
                      <span className="truncate">Instagram</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-end md:items-center justify-center p-0 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            <motion.div 
              layoutId={selectedProject.id}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-white rounded-t-[28px] md:rounded-[36px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md text-slate-900 rounded-full shadow-lg z-50 hover:bg-red-50 hover:text-red-500 transition-all"
              >
                <X size={18}/>
              </button>

              <div className="w-full md:w-1/2 h-[35vh] md:h-auto shrink-0 overflow-hidden bg-slate-100 relative">
                <img src={selectedProject.img || '/logo.png'} className="w-full h-full object-cover" alt={selectedProject.title} />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                  {selectedProject.category || "Live Project"}
                </div>
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto bg-white flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Case Study & Overview</span>
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 mt-1 mb-4 leading-tight tracking-tight">
                    {selectedProject.title}
                  </h2>

                  <div className="bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-100 mb-6">
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed whitespace-pre-line">
                      {selectedProject.desc || "Engineered with modern full-stack technologies, clean architecture, high-speed performance, and responsive UI."}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <a 
                      href={selectedProject.link || 'https://www.wayzentechofficial.com'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-blue-600 transition-all shadow-md"
                    >
                      <Globe size={16} /> Explore Live Site <ExternalLink size={14} />
                    </a>

                    <a 
                      href={selectedProject.instagram || selectedProject.instaLink || 'https://instagram.com/way_zentech'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-md"
                    >
                      <Instagram size={16} /> Instagram Reel / Post
                    </a>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedProject(null);
                      window.open('https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20saw%20your%20project:%20' + encodeURIComponent(selectedProject.title), '_blank');
                    }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-emerald-600 transition-all"
                  >
                    <Phone size={14} /> Inquire About Similar Project on WhatsApp
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

export default Portfolio;