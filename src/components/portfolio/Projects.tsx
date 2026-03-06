import React, { useEffect, useState, useMemo } from 'react';
import { Search, ExternalLink, Github, X, Filter } from 'lucide-react';
import { createPortal } from 'react-dom';
import { projects, type Project } from './data';

const allCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
const expertiseTrack = [
  'AI SaaS Delivery',
  'LLM Assistant Systems',
  'FinTech Product Engineering',
  'Healthcare Platforms',
  'Web3 Product Design',
  'Enterprise Web Experiences',
  'Automation Workflows',
  'Rapid Prototyping',
];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <div
    onClick={onClick}
    className="energy-card project-card-animated-border group cursor-pointer bg-white/[0.02] rounded-2xl overflow-hidden hover:bg-cyan-300/[0.01] transition-all duration-500"
  >
    {/* Image */}
    <div className="relative overflow-hidden aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-60" />
      
      {/* Category badge */}
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 rounded-full bg-[#070707]/80 backdrop-blur-sm border border-white/10 text-xs text-slate-300 font-medium">
          {project.category}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-cyan-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 text-xs font-mono"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-500 text-xs">
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      {/* AI Tools */}
      <div className="flex items-center gap-2 pt-3 border-t border-white/5">
        <span className="text-xs text-slate-600">AI:</span>
        {project.aiTools.map((tool) => (
          <span key={tool} className="text-xs text-sky-300/80 font-medium">{tool}</span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] grid place-items-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-[#101010] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X size={16} />
        </button>

        {/* Image */}
        <div className="relative aspect-video">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 -mt-12 relative">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-300/10 border border-cyan-300/20 text-cyan-300 text-xs font-medium mb-4">
            {project.category}
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-slate-400 text-base leading-relaxed mb-6">{project.description}</p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-slate-300 text-sm font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* AI Tools Used */}
          <div className="mb-8">
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">AI Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.aiTools.map((tool) => (
                <span key={tool} className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-300/20 text-sky-300 text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 shimmer-border bg-gradient-to-r from-cyan-300 to-emerald-300 text-[#070707] font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-cyan-400/20 transition-all"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-slate-600 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all"
              >
                <Github size={14} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Projects: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (!selectedProject) return;

    const html = document.documentElement;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPaddingRight = document.body.style.paddingRight;
    const scrollbarGap = window.innerWidth - html.clientWidth;

    html.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    if (scrollbarGap > 0) {
      document.body.style.paddingRight = `${scrollbarGap}px`;
    }

    return () => {
      html.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.paddingRight = previousBodyPaddingRight;
    };
  }, [selectedProject]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        search === '' ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [search, activeCategory, activeTag]);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-300/10 border border-cyan-300/20 mb-6">
            <span className="text-cyan-300 text-sm font-medium">Expertise</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Where my
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300"> expertise creates impact</span>
          </h2>
          <p className="text-slate-400 text-lg mb-6">
            Proven work across AI automation, enterprise assistants, fintech intelligence, healthcare products, and high-performance web platforms.
          </p>

          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] py-2.5">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#070707] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#070707] to-transparent z-10" />
            <div className="projects-expertise-track flex whitespace-nowrap">
              {[...expertiseTrack, ...expertiseTrack].map((item, index) => (
                <span key={`${item}-${index}`} className="mx-5 inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300/80" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-300/30 focus:ring-1 focus:ring-cyan-300/20 transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-cyan-300/15 text-cyan-300 border border-cyan-300/30'
                    : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2.5 rounded-xl border transition-all ${
                showFilters || activeTag
                  ? 'bg-sky-300/15 text-sky-300 border-sky-300/30'
                  : 'bg-white/[0.03] text-slate-400 border-white/5 hover:text-white'
              }`}
            >
              <Filter size={16} />
            </button>
          </div>
        </div>

        {/* Tag Filters */}
        {showFilters && (
          <div className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Filter by tech:</span>
              {activeTag && (
                <button
                  onClick={() => setActiveTag(null)}
                  className="text-xs text-cyan-300 hover:underline"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTag === tag
                      ? 'bg-sky-300/15 text-sky-300 border border-sky-300/30'
                      : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg mb-4">No projects match your filters.</p>
            <button
              onClick={() => {
                setSearch('');
                setActiveCategory('All');
                setActiveTag(null);
              }}
              className="text-cyan-300 text-sm font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Results count */}
        {search || activeCategory !== 'All' || activeTag ? (
          <div className="mt-6 text-center">
            <span className="text-slate-600 text-sm">
              Showing {filtered.length} of {projects.length} projects
            </span>
          </div>
        ) : null}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <style>{`
        @keyframes projects-expertise-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .projects-expertise-track {
          animation: projects-expertise-marquee 28s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-expertise-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;




