import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ShieldCheck, Plus, Minus, Printer, Fingerprint, 
  Cpu, Mail, User, Loader2, CheckCircle2, Zap, Smartphone, ArrowRight, Lock
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';
import emailjs from '@emailjs/browser';

// --- 1. THE CYBER RECEIPT (FOR PRINTING) ---
const CyberReceipt = React.forwardRef(({ amount, transactionId, date, name }, ref) => (
  <div ref={ref} className="p-12 bg-slate-950 text-cyan-400 w-[800px] font-mono border-[10px] border-slate-900 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full" />
    <div className="relative z-10">
      <div className="flex justify-between border-b-2 border-cyan-500/20 pb-8 mb-10">
        <div>
          <h1 className="text-5xl font-black tracking-tighter uppercase italic text-white">WAYZEN<span className="text-cyan-500">TECH</span></h1>
          <p className="text-[10px] text-cyan-500/60 uppercase tracking-[0.4em] mt-2">Verified Digital Asset Protocol</p>
        </div>
        <Cpu size={48} className="text-cyan-500 ml-auto" />
      </div>
      <div className="grid grid-cols-2 gap-10 mb-12">
        <div className="space-y-8">
          <div>
            <p className="text-[10px] uppercase text-cyan-500/40 mb-1 tracking-widest">Authorized Recipient</p>
            <p className="text-2xl text-white font-bold tracking-tight uppercase underline decoration-cyan-500/30">{name || 'Node_User'}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-cyan-500/40 mb-1 tracking-widest">Transaction Hash (UTR)</p>
            <p className="text-sm break-all text-cyan-200 font-bold bg-cyan-500/5 p-2 border border-cyan-500/10 uppercase">{transactionId}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-cyan-500/40 mb-1 tracking-widest">Timestamp</p>
            <p className="text-sm text-white font-bold">{date}</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-cyan-500/20 p-10 rounded-3xl text-center flex flex-col justify-center relative shadow-2xl">
          <p className="text-[11px] uppercase text-cyan-400 font-black mb-2 tracking-[0.3em]">Credits Settled</p>
          <h2 className="text-7xl font-black text-white italic drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">₹{amount}</h2>
        </div>
      </div>
      <div className="pt-8 border-t border-cyan-500/10 flex justify-between items-end italic opacity-50 text-[10px]">
        <p>This is a digitally generated certification. <br/> Wayzen Tech Node #00921-X</p>
        <p className="text-right uppercase font-bold">Authorized Auditor Signed</p>
      </div>
    </div>
  </div>
));

