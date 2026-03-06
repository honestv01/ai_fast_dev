import React from 'react';
import { processSteps, IMAGES } from './data';

const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={IMAGES.sectionBg} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-[#070707]/95 to-[#070707]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-300/10 border border-sky-300/20 mb-6">
            <span className="text-sky-300 text-sm font-medium">How I Work</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            From idea to launch,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-teal-300"> powered by AI</span>
          </h2>
          <p className="text-slate-400 text-lg">
            My process is designed to be transparent and collaborative. You&apos;re involved at every step -
            but you never need to touch a line of code.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={step.title} className="group relative">
              {/* Connector line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-white/10 to-white/5 z-0" />
              )}

              <div
                className="energy-card process-step relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-sky-300/20 hover:bg-sky-300/[0.02] transition-all duration-500 h-full"
                style={{ '--lamp-delay': `${index * 0.45}s` } as React.CSSProperties}
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="process-step-index w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-sky-500/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="h-px flex-1 bg-white/5" />
                </div>

                {/* Image */}
                <div className="process-lamp-frame w-full aspect-square rounded-xl overflow-hidden mb-5 bg-white/[0.02]">
                  <div className="process-lamp-glow" aria-hidden="true" />
                  <div className="process-lamp-flicker" aria-hidden="true" />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="process-lamp-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;