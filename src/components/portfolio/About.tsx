import React from 'react';
import { Zap, Users, Code2, Lightbulb } from 'lucide-react';
import { IMAGES } from './data';

const values = [
  {
    icon: Zap,
    title: 'Speed Without Compromise',
    description: 'AI lets me deliver in weeks what used to take months â€” without cutting corners on quality or security.',
  },
  {
    icon: Users,
    title: 'Built for Real People',
    description: 'Every project starts with understanding the humans who\'ll use it. Technology serves people, not the other way around.',
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'AI writes code fast. I ensure it\'s maintainable, scalable, and follows best practices that stand the test of time.',
  },
  {
    icon: Lightbulb,
    title: 'Accessible Innovation',
    description: 'I believe everyone deserves access to powerful technology. My mission is bridging the gap between AI and everyday users.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-cyan-300/50" />
          <span className="text-cyan-300 text-sm font-medium uppercase tracking-widest">About Me</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left - Image & Quick Info */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-cyan-300/20 rounded-2xl" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-sky-300/20 rounded-2xl" />
              
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={IMAGES.portrait}
                  alt="Victor Beaumont"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <div className="float-slow absolute -bottom-6 -right-6 bg-[#0a1d2b] border border-white/10 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-300 to-emerald-300 flex items-center justify-center">
                    <Zap size={18} className="text-[#070707]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">40+ Projects</div>
                    <div className="text-slate-500 text-xs">Built with AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Making AI development
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300"> accessible </span>
              to everyone
            </h2>

            <div className="space-y-4 text-slate-400 text-lg leading-relaxed mb-10">
              <p>
                I'm Victor Beaumont â€” a full-stack developer who discovered that AI isn't just a tool, 
                it's a multiplier. Over the past few years, I've built 40+ production applications 
                using AI-assisted development, and I've seen firsthand how it transforms what's possible.
              </p>
              <p>
                But here's what drives me: <span className="text-white font-medium">most people can't access this power</span>. 
                Non-technical founders, small business owners, creative professionals â€” they have incredible 
                ideas but struggle to navigate the AI development landscape. That's where I come in.
              </p>
              <p>
                I don't just build products. I bridge the gap between human vision and AI capability, 
                translating complex technical decisions into clear, understandable choices. My clients 
                don't need to know what a REST API is â€” they just need to know their product works.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="energy-card group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-300/20 hover:bg-cyan-300/[0.03] transition-all duration-300"
                >
                  <value.icon size={20} className="text-cyan-300 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold text-sm mb-1.5">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;





