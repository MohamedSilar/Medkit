import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-teal-200 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;