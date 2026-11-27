import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, Instagram, Sparkles, ArrowRight, ShieldCheck, 
  MessageCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const rolePriority = {
  founder: 1,
  "co-founder": 2,
  ceo: 3,
  director: 4,
  cmo: 5,
  "project manager": 6,
  "software developer": 7,
  "digital marketing": 8,
  hr: 9
};

const getRoleKey = (role = "") => {
  const r = role.toLowerCase();
  for (const key of Object.keys(rolePriority)) {
    if (r.includes(key)) return key;
  }
  return "other";
};

const mapCategory = (role = "") => {
  const r = role.toLowerCase();
  if (r.includes("founder") || r.includes("ceo") || r.includes("director") || r.includes("cmo")) {
    return "leadership";
  }
  if (r.includes("developer") || r.includes("engineer") || r.includes("project manager") || r.includes("tech")) {
    return "engineering";
  }
  return "growth";
};

const getCleanPhoto = (name = "", role = "", fallbackImg = "") => {
  const n = (name || "").toLowerCase();
  const r = (role || "").toLowerCase();
  if (n.includes("mahesh")) return "/team_photos/mahesh_clean.jpg";
  if (n.includes("gopi")) return "/team_photos/gopi_clean.jpg";
  if (n.includes("k. shiva") || n.includes("k shiva") || (n.includes("shiva") && r.includes("ceo"))) return "/team_photos/kshiva_clean.jpg";
  if (n.includes("shiva") && r.includes("director")) return "/team_photos/shiva_clean.jpg";
  if (n.includes("pravallika") || r.includes("cmo")) return "/team_photos/pravallika_clean.jpg";
  if (n.includes("jyothi") || r.includes("project manager")) return "/team_photos/jyothi_clean.jpg";
  if (n.includes("anji") || r.includes("developer")) return "/team_photos/anji_clean.jpg";
  if (n.includes("geeta") || r.includes("digital marketing")) return "/team_photos/geeta_clean.jpg";
  if (n.includes("venkatesh") || r.includes("hr")) return "/team_photos/venkatesh_clean.jpg";
  return fallbackImg || "/logo-watermark.png";
};

const getRoleSkills = (role = "") => {
  const r = role.toLowerCase();
  if (r.includes("founder") && !r.includes("co")) {
    return ["Full-Stack Systems", "MERN Architecture", "Distributed Cloud", "Client Growth Strategy"];
  }
  if (r.includes("co-founder")) {
    return ["Business Scaling", "Product Strategy", "Technical Operations", "Enterprise Partnerships"];
  }
  if (r.includes("ceo")) {
    return ["Strategic Vision", "Executive Direction", "Technology Governance", "Capital Allocation"];
  }
  if (r.includes("director")) {
    return ["Operational Excellence", "Delivery Management", "Client Engagement", "Resource Scaling"];
  }
  if (r.includes("cmo")) {
    return ["Brand Strategy", "Commercial Positioning", "Global Outreach", "Campaign Performance"];
  }
  if (r.includes("developer") || r.includes("software")) {
    return ["React & Next.js", "Node.js & Express", "MongoDB & SQL", "REST / GraphQL APIs"];
  }
  if (r.includes("project manager")) {
    return ["Agile Delivery", "Sprint Architecture", "Client Sync & QA", "SLA Monitoring"];
  }
  if (r.includes("marketing")) {
    return ["Meta Performance Ads", "Google Search Ads", "Technical SEO", "Conversion Funnels"];
  }
  if (r.includes("hr")) {
    return ["Talent Acquisition", "Engineering Culture", "Operations Support", "People Growth"];
  }
  return ["Technical Rigor", "Commercial Execution", "Scalable Systems"];
};

