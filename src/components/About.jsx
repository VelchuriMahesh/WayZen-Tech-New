import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import { 
  Code2, Rocket, GraduationCap, Smartphone, 
  Zap, Mail, Phone, Instagram, ArrowRight 
} from 'lucide-react';

const WayZenAbout = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Global Projects", value: "65+" },
    { label: "Frameworks", value: "12+" },
    { label: "Academic Success", value: "100%" },
    { label: "Support Sync", value: "24/7" },
  ];

  const services = [
    {
      title: "Enterprise Software",
      icon: <Code2 className="text-cyan-400" />,
      desc: "Scalable MERN architectures. High-traffic SaaS platforms and complex B2B ecosystems.",
      tag: "Scalable"
    },
    {
      title: "Hyper Growth",
      icon: <Rocket className="text-purple-500" />,
      desc: "Aggressive SEO and Performance Marketing to dominate the digital landscape.",
      tag: "250% Growth"
    },
    {
      title: "Academic Incubator",
      icon: <GraduationCap className="text-amber-400" />,
      desc: "Premium B.Tech/M.Tech R&D support with IEEE documentation.",
      tag: "Research"
    },
    {
      title: "Native Mobile",
      icon: <Smartphone className="text-green-400" />,
      desc: "High-performance iOS & Android apps using Flutter and React Native.",
      tag: "Silk Smooth"
    }
  ];

  // Helper function for WhatsApp
  const contactWhatsApp = () => {
    window.open('https://wa.me/919398724704', '_blank');
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:px-12 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/50">
        <div 
          onClick={() => navigate('/')} 
          className="text-xl md:text-2xl font-black tracking-tighter uppercase cursor-pointer hover:opacity-80 transition-opacity"
        >
          WayZen<span className="text-cyan-500">Tech.</span>
        </div>
        <button 
          onClick={contactWhatsApp}
          className="bg-white text-black px-5 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold hover:bg-cyan-400 transition-colors duration-300"
        >
          Get a Quote
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 pb-24 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[400px] bg-cyan-500/10 blur-[80px] md:blur-[120px] rounded-full" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] md:text-sm font-mono mb-6 tracking-widest text-cyan-400"
          >
            THE TECH FRONTIER
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
          >
            WAYZEN <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">TECH.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We don't just build software. We <span className="text-white font-semibold">engineer high-velocity digital assets</span> that dominate markets and accelerate growth.
          </motion.p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 md:py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={fadeIn} initial="initial" whileInView="whileInView" className="text-center">
                <div className="text-3xl md:text-5xl font-black text-cyan-500 mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Arsenal / Services Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-xs font-mono text-cyan-500 mb-2 uppercase tracking-widest">Our Arsenal</h2>
              <h3 className="text-4xl md:text-6xl font-black leading-none">PREMIUM DIGITAL<br/>COLLECTIVE.</h3>
            </div>
            <p className="text-gray-400 max-w-md text-center md:text-right text-sm md:text-base">
              Innovation Hub & India-Based Engineering for the global market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                onClick={() => navigate('/services')}
                className="p-8 md:p-10 bg-zinc-900/50 border border-white/10 rounded-3xl hover:border-cyan-500/50 transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-black rounded-2xl border border-white/5 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    {React.cloneElement(service.icon, { size: 28, className: "group-hover:text-black" })}
                  </div>
                  <span className="text-[10px] font-mono border border-white/20 px-3 py-1 rounded-full text-gray-400 uppercase">
                    {service.tag}
                  </span>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                  {service.desc}
                </p>
                <div className="flex items-center text-xs font-black tracking-widest group-hover:text-cyan-400 transition-colors uppercase">
                  EXPLORE LAB <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center border border-white/10 p-10 md:p-20 rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Zap size={150} />
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-8 italic tracking-tighter">
            FUTURE <br/>IS WAYZEN.
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 mb-10 font-mono">+91 9398724704</p>
          <button 
            onClick={() => navigate('/')}
            className="w-full md:w-auto bg-cyan-500 text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-cyan-500/20"
          >
            START YOUR PROJECT
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black mb-6 uppercase tracking-tighter">WayZen<span className="text-cyan-500">Tech</span></div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Premium Digital Collective engineering the next generation of software and growth. Global Ready.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h5 className="font-mono text-cyan-500 text-[10px] mb-8 uppercase tracking-[0.3em]">Contact Sync</h5>
            <ul className="space-y-4">
              <li 
                onClick={() => window.location.href = 'mailto:wayzentech@gmail.com'}
                className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors"
              >
                <Mail size={18} /> wayzentech@gmail.com
              </li>
              <li 
                onClick={contactWhatsApp}
                className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors font-bold"
              >
                <Phone size={18} /> +91 9398724704
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h5 className="font-mono text-cyan-500 text-[10px] mb-8 uppercase tracking-[0.3em]">Social Core</h5>
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="https://instagram.com/way_zentech" 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 bg-zinc-900 rounded-2xl hover:text-cyan-400 hover:bg-zinc-800 transition-all"
              >
                <Instagram size={24} />
              </a>
              <div 
                 onClick={contactWhatsApp}
                 className="p-4 bg-zinc-900 rounded-2xl hover:text-cyan-400 hover:bg-zinc-800 transition-all cursor-pointer font-black text-sm px-6"
              >
                WA
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[9px] text-gray-600 font-mono tracking-[0.4em] uppercase">
            © 2024 WayZenTech Digital Foundry // India HQ
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WayZenAbout;