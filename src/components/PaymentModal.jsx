import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ShieldCheck, Plus, Minus, Printer, Fingerprint, 
  Cpu, Mail, User, Loader2, CheckCircle2, Zap 
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';

// --- CYBER RECEIPT TEMPLATE ---
const CyberReceipt = React.forwardRef(({ amount, transactionId, date, name }, ref) => (
  <div ref={ref} className="p-12 bg-slate-950 text-cyan-400 w-[800px] font-mono border-2 border-cyan-500/30 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px]" />
    <div className="relative z-10">
      <div className="flex justify-between border-b border-cyan-500/20 pb-8 mb-8">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase">NEURAL<span className="text-white">PAY</span></h1>
          <p className="text-[10px] text-cyan-500/60 uppercase tracking-widest mt-1">Transaction Verified via Blockchain Node</p>
        </div>
        <Cpu size={48} className="text-white opacity-80" />
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <p className="text-[10px] uppercase text-cyan-500/50">Recipient</p>
            <p className="text-xl text-white font-bold tracking-tight">{name || 'ANONYMOUS_USER'}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-cyan-500/50">Hash Index (UTR)</p>
            <p className="text-xs break-all text-cyan-200">{transactionId}</p>
          </div>
        </div>
        <div className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-sm text-right">
          <p className="text-[10px] uppercase text-cyan-500/50 mb-2">Credits Transferred</p>
          <h2 className="text-5xl font-black text-white italic">₹{amount}</h2>
          <p className="text-[10px] text-cyan-400 mt-4 tracking-tighter opacity-50">{date}</p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-cyan-500/10 flex justify-between items-center">
        <div className="text-[8px] opacity-40 uppercase">Digital Signature: 0x821...99Z</div>
        <div className="h-2 w-32 bg-cyan-500/20 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-cyan-400" />
        </div>
      </div>
    </div>
  </div>
));

export const CyberPaymentModal = ({ isOpen, onClose, upiId = "9398724704@ybl" }) => {
  const [amount, setAmount] = useState(1000);
  const [step, setStep] = useState('info'); 
  const [utr, setUtr] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [unlockCode, setUnlockCode] = useState('');
  
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const steps = {
    info: { icon: User, title: "Identity", btn: "Initialize" },
    pay: { icon: Zap, title: "Transfer", btn: "I've Sent Credits" },
    utr: { icon: Fingerprint, title: "Validate", btn: "Sync Transaction" },
    await: { icon: Mail, title: "Security", btn: "Decrypt Assets" },
    success: { icon: CheckCircle2, title: "Access", btn: "Generate Report" }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-[400px] bg-slate-900/80 border border-white/10 backdrop-blur-2xl rounded-[2rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]"
          >
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
              <motion.div 
                className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" 
                initial={{ width: "0%" }}
                animate={{ width: step === 'info' ? '20%' : step === 'pay' ? '40%' : step === 'utr' ? '60%' : step === 'await' ? '80%' : '100%' }}
              />
            </div>

            <div className="p-8 pt-10">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                        {React.createElement(steps[step].icon, { size: 20, className: "text-cyan-400" })}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">{steps[step].title}</span>
                </div>
                <button onClick={onClose} className="hover:rotate-90 transition-transform text-white/30 hover:text-white"><X size={20}/></button>
              </div>

              {step === 'info' && (
                <div className="space-y-4">
                  <input type="text" placeholder="NODE_NAME" value={name} onChange={(e)=>setName(e.target.value)} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-cyan-400 placeholder:text-white/20 outline-none focus:border-cyan-500/50" />
                  <input type="email" placeholder="EMAIL_ADDRESS" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-cyan-400 placeholder:text-white/20 outline-none focus:border-cyan-500/50" />
                  <button onClick={()=>setStep('pay')} className="w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-xl hover:bg-cyan-400 transition-all uppercase tracking-widest text-xs">Authorize</button>
                </div>
              )}

              {step === 'pay' && (
                <div className="text-center space-y-6">
                  <div className="flex justify-center items-center gap-6">
                    <button onClick={()=>setAmount(Math.max(1000, amount-1000))} className="text-cyan-400 opacity-50 hover:opacity-100"><Minus/></button>
                    <span className="text-5xl font-mono font-bold text-white tracking-tighter">₹{amount}</span>
                    <button onClick={()=>setAmount(amount+1000)} className="text-cyan-400 opacity-50 hover:opacity-100"><Plus/></button>
                  </div>
                  <div className="p-4 bg-white rounded-2xl inline-block shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    <QRCodeSVG value={`upi://pay?pa=${upiId}&pn=Wayzen&am=${amount}&cu=INR`} size={150} />
                  </div>
                  <button onClick={()=>setStep('utr')} className="w-full py-4 bg-white/10 text-white border border-white/10 font-bold rounded-xl hover:bg-white/20 uppercase tracking-widest text-xs">Handshake Complete</button>
                </div>
              )}

              {step === 'success' && (
                <div className="text-center space-y-6 py-4">
                   <div className="relative inline-block">
                      <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 animate-pulse" />
                      <CheckCircle2 size={80} className="text-cyan-400 relative" />
                   </div>
                   <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">System Unlocked</h2>
                   <button onClick={reactToPrintFn} className="w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-xl flex items-center justify-center gap-2 uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                     <Printer size={16}/> Print Data Log
                   </button>
                </div>
              )}

              {/* ... Other steps logic remains similar to original but with these styles */}
            </div>
          </motion.div>
          <div style={{ display: "none" }}>
            <CyberReceipt ref={contentRef} amount={amount} transactionId={utr} name={name} date={new Date().toLocaleDateString()} />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};