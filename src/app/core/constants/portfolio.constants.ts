import { environment } from '../../../environments/environment';

// ─── Owner ────────────────────────────────────────────────────────────────────
export const OWNER = {
  name:       'Pratik Nere',
  title:      'Software Engineer | Full Stack Java Developer',
  tagline:    'I build enterprise-grade web applications.',
  tagline2:   'My passion is creating beautiful & scalable user experiences.',
  location:   'Pune, Maharashtra, India',
  phone:      '+91-8378037917',
  email:      'pdnere2108@gmail.com',
  github:     'https://github.com/pratiknere',
  linkedin:   'https://linkedin.com/in/pratik-nere',
  instagram:  environment.instagramUrl,
  leetcode:   environment.leetcodeUrl,
  resumeUrl:  environment.resumeUrl,
  yearsExp:   '2.8+',
  projects:   '10+',
  codingHours:'2000+',
};

// ─── Typing effect strings ─────────────────────────────────────────────────
export const TYPING_STRINGS = [
  'Hello World 👋',
  'My name is Pratik.',
  'I build enterprise web applications.',
  'Full Stack Java Developer.',
  'Angular · Spring Boot · Kafka · Docker',
];

// ─── Navbar links ──────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',         href: 'hero'         },
  { label: 'About',        href: 'about'         },
  { label: 'Skills',       href: 'skills'        },
  { label: 'Experience',   href: 'experience'    },
  { label: 'Projects',     href: 'projects'      },
  { label: 'Journey',      href: 'journey'       },
  { label: 'Certificates', href: 'certificates'  },
  { label: 'Achievements', href: 'achievements'  },
  { label: 'Gym',          href: 'gym'           },
  { label: 'Travel',       href: 'travel'        },
  { label: 'Contact',      href: 'contact'       },
];

// ─── Skills ────────────────────────────────────────────────────────────────
export const SKILLS = {
  frontend: [
    { name: 'Angular 20',          level: 90, icon: 'devicon-angularjs-plain',   color: '#dd0031' },
    { name: 'TypeScript',          level: 88, icon: 'devicon-typescript-plain',  color: '#3178c6' },
    { name: 'JavaScript (ES6+)',   level: 85, icon: 'devicon-javascript-plain',  color: '#f7df1e' },
    { name: 'RxJS',                level: 82, icon: 'fas fa-retweet',            color: '#b7178c' },
    { name: 'Angular Material',    level: 80, icon: 'fas fa-palette',            color: '#1976d2' },
    { name: 'HTML5 / CSS3',        level: 90, icon: 'devicon-html5-plain',       color: '#e34f26' },
    { name: 'Bootstrap',           level: 85, icon: 'devicon-bootstrap-plain',   color: '#7952b3' },
    { name: 'Reactive Forms',      level: 82, icon: 'fas fa-wpforms',            color: '#dd0031' },
  ],
  backend: [
    { name: 'Java (17/21)',        level: 88, icon: 'devicon-java-plain',        color: '#ed8b00' },
    { name: 'Spring Boot 3.x',    level: 86, icon: 'devicon-spring-plain',      color: '#6db33f' },
    { name: 'Spring Security',     level: 80, icon: 'fas fa-shield-alt',         color: '#6db33f' },
    { name: 'Spring Data JPA',     level: 82, icon: 'fas fa-database',           color: '#6db33f' },
    { name: 'Hibernate',           level: 78, icon: 'fas fa-server',             color: '#bcae79' },
    { name: 'RESTful APIs',        level: 90, icon: 'fas fa-plug',               color: '#00adb5' },
    { name: 'Apache Kafka',        level: 75, icon: 'fas fa-stream',             color: '#6c63ff' },
    { name: 'Microservices',       level: 78, icon: 'fas fa-cubes',              color: '#ff6584' },
  ],
  databases: [
    { name: 'Oracle',              level: 78, icon: 'fas fa-database',           color: '#f80000' },
    { name: 'PostgreSQL',          level: 80, icon: 'devicon-postgresql-plain',  color: '#336791' },
    { name: 'MySQL',               level: 78, icon: 'devicon-mysql-plain',       color: '#4479a1' },
    { name: 'Couchbase',           level: 70, icon: 'fas fa-leaf',               color: '#ea2328' },
    { name: 'Elasticsearch',       level: 68, icon: 'fas fa-search',             color: '#005571' },
    { name: 'Redis',               level: 72, icon: 'devicon-redis-plain',       color: '#dc382d' },
  ],
  devops: [
    { name: 'Docker',              level: 75, icon: 'devicon-docker-plain',      color: '#2496ed' },
    { name: 'Kubernetes',          level: 65, icon: 'devicon-kubernetes-plain',  color: '#326ce5' },
    { name: 'Git / Bitbucket',     level: 88, icon: 'devicon-git-plain',         color: '#f05032' },
    { name: 'Jenkins / CI-CD',     level: 70, icon: 'fas fa-infinity',           color: '#d33834' },
    { name: 'GitHub Actions',      level: 72, icon: 'fas fa-code-branch',        color: '#2088ff' },
    { name: 'GitHub Copilot',      level: 85, icon: 'fas fa-robot',              color: '#6c63ff' },
  ],
};

