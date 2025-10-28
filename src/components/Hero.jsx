import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Rocket } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
          <Rocket size={16} className="text-teal-300" />
          Cloud-Native Builder
        </div>
        <h1 className="mt-6 text-center text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Hi, I'm <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">Sathwik Chiluveru</span>
        </h1>
        <p className="mt-4 max-w-2xl text-center text-white/80">
          I build reliable, scalable systems and craft polished user experiences across the stack.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => scrollTo('projects')}
            className="rounded-lg bg-teal-500 px-5 py-2.5 font-medium text-slate-900 shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Learn More About Me
          </button>
        </div>

        <button
          onClick={() => scrollTo('about')}
          className="mt-16 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10"
        >
          <ArrowDown size={16} /> Scroll Down
        </button>
      </div>
    </section>
  );
};

export default Hero;
