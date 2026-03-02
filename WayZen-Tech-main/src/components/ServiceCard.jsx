import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const ServiceCard = ({ title, icon: Icon, skills, color }) => {
  // Mapping color names to Tailwind classes
  const colorMap = {
    purple: "hover:border-purple-400 bg-purple-50 text-purple-600",
    blue: "hover:border-blue-400 bg-blue-50 text-blue-600",
    emerald: "hover:border-emerald-400 bg-emerald-50 text-emerald-600",
  };

  return (
    <div className={`p-8 rounded-[2rem] border-2 border-slate-100 transition-all group bg-white ${colorMap[color].split(' ')[0]}`}>
      <div className={`mb-6 p-3 inline-block rounded-2xl transition-transform group-hover:scale-110 ${colorMap[color].split(' ').slice(1).join(' ')}`}>
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((s, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
            <CheckCircle2 size={16} className="text-blue-500" /> {s}
          </li>
        ))}
      </ul>
    </div>
  );
};