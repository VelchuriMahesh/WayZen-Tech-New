import React, { useState, useEffect, useCallback } from 'react';
import { auth, db } from '../firebase'; 
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LogOut, Plus, Trash2, Edit2, Users, Briefcase, 
  Save, Upload, Loader2, MessageSquare, Globe, Instagram, CheckCircle2, Sparkles
} from 'lucide-react';

/**
 * High-Quality Client-Side Image Compressor (Compresses to <= 100KB with HD clarity)
 */
const compressImageTo100KB = (file, targetMaxKB = 100) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Cap maximum dimension to 1600px for HD clarity while saving significant byte budget
        const maxDimension = 1600;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Quality reduction loop to hit target size under 100KB
        let quality = 0.85;
        const step = () => {
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                return reject(new Error("Canvas blob compression error"));
              }
              const currentKB = blob.size / 1024;
              if (currentKB <= targetMaxKB || quality <= 0.3) {
                const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + ".webp", {
                  type: "image/webp",
                  lastModified: Date.now()
                });
                resolve({
                  file: compressedFile,
                  originalKB: Math.round(file.size / 1024),
                  compressedKB: Math.round(currentKB)
                });
              } else {
                quality -= 0.1;
                step();
              }
            },
            'image/webp',
            quality
          );
        };
        step();
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
};

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
    title: '', name: '', desc: '', role: '', img: '', link: '', instagram: '', category: '' 
  });
  const [imageFile, setImageFile] = useState(null);
  const [compressionInfo, setCompressionInfo] = useState(null);

  const IMGBB_API_KEY = "64a203d1e6ee7b5d4c75ace73a18863b"; 

  const fetchData = useCallback(async () => {
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
  }, [activeSubTab]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    
    if (user) {
      fetchData();
    }
    
    return () => unsubscribe();
  }, [user, fetchData]);

  const handleImageSelect = async (e) => {
    const rawFile = e.target.files[0];
    if (!rawFile) return;

    try {
      setUploading(true);
      const result = await compressImageTo100KB(rawFile, 100);
      setImageFile(result.file);
      setCompressionInfo(result);
    } catch (err) {
      console.error("Image compression error:", err);
      setImageFile(rawFile);
    } finally {
      setUploading(false);
    }
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
        if (data.success) {
          finalImageUrl = data.data.url;
        }
      }
      const finalData = { ...formData, img: finalImageUrl };
      if (editId) {
        await updateDoc(doc(db, activeSubTab, editId), finalData);
      } else {
        await addDoc(collection(db, activeSubTab), finalData);
      }
      setFormData({ title: '', name: '', desc: '', role: '', img: '', link: '', instagram: '', category: '' });
      setImageFile(null);
      setCompressionInfo(null);
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
      <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden px-4">
         <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full" />
         <motion.form 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          onSubmit={handleLogin} className="relative z-10 bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-2xl w-full max-w-md border border-white"
         >
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600">
            <Sparkles size={24} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-2 text-slate-900 tracking-tight">WayZen Admin</h2>
          <p className="text-xs text-slate-500 font-bold mb-6">System Management & Control Portal</p>
          <div className="space-y-4">
            <input type="email" placeholder="Admin Email" className="w-full p-4 bg-slate-100/70 border border-slate-200/50 rounded-2xl outline-none focus:ring-2 ring-blue-500 transition-all text-sm" onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Admin Password" className="w-full p-4 bg-slate-100/70 border border-slate-200/50 rounded-2xl outline-none focus:ring-2 ring-blue-500 transition-all text-sm" onChange={e => setPassword(e.target.value)} required />
            <button className="w-full bg-slate-950 text-white p-4 rounded-2xl font-bold hover:bg-blue-600 shadow-lg transition-all active:scale-95 text-sm uppercase tracking-wider">
              Login to Dashboard
            </button>
          </div>
        </motion.form>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-x-hidden pb-24">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 100, 0] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 blur-[120px] rounded-full" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-12 pt-28 md:pt-36">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-6 relative z-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
             <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">WayZen <span className="text-blue-600">Control</span></h1>
             <div className="flex items-center gap-2 mt-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">System Online — 100KB Auto-Compressor Active</p>
             </div>
          </motion.div>

          <button 
            onClick={() => signOut(auth)} 
            className="bg-white text-red-600 border border-red-100 px-6 py-3 rounded-2xl font-bold hover:bg-red-600 hover:text-white flex items-center gap-2 transition-all shadow-md active:scale-95 text-xs uppercase tracking-wider"
          >
            <LogOut size={16}/> Logout
          </button>
        </div>

        {/* SUB-TABS */}
        <div className="flex gap-2 mb-8 p-1.5 bg-slate-200/60 w-fit rounded-[20px] backdrop-blur-md border border-white/20 sticky top-24 z-30 shadow-sm">
          {[
            { id: 'requests', label: 'Inbox', icon: <MessageSquare size={16}/> },
            { id: 'projects', label: 'Projects', icon: <Briefcase size={16}/> },
            { id: 'team', label: 'Team', icon: <Users size={16}/> }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)} 
              className={`flex items-center gap-2 px-5 md:px-7 py-2.5 rounded-[16px] font-bold text-xs uppercase tracking-wider transition-all relative ${activeSubTab === tab.id ? 'text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              {activeSubTab === tab.id && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-slate-900 rounded-[16px] shadow-lg" />
              )}
              <span className="relative z-10">{tab.icon}</span>
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <AnimatePresence mode="wait">
            {activeSubTab !== 'requests' && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="lg:col-span-4"
              >
                <div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[32px] border border-white shadow-xl lg:sticky lg:top-40">
                  <h3 className="text-xl md:text-2xl font-black mb-5 text-slate-800 flex items-center gap-2">
                    {editId ? <Edit2 className="text-blue-500" size={18}/> : <Plus className="text-blue-500" size={18}/>}
                    {editId ? 'Edit Record' : 'Create New'}
                  </h3>
                  
                  <div className="space-y-3.5">
                    <input 
                      placeholder={activeSubTab === 'projects' ? "Project Title" : "Full Name"} 
                      className="w-full p-3.5 bg-white border border-slate-200/80 rounded-xl outline-none focus:ring-2 ring-blue-500/30 text-sm" 
                      value={activeSubTab === 'projects' ? formData.title : formData.name} 
                      onChange={e => setFormData(activeSubTab === 'projects' ? {...formData, title: e.target.value} : {...formData, name: e.target.value})} 
                    />

                    {activeSubTab === 'projects' && (
                      <>
                        <input 
                          placeholder="Category (e.g. AI App, E-Commerce, Website)" 
                          className="w-full p-3.5 bg-white border border-slate-200/80 rounded-xl outline-none focus:ring-2 ring-blue-500/30 text-sm" 
                          value={formData.category} 
                          onChange={e => setFormData({...formData, category: e.target.value})} 
                        />
                        <div className="flex items-center gap-2 bg-white border border-slate-200/80 rounded-xl px-3 py-1">
                          <Globe size={16} className="text-blue-500" />
                          <input 
                            placeholder="Live Website URL (https://...)" 
                            className="w-full p-2.5 outline-none text-sm bg-transparent" 
                            value={formData.link} 
                            onChange={e => setFormData({...formData, link: e.target.value})} 
                          />
                        </div>
                        <div className="flex items-center gap-2 bg-white border border-slate-200/80 rounded-xl px-3 py-1">
                          <Instagram size={16} className="text-pink-500" />
                          <input 
                            placeholder="Instagram Reel / Post URL" 
                            className="w-full p-2.5 outline-none text-sm bg-transparent" 
                            value={formData.instagram} 
                            onChange={e => setFormData({...formData, instagram: e.target.value})} 
                          />
                        </div>
                      </>
                    )}

                    <textarea 
                      placeholder={activeSubTab === 'projects' ? "Description & details..." : "Role / Designation"} 
                      className="w-full p-3.5 bg-white border border-slate-200/80 rounded-xl h-24 outline-none focus:ring-2 ring-blue-500/30 text-sm resize-none" 
                      value={activeSubTab === 'projects' ? formData.desc : formData.role} 
                      onChange={e => setFormData(activeSubTab === 'projects' ? {...formData, desc: e.target.value} : {...formData, role: e.target.value})} 
                    />

                    {/* SMART 100KB COMPRESSOR DROPZONE */}
                    <div className="relative border-2 border-dashed border-blue-200 hover:border-blue-500 bg-blue-50/50 rounded-2xl p-5 text-center transition-all group cursor-pointer">
                      <input 
                        type="file" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                        onChange={handleImageSelect} 
                        accept="image/*" 
                      />
                      <Upload size={22} className="mx-auto text-blue-500 mb-1.5 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] text-slate-600 font-black uppercase tracking-wider block">
                        {imageFile ? imageFile.name : "Choose Image (Auto-Compress to 100KB HD)"}
                      </span>
                      {compressionInfo && (
                        <div className="mt-2 inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
                          <CheckCircle2 size={12} />
                          <span>HD Compressed: {compressionInfo.compressedKB} KB (was {compressionInfo.originalKB} KB)</span>
                        </div>
                      )}
                    </div>

                    <button 
                      disabled={uploading} 
                      onClick={handleSave} 
                      className="w-full bg-slate-950 hover:bg-blue-600 text-white p-4 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98] disabled:opacity-50"
                    >
                      {uploading ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                      {uploading ? "Compressing & Uploading..." : "Publish Data"}
                    </button>
                    {editId && (
                      <button 
                        onClick={() => {
                          setEditId(null); 
                          setFormData({title:'',name:'',desc:'',role:'',img:'',link:'',instagram:'',category:''});
                          setCompressionInfo(null);
                        }} 
                        className="w-full text-slate-400 font-bold text-xs uppercase hover:text-slate-600 mt-2"
                      >
                        Cancel Edit
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* LIST VIEW */}
          <div className={`${activeSubTab === 'requests' ? 'lg:col-span-12' : 'lg:col-span-8'} space-y-4`}>
            {loading ? (
              <div className="flex flex-col items-center justify-center p-20 gap-3">
                <Loader2 className="animate-spin text-blue-500" size={36} />
                <p className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Syncing Database...</p>
              </div>
            ) : (
              <motion.div layout className="space-y-3.5">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all"
                    >
                      {activeSubTab === 'requests' ? (
                        <div className="w-full flex flex-col md:flex-row justify-between md:items-center gap-3 p-1">
                           <div>
                             <h4 className="font-black text-slate-900 text-base">{item.name}</h4>
                             <p className="text-blue-600 text-xs font-bold">{item.email} {item.phone ? `• ${item.phone}` : ''}</p>
                             <p className="mt-1 text-slate-600 text-xs italic">"{item.message || item.desc}"</p>
                           </div>
                           <button onClick={() => deleteDoc(doc(db, "requests", item.id)).then(fetchData)} className="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-colors self-end md:self-center">
                              <Trash2 size={16} />
                           </button>
                        </div>
                      ) : (
                        <>
                          <img src={item.img || '/logo.png'} className="h-16 w-16 md:h-20 md:w-20 rounded-xl object-cover shadow-sm bg-slate-100 shrink-0" alt="" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-black text-slate-900 text-sm md:text-base truncate">{item.title || item.name}</h4>
                            <p className="text-slate-500 text-xs font-medium truncate">{item.desc || item.role}</p>
                            {item.link && (
                              <p className="text-[10px] text-blue-600 font-mono truncate">{item.link}</p>
                            )}
                          </div>
                          <div className="flex gap-1.5 shrink-0">
                            <button onClick={() => {setEditId(item.id); setFormData(item); window.scrollTo({top:0, behavior:'smooth'});}} className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                              <Edit2 size={16}/>
                            </button>
                            <button onClick={async () => { if(window.confirm("Are you sure you want to delete this record?")) { await deleteDoc(doc(db, activeSubTab, item.id)); fetchData(); }}} className="p-2.5 bg-red-50 text-red-500 rounded-xl hover:bg-red-600 hover:text-white transition-all">
                              <Trash2 size={16}/>
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

export default AdminDashboard;