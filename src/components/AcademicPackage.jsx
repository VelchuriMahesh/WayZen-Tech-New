import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Copy, Smartphone, ShieldCheck, Zap, ArrowRight, CheckCircle2, 
  Plus, Minus, Printer, Fingerprint, 
  FileCode, BookOpen, Trophy, ChevronRight, Mail
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';

// --- 1. LUXURY CERTIFICATE-STYLE RECEIPT ---
const ReceiptTemplate = React.forwardRef(({ amount, transactionId, date }, ref) => (
  <div ref={ref} className="p-16 bg-white text-slate-900 w-[850px] font-sans relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none rotate-[-35deg]">
        <h1 className="text-[12rem] font-black italic">WAYZEN</h1>
    </div>
    <div className="relative z-10 border-[10px] border-double border-slate-100 p-12">
      <div className="flex justify-between items-center mb-16">
        <div>
          <h1 className="text-5xl font-black tracking-tighter uppercase italic">Wayzen<span className="text-blue-600">Tech</span></h1>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.6em] mt-2">Official Digital Asset Certification</p>
        </div>
        <div className="bg-slate-900 p-5 rounded-2xl text-white shadow-2xl">
            <Trophy size={40} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Authenticated UTR</p>
                <p className="text-sm font-mono font-bold text-blue-600 break-all uppercase">{transactionId || 'MANUAL_ENTRY'}</p>
            </div>
            <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Verification Date</p>
                <p className="font-bold text-lg">{date}</p>
            </div>
        </div>
        <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] flex flex-col justify-center text-center shadow-2xl">
            <p className="text-blue-400 font-black uppercase text-[10px] tracking-[0.4em] mb-2">Total Paid Amount</p>
            <h2 className="text-6xl font-black italic tracking-tighter">₹{amount}.00</h2>
        </div>
      </div>
      <div className="flex justify-between items-end pt-12 border-t border-slate-100">
        <div className="flex items-center gap-6">
            <QRCodeSVG value={`https://wayzen.tech/verify/${transactionId}`} size={80} />
            <p className="text-[9px] text-slate-400 font-bold max-w-[200px] leading-relaxed uppercase">
                Manual Verification Complete. Transaction logged in Wayzen Private Ledger.
            </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-black uppercase tracking-widest">Authorized Auditor</p>
          <p className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter">Wayzen Tech India</p>
        </div>
      </div>
    </div>
  </div>
));