// ─── Experience ────────────────────────────────────────────────────────────
export const EXPERIENCES = [
  {
    company:      'Cybage Software Pvt. Ltd.',
    role:         'Software Engineer',
    period:       'Nov 2023 – Present',
    location:     'Pune, Maharashtra',
    type:         'Full Time',
    description:  'Building enterprise hospitality applications in the Hotel Channel Management domain — working on the IHCM Configuration Platform that enables hotel chains to manage property onboarding, OTA connectivity, reservation mapping, and channel configuration.',
    project:      'IHCM Configuration Platform (Enterprise Hospitality Distribution System) — Hotel Channel Management & OTA Integrations',
    responsibilities: [
      'Developed and enhanced the IHCM Configuration Platform for hotel chain property onboarding, OTA connectivity, reservation mapping, and channel configuration',
      'Designed RESTful APIs and microservices for hotel registration, OTA configuration, room/rate mapping, and reservation workflows following layered, service-oriented architecture',
      'Implemented event-driven communication using Apache Kafka to decouple services and process configuration updates asynchronously, improving fault tolerance and scalability',
      'Containerized backend services with Docker to standardize local development and streamline deployment across environments',
      'Built and enhanced Angular 20 administrative modules using Standalone Components and Reactive Forms for property management, dashboards, and operational reporting',
      'Integrated with OTA partner services and Property Management Systems (PMS) using Oracle, PostgreSQL, Couchbase, and Elasticsearch for transactional and search workloads',
      'Improved API response times through query optimization, caching strategies, and standardized exception handling across services',
      'Wrote unit tests with JUnit 5 and Mockito; debugged production issues using logs and Postman',
      'Collaborated with frontend, QA, and product owners in Agile/Scrum; used GitHub Copilot to accelerate implementation and testing',
    ],
    tech:  ['Java 17', 'Spring Boot', 'Microservices', 'Angular 20', 'Apache Kafka', 'Docker', 'Oracle', 'PostgreSQL', 'Couchbase', 'Elasticsearch', 'Jenkins', 'GitHub Copilot'],
    color: '#6c63ff',
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id:       1,
    title:    'StayConnect',
    subtitle: 'Hotel Booking & Channel Management System',
    description: 'A full-stack hotel booking and channel management application built end-to-end to practice production-grade patterns around availability, pricing, and secure multi-role access — inspired by real-world OTA channel managers.',
    image:    'assets/images/projects/stayconnect.png',
    github:   'https://github.com/pratiknere/stayconnect',
    demo:     '',
    tech:     ['Java 21', 'Spring Boot 3.5', 'Spring Security', 'Angular 20', 'PostgreSQL', 'Redis', 'JWT', 'Docker', 'GitHub Actions', 'OpenAPI'],
    category: 'fullstack',
    featured: true,
    year:     2025,
    period:   'Mar 2025 – Jun 2025',
    highlights: [
      'Scalable RESTful APIs with SOLID principles covering hotel/room management, booking, inventory & dynamic pricing',
      'Spring Security + JWT with RBAC — Admin, Property Manager, and Staff roles',
      'Redis caching for inventory & pricing lookups — reduced response times on high-traffic endpoints',
      'Angular 20 admin dashboards with Standalone Components, Signals & Reactive Forms',
      'Containerized with Docker + GitHub Actions CI/CD pipeline',
      'Full OpenAPI (Swagger) documentation with centralized exception handling',
    ],
  },
  {
    id:       2,
    title:    'FitedIn',
    subtitle: 'LinkedIn for the Fitness Industry',
    description: 'A full-stack social networking platform for fitness professionals and gyms — featuring real-time chat, job board, trainer profiles, gym listings, achievement system, and application management.',
    image:    'assets/images/projects/fitedin.png',
    github:   'https://github.com/pratiknere/fitedin',
    demo:     '',
    tech:     ['Angular 20', 'Spring Boot', 'WebSocket', 'REST APIs', 'Spring Security', 'JWT', 'Docker'],
    category: 'fullstack',
    featured: true,
    year:     2025,
    period:   '2025',
    highlights: [
      'Real-time WebSocket chat between trainers and gyms',
      'Job board with applications — gyms post, trainers apply',
      'Achievement & certification system for trainer profiles',
      'Role-based access: Trainer, Gym Owner, Admin',
      'Profile management with photo upload',
    ],
  },
  {
    id:       3,
    title:    'Pratik Portfolio',
    subtitle: 'Personal Brand & Portfolio Website',
    description: 'Premium portfolio website with particle canvas animations, typing effects, glassmorphism design, dark/light theme, custom cursor, AOS scroll animations, and interactive sections.',
    image:    'assets/images/projects/portfolio.png',
    github:   'https://github.com/pratiknere/portfolio',
    demo:     '',
    tech:     ['Angular 20', 'TypeScript', 'SCSS', 'Bootstrap 5', 'GSAP', 'AOS'],
    category: 'frontend',
    featured: false,
    year:     2025,
    period:   '2025',
    highlights: [
      'Particle canvas background with connected-dot animations',
      'Typing effect, dark/light theme toggle',
      'Glassmorphism navbar, custom cursor, AOS scroll reveals',
      'Fully responsive — mobile to ultra-wide',
    ],
  },
];

