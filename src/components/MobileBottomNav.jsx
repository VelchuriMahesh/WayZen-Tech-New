import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Cpu, Info, Users, MessageCircle } from 'lucide-react';

export const MobileBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { id: 'home', label: 'Home', path: '/', icon: Home },
    { id: 'services', label: 'Services', path: '/services', icon: Cpu },
    { id: 'about', label: 'About', path: '/about', icon: Info },
    { id: 'team', label: 'Team', path: '/team', icon: Users },
  ];

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[90] bg-white/90 backdrop-blur-2xl border-t border-slate-200/80 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] px-2 py-1.5 pb-safe">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item.path)}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all ${
                isActive ? 'text-blue-600 scale-105' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className={`p-1 rounded-lg ${isActive ? 'bg-blue-50' : 'bg-transparent'}`}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-black tracking-wider uppercase mt-0.5 ${isActive ? 'text-blue-600' : 'text-slate-500'}`}>
                {item.label}
              </span>
            </button>
          );
        })}

        <button
          onClick={() => window.open('https://wa.me/919398724704', '_blank')}
          className="flex flex-col items-center justify-center py-1.5 px-3 text-emerald-600 hover:text-emerald-700"
        >
          <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600">
            <MessageCircle size={20} strokeWidth={2.5} />
          </div>
          <span className="text-[10px] font-black tracking-wider uppercase mt-0.5 text-emerald-600">
            Chat
          </span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
