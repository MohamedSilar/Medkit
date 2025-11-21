import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 py-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-slate-900 to-blue-900 opacity-90" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm text-teal-200 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide uppercase">Smart Healthcare Hub</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg animate-[fadeInUp_0.7s_ease-out_0.2s_forwards] opacity-0 translate-y-8">
          Your Health, <br/> Reimagined with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">MedKit</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed animate-[fadeInUp_0.7s_ease-out_0.4s_forwards] opacity-0 translate-y-8">
          Experience a holistic approach to wellness. From mental clarity to physical fitness, MedKit connects every aspect of your health in one intuitive platform.
        </p>
      </div>
    </section>
  );
};

export default Hero;