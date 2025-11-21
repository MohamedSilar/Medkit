import React from 'react';
import { FEATURES } from '../constants';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f766e 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Use-Cases</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What <span className="text-teal-600">MedKit</span> Can Do
          </h3>
          <p className="text-slate-600 text-lg">
            Explore the comprehensive features designed to improve your daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              colorClass={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;