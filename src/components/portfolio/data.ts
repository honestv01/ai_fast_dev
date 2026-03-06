export const IMAGES = {
  hero: 'https://d64gsuwffb70l.cloudfront.net/699a04c6fc7d245eb5b002ba_1771701525815_e2a49e7c.jpg',
  portrait: '/me.png',
  sectionBg: 'https://d64gsuwffb70l.cloudfront.net/699a04c6fc7d245eb5b002ba_1771701816123_189a6cca.png',
  process: [
    'https://d64gsuwffb70l.cloudfront.net/699a04c6fc7d245eb5b002ba_1771701634661_b440bbba.jpg',
    'https://d64gsuwffb70l.cloudfront.net/699a04c6fc7d245eb5b002ba_1771701633198_457e1032.jpg',
    'https://d64gsuwffb70l.cloudfront.net/699a04c6fc7d245eb5b002ba_1771701673993_aa3b343e.png',
    'https://d64gsuwffb70l.cloudfront.net/699a04c6fc7d245eb5b002ba_1771701691888_4d7a2c3f.png',
  ],
  projects: [
    'https://s.wordpress.com/mshots/v1/https://syphe.ai?w=1200',
    'https://s.wordpress.com/mshots/v1/https://www.sbs.com.au/theboat/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://www.moonshotmagax.com/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://marketterminal.com/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://showzone.gg/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://www.duelmasters.io/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://frigid.ai/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://www.sonypictures.com/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://checkmate.health/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://recovery.com/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://restaurant-pi-sandy-51.vercel.app/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://www.oraion.com/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://www.getpantera.com/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://anova.ai/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://creatify.ai/?w=1200',
  ],
};

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  aiTools: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Syphe',
    description: 'Syphe automates tedious back-office work for solopreneurs. It uses AI to automate invoices, emails, weekly insights, and calendars so creators can focus on creating. Stripe Connect powers custom invoicing.',
    image: IMAGES.projects[0],
    tags: ['AI Automation', 'SaaS', 'Stripe Connect', 'Back Office'],
    category: 'AI SaaS',
    aiTools: ['Workflow AI', 'Stripe Connect'],
    liveUrl: 'https://syphe.ai/',
  },
  {
    id: 2,
    title: 'TheBoat',
    description: 'TheBoat is an AI-driven assistant platform built for enterprise workflow efficiency. It uses LLM capabilities and AWS Bedrock for contextual responses, real-time information retrieval, task automation, and intelligent recommendations.',
    image: IMAGES.projects[1],
    tags: ['LLM', 'AWS Bedrock', 'Automation', 'Enterprise'],
    category: 'AI Assistant',
    aiTools: ['AWS Bedrock', 'LLM Orchestration'],
    liveUrl: 'https://www.sbs.com.au/theboat/',
  },
  {
    id: 3,
    title: 'MAGAX',
    description: 'MAGAX is an AI-powered Meme-to-Earn token that combines viral content economics, smart contract incentives, and a creator-focused rewards system to deliver real utility in meme-based crypto ecosystems.',
    image: IMAGES.projects[2],
    tags: ['Web3', 'Smart Contracts', 'Meme-to-Earn', 'Tokenomics'],
    category: 'Crypto',
    aiTools: ['AI Content Systems', 'Reward Automation'],
    liveUrl: 'https://www.moonshotmagax.com/',
  },
  {
    id: 4,
    title: 'Market Terminal',
    description: 'Real-time stock and crypto price indicators designed to surface profitable insights quickly for active market participants.',
    image: IMAGES.projects[3],
    tags: ['FinTech', 'Stocks', 'Crypto', 'Real-time Analytics'],
    category: 'FinTech',
    aiTools: ['Signal Models', 'Market Intelligence'],
    liveUrl: 'https://marketterminal.com/',
  },
  {
    id: 5,
    title: 'ShowZone',
    description: 'Product and platform development for a live sports and gaming experience focused on speed, clarity, and data-rich interaction.',
    image: IMAGES.projects[4],
    tags: ['Gaming', 'Data Platform', 'Frontend', 'Performance'],
    category: 'Gaming',
    aiTools: ['Product Automation', 'Data Insights'],
    liveUrl: 'https://showzone.gg/',
  },
  {
    id: 6,
    title: 'DuelMasters',
    description: 'Competitive digital gaming product work focused on core gameplay flows, user onboarding, and long-term player engagement.',
    image: IMAGES.projects[5],
    tags: ['Gaming', 'Web3', 'UX', 'Product'],
    category: 'Gaming',
    aiTools: ['AI-assisted UX', 'Engagement Automation'],
    liveUrl: 'https://www.duelmasters.io/',
  },
  {
    id: 7,
    title: 'Frigid AI',
    description: 'AI-first product engineering covering positioning, workflow design, and production implementation for modern automation experiences.',
    image: IMAGES.projects[6],
    tags: ['AI Product', 'Automation', 'SaaS', 'Growth'],
    category: 'AI SaaS',
    aiTools: ['AI Workflow Engine', 'Prompt Systems'],
    liveUrl: 'https://frigid.ai/',
  },
  {
    id: 8,
    title: 'Sony Pictures',
    description: 'Web platform and experience support for a high-traffic global entertainment brand with production-grade performance requirements.',
    image: IMAGES.projects[7],
    tags: ['Enterprise', 'Media', 'Web Platform', 'Performance'],
    category: 'Enterprise',
    aiTools: ['Content Automation', 'Release Tooling'],
    liveUrl: 'https://www.sonypictures.com/',
  },
  {
    id: 9,
    title: 'Checkmate Health',
    description: 'Healthcare-focused digital product work with clear user flows and trustworthy UX built for patient-centered outcomes.',
    image: IMAGES.projects[8],
    tags: ['Healthcare', 'UX', 'Product Design', 'Web App'],
    category: 'Healthcare',
    aiTools: ['AI Triage Logic', 'Workflow Automation'],
    liveUrl: 'https://checkmate.health/',
  },
  {
    id: 10,
    title: 'Recovery.com',
    description: 'Platform and product improvements for a treatment discovery experience connecting people with recovery and healthcare options.',
    image: IMAGES.projects[9],
    tags: ['Healthcare', 'Discovery Platform', 'SEO', 'Web'],
    category: 'Healthcare',
    aiTools: ['AI Matching', 'Content Automation'],
    liveUrl: 'https://recovery.com/',
  },
  {
    id: 11,
    title: 'Restaurant Pi',
    description: 'AI-powered restaurant operations interface built for menu, service, and daily workflow support.',
    image: IMAGES.projects[10],
    tags: ['Hospitality', 'AI Assistant', 'Operations', 'Web App'],
    category: 'AI SaaS',
    aiTools: ['Conversational AI', 'Workflow Automation'],
    liveUrl: 'https://restaurant-pi-sandy-51.vercel.app/',
  },
  {
    id: 12,
    title: 'Oraion',
    description: 'AI infrastructure platform for building intelligent AI systems and automation workflows.',
    image: IMAGES.projects[11],
    tags: ['AI Infrastructure', 'Automation Workflows', 'Platform', 'Enterprise'],
    category: 'AI Infrastructure',
    aiTools: ['AI Orchestration', 'Workflow Automation'],
    liveUrl: 'https://www.oraion.com',
  },
  {
    id: 13,
    title: 'Pantera',
    description: 'AI knowledge agent platform that builds custom AI assistants connected to organizational data.',
    image: IMAGES.projects[12],
    tags: ['Knowledge Agents', 'Custom Assistants', 'Data Integration', 'Enterprise'],
    category: 'AI Assistant',
    aiTools: ['RAG Pipelines', 'Agent Workflows'],
    liveUrl: 'https://www.getpantera.com',
  },
  {
    id: 14,
    title: 'Anova AI',
    description: 'AI automation platform focused on intelligent workflow execution and decision support.',
    image: IMAGES.projects[13],
    tags: ['AI Automation', 'Decision Support', 'Workflow Execution', 'Operations'],
    category: 'AI Automation',
    aiTools: ['Decision Intelligence', 'Automation Engine'],
    liveUrl: 'https://anova.ai/',
  },
  {
    id: 15,
    title: 'Creatify',
    description: 'AI-driven content generation platform with large-scale automation pipelines.',
    image: IMAGES.projects[14],
    tags: ['Content Generation', 'Automation Pipelines', 'Marketing', 'Creative AI'],
    category: 'AI SaaS',
    aiTools: ['Generative AI', 'Content Automation'],
    liveUrl: 'https://creatify.ai/',
  },
];

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'AI Tools' | 'DevOps' | 'Database';
}