// --- 2. THE MANUAL VERIFICATION MODAL ---
export const PaymentModal = ({ isOpen, onClose, upiId = "9398724704@ybl" }) => {
  const [amount, setAmount] = useState(1000);
  const [step, setStep] = useState('pay'); 
  const [utr, setUtr] = useState('');
  const [userKey, setUserKey] = useState('');
  
  const MASTER_KEY = "WAYZEN77"; 
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-slate-900/40 backdrop-blur-md" />
        
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative w-full max-w-[440px] bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="p-10">
            {/* STEP 1: PAYMENT SCANNER */}
            {step === 'pay' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 text-center">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">01. Secure Scan</span>
                  <button onClick={onClose} className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-slate-900 transition-all"><X size={20}/></button>
                </div>

                <div className="flex items-center justify-center gap-6 mb-4">
                    <button onClick={() => setAmount(Math.max(1000, amount - 1000))} className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-100 transition-all"><Minus size={18}/></button>
                    <h2 className="text-6xl font-black text-slate-900 italic tracking-tighter">₹{amount}</h2>
                    <button onClick={() => setAmount(amount + 1000)} className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200"><Plus size={18}/></button>
                </div>
                
                <div className="bg-white p-6 rounded-[2.5rem] shadow-xl inline-block border border-slate-50 mb-4">
                    <QRCodeSVG value={`upi://pay?pa=${upiId}&pn=WayzenTech&am=${amount}&cu=INR`} size={160} />
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                      <Smartphone className="text-blue-600" size={18} />
                      <p className="text-xs font-bold text-slate-600">{upiId}</p>
                  </div>
                  <button onClick={() => navigator.clipboard.writeText(upiId)} className="text-blue-600 hover:scale-110 transition-transform"><Copy size={16}/></button>
                </div>

                <button onClick={() => setStep('submit-utr')} className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-3 transition-all">
                  I Have Paid ₹{amount} <ArrowRight size={18} />
                </button>
              </motion.div>
            )}

            {/* STEP 2: UTR SUBMISSION */}
            {step === 'submit-utr' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 text-center">
                  <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                      <Fingerprint size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">Submit UTR</h3>
                  <input 
                      type="number" 
                      placeholder="Enter 12-Digit ID" 
                      value={utr}
                      onChange={(e) => setUtr(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 p-6 rounded-2xl text-slate-900 text-3xl font-black text-center outline-none" 
                  />
                  <button onClick={() => utr.length >= 12 ? setStep('verify-code') : alert("Enter valid 12-digit UTR")} className="w-full bg-blue-600 text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl">Submit Reference</button>
              </motion.div>
            )}

            {/* STEP 3: MANUAL GMAIL KEY */}
            {step === 'verify-code' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 text-center">
                <div className="bg-amber-50 border border-amber-100 p-6 rounded-[2rem]">
                  <Mail className="text-amber-600 mx-auto mb-3" size={32} />
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                      Verification for UTR: <span className="font-black text-slate-900">#{utr}</span><br/>
                      Email your screenshot to: <span className="text-amber-700 font-black">wayzentech@gmail.com</span><br/>
                      Enter the "Unlock Key" received below.
                  </p>
                </div>
                <input type="text" placeholder="ENTER KEY" value={userKey} onChange={(e) => setUserKey(e.target.value)} className="w-full bg-slate-50 border border-slate-100 py-6 text-center text-3xl font-black text-slate-900 outline-none rounded-2xl uppercase" />
                <button onClick={() => userKey === MASTER_KEY ? setStep('success') : alert("Invalid Key")} className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest">Unlock Access</button>
              </motion.div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === 'success' && (
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center space-y-8">
                <CheckCircle2 size={60} className="text-emerald-500 mx-auto" />
                <h3 className="text-slate-900 text-4xl font-black tracking-tighter uppercase italic">Verified</h3>
                <button onClick={() => reactToPrintFn()} className="w-full bg-blue-600 text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3">
                    <Printer size={18} /> Print Official Receipt
                </button>
                <button onClick={onClose} className="text-slate-400 font-bold uppercase text-[10px]">Close</button>
              </motion.div>
            )}
          </div>
        </motion.div>

        <div style={{ display: "none" }}>
          <ReceiptTemplate ref={contentRef} amount={amount} transactionId={utr} date={new Date().toLocaleDateString()} />
        </div>
      </div>
    </AnimatePresence>
  );
};

// --- 3. THE LANDING UI ---
export const AcademicPackage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section className="bg-white py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] bg-blue-50 px-4 py-2 rounded-full flex w-fit gap-2 items-center">
                    <Zap size={12} className="fill-blue-600" /> Wayzen Academic Suite
                </span>
                <h2 className="text-slate-900 text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] mt-8 mb-8">
                    Architect Your <br/> <span className="text-blue-600 underline decoration-8 underline-offset-8">Future.</span>
                </h2>
                <div className="flex items-center gap-8 mb-12">
                    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 text-center">
                        <p className="text-4xl font-black text-slate-900 italic tracking-tighter">₹1,000</p>
                    </div>
                    <div className="text-slate-300 line-through text-2xl font-bold italic">₹5,000</div>
                </div>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="group bg-slate-900 text-white px-12 py-7 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all flex items-center gap-4 shadow-2xl"
                >
                    Unlock Official Package <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
                {[
                    { icon: <FileCode className="text-blue-600" />, title: "Full Code", desc: "Native Assets" },
                    { icon: <BookOpen className="text-indigo-600" />, title: "Document", desc: "60+ Pages" },
                    { icon: <ShieldCheck className="text-emerald-600" />, title: "Research", desc: "Paper Draft" },
                    { icon: <Trophy className="text-amber-600" />, title: "Success", desc: "Certified" }
                ].map((item, i) => (
                    <motion.div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:border-blue-500 transition-all">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">{item.icon}</div>
                        <h4 className="text-slate-900 font-black text-sm uppercase tracking-tighter italic">{item.title}</h4>
                        <p className="text-slate-400 text-[10px] font-bold uppercase mt-2">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};