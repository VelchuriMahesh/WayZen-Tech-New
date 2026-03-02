import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase'; 
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LogOut, Plus, Trash2, Edit2, Users, Briefcase, X, 
  Save, Upload, Loader2, MessageSquare, Mail, Calendar, User, Link as LinkIcon, Globe
} from 'lucide-react';

export const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeSubTab, setActiveSubTab] = useState('requests'); 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editId, setEditId] = useState(null);

  // Expanded formData to include 'link' and 'category'
  const [formData, setFormData] = useState({ 
    title: '', name: '', desc: '', role: '', img: '', link: '', category: '' 
  });
  const [imageFile, setImageFile] = useState(null);

  const IMGBB_API_KEY = "64a203d1e6ee7b5d4c75ace73a18863b"; 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    if (user) fetchData();
    return () => unsubscribe();
  }, [user, activeSubTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const colRef = collection(db, activeSubTab);
      const snap = await getDocs(colRef);
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      
      if (activeSubTab === 'requests') {
        setItems(data.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)));
      } else {
        setItems(data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
    setLoading(false);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      let finalImageUrl = formData.img;

      if (imageFile) {
        const body = new FormData();
        body.append('image', imageFile);
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: 'POST',
          body: body
        });
        const data = await response.json();
        if (data.success) finalImageUrl = data.data.url; 
      }

      const finalData = { ...formData, img: finalImageUrl };

      if (editId) {
        await updateDoc(doc(db, activeSubTab, editId), finalData);
      } else {
        await addDoc(collection(db, activeSubTab), finalData);
      }

      setFormData({ title: '', name: '', desc: '', role: '', img: '', link: '', category: '' });
      setImageFile(null);
      setEditId(null);
      fetchData();
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .catch((err) => alert("Login Error: " + err.message));
  };

  if (!user) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
         {/* Animated BG for Login */}
         <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full" />
         
         <motion.form 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          onSubmit={handleLogin} className="relative z-10 bg-white/90 backdrop-blur-xl p-10 rounded-[40px] shadow-2xl w-full max-w-md border border-white"
         >
          <h2 className="text-3xl font-black mb-6 text-slate-900 tracking-tight">WayZen Admin</h2>
          <div className="space-y-4">
            <input type="email" placeholder="Email" className="w-full p-4 bg-slate-100/50 border-none rounded-2xl outline-none focus:ring-2 ring-blue-500 transition-all" onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" className="w-full p-4 bg-slate-100/50 border-none rounded-2xl outline-none focus:ring-2 ring-blue-500 transition-all" onChange={e => setPassword(e.target.value)} required />
            <button className="w-full bg-slate-900 text-white p-4 rounded-2xl font-bold hover:bg-black shadow-lg transition-all active:scale-95">Login to Dashboard</button>
          </div>
        </motion.form>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      
      {/* --- ADVANCED BACKGROUND MOTION --- */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 100, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -100, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-200/40 blur-[120px] rounded-full" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12 pt-28">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
             <h1 className="text-5xl font-black text-slate-900 tracking-tighter">WayZen <span className="text-blue-600">Control</span></h1>
             <div className="flex items-center gap-2 mt-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">System Online — v2.0</p>
             </div>
          </motion.div>
          <button onClick={() => signOut(auth)} className="bg-white text-red-600 border border-red-100 px-6 py-3 rounded-2xl font-bold hover:bg-red-50 flex items-center gap-2 transition-all shadow-sm">
            <LogOut size={18}/> Logout
          </button>
        </div>

        {/* --- NAVIGATION TABS --- */}
        <div className="flex gap-2 mb-10 p-1.5 bg-slate-200/50 w-fit rounded-[24px] backdrop-blur-md">
          {[
            { id: 'requests', label: 'Inbox', icon: <MessageSquare size={18}/> },
            { id: 'projects', label: 'Projects', icon: <Briefcase size={18}/> },
            { id: 'team', label: 'Team', icon: <Users size={18}/> }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)} 
              className={`flex items-center gap-2 px-8 py-3 rounded-[20px] font-bold transition-all relative ${activeSubTab === tab.id ? 'text-white' : 'text-slate-500 hover:text-slate-800'}`}
            >
              {activeSubTab === tab.id && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-slate-900 rounded-[20px] shadow-lg" />
              )}
              <span className="relative z-10">{tab.icon}</span>
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* --- LEFT: DYNAMIC FORM --- */}
          <AnimatePresence mode="wait">
            {activeSubTab !== 'requests' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="lg:col-span-4"
              >
                <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[40px] border border-white shadow-xl sticky top-28">
                  <h3 className="text-2xl font-black mb-6 text-slate-800 flex items-center gap-2">
                    {editId ? <Edit2 className="text-blue-500"/> : <Plus className="text-blue-500"/>}
                    {editId ? 'Edit Item' : 'Create New'}
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Dynamic Title/Name Field */}
                    <input 
                      placeholder={activeSubTab === 'projects' ? "Project Title" : "Full Name"} 
                      className="w-full p-4 bg-white border border-slate-100 rounded-2xl focus:ring-2 ring-blue-500/20 outline-none transition-all shadow-sm" 
                      value={activeSubTab === 'projects' ? formData.title : formData.name} 
                      onChange={e => setFormData(activeSubTab === 'projects' ? {...formData, title: e.target.value} : {...formData, name: e.target.value})} 
                    />

                    {/* NEW: Category Field (For Projects) */}
                    {activeSubTab === 'projects' && (
                      <input 
                        placeholder="Category (e.g. Branding, UI/UX)" 
                        className="w-full p-4 bg-white border border-slate-100 rounded-2xl focus:ring-2 ring-blue-500/20 outline-none transition-all shadow-sm" 
                        value={formData.category} 
                        onChange={e => setFormData({...formData, category: e.target.value})} 
                      />
                    )}

                    {/* NEW: External Link Field (For Projects) */}
                    {activeSubTab === 'projects' && (
                      <div className="relative">
                        <LinkIcon size={18} className="absolute left-4 top-4 text-slate-400" />
                        <input 
                          placeholder="Project URL (https://...)" 
                          className="w-full p-4 pl-12 bg-white border border-slate-100 rounded-2xl focus:ring-2 ring-blue-500/20 outline-none transition-all shadow-sm" 
                          value={formData.link} 
                          onChange={e => setFormData({...formData, link: e.target.value})} 
                        />
                      </div>
                    )}

                    <textarea 
                      placeholder={activeSubTab === 'projects' ? "Description" : "Role / Position"} 
                      className="w-full p-4 bg-white border border-slate-100 rounded-2xl h-32 focus:ring-2 ring-blue-500/20 outline-none transition-all shadow-sm" 
                      value={activeSubTab === 'projects' ? formData.desc : formData.role} 
                      onChange={e => setFormData(activeSubTab === 'projects' ? {...formData, desc: e.target.value} : {...formData, role: e.target.value})} 
                    />

                    <div className="relative border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all group cursor-pointer">
                      <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => setImageFile(e.target.files[0])} accept="image/*" />
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                          <Upload size={20} />
                        </div>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">{imageFile ? imageFile.name : "Upload Cover Photo"}</span>
                      </div>
                    </div>

                    <button disabled={uploading} onClick={handleSave} className="w-full bg-slate-900 text-white p-5 rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-black hover:shadow-2xl transition-all disabled:opacity-50">
                      {uploading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                      {uploading ? "Processing..." : "Sync to Website"}
                    </button>

                    {editId && (
                      <button onClick={() => {setEditId(null); setFormData({title:'',name:'',desc:'',role:'',img:'',link:'',category:''})}} className="w-full text-slate-400 font-bold text-sm hover:text-slate-600">
                        Cancel Edit
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* --- RIGHT: DATA LIST --- */}
          <div className={`${activeSubTab === 'requests' ? 'lg:col-span-12' : 'lg:col-span-8'} space-y-6`}>
            {loading ? (
              <div className="flex flex-col items-center justify-center p-20 gap-4">
                <Loader2 className="animate-spin text-blue-500" size={40} />
                <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Accessing Database...</p>
              </div>
            ) : (
              <motion.div layout className="grid grid-cols-1 gap-4">
                <AnimatePresence mode='popLayout'>
                  {items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white/60 backdrop-blur-md p-4 rounded-[32px] border border-white shadow-sm flex items-center gap-6 group hover:shadow-xl hover:bg-white transition-all"
                    >
                      {activeSubTab === 'requests' ? (
                        /* INBOX VIEW */
                        <div className="w-full p-4">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <User size={20} />
                              </div>
                              <div>
                                <h4 className="font-black text-slate-900 text-lg">{item.name}</h4>
                                <p className="text-blue-600 text-sm font-medium">{item.email}</p>
                              </div>
                            </div>
                            <div className="text-right">
                               <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Received</p>
                               <div className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-500 flex items-center gap-1">
                                  <Calendar size={12}/> {item.createdAt ? new Date(item.createdAt.seconds * 1000).toLocaleDateString() : 'Now'}
                               </div>
                            </div>
                          </div>
                          <div className="bg-white/50 p-6 rounded-2xl border border-slate-100 text-slate-600 text-sm leading-relaxed italic">
                            "{item.message}"
                          </div>
                          <div className="mt-4 flex justify-end">
                             <button onClick={() => deleteDoc(doc(db, "requests", item.id)).then(fetchData)} className="text-red-400 hover:text-red-600 p-2 transition-colors">
                                <Trash2 size={18} />
                             </button>
                          </div>
                        </div>
                      ) : (
                        /* PROJECTS / TEAM VIEW */
                        <>
                          <div className="relative h-24 w-32 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 shadow-inner">
                            <img src={item.img} className="w-full h-full object-cover" alt="" />
                            {item.link && (
                              <div className="absolute top-1 right-1 bg-blue-600 text-white p-1 rounded-md">
                                <Globe size={10} />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-black text-slate-900 text-lg truncate">{item.title || item.name}</h4>
                              {item.category && <span className="text-[9px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">{item.category}</span>}
                            </div>
                            <p className="text-slate-500 text-sm line-clamp-1 font-medium">{item.desc || item.role}</p>
                          </div>
                          <div className="flex gap-2 pr-4">
                            <button onClick={() => {setEditId(item.id); setFormData(item); window.scrollTo({top:0, behavior:'smooth'});}} className="p-4 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-[20px] transition-all">
                              <Edit2 size={20}/>
                            </button>
                            <button onClick={async () => { if(window.confirm("Delete permanently?")) { await deleteDoc(doc(db, activeSubTab, item.id)); fetchData(); }}} className="p-4 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-[20px] transition-all">
                              <Trash2 size={20}/>
                            </button>
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {!loading && items.length === 0 && (
                  <div className="text-center py-20 bg-white/40 border-2 border-dashed border-slate-200 rounded-[40px]">
                    <p className="text-slate-400 font-bold">No entries found in {activeSubTab}.</p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};