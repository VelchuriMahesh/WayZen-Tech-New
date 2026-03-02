import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Plus, Minus, Printer, Fingerprint, 
  Cpu, Zap, Smartphone, ArrowRight, Lock, CheckCircle2, Loader2
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';
import emailjs from '@emailjs/browser';

// --- THE RECEIPT (SAME AS BEFORE) ---
const CyberReceipt = React.forwardRef(({ amount, transactionId, date, name }, ref) => (
  <div 
    ref={ref} 
    className="p-16 bg-white text-slate-900 w-[850px] font-sans relative overflow-hidden border-[16px] border-slate-100"
    style={{ minHeight: '1000px' }}
  >
    {/* --- 1. THE LOGO WATERMARK (BACKGROUND) --- */}
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none rotate-[-12deg]">
        <img 
          src="/logo.png" 
          alt="Wayzen Logo Watermark" 
          className="w-[500px] h-auto object-contain" 
        />
    </div>

    <div className="relative z-10">
      {/* --- 2. HEADER WITH LOGO --- */}
      <div className="flex justify-between items-start mb-16 border-b-2 border-slate-100 pb-10">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Wayzen Logo" className="w-16 h-16 object-contain" />
          <div>
            <h1 className="text-4xl font-black tracking-tighter uppercase italic">
              Wayzen<span className="text-blue-600">Tech</span>
            </h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Official Payment Certificate</p>
          </div>
        </div>
        <div className="text-right">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-lg font-mono text-xs mb-2">
            TRANS_ID: {transactionId?.slice(0, 8)}
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase">Issued: {date}</p>
        </div>
      </div>

      {/* --- 3. RECIPIENT DETAILS --- */}
      <div className="mb-16">
          <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Verified Recipient</p>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight italic border-l-4 border-blue-600 pl-4">
            {name || 'Valued Client'}
          </h2>
      </div>

      {/* --- 4. PAYMENT BREAKDOWN --- */}
      <div className="grid grid-cols-2 gap-12 mb-20">
        <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Payment Method</p>
                <p className="text-sm font-bold text-slate-700 uppercase">UPI Digital Transfer</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Authenticated UTR</p>
                <p className="text-sm font-mono font-bold text-blue-600 break-all uppercase italic">{transactionId}</p>
            </div>
        </div>

        {/* Amount Card */}
        <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] flex flex-col justify-center text-center shadow-2xl relative overflow-hidden">
            {/* Small subtle logo inside the amount card */}
            <img src="/logo.png" className="absolute -right-4 -bottom-4 w-32 opacity-10" alt="" />
            
            <p className="text-blue-400 font-black uppercase text-[10px] tracking-[0.4em] mb-2">Total Amount Settled</p>
            <h2 className="text-7xl font-black italic tracking-tighter">₹{amount}.00</h2>
            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                <ShieldCheck size={14}/> Full Payment Received
            </div>
        </div>
      </div>

      {/* --- 5. FOOTER & SEAL --- */}
      <div className="pt-12 border-t-2 border-slate-100 flex justify-between items-end mt-auto">
        <div className="max-w-[300px]">
          <p className="text-[9px] text-slate-400 font-bold uppercase leading-relaxed mb-4">
            This document serves as proof of payment for digital services provided by Wayzen Tech India. Manual verification complete via Node #00921.
          </p>
          <div className="flex gap-1">
             {[...Array(20)].map((_, i) => (
                <div key={i} className={`h-4 w-[2px] ${i % 4 === 0 ? 'bg-slate-300' : 'bg-slate-100'}`} />
             ))}
          </div>
        </div>
        
        <div className="text-right flex flex-col items-end">
           {/* Stylized Digital Signature */}
          <div className="mb-2 italic text-blue-600 font-serif text-xl opacity-70">Wayzen Tech Official</div>
          <p className="text-xs font-black uppercase tracking-widest text-slate-900">Authorized Auditor</p>
          <p className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter">Verified & Signed Digitally</p>
        </div>
      </div>
    </div>
  </div>
));

