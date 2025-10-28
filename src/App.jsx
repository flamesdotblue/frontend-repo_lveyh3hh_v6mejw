import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <footer className="mx-auto max-w-6xl px-6 pb-16 text-white/60">
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
          <p className="text-white/80">Hey, let's connect!</p>
          <p className="mt-1">I'm always excited to discuss new opportunities, collaborate on interesting projects, or just chat about tech over coffee.</p>
          <div className="mt-4 flex justify-center gap-3">
            <a href="#projects" className="rounded-lg bg-teal-500 px-4 py-2 font-medium text-slate-900 transition hover:bg-teal-400">View My Work</a>
            <a href="#about" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-medium text-white/90 transition hover:bg-white/10">Learn More About Me</a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs">© {new Date().getFullYear()} Sathwik Chiluveru • Built with a modern, playful 3D touch</p>
      </footer>
    </div>
  );
};

export default App;