// --- 2. THE MAIN PORTAL ---
export const CyberPaymentModal = ({ isOpen, onClose, upiId = "9398724704@ybl" }) => {
  const [step, setStep] = useState('info'); // info, pay, utr, await, success
  const [amount, setAmount] = useState(1000);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [utr, setUtr] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [isSending, setIsSending] = useState(false);

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  // Generate random 6-digit OTP
  const createNewOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

  const handleNotifyAdmin = async () => {
    if (utr.length < 12) return alert("Enter 12-digit UTR.");
    setIsSending(true);

    const newOTP = createNewOTP();
    setGeneratedOTP(newOTP);

    const templateParams = {
        user_name: name,
        user_email: email,
        utr_number: utr,
        paid_amount: amount,
        otp_code: newOTP, // This is sent to your Gmail
    };

    try {
        // REPLACE THESE with your EmailJS credentials
        await emailjs.send(
            'service_8du8i8r', 
            'template_sdexeda', 
            templateParams, 
            'QUE8H4C5XzB1Esc6G'
        );
        setStep('await');
    } catch (error) {
        console.error("EmailJS Error:", error);
        setStep('await'); // For local testing
    } finally {
        setIsSending(false);
    }
  };

  const steps = {
    info: { title: "Identity", icon: <User size={18}/> },
    pay: { title: "Transfer", icon: <Zap size={18}/> },
    utr: { title: "Validate", icon: <Fingerprint size={18}/> },
    await: { title: "Verifying", icon: <Lock size={18}/> },
    success: { title: "Unlocked", icon: <CheckCircle2 size={18}/> }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xl">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-[420px] bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_-15px_rgba(6,182,212,0.4)]"
          >
            {/* Header */}
            <div className="h-24 bg-gradient-to-r from-cyan-600 to-blue-600 p-8 flex justify-between items-start">
                <div>
                    <h3 className="text-white font-black uppercase tracking-tighter text-xl italic leading-none">Wayzen<span className="text-cyan-200">Portal</span></h3>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />
                        <span className="text-[10px] text-cyan-100 font-bold uppercase tracking-widest opacity-80">Secure Node Active</span>
                    </div>
                </div>
                <button onClick={onClose} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"><X size={20} /></button>
            </div>

            <div className="p-8 -mt-6 bg-slate-900 rounded-t-[2rem] border-t border-white/5">
              {/* Progress */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">{steps[step].icon}</div>
                <div className="h-[2px] flex-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-cyan-500" initial={{ width: "0%" }} animate={{ width: step === 'info' ? '20%' : step === 'pay' ? '40%' : step === 'utr' ? '60%' : step === 'await' ? '80%' : '100%' }} />
                </div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{steps[step].title}</span>
              </div>

              {/* Step 1: Info */}
              {step === 'info' && (
                <div className="space-y-4">
                  <input type="text" placeholder="OPERATOR_NAME" value={name} onChange={(e)=>setName(e.target.value)} className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-cyan-500/50 font-mono" />
                  <input type="email" placeholder="GMAIL_ADDRESS" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-cyan-500/50 font-mono" />
                  <button onClick={()=>name && email ? setStep('pay') : alert("Complete credentials")} className="w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-2xl uppercase tracking-widest text-xs flex items-center justify-center gap-2 group">
                    Initialize <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 'pay' && (
                <div className="text-center space-y-6">
                  <div className="flex justify-center items-center gap-6">
                    <button onClick={()=>setAmount(Math.max(1000, amount-1000))} className="p-2 text-cyan-400"><Minus/></button>
                    <span className="text-5xl font-mono font-bold text-white italic">₹{amount}</span>
                    <button onClick={()=>setAmount(amount+1000)} className="p-2 text-cyan-400"><Plus/></button>
                  </div>
                  <div className="p-4 bg-white rounded-2xl inline-block shadow-xl">
                    <QRCodeSVG value={`upi://pay?pa=${upiId}&pn=Wayzen&am=${amount}&cu=INR`} size={160} />
                  </div>
                  <button onClick={()=>setStep('utr')} className="w-full py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl uppercase tracking-widest text-xs">I Have Sent Credits</button>
                </div>
              )}

              {/* Step 3: UTR Submission */}
              {step === 'utr' && (
                <div className="space-y-6 text-center">
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Enter 12-Digit Transaction UTR</p>
                  <input type="number" placeholder="0000 0000 0000" value={utr} onChange={(e)=>setUtr(e.target.value)} className="w-full bg-slate-950 border-2 border-white/10 p-5 rounded-2xl text-center text-2xl font-mono font-bold text-cyan-400 outline-none" />
                  <button onClick={handleNotifyAdmin} disabled={isSending || utr.length < 12} className="w-full py-5 bg-cyan-500 text-slate-950 font-black rounded-2xl uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                    {isSending ? <Loader2 className="animate-spin" /> : "Verify Handshake"}
                  </button>
                </div>
              )}

              {/* Step 4: OTP Waiting */}
              {step === 'await' && (
                <div className="space-y-6 text-center">
                  <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl">
                    <Loader2 className="animate-spin mx-auto text-cyan-400 mb-3" size={32} />
                    <p className="text-[10px] text-white/40 leading-relaxed uppercase">UTR {utr} is being verified.<br/>Contact Admin for your <span className="text-white font-bold underline">6-Digit OTP</span>.</p>
                  </div>
                  <input type="number" placeholder="0 0 0 0 0 0" value={otpInput} onChange={(e)=>setOtpInput(e.target.value)} className="w-full bg-slate-950 border-2 border-white/10 p-5 rounded-2xl text-center text-4xl font-mono font-black text-white tracking-[0.3em] outline-none" />
                  <button onClick={() => otpInput === generatedOTP ? setStep('success') : alert("Invalid OTP")} className="w-full py-5 bg-white text-black font-black rounded-2xl uppercase tracking-widest text-xs">Unlock Assets</button>
                </div>
              )}

              {/* Step 5: Success */}
              {step === 'success' && (
                <div className="text-center space-y-6 py-4">
                  <CheckCircle2 size={64} className="text-cyan-400 mx-auto" />
                  <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Verified</h2>
                  <button onClick={reactToPrintFn} className="w-full py-5 bg-cyan-500 text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-xs shadow-lg">
                    <Printer size={18}/> Print System Log
                  </button>
                </div>
              )}
            </div>
          </motion.div>
          <div style={{ display: "none" }}>
            <CyberReceipt ref={contentRef} amount={amount} transactionId={utr} name={name} date={new Date().toLocaleString()} />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};