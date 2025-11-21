import React from 'react';
import { APP_DESCRIPTION } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              About <span className="text-teal-600 relative inline-block">
                MedKit
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-teal-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h3>
          </div>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            {APP_DESCRIPTION}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;