export const skills: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 92, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 94, category: 'Frontend' },
  { name: 'Vue.js', level: 78, category: 'Frontend' },
  { name: 'HTML / CSS', level: 96, category: 'Frontend' },
  { name: 'Node.js', level: 90, category: 'Backend' },
  { name: 'Python', level: 85, category: 'Backend' },
  { name: 'Go', level: 70, category: 'Backend' },
  { name: 'REST / GraphQL', level: 88, category: 'Backend' },
  { name: 'FastAPI', level: 80, category: 'Backend' },
  { name: 'ChatGPT / Claude', level: 97, category: 'AI Tools' },
  { name: 'GitHub Copilot', level: 95, category: 'AI Tools' },
  { name: 'Cursor IDE', level: 93, category: 'AI Tools' },
  { name: 'V0 / Bolt / Famous', level: 90, category: 'AI Tools' },
  { name: 'Prompt Engineering', level: 96, category: 'AI Tools' },
  { name: 'Docker', level: 82, category: 'DevOps' },
  { name: 'AWS / Vercel', level: 85, category: 'DevOps' },
  { name: 'CI/CD Pipelines', level: 80, category: 'DevOps' },
  { name: 'PostgreSQL', level: 88, category: 'Database' },
  { name: 'MongoDB', level: 84, category: 'Database' },
  { name: 'Redis', level: 75, category: 'Database' },
  { name: 'Supabase / Firebase', level: 90, category: 'Database' },
];