// --- THE INLINE SECTION COMPONENT ---
export const UnlockPortalSection = ({ upiId = "9398724704@ybl" }) => {
  const [step, setStep] = useState('info'); 
  const [amount, setAmount] = useState(1000);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [utr, setUtr] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [isSending, setIsSending] = useState(false);

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const handleNotifyAdmin = async () => {
    if (utr.length < 12) return alert("Enter 12-digit UTR.");
    setIsSending(true);
    const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(newOTP);

    try {
        await emailjs.send(
            'service_8du8i8r', // YOUR SERVICE ID
            'template_sdexeda', // YOUR TEMPLATE ID
            { user_name: name, user_email: email, utr_number: utr, paid_amount: amount, otp_code: newOTP }, 
            'QUE8H4C5XzB1Esc6G' // YOUR PUBLIC KEY
        );
        setStep('await');
    } catch (e) { setStep('await'); } finally { setIsSending(false); }
  };

  return (
    <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
                Pay & <span className="text-blue-600">Unlock</span>
            </h2>
            <p className="text-slate-500 mt-2 font-medium italic underline decoration-blue-500/20">
                Verify payment to unlock your official digital assets.
            </p>
        </div>

        {/* The Activation Card */}
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/5">
          {/* Cyber Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Instructions */}
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Protocol Active</span>
                </div>
                <h3 className="text-3xl font-black text-white leading-tight uppercase italic">
                    Ready to <br/> <span className="text-cyan-400">Authenticate?</span>
                </h3>
                <ul className="space-y-3 text-white/50 text-xs font-bold uppercase tracking-wide">
                    <li className="flex items-center gap-3"><Zap size={14} className="text-cyan-400"/> Choose your Package Amount</li>
                    <li className="flex items-center gap-3"><Smartphone size={14} className="text-cyan-400"/> Pay via Secure QR</li>
                    <li className="flex items-center gap-3"><Fingerprint size={14} className="text-cyan-400"/> Enter UTR for Verification</li>
                    <li className="flex items-center gap-3"><ShieldCheck size={14} className="text-cyan-400"/> Receive OTP & Unlock</li>
                </ul>
            </div>

            {/* Right Side: Step-by-Step UI */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10">
                {step === 'info' && (
                  <div className="space-y-4">
                    <input type="text" placeholder="NAME" value={name} onChange={(e)=>setName(e.target.value)} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-cyan-500/50 transition-all font-mono" />
                    <input type="email" placeholder="EMAIL" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-cyan-500/50 transition-all font-mono" />
                    <button onClick={()=>name && email ? setStep('pay') : alert("Identify yourself")} className="w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-xl hover:bg-cyan-400 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                        Next <ArrowRight size={16}/>
                    </button>
                  </div>
                )}

                {step === 'pay' && (
                  <div className="text-center space-y-6">
                    <div className="flex justify-center items-center gap-4">
                      <button onClick={()=>setAmount(Math.max(1000, amount-1000))} className="text-cyan-400"><Minus/></button>
                      <span className="text-4xl font-mono font-bold text-white italic">₹{amount}</span>
                      <button onClick={()=>setAmount(amount+1000)} className="text-cyan-400"><Plus/></button>
                    </div>
                    <div className="p-3 bg-white rounded-xl inline-block">
                      <QRCodeSVG value={`upi://pay?pa=${upiId}&pn=Wayzen&am=${amount}&cu=INR`} size={140} />
                    </div>
                    <button onClick={()=>setStep('utr')} className="w-full py-4 bg-white/10 text-white font-black rounded-xl uppercase tracking-widest text-xs">Paid, Verify UTR</button>
                  </div>
                )}

                {step === 'utr' && (
                  <div className="space-y-4 text-center">
                    <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Enter Transaction UTR</p>
                    <input type="number" placeholder="0000 0000 0000" value={utr} onChange={(e)=>setUtr(e.target.value)} className="w-full bg-slate-950 border-2 border-white/10 p-4 rounded-xl text-center text-xl font-mono font-bold text-cyan-400 outline-none" />
                    <button onClick={handleNotifyAdmin} disabled={isSending || utr.length < 12} className="w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-xl uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                      {isSending ? <Loader2 className="animate-spin" /> : "Sync Node"}
                    </button>
                  </div>
                )}

                {step === 'await' && (
                  <div className="space-y-4 text-center">
                    <div className="bg-amber-500/5 p-4 rounded-2xl border border-amber-500/20">
                        <Lock className="mx-auto text-amber-500 mb-2" size={24}/>
                        <p className="text-[10px] text-white/50 uppercase leading-tight font-bold">Waiting for Admin Node.<br/> Enter the <span className="text-amber-500">6-Digit OTP</span> sent by Admin.</p>
                    </div>
                    <input type="number" placeholder="OTP" value={otpInput} onChange={(e)=>setOtpInput(e.target.value)} className="w-full bg-slate-950 border-2 border-white/10 p-4 rounded-xl text-center text-3xl font-mono font-black text-white outline-none" />
                    <button onClick={() => otpInput === generatedOTP ? setStep('success') : alert("Invalid OTP")} className="w-full py-4 bg-white text-black font-black rounded-xl uppercase tracking-widest text-xs hover:bg-cyan-500 transition-colors">Unlock</button>
                  </div>
                )}

                {step === 'success' && (
                  <div className="text-center space-y-4 py-4">
                    <CheckCircle2 size={48} className="text-cyan-400 mx-auto" />
                    <h2 className="text-xl font-black text-white uppercase italic tracking-tighter">System Unlocked</h2>
                    <button onClick={reactToPrintFn} className="w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-xl flex items-center justify-center gap-2 uppercase tracking-widest text-xs shadow-lg">
                      <Printer size={16}/> Print Log
                    </button>
                    <button onClick={()=>setStep('info')} className="text-[9px] text-white/20 uppercase font-bold tracking-widest">Restart Session</button>
                  </div>
                )}
            </div>
          </div>
        </div>

        {/* Hidden Print Container */}
        <div style={{ display: "none" }}>
            <CyberReceipt ref={contentRef} amount={amount} transactionId={utr} name={name} date={new Date().toLocaleString()} />
        </div>
      </div>
    </section>
  );
};