const getRoleDescription = (name = "", role = "") => {
  const r = role.toLowerCase();
  if (r.includes("founder") && !r.includes("co")) {
    return "Steering WayZenTech's technical vision, full-stack architectures, and zero-compromise engineering quality for global enterprises.";
  }
  if (r.includes("co-founder")) {
    return "Spearheading strategic expansions, enterprise client alignments, and ensuring every product delivers measurable business ROI.";
  }
  if (r.includes("ceo")) {
    return "Guiding high-level organizational execution, commercial operations, and executive leadership across technology hubs.";
  }
  if (r.includes("director")) {
    return "Supervising operational integrity, client success benchmarks, and seamless coordination across technical squads.";
  }
  if (r.includes("cmo")) {
    return "Architecting high-impact brand positioning, commercial go-to-market funnels, and global marketing execution.";
  }
  if (r.includes("developer") || r.includes("software")) {
    return "Engineering clean, high-speed MERN and reactive frontends, resilient backend APIs, and scalable cloud databases.";
  }
  if (r.includes("project manager")) {
    return "Orchestrating agile sprint schedules, 100% on-time deployment milestones, and direct daily WhatsApp client updates.";
  }
  if (r.includes("marketing")) {
    return "Dominating search algorithms, precision Google & Meta ad funnels, and data-backed lead acquisition funnels.";
  }
  if (r.includes("hr")) {
    return "Nurturing top-tier engineering talent, agile collaboration workflows, and an elite developer-first foundry culture.";
  }
  return "Dedicated core team member driving commercial results, engineering precision, and rapid client delivery.";
};