export const processSteps = [
  {
    title: 'Discover & Define',
    description: 'I start by deeply understanding your vision. What problem are you solving? Who are your users? I translate your ideas into clear technical requirements â€” no jargon, just clarity.',
    image: IMAGES.process[0],
  },
  {
    title: 'AI-Powered Design',
    description: 'Using AI tools strategically, I rapidly prototype and iterate on designs. This means you see real working previews in hours, not weeks. Every pixel is intentional.',
    image: IMAGES.process[1],
  },
  {
    title: 'Build & Refine',
    description: 'I leverage AI to accelerate development while maintaining code quality. Every feature is hand-reviewed, tested, and optimized. AI assists â€” I architect.',
    image: IMAGES.process[2],
  },
  {
    title: 'Launch & Support',
    description: 'Deployment, monitoring, and ongoing support. I ensure your project launches smoothly and stays performant. Your success is my reputation.',
    image: IMAGES.process[3],
  },
];

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder, NexaHealth',
    text: 'Victor turned our rough concept into a polished platform in record time. His ability to leverage AI tools while maintaining quality is unlike anything I\'ve seen.',
    avatar: 'SC',
  },
  {
    name: 'Marcus Williams',
    role: 'CTO, DataStream',
    text: 'Working with Victor was a game-changer. He delivered a complex analytics dashboard that would have taken our team months â€” in just three weeks.',
    avatar: 'MW',
  },
  {
    name: 'Lisa Park',
    role: 'Product Manager, EduTech',
    text: 'As a non-technical founder, Victor made the entire process approachable. He explained every decision and delivered exactly what we envisioned.',
    avatar: 'LP',
  },
];

export const stats = [
  { label: 'Projects Delivered', value: '40+' },
  { label: 'Happy Clients', value: '25+' },
  { label: 'AI Tools Mastered', value: '12+' },
  { label: 'Years Experience', value: '5+' },
];

