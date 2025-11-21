import React from 'react';
import { HeartPulse } from 'lucide-react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          
          {/* Brand */}
          <div className="flex items-center gap-2 text-white">
            <HeartPulse className="text-teal-500" size={28} />
            <span className="text-2xl font-bold tracking-tight">{APP_NAME}</span>
          </div>

          {/* Slogan */}
          <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
            Your all-in-one health companion.
          </p>

          {/* Divider */}
          <div className="w-12 h-1 bg-slate-800 rounded-full my-4"></div>

          {/* Copyright */}
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;