import React from 'react';
import { Wrench, ExternalLink, Github, Hammer, Clock } from 'lucide-react';

const projects = [
  {
    name: 'TrainerSwift',
    status: 'Completed',
    blurb:
      'Trainer Swift is a smart booking platform designed for the fitness world. It connects trainers who offer services with trainees looking to book personalized sessions. Trainers can create accounts, list their services, and manage schedules, while trainees can browse, book, and track sessions with ease. The platform streamlines fitness bookings, making it simple for both sides to connect, manage time, and stay committed to their goals',
    stack: ['Python Flask', 'Next.js', 'PostgreSQL', 'Kong', 'AWS', 'Docker'],
    health: { state: 'offline', note: 'maintenance', uptime: 'N/A', response: 'N/A' },
  },
  {
    name: 'LingoLah',
    status: 'Completed',
    blurb:
      'Voice-activated digital assistant for elderly users. A voice-driven Chrome extension overlay that lets seniors interact with websites in native dialects (Hokkien, Cantonese) without provider-side changes. Uses speech recognition (OpenAI Whisper, Google STT) and SEA Lion AI + LangChain to understand intent for tasks like booking appointments and retrieving records. Python microservices backend with MongoDB, Docker, and AWS. Replies via Web Speech API with simplified text for accessibility.',
    stack: ['Chrome Extension', 'Whisper', 'Google STT', 'SEA-LION', 'LangChain', 'Python', 'MongoDB', 'Docker', 'AWS', 'Web Speech API'],
    health: { state: 'offline', note: 'maintenance', uptime: 'N/A', response: 'N/A' },
  },
  {
    name: 'FlyMePlease',
    status: 'Completed',
    blurb:
      "FlyMePlease is a smart travel assistant bot that finds the cheapest flights based on your preferred date, time, and budget. Users can subscribe to specific routes and receive real-time alerts with deals and price trends. The system also provides insightful analytics such as '8% cheaper than average' to help you make informed booking decisions.",
    stack: ['Python', 'Telegram API', 'PostgreSQL', 'EC2', 'ETL'],
    health: { state: 'offline', note: 'error', uptime: 'N/A', response: 'N/A' },
  },
];

const ideas = [
  {
    name: 'Open Source Repo Radar',
    priority: 'Medium',
    summary: 'Discover trending and high-impact open source repositories tailored to your interests.',
    stack: ['Next.js', 'GitHub API', 'Redis', '+1'],
    timeline: '3 weeks',
  },
  {
    name: 'Culture Watch',
    priority: 'Medium',
    summary: 'A platform to monitor, analyze, and visualize emerging cultural trends online.',
    stack: ['Python', 'FastAPI', 'React', '+1'],
    timeline: '5 weeks',
  },
  {
    name: 'Digital Scrum Master',
    priority: 'Medium',
    summary: 'An AI-powered assistant to automate and enhance agile ceremonies and team productivity.',
    stack: ['Node.js', 'OpenAI API', 'Slack API', '+1'],
    timeline: '4 weeks',
  },
  {
    name: 'Autonomous Data Pipeline Management System',
    priority: 'High',
    summary: 'A self-healing, intelligent system for managing and optimizing data pipelines.',
    stack: ['Python', 'Airflow', 'Kubernetes', '+1'],
    timeline: '6 weeks',
  },
];

const inProgress = [
  {
    name: 'Telegram Bot for Cheap Flights',
    priority: 'High',
    progress: 80,
    eta: '1 week remaining',
    stack: ['Python', 'Telegram API', 'AWS Lambda', '+1'],
  },
  {
    name: 'Startup Intelligence Dashboard',
    priority: 'High',
    progress: 30,
    eta: '3 weeks remaining',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', '+1'],
  },
];

const Badge = ({ children, tone = 'default' }) => {
  const tones = {
    default: 'border-white/10 bg-white/5 text-white/80',
    success: 'border-teal-500/30 bg-teal-500/15 text-teal-300',
    warn: 'border-amber-500/30 bg-amber-500/15 text-amber-300',
    danger: 'border-rose-500/30 bg-rose-500/15 text-rose-300',
  };
  return (
    <span className={`rounded-md border px-2 py-0.5 text-xs ${tones[tone]}`}>
      {children}
    </span>
  );
};

const ProjectCard = ({ p }) => {
  const healthTone = p.health.state === 'offline' && p.health.note === 'error' ? 'danger' : 'warn';
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <Badge tone="success">{p.status}</Badge>
            <Badge tone={healthTone}>{p.health.state}</Badge>
            <Badge>{p.health.note}</Badge>
            <Badge>Uptime {p.health.uptime}</Badge>
            <Badge>Response {p.health.response}</Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10">
            <ExternalLink size={14} /> Live Demo
          </button>
          <button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10">
            <Github size={14} /> Source Code
          </button>
        </div>
      </div>
      <p className="mt-3 text-white/70">{p.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">{s}</span>
        ))}
      </div>
    </div>
  );
};

const IdeaCard = ({ i }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
    <div className="flex items-start justify-between">
      <h4 className="font-medium">{i.name}</h4>
      <Badge tone={i.priority === 'High' ? 'warn' : 'default'}>{i.priority}</Badge>
    </div>
    <p className="mt-2 text-white/70">{i.summary}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {i.stack.map((s) => (
        <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">{s}</span>
      ))}
    </div>
    <div className="mt-3 text-xs text-white/60">{i.timeline}</div>
  </div>
);

const ProgressCard = ({ p }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
    <div className="flex items-start justify-between">
      <h4 className="font-medium">{p.name}</h4>
      <Badge tone="warn">{p.priority}</Badge>
    </div>
    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-teal-400 to-indigo-400"
        style={{ width: `${p.progress}%` }}
      />
    </div>
    <div className="mt-2 text-xs text-white/70">Progress {p.progress}% • {p.eta}</div>
    <div className="mt-3 flex flex-wrap gap-2">
      {p.stack.map((s) => (
        <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">{s}</span>
      ))}
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 text-slate-100">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 to-indigo-500">
          <Wrench className="text-slate-900" size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">My Projects 🧰</h2>
          <p className="text-white/60">Explore my work with real-time monitoring and deployment status</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>

      <div id="lab" className="mt-16">
        <div className="mb-6 flex items-center gap-2">
          <Hammer size={18} className="text-teal-300" />
          <h3 className="text-xl font-semibold">What's Cooking 🍳</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-3 flex items-center gap-2 text-white/80">
              <span className="font-medium">Ideas</span>
              <Badge>{ideas.length} projects</Badge>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {ideas.map((i) => (
                <IdeaCard key={i.name} i={i} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="mb-3 flex items-center gap-2 text-white/80">
              <Clock size={16} className="text-indigo-300" />
              <span className="font-medium">In Progress</span>
              <Badge>{inProgress.length} projects</Badge>
            </div>
            <div className="space-y-6">
              {inProgress.map((p) => (
                <ProgressCard key={p.name} p={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
