import React from 'react';
import { ArrowRight } from 'lucide-react';

const Manifesto: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.02] to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-sky-300/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Large quote */}
        <div className="mb-8">
          <span className="text-6xl lg:text-8xl font-serif text-cyan-300/20 leading-none select-none">"</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8">
          The best technology is the kind you don't have to think about. 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
            {' '}My job is to make AI invisible
          </span>
          {' '}— so your product just works.
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Too many brilliant ideas die because their creators can't navigate the technical landscape. 
          I've made it my mission to change that. By combining deep technical expertise with AI-powered 
          development, I deliver professional-grade products at a fraction of the traditional timeline and cost. 
          Your vision deserves to exist — and I'm here to make sure it does.
        </p>

        {/* Key points */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl font-bold text-cyan-300 mb-2">3x</div>
            <div className="text-white text-sm font-medium mb-1">Faster Delivery</div>
            <div className="text-slate-500 text-xs leading-relaxed">
              AI-assisted development cuts project timelines dramatically without sacrificing quality.
            </div>
          </div>
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl font-bold text-sky-300 mb-2">60%</div>
            <div className="text-white text-sm font-medium mb-1">Cost Reduction</div>
            <div className="text-slate-500 text-xs leading-relaxed">
              Efficient workflows mean more value for your budget. Enterprise quality at startup prices.
            </div>
          </div>
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-white text-sm font-medium mb-1">Human Reviewed</div>
            <div className="text-slate-500 text-xs leading-relaxed">
              Every line of code is reviewed and tested by hand. AI accelerates — humans ensure quality.
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo('contact')}
          className="inline-flex items-center gap-2 px-7 py-3.5 shimmer-border bg-gradient-to-r from-cyan-300 to-emerald-300 text-[#070707] font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-0.5 group"
        >
          Start Your Project
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Manifesto;




