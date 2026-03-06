import React from 'react';
import { Bot, Cloud, Monitor, Server, Wrench } from 'lucide-react';

type SkillGroup = {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: Monitor,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Accessibility'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Python', 'FastAPI', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'AI & ML',
    icon: Bot,
    items: ['NLP', 'Model Serving', 'Prompt Engineering', 'Data Pipelines', 'Evaluation'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    items: ['AWS', 'Docker', 'CI/CD', 'Monitoring', 'Infrastructure Design'],
  },
  {
    title: 'Tooling',
    icon: Wrench,
    items: ['Git/GitHub', 'Testing', 'Code Reviews', 'Documentation', 'Agile Delivery'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-12 bg-cyan-300/50" />
            <span className="text-cyan-300 text-sm font-medium uppercase tracking-widest">Skills & Tools</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            Technical expertise,
            <span className="bg-gradient-to-r from-cyan-100 via-sky-200 to-emerald-200 bg-clip-text text-transparent"> delivered with precision.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="energy-card rounded-2xl border border-white/10 bg-[#0b1118]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/35 hover:shadow-[0_18px_45px_-28px_rgba(34,211,238,0.45)]"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.22)]">
                  <group.icon size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-white leading-none">{group.title}</h3>
              </div>

              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200 text-lg">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


