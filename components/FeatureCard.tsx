import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, colorClass }) => {
  return (
    <div className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg border border-slate-100 transition-all duration-300 hover:-translate-y-1 h-full">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colorClass} transition-transform group-hover:scale-110 duration-300`}>
        <Icon size={24} strokeWidth={2} />
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;