// ─── Journey ───────────────────────────────────────────────────────────────
export const JOURNEY = [
  {
    year:        '2019',
    title:       'Started B.Tech – Computer Engineering',
    subtitle:    'R. C. Patel Institute of Technology, Shirpur (DBATU)',
    description: 'Began engineering at RC Patel, Shirpur. Dived into programming fundamentals — C, Java, data structures, algorithms. The journey of a thousand bugs started here.',
    icon:        '🎓',
    type:        'education',
  },
  {
    year:        '2020',
    title:       'First Lines of Code',
    subtitle:    'Self-Learning Phase',
    description: 'Started self-learning web development. Built first HTML/CSS pages, understood JavaScript basics. Realised this was my calling.',
    icon:        '💻',
    type:        'milestone',
  },
  {
    year:        '2021',
    title:       'Java & Backend Deep Dive',
    subtitle:    'Core Java, OOP, DSA',
    description: 'Spent the year mastering Core Java — OOP, Collections, Streams, Concurrency. Took Java Programming certification from NextTech Infosystems. Built confidence in backend fundamentals.',
    icon:        '☕',
    type:        'milestone',
  },
  {
    year:        '2022',
    title:       'Full Stack Discovery',
    subtitle:    'Angular + Spring Boot',
    description: 'Picked up Angular and Spring Boot. Built first full-stack applications. Completed Angular Development (Udemy) and Spring Boot & Microservices (Coding Shuttle) certifications. Final year project brought it all together.',
    icon:        '⚡',
    type:        'milestone',
  },
  {
    year:        '2023',
    title:       'Graduated — B.Tech Computer Engineering',
    subtitle:    'RC Patel Institute of Technology · CGPA: 8.16 / 10',
    description: 'Graduated with First Class distinction — CGPA 8.16/10. Four years of grind, learning, projects, and growth. Ready to take on the real world.',
    icon:        '🏆',
    type:        'education',
  },
  {
    year:        'Nov 2023',
    title:       'Joined Cybage Software — Software Engineer',
    subtitle:    'Cybage Software Pvt. Ltd., Pune',
    description: 'Landed my first professional role at Cybage Software. Started working on the IHCM Configuration Platform — an enterprise hospitality distribution system serving hotel chains globally.',
    icon:        '🚀',
    type:        'career',
  },
  {
    year:        '2024',
    title:       'Growing at Cybage — Enterprise Impact',
    subtitle:    'IHCM Platform · OTA Integrations · Kafka',
    description: 'Delivered multiple enterprise features — OTA integrations, hotel onboarding flows, reservation mapping, Kafka event-driven architecture, and Angular admin dashboards. Adopted GitHub Copilot for AI-assisted development.',
    icon:        '📈',
    type:        'career',
  },
  {
    year:        'Mar–Jun 2025',
    title:       'StayConnect — Personal Project',
    subtitle:    'Full Stack Hotel Booking System',
    description: 'Built StayConnect from scratch — a production-grade hotel booking and channel management system with Spring Boot 3.5, Angular 20, JWT RBAC, Redis caching, Docker, and GitHub Actions CI/CD.',
    icon:        '🏨',
    type:        'project',
  },
  {
    year:        '2025',
    title:       'FitedIn & Portfolio',
    subtitle:    'Side Projects & Personal Brand',
    description: 'Built FitedIn — LinkedIn for fitness professionals — and this premium portfolio. Exploring AI-assisted development, MCP, and prompt engineering as the next frontier.',
    icon:        '🌟',
    type:        'project',
  },
  {
    year:        'Future',
    title:       'Next Chapter',
    subtitle:    'Senior Engineer · Open Source · Leadership',
    description: 'Targeting a Senior Software Engineer role. Goals: architect large-scale distributed systems, contribute to open source, mentor juniors, and keep building things that matter.',
    icon:        '🔭',
    type:        'future',
  },
];

