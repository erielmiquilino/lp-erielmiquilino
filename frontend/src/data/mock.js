export const profileData = {
  name: 'ERIEL MIQUILINO',
  title: 'SOFTWARE ARCHITECT',
  tagline: 'Architecting the digital frontier, one system at a time.',
  bio: 'Designing and building robust, scalable distributed systems. 8+ years crafting enterprise solutions across cloud platforms, microservices, and full-stack development.',
};

export const navItems = [
  { id: 'hero', label: 'START' },
  { id: 'projects', label: 'SELECT' },
  { id: 'scores', label: 'SCORES' },
  { id: 'content', label: 'SCREENS' },
];

export const projects = [
  {
    id: 1,
    title: 'PIXEL FORGE',
    subtitle: 'Creative Design Platform',
    description: 'Real-time collaborative design tool with AI-powered asset generation, WebGL rendering, and team version control.',
    techStack: ['Next.js', 'React', 'WebGL', 'Node.js'],
    type: 'creative',
    color: '#00f0ff',
    year: '2024',
    role: 'Lead Architect',
  },
  {
    id: 2,
    title: 'NEURAL NEXUS',
    subtitle: 'Enterprise AI Platform',
    description: 'Scalable ML pipeline handling 10M+ predictions/day with automated model training, monitoring, and deployment on Azure.',
    techStack: ['.NET', 'Azure ML', 'Python', 'K8s'],
    type: 'heavy',
    color: '#ff00aa',
    year: '2024',
    role: 'System Architect',
  },
  {
    id: 3,
    title: 'CLOUD CITADEL',
    subtitle: 'Infrastructure Orchestrator',
    description: 'Multi-cloud provisioning platform with automated scaling, cost optimization, and compliance enforcement.',
    techStack: ['Terraform', 'AWS', 'Go', 'GraphQL'],
    type: 'heavy',
    color: '#a855f7',
    year: '2023',
    role: 'Platform Architect',
  },
  {
    id: 4,
    title: 'DATA STORM',
    subtitle: 'Real-Time Analytics',
    description: 'High-throughput analytics platform processing 5M events/sec with real-time dashboards and predictive alerting.',
    techStack: ['Python', 'Kafka', 'React', 'ClickHouse'],
    type: 'creative',
    color: '#00ff41',
    year: '2023',
    role: 'Technical Lead',
  },
  {
    id: 5,
    title: 'CYBER PULSE',
    subtitle: 'Observability Platform',
    description: 'Distributed system health monitoring with predictive failure analysis and automated incident response workflows.',
    techStack: ['Go', 'Prometheus', 'Grafana', 'K8s'],
    type: 'heavy',
    color: '#ff2d7b',
    year: '2022',
    role: 'Backend Architect',
  },
  {
    id: 6,
    title: 'QUANTUM GRID',
    subtitle: 'Event-Driven Platform',
    description: 'Microservices orchestration framework with event sourcing, CQRS, and automatic fault tolerance at scale.',
    techStack: ['Java', 'Kafka', 'Redis', 'Docker'],
    type: 'heavy',
    color: '#f59e0b',
    year: '2022',
    role: 'Solution Architect',
  },
];

export const skills = [
  { name: 'SYSTEM DESIGN', score: 98500, rank: 1, category: 'ARCH' },
  { name: 'MICROSERVICES', score: 95200, rank: 2, category: 'ARCH' },
  { name: 'REACT / NEXT.JS', score: 92800, rank: 3, category: 'FE' },
  { name: 'DOTNET / C#', score: 91400, rank: 4, category: 'BE' },
  { name: 'CLOUD PLATFORMS', score: 89700, rank: 5, category: 'OPS' },
  { name: 'NODE.JS / GO', score: 87300, rank: 6, category: 'BE' },
  { name: 'PYTHON / ML', score: 85100, rank: 7, category: 'DATA' },
  { name: 'KUBERNETES', score: 83600, rank: 8, category: 'OPS' },
  { name: 'EVENT SOURCING', score: 81200, rank: 9, category: 'ARCH' },
  { name: 'FLUTTER', score: 78400, rank: 10, category: 'MOB' },
];

export const experience = [
  {
    role: 'Lead Software Architect',
    company: 'TechCorp Global',
    period: '2022 - PRESENT',
    level: 'LVL 99',
    description: 'Architecting enterprise-scale distributed systems serving 50M+ users across multiple cloud regions.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Digital Dynamics',
    period: '2019 - 2022',
    level: 'LVL 75',
    description: 'Led migration of monolithic systems to microservices, reducing latency by 60% and improving uptime to 99.99%.',
  },
  {
    role: 'Software Engineer',
    company: 'CodeBase Inc.',
    period: '2016 - 2019',
    level: 'LVL 45',
    description: 'Full-stack development of SaaS products using React, Node.js, and AWS cloud-native technologies.',
  },
];

export const contentItems = [
  {
    id: 1,
    type: 'video',
    title: 'Scaling Microservices to 10M Users',
    platform: 'YouTube',
    color: '#ff2d7b',
    size: 'large',
  },
  {
    id: 2,
    type: 'article',
    title: 'The Art of System Design Interviews',
    platform: 'Medium',
    color: '#00f0ff',
    size: 'small',
  },
  {
    id: 3,
    type: 'article',
    title: 'Event-Driven Architecture: A Deep Dive',
    platform: 'Dev.to',
    color: '#a855f7',
    size: 'tall',
  },
  {
    id: 4,
    type: 'video',
    title: 'Building Cloud-Native Apps with Azure',
    platform: 'YouTube',
    color: '#ff00aa',
    size: 'small',
  },
  {
    id: 5,
    type: 'article',
    title: 'Domain-Driven Design in Practice',
    platform: 'Blog',
    color: '#00ff41',
    size: 'wide',
  },
  {
    id: 6,
    type: 'talk',
    title: 'Keynote: Future of Distributed Systems',
    platform: 'Conference',
    color: '#f59e0b',
    size: 'small',
  },
];

export const socialLinks = [
  { label: 'GitHub', url: '#' },
  { label: 'LinkedIn', url: '#' },
  { label: 'Twitter', url: '#' },
  { label: 'Email', url: 'mailto:hello@erielmiquilino.dev' },
];
