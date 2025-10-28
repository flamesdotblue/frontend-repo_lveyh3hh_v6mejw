import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'NCS Group',
    role: 'Software Engineer Intern',
    duration: '3 months',
    period: 'May 2025 - Present',
    location: 'Singapore',
    skills: ['Angular', 'TypeScript', 'Java', 'Springboot'],
    summary:
      'Developing internal tools such as batch job systems, and building full-stack modules for public sector clients with a focus on security, scalability, and high-load performance.',
  },
  {
    company: 'Hummingbird Bioscience',
    role: 'Full-stack Developer Intern',
    duration: '5 months',
    period: 'Aug 2024 - Dec 2024',
    location: 'Singapore',
    skills: ['Python', 'Mage AI', 'R', 'R Shiny'],
    summary:
      'Built internal data platforms and dashboards, designing ETL pipelines to support biomedical research involving confidential patient data and complex lab workflows.',
  },
  {
    company: 'Craftwills',
    role: 'Software Engineer',
    duration: '6 months',
    period: 'May 2024 - Oct 2024',
    location: 'Singapore',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    summary:
      'Developed responsive web components and integrated APIs for digital will creation, enhancing platform usability and streamlining customer onboarding.',
  },
  {
    company: 'Trinax',
    role: 'Project Management Intern',
    duration: '3 months',
    period: 'May 2024 - Jul 2024',
    location: 'Singapore',
    skills: ['Agile', 'QA Testing', 'Project Management'],
    summary:
      'Managed software development lifecycles across Agile sprints, coordinated deployments, and conducted QA to ensure timely and stable project delivery.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 text-slate-100">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 to-indigo-500">
          <Briefcase className="text-slate-900" size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Work Experience 🪜</h2>
          <p className="text-white/60">My professional journey building impactful solutions</p>
        </div>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-indigo-400 text-slate-900 font-semibold">
                  {exp.company.split(' ').map((w) => w[0]).join('').slice(0,3)}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="rounded-full bg-teal-500/20 px-2 py-0.5 text-xs text-teal-300">{exp.duration}</span>
                  </div>
                  <p className="text-white/80">{exp.company} • {exp.location}</p>
                  <p className="text-sm text-white/60">{exp.period}</p>
                </div>
              </div>
              <div className="md:text-right">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {exp.skills.map((s) => (
                    <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-white/70">{exp.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
