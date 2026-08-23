import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, Instagram, Zap, ArrowRight, 
  MessageCircle, Send, Info, Cpu, Globe, Rocket, Code2, Database,
  Smartphone, Bot, Search, BarChart3, Receipt, GraduationCap, CheckCircle2, ShieldCheck
} from 'lucide-react';

// React Router
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

// Components
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import Team from './components/team';
import About from "./components/About";
import WhatIsWayZenTech from "./components/WhatIsWayZenTech"; 
import { ProjectForm } from './components/ProjectForm';
import { Portfolio } from './components/Portfolio';
import { Techalien } from './components/Techalien';
import ServicesPage from './components/ServicesPage';
import { AdminDashboard } from './components/AdminDashboard';

// SEO Manager (Background execution only - Zero UI change)
import { SEOHandler } from './seo/SEOHandler';

// --- HELPER: SMOOTH SCROLL TO TOP ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// --- BACKGROUND: TECH GRID ---
const TechGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px]" />
    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
  </div>
);

// --- 3D FLOATING ELEMENTS (Responsive Icons) ---
const Floating3DSpace = () => {
  const elements = [
    { icon: <Cpu className="w-5 h-5 md:w-8 md:h-8" />, color: "text-blue-500", top: "15%", left: "5%", delay: 0 },
    { icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, color: "text-indigo-500", top: "10%", right: "8%", delay: 1 },
    { icon: <Rocket className="w-6 h-6 md:w-10 md:h-10" />, color: "text-purple-500", bottom: "20%", left: "5%", delay: 2 },
    { icon: <Code2 className="w-6 h-6 md:w-8 md:h-8" />, color: "text-emerald-500", bottom: "25%", right: "5%", delay: 3 },
    { icon: <Database className="w-5 h-5 md:w-6 md:h-6" />, color: "text-pink-500", top: "40%", left: "2%", delay: 1.5, hideMobile: true },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [0.8, 1, 0.8],
            rotateY: 360,
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            delay: el.delay,
            ease: "easeInOut" 
          }}
          style={{ 
            position: 'absolute', 
            top: el.top, 
            left: el.left, 
            right: el.right, 
            bottom: el.bottom,
          }}
          className={`${el.color} ${el.hideMobile ? 'hidden md:block' : 'block'} filter blur-[0.5px] md:blur-0`}
        >
          <div className="bg-white/40 backdrop-blur-sm p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-white/20">
            {el.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// --- SERVICES DATA FOR ONE-BY-ONE SHOWCASE ---
const homeServicesList = [
  {
    id: 'web-dev',
    title: 'Custom Website & Web App Development',
    category: 'Full-Stack Engineering',
    icon: Globe,
    gradient: 'from-blue-600 to-indigo-600',
    tag: 'MERN & Next.js',
    desc: 'High-performance corporate websites, reactive portals, SaaS platforms, and custom web applications engineered for speed, clean code, and conversions.',
    deliverables: ['Custom Responsive Design', 'SEO & Performance Optimized', 'Database & API Integrations', 'Admin Control Panels']
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development (iOS & Android)',
    category: 'Cross-Platform Apps',
    icon: Smartphone,
    gradient: 'from-purple-600 to-pink-600',
    tag: 'Flutter & React Native',
    desc: 'Native-feel iOS and Android applications with smooth 60fps animations, push notifications, offline storage, and secure backend APIs.',
    deliverables: ['App Store & Play Store Ready', 'Real-Time Data Sync', 'Payment Gateway Integration', 'Intuitive Mobile UI/UX']
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Business Process Solutions',
    category: 'Intelligent Systems',
    icon: Bot,
    gradient: 'from-emerald-600 to-teal-600',
    tag: 'OpenAI & Custom LLMs',
    desc: 'Eliminate repetitive manual tasks with custom AI chatbots, autonomous WhatsApp enquiry handling, and automated business workflows.',
    deliverables: ['24/7 Customer Chatbots', 'Automated Lead Routing', 'Document & Data Processing', 'Workflow Efficiency']
  },
  {
    id: 'seo-marketing',
    title: 'High-Intent SEO & Local Search Growth',
    category: 'Organic Visibility',
    icon: Search,
    gradient: 'from-amber-500 to-orange-600',
    tag: 'Google Rankings',
    desc: 'Comprehensive technical SEO, on-page optimization, local Google Business Profile dominance, and content strategies that rank for real customer searches.',
    deliverables: ['Technical SEO Architecture', 'Local Keyword Dominance', 'Structured Data Schema', 'Speed & Core Web Vitals']
  },
  {
    id: 'google-ads',
    title: 'Google Ads & Digital Performance Marketing',
    category: 'Targeted Advertising',
    icon: BarChart3,
    gradient: 'from-rose-600 to-red-600',
    tag: 'ROI-Driven PPC',
    desc: 'High-converting Google Search campaigns, Instagram ad creatives, and performance marketing designed to generate qualified business leads.',
    deliverables: ['Search & Display Ads', 'Ad Copy & Conversion Funnels', 'Audience Retargeting', 'Transparent ROI Analytics']
  },
  {
    id: 'billing-software',
    title: 'Custom Billing & POS Software Solutions',
    category: 'Enterprise Software',
    icon: Receipt,
    gradient: 'from-cyan-600 to-blue-600',
    tag: 'Custom ERP & POS',
    desc: 'Tailor-made billing software, barcode scanning, GST tax calculations, automated PDF invoice generation, and WhatsApp receipt delivery.',
    deliverables: ['Custom Invoice Workflows', 'GST & Financial Reports', 'Stock & Inventory Control', 'Offline-First Reliability']
  },
  {
    id: 'academic-projects',
    title: 'Academic & R&D Projects Incubator',
    category: 'Academic Support',
    icon: GraduationCap,
    gradient: 'from-indigo-600 to-violet-700',
    tag: 'B.Tech & M.Tech IEEE',
    desc: 'Complete engineering project guidance, IEEE standard research documentation, clean source code, PPTs, and viva preparation support.',
    deliverables: ['IEEE Research Base Papers', 'Complete Tested Codebases', 'Project Reports & PPTs', 'Execution & Viva Guidance']
  }
];

// --- COMPONENT: SERVICES ONE-BY-ONE SHOWCASE ---
const ServicesShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-3">
            <Cpu size={12} /> Full-Spectrum Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-slate-950">
            Our Core <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-sm md:text-lg text-slate-500 mt-3 font-medium">
            Engineered with modern architectures to accelerate growth, automate workflows, and build scalable digital assets.
          </p>
        </div>

        {/* Services Rendered One by One */}
        <div className="space-y-6 md:space-y-8">
          {homeServicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-slate-50 hover:bg-white rounded-3xl md:rounded-[36px] p-6 md:p-10 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
                  
                  {/* Left Column: Icon & Titles */}
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <div className={`p-4 md:p-5 rounded-2xl md:rounded-3xl bg-gradient-to-br ${service.gradient} text-white shadow-lg shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon size={28} className="md:w-8 md:h-8" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                        {service.tag}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-2 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                        {service.category}
                      </p>
                    </div>
                  </div>

                  {/* Middle Column: Description & Deliverables */}
                  <div className="lg:col-span-5 space-y-3">
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {service.deliverables.map((deliv, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] md:text-xs font-semibold text-slate-700">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Direct Actions */}
                  <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-end">
                    <button
                      onClick={() => navigate('/services')}
                      className="w-full bg-slate-950 hover:bg-blue-600 text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
                    >
                      <span>Explore Details</span>
                      <ArrowRight size={14} />
                    </button>
                    <button
                      onClick={() => window.open('https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20want%20to%20know%20more%20about%20' + encodeURIComponent(service.title), '_blank')}
                      className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={14} />
                      <span>WhatsApp Inquire</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: ABOUT COMPANY HIGHLIGHT ON HOMEPAGE ---
const AboutCompanyHighlight = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Global Deliveries", value: "65+", desc: "Web, AI & Software Projects" },
    { label: "On-Time Success", value: "100%", desc: "Production Ready Deployments" },
    { label: "Engineering Frameworks", value: "12+", desc: "MERN, Python, Next.js, Flutter" },
    { label: "Support & Maintenance", value: "24/7", desc: "Dedicated Engineer Sync" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Left Column: Story & Vision */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest">
              <ShieldCheck size={12} /> Technology Foundry
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Engineering the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital Solutions</span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              **WayZenTech** is a premier software engineering and AI collective based in India. We combine deep technical rigor with commercial focus — building high-speed business websites, reactive web applications, automated AI pipelines, and custom software systems designed to scale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1">Direct Engineering Sync</h4>
                <p className="text-xs text-slate-400">No account managers or middle layers. Talk directly to developers on WhatsApp.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1">Scalable Clean Architecture</h4>
                <p className="text-xs text-slate-400">Built with modern tech stacks tested for speed, SEO, and robust reliability.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => navigate('/about')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30"
              >
                <span>Read Full Company Story</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => window.open('https://wa.me/919398724704', '_blank')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle size={16} />
                <span>Talk with Engineers</span>
              </button>
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/10 flex flex-col justify-between"
              >
                <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  {stat.value}
                </div>
                <div className="mt-4">
                  <h4 className="text-sm md:text-base font-bold text-white">{stat.label}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: HOME PAGE ---
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* 1. HERO SECTION */}
      <header className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center px-4 md:px-6 pt-24 md:pt-20 overflow-hidden bg-white">
        <TechGrid />
        <Floating3DSpace />
        
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-4 md:mb-6 inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]"
          >
            <Zap size={10} className="animate-bounce" /> Innovation Foundry
          </motion.div>
          
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-[130px] font-black tracking-tighter text-slate-950 leading-[0.9] md:leading-[0.85] mb-6 md:mb-10"
          >
            WayZen<span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-500 italic">Tech</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl lg:text-2xl text-slate-500 max-w-xs md:max-w-2xl mx-auto font-medium leading-relaxed px-2"
          >
            Engineering <span className="text-slate-900 font-bold underline decoration-blue-500/30">AI Systems</span>, Scalable MERN Apps & Premium Academic Projects.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 pt-10 md:pt-16 px-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("request").scrollIntoView({ behavior: "smooth" })} 
              className="w-full sm:w-auto group bg-slate-950 text-white px-8 md:px-12 py-4 md:py-6 rounded-[20px] md:rounded-[24px] font-bold flex items-center justify-center gap-3 shadow-2xl hover:bg-blue-600 transition-all"
            >
              Start Request <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/what-is-wayzentech')} 
              className="w-full sm:w-auto group bg-white text-slate-950 border-2 border-slate-100 px-8 md:px-12 py-4 md:py-6 rounded-[20px] md:rounded-[24px] font-bold flex items-center justify-center gap-3 hover:border-blue-500 transition-all shadow-lg"
            >
              <Info size={18} className="text-blue-500" /> What is WayZenTech?
            </motion.button>
          </div>
        </div>
      </header>
      
      {/* 2. SERVICES ONE-BY-ONE SHOWCASE (BELOW HERO) */}
      <ServicesShowcase />

      {/* 3. ABOUT COMPANY HIGHLIGHT */}
      <AboutCompanyHighlight />

      {/* 4. FEATURED PROJECTS PORTFOLIO (2 Grids Mobile 1:1, 4 Grids Web 1:1) */}
      <Portfolio />
      
      {/* 5. PROJECT INQUIRY FORM */}
      <section id="request" className="py-16 md:py-32 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[32px] md:rounded-[60px] overflow-hidden shadow-2xl">
          <ProjectForm />
        </div>
      </section>

      {/* 6. WHATSAPP CONNECT BANNER */}
      <WhatsAppFooterSection />
    </motion.div>
  );
};

// --- COMPONENT: WHATSAPP SECTION ---
const WhatsAppFooterSection = () => (
  <section className="w-full bg-slate-50 py-10 md:py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div 
        whileHover={{ y: -5 }}
        onClick={() => window.open('https://wa.me/919398724704', '_blank')}
        className="group cursor-pointer bg-white border border-slate-200 rounded-[30px] md:rounded-[40px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 hover:border-emerald-400 transition-all shadow-xl"
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
          <div className="bg-[#25D366] p-4 md:p-6 rounded-2xl md:rounded-3xl text-white shadow-lg group-hover:rotate-12 transition-transform">
            <MessageCircle className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Got Questions?</h2>
            <p className="text-sm md:text-base text-slate-500 font-bold">Chat directly with our Engineers on WhatsApp</p>
          </div>
        </div>
        <button className="w-full md:w-auto bg-[#25D366] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-3">
          Instant Connect <Send size={16} />
        </button>
      </motion.div>
    </div>
  </section>
);

// --- MASTER CONTENT WRAPPER ---
function AppContent() {
  const location = useLocation();

  return (
    <div className="antialiased font-sans bg-white relative overflow-x-hidden pb-16 md:pb-0">
      <ScrollToTop />
      <SEOHandler />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Base Approved Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-is-wayzentech" element={<WhatIsWayZenTech />} />

          {/* Service Target URLs (Mapping 30-Keyword Master Strategy) */}
          <Route path="/web-development" element={<ServicesPage />} />
          <Route path="/website-development" element={<ServicesPage />} />
          <Route path="/mobile-app-development" element={<ServicesPage />} />
          <Route path="/ai-development" element={<ServicesPage />} />
          <Route path="/ai-automation" element={<ServicesPage />} />
          <Route path="/business-automation" element={<ServicesPage />} />
          <Route path="/whatsapp-automation" element={<ServicesPage />} />
          <Route path="/digital-marketing" element={<ServicesPage />} />
          <Route path="/seo" element={<ServicesPage />} />
          <Route path="/local-seo" element={<ServicesPage />} />
          <Route path="/google-ads" element={<ServicesPage />} />
          <Route path="/billing-software" element={<ServicesPage />} />
          <Route path="/custom-software-development" element={<ServicesPage />} />
          <Route path="/ecommerce-development" element={<ServicesPage />} />

          {/* Location Target URLs (Mapping 30-Keyword Master Strategy) */}
          <Route path="/web-development-company-palnadu" element={<HomePage />} />
          <Route path="/website-development-company-vijayawada" element={<HomePage />} />
          <Route path="/digital-marketing-agency-vijayawada" element={<HomePage />} />
          <Route path="/seo-company-guntur-palnadu" element={<HomePage />} />
          <Route path="/web-development-company-hyderabad" element={<HomePage />} />
          <Route path="/ai-automation-company-hyderabad" element={<HomePage />} />
          <Route path="/web-development-company-bangalore" element={<HomePage />} />
          <Route path="/digital-marketing-agency-bangalore" element={<HomePage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </AnimatePresence>

      {/* FLOATING ACTION HUB (CALL, WHATSAPP, AI CHATBOT) */}
      <Techalien />

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <MobileBottomNav />

      {/* FOOTER */}
      <footer className="pt-20 md:pt-40 pb-8 md:pb-12 bg-slate-950 text-white relative rounded-t-[40px] md:rounded-t-[60px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 mb-16 md:mb-20">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase">WayZen<span className="text-blue-500">Tech</span></h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">Premium Digital Collective engineering the next generation of software and growth.</p>
            </div>
            
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <p className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">Contact Sync</p>
              <div className="space-y-3 md:space-y-4">
                <p className="text-xs md:text-sm flex items-center justify-center md:justify-start gap-3 text-slate-300 italic"><Mail size={14} className="text-blue-500" /> wayzentech@gmail.com</p>
                <p className="text-xs md:text-sm flex items-center justify-center md:justify-start gap-3 text-slate-300 font-bold"><Phone size={14} className="text-blue-500" /> +91 9398724704</p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 text-center md:text-left sm:col-span-2 lg:col-span-1">
              <p className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">Social Core</p>
              <div className="flex justify-center md:justify-start">
                <a href="https://instagram.com/way_zentech" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white/5 px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-white/10 hover:border-pink-500 transition-all group">
                  <Instagram size={20} className="text-pink-500 group-hover:scale-110 transition-transform" /> 
                  <span className="font-black text-xs md:text-sm uppercase">@way_zentech</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 md:pt-12 border-t border-white/5 text-center">
            <div className="text-[8px] md:text-[10px] text-slate-600 uppercase tracking-[0.4em] md:tracking-[0.6em] font-black">
              © 2024 WayZenTech Foundry // India HQ
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}