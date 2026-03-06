import React from 'react';
import { Github, Mail, ArrowUp, Heart } from 'lucide-react';
import DiscordIcon from './DiscordIcon';

const discordUrl = 'https://discord.com/users/@eternal026694';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-300 to-emerald-300 flex items-center justify-center font-bold text-[#070707] text-sm">
                VB
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Victor Beaumont
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Full-stack developer specializing in AI-powered development. 
              Helping non-technical users bring their ideas to life.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/honest0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Open Discord profile for eternal026694"
              >
                <DiscordIcon size={16} />
              </a>
              <a
                href="mailto:codesmith95316@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              {['About', 'Process', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-slate-500 text-sm hover:text-cyan-300 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">More</h4>
            <ul className="space-y-3">
              {['Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-slate-500 text-sm hover:text-cyan-300 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/honest0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 text-sm hover:text-cyan-300 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 text-sm hover:text-cyan-300 transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-4">
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Start a Project</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Have an idea? Let's discuss how AI-powered development can bring it to life faster than you think.
            </p>
            <a
              href="mailto:codesmith95316@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 shimmer-border bg-gradient-to-r from-cyan-300 to-emerald-300 text-[#070707] font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-cyan-400/20 transition-all"
            >
              <Mail size={14} />
              codesmith95316@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm flex items-center gap-1">
            {currentYear} Victor Beaumont. Crafted with
            <Heart size={12} className="text-cyan-300 fill-cyan-300" />
            and a lot of AI.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 text-sm hover:text-cyan-300 transition-colors group"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




