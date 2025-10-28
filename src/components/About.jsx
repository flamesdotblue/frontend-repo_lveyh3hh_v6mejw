import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 text-slate-100">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 to-indigo-500">
          <User className="text-slate-900" size={20} />
        </div>
        <h2 className="text-2xl font-semibold">About Me 🪞</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h3 className="mb-3 text-lg font-medium text-white/90">Profile</h3>
          <p className="text-white/70">
            I'm a developer and builder, with a background in full stack development — but I enjoy going beyond just writing code. Over the years, I’ve taken on roles in project management, worked with data, and generally leaned into whatever challenges helped move a project forward. I like wearing different hats, learning on the go, and finding practical ways to bring ideas to life.
          </p>
        </div>
        <div className="md:col-span-2 space-y-4">
          <p className="text-white/70">
            What drives me most is the process of building — from concept to execution — and learning through doing. Whether it's crafting a user experience, diving into backend logic, or aligning teams around a product goal, I enjoy being involved across the stack and beyond.
          </p>
          <p className="text-white/70">
            Outside of that, I love exploring new technologies, especially in the fast-moving world of AI. I’m always experimenting, tinkering, and seeing what’s possible — not because I have to, but because I genuinely enjoy the ride.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