const defaultTeam = [
  {
    id: "POLGlTaZVopMFCuGWGww",
    num: "01",
    name: "V.Mahesh",
    role: "Founder & Lead Systems Architect",
    category: "leadership",
    img: "/team_photos/mahesh_clean.jpg",
    fallbackImg: "https://i.ibb.co/bj9FxPPJ/IMG-20250808-WA0004.jpg",
    status: "ONLINE // HYDERABAD_HQ",
    headline: "Architecting high-throughput MERN systems, reactive frontends & distributed cloud backends.",
    bio: "Steering WayZenTech's technical vision, full-stack architectures, and zero-compromise engineering quality for global enterprises.",
    stacks: ["Full-Stack Systems", "MERN Architecture", "Distributed Cloud", "Client Growth Strategy"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  },
  {
    id: "UNHsyxGJqhbHKvGRFFGb",
    num: "02",
    name: "J.Gopi",
    role: "Co-Founder",
    category: "leadership",
    img: "/team_photos/gopi_clean.jpg",
    fallbackImg: "https://i.ibb.co/JwsJvKzG/Screenshot-2026-03-18-094752.png",
    status: "ONLINE // EXECUTIVE_DESK",
    headline: "Spearheading enterprise expansion & product strategy.",
    bio: "Spearheading strategic expansions, enterprise client alignments, and ensuring every product delivers measurable business ROI.",
    stacks: ["Business Scaling", "Product Strategy", "Technical Operations", "Enterprise Partnerships"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  },
  {
    id: "ltgbijj3ebs4oGN2Cbpa",
    num: "03",
    name: "K. Shiva",
    role: "CEO",
    category: "leadership",
    img: "/team_photos/kshiva_clean.jpg",
    fallbackImg: "https://i.ibb.co/5g0vxtN8/Screenshot-2026-03-18-094658.png",
    status: "ONLINE // EXECUTIVE_DESK",
    headline: "Guiding organizational scale & commercial governance.",
    bio: "Guiding high-level organizational execution, commercial operations, and executive leadership across technology hubs.",
    stacks: ["Strategic Vision", "Executive Direction", "Technology Governance", "Capital Allocation"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  },
  {
    id: "gUzmxITcX3uNxZZicjO7",
    num: "04",
    name: "Shiva",
    role: "Director",
    category: "leadership",
    img: "/team_photos/shiva_clean.jpg",
    fallbackImg: "https://i.ibb.co/1tt8vJw0/Whats-App-Image-2026-06-19-at-10-56-20-AM.jpg",
    status: "ONLINE // FOUNDRY_OPERATIONS",
    headline: "Supervising operational integrity & delivery standards.",
    bio: "Supervising operational integrity, client success benchmarks, and seamless coordination across technical squads.",
    stacks: ["Operational Excellence", "Delivery Management", "Client Engagement", "Resource Scaling"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  },
  {
    id: "DBxn6dVevnys8gP1Q4ky",
    num: "05",
    name: "V. Pravallika",
    role: "CMO",
    category: "leadership",
    img: "/team_photos/pravallika_clean.jpg",
    fallbackImg: "https://i.ibb.co/hJYg3Kh6/akka.jpg",
    status: "ONLINE // GROWTH_DESK",
    headline: "Architecting commercial branding & global market presence.",
    bio: "Architecting high-impact brand positioning, commercial go-to-market funnels, and global marketing execution.",
    stacks: ["Brand Strategy", "Commercial Positioning", "Global Outreach", "Campaign Performance"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  },
  {
    id: "wog3YucLUovVHnAxLTct",
    num: "06",
    name: "Jyothi Prasad",
    role: "Project Manager",
    category: "engineering",
    img: "/team_photos/jyothi_clean.jpg",
    fallbackImg: "https://i.ibb.co/35qz5m3X/jyothi.jpg",
    status: "ACTIVE // SPRINT_SQUAD",
    headline: "Ensuring 100% on-time sprint milestones & QA delivery.",
    bio: "Orchestrating agile sprint schedules, 100% on-time deployment milestones, and direct daily WhatsApp client updates.",
    stacks: ["Agile Delivery", "Sprint Architecture", "Client Sync & QA", "SLA Monitoring"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  },
  {
    id: "FhmaEkuT65vz87htWtXO",
    num: "07",
    name: "Anji",
    role: "Software Developer",
    category: "engineering",
    img: "/team_photos/anji_clean.jpg",
    fallbackImg: "https://i.ibb.co/Jwt291d3/anji.jpg",
    status: "ACTIVE // DEV_SQUAD",
    headline: "Building high-speed MERN apps & scalable APIs.",
    bio: "Engineering clean, high-speed MERN and reactive frontends, resilient backend APIs, and scalable cloud databases.",
    stacks: ["React & Next.js", "Node.js & Express", "MongoDB & SQL", "REST / GraphQL APIs"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  },
  {
    id: "QKRoiOcpvawqbpB9CRX5",
    num: "08",
    name: "Geeta",
    role: "Digital Marketing",
    category: "growth",
    img: "/team_photos/geeta_clean.jpg",
    fallbackImg: "https://i.ibb.co/xtrhMM5m/PP.png",
    status: "ACTIVE // CAMPAIGNS",
    headline: "Scaling customer acquisition via Meta, Google & SEO.",
    bio: "Dominating search algorithms, precision Google & Meta ad funnels, and data-backed lead acquisition funnels.",
    stacks: ["Meta Performance Ads", "Google Search Ads", "Technical SEO", "Conversion Funnels"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  },
  {
    id: "0bBzNfilsvKFgk0uVk3H",
    num: "09",
    name: "Venkatesh",
    role: "HR & People Ops",
    category: "growth",
    img: "/team_photos/venkatesh_clean.jpg",
    fallbackImg: "https://i.ibb.co/Mkn71VVr/132098.jpg",
    status: "ONLINE // PEOPLE_OPS",
    headline: "Cultivating elite developer talent & culture.",
    bio: "Nurturing top-tier engineering talent, agile collaboration workflows, and an elite developer-first foundry culture.",
    stacks: ["Talent Acquisition", "Engineering Culture", "Operations Support", "People Growth"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  }
];

const principles = [
  {
    num: "01",
    title: "Direct Engineer Sync",
    desc: "No account managers playing telephone. You communicate directly with the software engineer typing your code on WhatsApp."
  },
  {
    num: "02",
    title: "Commercial-First Architecture",
    desc: "Every line of code is measured by tangible business outcomes: sub-second load speeds, SEO domination, and conversion rates."
  },
  {
    num: "03",
    title: "Continuous Live Staging",
    desc: "Interactive staging links delivered throughout development. Test features in real-time before production rollout."
  },
  {
    num: "04",
    title: "Zero Technical Debt",
    desc: "Clean modular React/Next.js and resilient Node.js backends. Built to scale smoothly as user volume surges."
  }
];

export const Team = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState(defaultTeam);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const teamCollection = collection(db, "team");
        const teamSnapshot = await getDocs(teamCollection);
        if (!teamSnapshot.empty) {
          const fetchedDocs = teamSnapshot.docs.map((doc) => {
            const data = doc.data();
            const name = data.name || "Core Architect";
            const role = data.role || "Systems Engineer";
            const category = data.category || mapCategory(role);
            const rawImg = data.img || "/logo-watermark.png";
            const img = getCleanPhoto(name, role, rawImg);
            
            return {
              id: doc.id,
              name: name.trim(),
              role: role.trim(),
              category,
              img,
              fallbackImg: rawImg,
              status: "ONLINE // VERIFIED",
              headline: data.desc || getRoleDescription(name, role),
              bio: data.desc || getRoleDescription(name, role),
              stacks: getRoleSkills(role),
              linkedin: data.link || "https://linkedin.com",
              instagram: "https://instagram.com/way_zentech",
              priority: rolePriority[getRoleKey(role)] || 99
            };
          });

          // Sort team: Founder first, followed by Co-founder, CEO, Director, CMO, PM, Dev, Marketing, HR
          fetchedDocs.sort((a, b) => a.priority - b.priority);

          // Assign clean 2-digit numbers
          const numberedDocs = fetchedDocs.map((m, idx) => ({
            ...m,
            num: (idx + 1).toString().padStart(2, '0')
          }));

          setTeam(numberedDocs);
        }
      } catch (error) {
        console.warn("Using offline resilient team database:", error);
      }
    };
    fetchTeam();
  }, []);

  // Isolate Founder (V.Mahesh) for the Hero Spotlight
  const founder = team.find(m => 
    m.name.toLowerCase().includes("mahesh") || 
    (m.role.toLowerCase().includes("founder") && !m.role.toLowerCase().includes("co"))
  ) || defaultTeam[0];

  // Dynamic filter counts
  const categoryCounts = {
    all: team.length,
    leadership: team.filter(m => m.category === 'leadership').length,
    engineering: team.filter(m => m.category === 'engineering').length,
    growth: team.filter(m => m.category === 'growth').length
  };

  const categories = [
    { id: "all", label: "All Members", count: categoryCounts.all.toString().padStart(2, '0') },
    { id: "leadership", label: "Executive Leadership", count: categoryCounts.leadership.toString().padStart(2, '0') },
    { id: "engineering", label: "Engineering & Tech", count: categoryCounts.engineering.toString().padStart(2, '0') },
    { id: "growth", label: "Marketing & People", count: categoryCounts.growth.toString().padStart(2, '0') }
  ];

  const filteredTeam = activeFilter === "all" 
    ? team 
    : team.filter(m => m.category === activeFilter);

  return (
    <div className="min-h-screen bg-transparent text-white pt-28 md:pt-36 pb-32 md:pb-28 px-4 md:px-8 relative overflow-hidden font-sans">
      
      {/* 1. BACKGROUND SVG ORBITAL MOTIFS & PROMINENT LOGO WATERMARK */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-36 -right-36 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-20" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="360" stroke="#cdd32c" strokeWidth="1" strokeDasharray="8 8" className="animate-make-line" />
          <circle cx="400" cy="400" r="240" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER: PIVOTROOTS EDITORIAL CONTRAST --- */}
        <header className="mb-14 md:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cdd32c]/10 border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] md:text-xs font-mono font-black uppercase tracking-widest mb-4">
            <Sparkles size={12} />
            <span>[ THE_FOUNDRY / CORE_ENGINEERING_ROSTER ]</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.92]">
                OUR <span className="text-[#cdd32c]">TEAM.</span>
              </h1>
              <p className="text-slate-400 mt-4 max-w-2xl font-light text-sm md:text-lg leading-relaxed">
                Direct engineer-to-client collaboration. Meet the founders, systems architects, and product developers powering WayZenTech.
              </p>
            </div>

            {/* LIVE ENGINEER DESK BADGE */}
            <div className="bg-[#121218] border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md self-start lg:self-auto flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#cdd32c] animate-ping" />
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                  Direct WhatsApp Engineering Desk
                </p>
                <p className="text-[9px] font-mono text-[#cdd32c]">
                  +91 9398724704 • Instant Founder Connect
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* --- FOUNDER & PRINCIPAL ARCHITECT SPOTLIGHT (V. MAHESH) --- */}
        {founder && (
          <section className="mb-20 md:mb-28">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-[#101015] border border-white/[0.08] hover:border-white/15 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl transition-all duration-500"
            >
              {/* Subtle ambient lighting */}
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#cdd32c]/10 rounded-full blur-[100px] pointer-events-none" />
              
              {/* Watermark index */}
              <div className="absolute top-6 right-8 text-7xl sm:text-9xl font-black font-mono text-white/[0.03] select-none pointer-events-none">
                01
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
                
                {/* Left: Founder Portrait (Natural, proportional portrait) */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[320px] sm:max-w-[350px] aspect-[4/5] rounded-[24px] overflow-hidden bg-[#16161e] shadow-2xl border border-white/10 group">
                    <img 
                      src={founder.img} 
                      alt={founder.name} 
                      className="w-full h-full object-cover object-top filter grayscale-[25%] contrast-[1.05] brightness-95 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                      onError={(e) => { 
                        if (founder.fallbackImg && e.target.src !== founder.fallbackImg) {
                          e.target.src = founder.fallbackImg;
                        } else {
                          e.target.src = "/logo-watermark.png";
                        }
                      }}
                    />
                    {/* Soft base gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Top Status */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-[#cdd32c] animate-pulse" />
                      <span>HYDERABAD // HQ</span>
                    </div>

                    {/* Bottom Pill */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-black text-[#0a0101] tracking-widest uppercase bg-[#cdd32c] px-3 py-1 rounded-md shadow-md">
                        FOUNDER
                      </span>
                      <span className="text-xs font-mono font-bold text-white/90 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                        01
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Editorial Profile */}
                <div className="lg:col-span-7 text-left space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cdd32c]/10 text-[#cdd32c] text-xs font-mono font-black uppercase tracking-widest border border-[#cdd32c]/20">
                    <ShieldCheck size={13} />
                    <span>FOUNDER & PRINCIPAL SYSTEMS ARCHITECT</span>
                  </div>

                  <div>
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-tight">
                      {founder.name}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 font-light mt-2 max-w-xl leading-relaxed">
                      Leading WayZenTech's core engineering operations across full-stack MERN systems, custom AI workflows, and cloud deployments with direct, zero-broker client communication.
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                    <p className="text-base sm:text-lg text-slate-200 font-light italic leading-relaxed">
                      “We engineer software as high-velocity commercial assets, not digital shelf-ware. Every system is built to process real transactions, dominate search rankings, and scale seamlessly under load.”
                    </p>
                  </div>

                  {/* Core Architectural Disciplines */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">
                      [ CORE ARCHITECTURAL DISCIPLINES ]
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {founder.stacks.map((stack, idx) => (
                        <span 
                          key={idx}
                          className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#cdd32c]" />
                          <span>{stack}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={() => window.open(`https://wa.me/919398724704?text=Hi%20Mahesh,%20I%20want%20to%20discuss%20an%20engineering%20project%20with%20WayZenTech.`, '_blank')}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#cdd32c] text-[#0a0101] font-mono font-black text-xs uppercase tracking-wider hover:bg-white hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-[#cdd32c]/20 cursor-pointer"
                    >
                      <MessageCircle size={16} />
                      <span>TALK WITH FOUNDER ON WHATSAPP</span>
                    </button>

                    <div className="flex gap-2">
                      <a 
                        href={founder.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-11 h-11 bg-white/[0.04] hover:bg-[#cdd32c] hover:text-[#0a0101] rounded-xl flex items-center justify-center text-white transition-all border border-white/10"
                        title="LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a 
                        href={founder.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-11 h-11 bg-white/[0.04] hover:bg-[#cdd32c] hover:text-[#0a0101] rounded-xl flex items-center justify-center text-white transition-all border border-white/10"
                        title="Instagram"
                      >
                        <Instagram size={16} />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </section>
        )}

        {/* --- INTERACTIVE CATEGORY FILTER PILLS --- */}
        <div className="mb-10 flex items-center gap-2 md:gap-3 overflow-x-auto md:overflow-visible flex-nowrap md:flex-wrap no-scrollbar pb-2">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive 
                    ? "bg-[#cdd32c] text-[#0a0101] border-[#cdd32c] shadow-md shadow-[#cdd32c]/20" 
                    : "bg-white/5 text-slate-300 border-white/10 hover:border-white/25"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                  isActive ? "bg-[#0a0101] text-[#cdd32c]" : "bg-white/10 text-slate-400"
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* --- ARCHITECTURAL DOSSIER GRID (REAL TEAM MEMBERS & PHOTOS) --- */}
        <section className="mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredTeam.map((member, idx) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="rounded-[28px] bg-[#111116] border border-white/[0.08] hover:border-[#cdd32c]/50 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] group text-left"
                >
                  <div>
                    {/* Top Bar: Node Index & Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono font-black text-[#cdd32c] tracking-wider">
                        NODE_{member.num}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[9px] font-mono uppercase text-slate-300 tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cdd32c] animate-pulse" />
                        <span>{member.category}</span>
                      </span>
                    </div>

                    {/* Proportional Studio Portrait Frame */}
                    <div className="relative aspect-[4/4.2] w-full rounded-2xl overflow-hidden bg-[#181822] mb-5 border border-white/[0.06] group-hover:border-[#cdd32c]/30 transition-colors shadow-inner">
                      <img 
                        src={member.img} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top filter grayscale-[50%] contrast-[1.05] brightness-95 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-105 transition-all duration-500 ease-out"
                        onError={(e) => { 
                          if (member.fallbackImg && e.target.src !== member.fallbackImg) {
                            e.target.src = member.fallbackImg;
                          } else {
                            e.target.src = "/logo-watermark.png";
                          }
                        }}
                      />
                      {/* Gentle base gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111116]/80 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Role Tag over bottom of photo */}
                      <div className="absolute bottom-3 left-3">
                        <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#0a0101] bg-[#cdd32c] px-2.5 py-1 rounded-md shadow-md">
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {/* Member Information (Dedicated Space — ZERO overlap over face!) */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#cdd32c] transition-colors leading-tight">
                        {member.name}
                      </h3>

                      <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2">
                        {member.bio}
                      </p>

                      {/* Competency Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {member.stacks.slice(0, 3).map((stk, i) => (
                          <span 
                            key={i} 
                            className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-slate-300 group-hover:border-white/15 transition-colors"
                          >
                            {stk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-4 mt-5 border-t border-white/[0.08] flex items-center justify-between">
                    <button
                      onClick={() => window.open(`https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20want%20to%20connect%20with%20${encodeURIComponent(member.name)}%20(${encodeURIComponent(member.role)})`, '_blank')}
                      className="text-xs font-mono font-black uppercase tracking-wider text-[#cdd32c] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer py-1"
                    >
                      <MessageCircle size={14} />
                      <span>DIRECT SYNC</span>
                    </button>

                    <div className="flex gap-1.5">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-[#cdd32c] hover:text-[#0a0101] flex items-center justify-center text-white transition-all border border-white/10"
                        title="LinkedIn"
                      >
                        <Linkedin size={13} />
                      </a>
                      <a 
                        href={member.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-[#cdd32c] hover:text-[#0a0101] flex items-center justify-center text-white transition-all border border-white/10"
                        title="Instagram"
                      >
                        <Instagram size={13} />
                      </a>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* --- FOUNDRY PROTOCOLS: WHY OUR TEAM MODEL OUTPERFORMS AGENCIES --- */}
        <section className="mb-24 text-left">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#cdd32c] font-black block mb-2">
              [ THE FOUNDRY STANDARD ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Why Our Model Outperforms Traditional Agencies.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((pr, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-[#121218] border border-white/[0.08] hover:border-[#cdd32c]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black font-mono text-[#cdd32c] block mb-3">
                    {pr.num}
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2">
                    {pr.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- BOTTOM CALL TO ACTION: START PROJECT --- */}
        <section className="bg-[#101014] border border-white/10 rounded-[36px] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#cdd32c] font-black">
              [ COLLABORATE WITH THE FOUNDRY ]
            </span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
              READY TO BUILD WITH <span className="text-[#cdd32c]">OUR CORE?</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed">
              No sales reps or middle layers. Get direct architectural review, transparent pricing, and rapid delivery.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' }), 300);
                }}
                className="bg-[#cdd32c] hover:bg-white text-[#0a0101] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#cdd32c]/20 cursor-pointer"
              >
                <span>Initialize Project Request</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => window.open('https://wa.me/919398724704', '_blank')}
                className="bg-white/10 hover:bg-[#25D366] hover:text-black text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Talk to Lead Architect (+91 9398724704)</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Team;