// ─── Education ─────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree:      'B.Tech – Computer Engineering',
    institution: 'R. C. Patel Institute of Technology, Shirpur',
    university:  'Dr. Babasaheb Ambedkar Technological University (DBATU)',
    year:        '2019 – 2023',
    grade:       'CGPA: 8.16 / 10',
    icon:        '🎓',
  },
];

// ─── Certificates ──────────────────────────────────────────────────────────
export const CERTIFICATES = [
  {
    title:  'Angular Development',
    issuer: 'Udemy',
    year:   '2022',
    icon:   '🅰️',
    color:  '#dd0031',
    desc:   'Comprehensive Angular course covering standalone components, RxJS, reactive forms, routing, and best practices.',
  },
  {
    title:  'Java Programming',
    issuer: 'NextTech Infosystems',
    year:   '2021',
    icon:   '☕',
    color:  '#ed8b00',
    desc:   'Core Java, OOP principles, Collections, Streams, Multithreading, and design patterns.',
  },
  {
    title:  'Spring Boot & Microservices',
    issuer: 'Coding Shuttle',
    year:   '2022',
    icon:   '🍃',
    color:  '#6db33f',
    desc:   'Building production-grade microservices with Spring Boot 3.x, Spring Security, Spring Data JPA, and Docker.',
  },
];

// ─── Achievements ──────────────────────────────────────────────────────────
export const ACHIEVEMENTS_LIST = [
  {
    icon:  '🏗️',
    title: 'Enterprise Platform Contributor',
    desc:  'Delivered multiple production features across hotel onboarding, OTA integrations, reservation mapping, and channel configuration modules at Cybage.',
    color: '#6c63ff',
  },
  {
    icon:  '⚡',
    title: 'Performance Optimizer',
    desc:  'Improved API response times through query optimization, Redis caching, and standardized exception handling across services.',
    color: '#f59e0b',
  },
  {
    icon:  '🤖',
    title: 'AI-Assisted Developer',
    desc:  'Actively adopted GitHub Copilot and MCP-based AI tooling to accelerate implementation, testing, and boilerplate generation.',
    color: '#22c55e',
  },
  {
    icon:  '🏋️',
    title: 'Fitness Enthusiast',
    desc:  'Consistent gym-goer with 3+ years of training. Discipline in fitness translates directly to discipline in engineering.',
    color: '#ff6584',
  },
  {
    icon:  '🎯',
    title: 'Sprint Champion',
    desc:  'Recognized for consistently delivering sprint commitments on time while maintaining high code quality and test coverage.',
    color: '#2496ed',
  },
  {
    icon:  '🚀',
    title: 'Side Project Builder',
    desc:  'Built StayConnect and FitedIn from scratch — production-grade full-stack apps — entirely outside work hours.',
    color: '#a855f7',
  },
];

// ─── Stats ─────────────────────────────────────────────────────────────────
export const STATS = [
  { label: 'Years Experience', value: 2,    suffix: '.8+', icon: '💼' },
  { label: 'Projects Built',   value: 10,   suffix: '+',   icon: '🚀' },
  { label: 'Coding Hours',     value: 2000, suffix: '+',   icon: '⌨️' },
  { label: 'Gym Sessions',     value: 300,  suffix: '+',   icon: '🏋️' },
];

// ─── Gym Quotes ────────────────────────────────────────────────────────────
export const GYM_QUOTES = [
  { text: 'The body achieves what the mind believes.',                          author: 'Unknown'           },
  { text: 'Train insane or remain the same.',                                   author: 'Jade Joness'       },
  { text: 'Consistency beats intensity — always.',                              author: 'Pratik Nere'       },
  { text: 'The gym taught me what code confirmed: discipline is everything.',   author: 'Pratik Nere'       },
];
