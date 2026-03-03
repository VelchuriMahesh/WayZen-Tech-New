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
    <div className="relative min-h-screen bg-slate-50 overflow-x-hidden">
      
      {/* Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 100, 0] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 blur-[120px] rounded-full" 
        />
      </div>

      {/* Main Content Container - INCREASED PADDING TOP (pt-32 md:pt-48) */}
      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12 pt-32 md:pt-48">
        
        {/* Header Section - Higher Z-index to stay above other elements */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 relative z-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
             <h1 className="text-5xl font-black text-slate-900 tracking-tighter">WayZen <span className="text-blue-600">Control</span></h1>
             <div className="flex items-center gap-2 mt-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">System Online — v2.0</p>
             </div>
          </motion.div>

          <button 
            onClick={() => signOut(auth)} 
            className="bg-white text-red-600 border border-red-100 px-6 py-3 rounded-2xl font-bold hover:bg-red-600 hover:text-white flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <LogOut size={18}/> Logout
          </button>
        </div>

        {/* NAVIGATION TABS - Stickier positioning */}
        <div className="flex gap-2 mb-10 p-1.5 bg-slate-200/50 w-fit rounded-[24px] backdrop-blur-md border border-white/20 sticky top-24 z-30 shadow-sm">
          {[
            { id: 'requests', label: 'Inbox', icon: <MessageSquare size={18}/> },
            { id: 'projects', label: 'Projects', icon: <Briefcase size={18}/> },
            { id: 'team', label: 'Team', icon: <Users size={18}/> }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)} 
              className={`flex items-center gap-2 px-6 md:px-8 py-3 rounded-[20px] font-bold transition-all relative ${activeSubTab === tab.id ? 'text-white' : 'text-slate-500 hover:text-slate-800'}`}
            >
              {activeSubTab === tab.id && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-slate-900 rounded-[20px] shadow-lg" />
              )}
              <span className="relative z-10">{tab.icon}</span>
              <span className="relative z-10 hidden md:block">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main Grid Section */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* LEFT: FORM (Sticky to prevent getting lost) */}
          <AnimatePresence mode="wait">
            {activeSubTab !== 'requests' && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="lg:col-span-4"
              >
                <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[40px] border border-white shadow-xl lg:sticky lg:top-48">
                  <h3 className="text-2xl font-black mb-6 text-slate-800 flex items-center gap-2">
                    {editId ? <Edit2 className="text-blue-500" size={20}/> : <Plus className="text-blue-500" size={20}/>}
                    {editId ? 'Edit' : 'Create'}
                  </h3>
                  
                  <div className="space-y-4">
                    <input 
                      placeholder={activeSubTab === 'projects' ? "Project Title" : "Full Name"} 
                      className="w-full p-4 bg-white border border-slate-100 rounded-2xl outline-none focus:ring-2 ring-blue-500/20 transition-all shadow-sm" 
                      value={activeSubTab === 'projects' ? formData.title : formData.name} 
                      onChange={e => setFormData(activeSubTab === 'projects' ? {...formData, title: e.target.value} : {...formData, name: e.target.value})} 
                    />

                    {activeSubTab === 'projects' && (
                      <input 
                        placeholder="Category" 
                        className="w-full p-4 bg-white border border-slate-100 rounded-2xl outline-none focus:ring-2 ring-blue-500/20 transition-all shadow-sm" 
                        value={formData.category} 
                        onChange={e => setFormData({...formData, category: e.target.value})} 
                      />
                    )}

                    <textarea 
                      placeholder={activeSubTab === 'projects' ? "Description" : "Role"} 
                      className="w-full p-4 bg-white border border-slate-100 rounded-2xl h-28 outline-none focus:ring-2 ring-blue-500/20 transition-all shadow-sm resize-none" 
                      value={activeSubTab === 'projects' ? formData.desc : formData.role} 
                      onChange={e => setFormData(activeSubTab === 'projects' ? {...formData, desc: e.target.value} : {...formData, role: e.target.value})} 
                    />

                    <div className="relative border-2 border-dashed border-slate-200 rounded-3xl p-6 text-center hover:bg-blue-50 transition-all group cursor-pointer">
                      <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => setImageFile(e.target.files[0])} accept="image/*" />
                      <Upload size={20} className="mx-auto text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{imageFile ? imageFile.name : "Choose Image"}</span>
                    </div>

                    <button disabled={uploading} onClick={handleSave} className="w-full bg-slate-900 text-white p-5 rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-black shadow-lg transition-all active:scale-[0.98] disabled:opacity-50">
                      {uploading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                      {uploading ? "Uploading..." : "Publish Data"}
                    </button>
                    {editId && <button onClick={() => {setEditId(null); setFormData({title:'',name:'',desc:'',role:'',img:'',link:'',category:''})}} className="w-full text-slate-400 font-bold text-xs uppercase hover:text-slate-600">Cancel</button>}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* RIGHT: DATA LIST */}
          <div className={`${activeSubTab === 'requests' ? 'lg:col-span-12' : 'lg:col-span-8'} space-y-4`}>
            {loading ? (
              <div className="flex flex-col items-center justify-center p-20 gap-4">
                <Loader2 className="animate-spin text-blue-500" size={40} />
                <p className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Syncing Database...</p>
              </div>
            ) : (
              <motion.div layout className="space-y-4">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-white shadow-sm flex items-center gap-4 hover:shadow-md transition-all"
                    >
                      {activeSubTab === 'requests' ? (
                        <div className="w-full flex flex-col md:flex-row justify-between md:items-center gap-4 p-2">
                           <div>
                             <h4 className="font-black text-slate-900 leading-tight">{item.name}</h4>
                             <p className="text-blue-600 text-xs font-bold">{item.email}</p>
                             <p className="mt-2 text-slate-500 text-sm italic">"{item.message}"</p>
                           </div>
                           <button onClick={() => deleteDoc(doc(db, "requests", item.id)).then(fetchData)} className="p-3 text-red-400 hover:bg-red-50 rounded-xl transition-colors self-end md:self-center">
                              <Trash2 size={18} />
                           </button>
                        </div>
                      ) : (
                        <>
                          <img src={item.img} className="h-16 w-16 md:h-20 md:w-20 rounded-2xl object-cover shadow-sm" alt="" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-black text-slate-900 truncate">{item.title || item.name}</h4>
                            <p className="text-slate-500 text-xs font-medium truncate">{item.desc || item.role}</p>
                          </div>
                          <div className="flex gap-1 md:gap-2">
                            <button onClick={() => {setEditId(item.id); setFormData(item); window.scrollTo({top:0, behavior:'smooth'});}} className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                              <Edit2 size={18}/>
                            </button>
                            <button onClick={async () => { if(window.confirm("Delete?")) { await deleteDoc(doc(db, activeSubTab, item.id)); fetchData(); }}} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-600 hover:text-white transition-all">
                              <Trash2 size={18}/>
                            </button>
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};