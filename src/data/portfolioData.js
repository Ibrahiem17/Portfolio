// ── Edit this file to personalize your portfolio ──────────────────────────

export const profile = {
  name: 'Muhammad Ibrahiem',
  title: 'Software Engineer',
  tagline: 'Full-stack, DevOps, and mobile — I build things and actually ship them.',
  location: 'Lahore, Pakistan',
  email: 'Ibrahiem6161@gmail.com',
  // Drop a PDF at public/resume.pdf and set this to '/resume.pdf' to show the
  // résumé button. Left empty so the PDF stays out of the public repo.
  resumeUrl: '',
  avatarInitials: 'MI',
};

export const about = {
  heading: 'who am i',
  paragraphs: [
    'Computer Science graduate from UMT Lahore, building across the stack — React and Node on the web, React Native and Java on mobile, Docker and GitHub Actions holding it all together.',
    'I like work that reaches real users: a brain-training game live on the Play Store, a CRM that cut deployment overhead by ~60%, an on-chain escrow built in a hackathon weekend. Shipping beats theorising.',
  ],
};

export const experience = [
  {
    role: 'Teaching Assistant — Software Project Management',
    company: 'University of Management and Technology, Lahore',
    period: 'Nov 2025 — Feb 2026',
    points: [
      'Facilitated Agile/Scrum sprint planning workshops for student teams.',
      'Reviewed project deliverables against SDLC best practices.',
    ],
  },
  {
    role: 'Android Developer Intern',
    company: 'Hex Software (Remote)',
    period: 'Apr 2025 — May 2025',
    points: [
      'Built Android features in Java using Android Studio.',
      'Integrated RESTful APIs and delivered UI components following Material Design guidelines.',
    ],
  },
];

export const education = [
  {
    degree: 'BS Computer Science',
    school: 'University of Management and Technology, Lahore',
    period: 'Aug 2022 — Aug 2026',
  },
  {
    degree: 'Intermediate in Computer Science',
    school: 'Punjab College, Lahore',
    period: 'Jun 2020 — Mar 2022',
  },
];

export const certifications = [
  'HackerRank Certified Software Engineer',
  'GitHub Foundations',
  'Cloud Code Certification',
  'Scrum Certified',
];

/* Levels are rough self-assessments — tune the numbers to taste. */
export const skills = [
  { name: 'React / React Native', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'Java', level: 82 },
  { name: 'Node.js', level: 80 },
  { name: 'Docker & CI/CD', level: 78 },
  { name: 'SQL / Firebase / Supabase', level: 78 },
  { name: 'C / C++', level: 75 },
  { name: 'Kubernetes & Cloud', level: 65 },
];

/* ── Projects ─────────────────────────────────────────────────────────────
   Each project renders as a collapsible card. Only `id`, `title`, `subtitle`,
   `tags` and `summary` are required — every other field is optional, and the
   card simply skips any block you leave out. Screenshots live in
   public/projects/<id>/. `accent` colours that project's expanded panel. */

export const projects = [
  {
    id: 'hireready',
    title: 'HireReady',
    subtitle: 'AI-Powered Interview Preparation Platform',
    accent: '#b6f36a',
    defaultOpen: true,
    meta: [
      { label: 'Platform', value: 'Android · Java' },
      { label: 'Role', value: 'Solo — design & build' },
      { label: 'Year', value: '2026' },
    ],
    summary:
      'A mock-interview simulator that turns practice into measurable progress. Candidates answer real interview questions by voice or text and get instant, structured feedback from an LLM — a score, what landed, and exactly what to fix.',
    description: [
      'Interview prep usually fails for two reasons: there is nobody to practice against, and no honest feedback when you do. HireReady closes both gaps with a safe, repeatable environment for rehearsing real interviews.',
      'Answers are transcribed on-device, evaluated by GPT-4o-mini against the question context, and persisted as a session history so progress is visible over time. A Gemini-powered assistant sits alongside for open-ended prep questions.',
    ],
    stats: [
      { value: '2', label: 'LLMs orchestrated' },
      { value: '0–100', label: 'instant scoring' },
      { value: '2', label: 'answer modes' },
      { value: '3', label: 'Firebase services' },
    ],
    tags: ['Java', 'Android SDK', 'Firebase', 'OpenAI', 'Gemini', 'Material Design'],
    links: { repo: 'https://github.com/Ibrahiem17/HireReady', demo: '' },
    screens: [
      {
        src: '/projects/hireready/01-signin.jpg',
        label: 'Sign in',
        caption: 'Firebase Auth with session persistence',
      },
      {
        src: '/projects/hireready/02-dashboard.jpg',
        label: 'Dashboard',
        caption: 'Role packs and scored session history',
      },
      {
        src: '/projects/hireready/03-interview.jpg',
        label: 'Mock interview',
        caption: 'Answer by voice or text, question by question',
      },
      {
        src: '/projects/hireready/04-feedback.jpg',
        label: 'AI feedback',
        caption: 'Score, strengths, gaps, and concrete fixes',
      },
      {
        src: '/projects/hireready/05-chatbot.jpg',
        label: 'Career assistant',
        caption: 'Gemini chat for open-ended prep questions',
      },
    ],
    flow: [
      {
        title: 'Answer',
        detail: 'User responds by voice or text; the Android Speech API transcribes in real time.',
      },
      {
        title: 'Evaluate',
        detail: 'AIEvaluator sends the answer plus question context to GPT-4o-mini for structured scoring.',
      },
      {
        title: 'Persist',
        detail: 'The JSON verdict — score, strengths, weaknesses — is written to the user’s Firestore session history.',
      },
      {
        title: 'Reflect',
        detail: 'The feedback screen renders progress over time and targeted improvements.',
      },
    ],
    stack: [
      {
        group: 'Android',
        items: ['Java', 'XML + Material Design', 'Glide', 'CircleImageView', 'AlarmManager'],
      },
      { group: 'Backend', items: ['Firebase Auth', 'Cloud Firestore', 'Firebase Storage'] },
      {
        group: 'AI & network',
        items: ['GPT-4o-mini', 'Gemini 2.5 Flash Lite', 'Android Speech API', 'OkHttp', 'Volley'],
      },
    ],
    features: [
      {
        title: 'Dual-mode interviews',
        detail: 'Text mode for quiet rooms, voice mode for rehearsing delivery out loud.',
      },
      {
        title: 'Structured AI evaluation',
        detail: 'Every answer returns a 0–100 score with strengths, weaknesses, and improvements.',
      },
      {
        title: 'Career chatbot',
        detail: 'A Gemini-backed assistant for prep advice that falls outside a scripted question.',
      },
      {
        title: 'Dynamic question packs',
        detail: 'Role-specific packs — Supervisor, Customer Support, and more — served from Firestore.',
      },
      {
        title: 'Practice reminders',
        detail: 'AlarmManager-scheduled nudges to keep preparation consistent.',
      },
      {
        title: 'Session history',
        detail: 'Past interviews stored per user, so improvement is visible rather than assumed.',
      },
    ],
  },

  {
    id: 'dms',
    title: 'Driver Monitoring System',
    subtitle: 'Real-time detection of unsafe driving',
    accent: '#ffb457',
    meta: [
      { label: 'Type', value: 'Final Year Project' },
      { label: 'Focus', value: 'Computer Vision' },
      { label: 'Year', value: '2025 — 2026' },
    ],
    summary:
      'A real-time AI system that watches for unsafe driving behaviour — drowsiness, distraction, phone use — and reports incidents to a web dashboard built for fleet-level monitoring.',
    description: [
      'The driver-facing half runs computer vision continuously, classifying behaviour as it happens rather than after the fact. The admin half turns those detections into something a fleet operator can act on: incident records, per-driver history, and an overview of the whole fleet.',
    ],
    tags: ['Computer Vision', 'AI', 'Dashboard'],
    links: { repo: '', demo: '' },
    features: [
      { title: 'Drowsiness detection', detail: 'Flags fatigue signals from the live camera feed.' },
      { title: 'Distraction & phone use', detail: 'Catches attention leaving the road, including handset use.' },
      { title: 'Incident reporting', detail: 'Each detection is recorded as a reviewable incident.' },
      { title: 'Fleet dashboard', detail: 'Web-based admin view for monitoring drivers across a fleet.' },
    ],
  },

  {
    id: 'alphacrm',
    title: 'AlphaCRM',
    subtitle: 'Full-stack CRM with a complete DevOps pipeline',
    accent: '#38f7ff',
    meta: [
      { label: 'Type', value: 'Full-stack web app' },
      { label: 'Role', value: 'Solo build' },
      { label: 'Stack', value: 'React · Node · SQL' },
    ],
    summary:
      'A customer-relationship manager covering the full lifecycle — records, sales pipeline, and role-based access — wrapped in a containerised CI/CD pipeline that cut deployment overhead by roughly 60%.',
    description: [
      'The interesting part was less the CRUD and more the delivery path around it: Docker for reproducible environments and GitHub Actions to take a merge straight through to a deployed build without manual steps.',
    ],
    stats: [{ value: '~60%', label: 'less deployment overhead' }],
    tags: ['React', 'Node.js', 'SQL', 'Docker', 'GitHub Actions'],
    links: { repo: 'https://github.com/Ibrahiem17/alphacrm', demo: '' },
    stack: [
      { group: 'Frontend', items: ['React'] },
      { group: 'Backend', items: ['Node.js', 'SQL'] },
      { group: 'DevOps', items: ['Docker', 'GitHub Actions', 'CI/CD'] },
    ],
    features: [
      { title: 'Full CRUD', detail: 'Create, read, update, and delete across customer records.' },
      { title: 'Pipeline tracking', detail: 'Deals move through stages with their status visible throughout.' },
      { title: 'Role-based access', detail: 'Permissions scoped to what each role is allowed to see and do.' },
      { title: 'Automated delivery', detail: 'Docker plus GitHub Actions CI/CD removed most manual deploy work.' },
    ],
  },

  {
    id: 'dr-ibo',
    title: 'Dr. Ibo Brain Training',
    subtitle: 'Published brain-training game',
    accent: '#ff7ad9',
    meta: [
      { label: 'Platform', value: 'Android · Play Store' },
      { label: 'Built with', value: 'React Native (Expo)' },
      { label: 'Status', value: 'Live' },
    ],
    summary:
      'A cognitive-training game shipped to the Google Play Store: seven mini-games, boss battles, and a coin economy tying the progression together.',
    description: [
      'This one went the whole distance — not a prototype but a real release, built with Expo and shipped through EAS Build to a live store listing.',
    ],
    stats: [
      { value: '7', label: 'cognitive mini-games' },
      { value: 'Live', label: 'on Google Play' },
    ],
    tags: ['React Native', 'Expo', 'EAS Build', 'Game Dev'],
    links: { repo: 'https://github.com/Ibrahiem17/Dr.-Ibo-Brain-Training', demo: '' },
    stack: [{ group: 'Mobile', items: ['React Native', 'Expo', 'EAS Build'] }],
    features: [
      { title: 'Seven mini-games', detail: 'Each targets a different cognitive skill.' },
      { title: 'Boss battles', detail: 'Longer challenge runs that raise the difficulty.' },
      { title: 'Coin economy', detail: 'Rewards tie progression across the whole game together.' },
      { title: 'Shipped to production', detail: 'Built and released via EAS Build to the Play Store.' },
    ],
  },

  {
    id: 'freelancepay',
    title: 'FreelancePay',
    subtitle: 'Trustless freelance payment escrow on Solana',
    accent: '#c084fc',
    meta: [
      { label: 'Type', value: 'Hackathon build' },
      { label: 'Event', value: 'Colosseum Frontier' },
      { label: 'Chain', value: 'Solana' },
    ],
    summary:
      'An on-chain escrow that lets a client and a freelancer transact without trusting each other. Five instructions drive a state machine covering funding, delivery, revisions, and release.',
    description: [
      'The design problem was the revision loop — real freelance work rarely lands right the first time, so the state machine had to let a client request changes without either side losing custody of the funds.',
    ],
    stats: [
      { value: '5', label: 'on-chain instructions' },
      { value: '6', label: 'LiteSVM integration tests' },
    ],
    tags: ['Solana', 'Rust', 'Anchor', 'Next.js', 'IPFS'],
    links: { repo: 'https://github.com/Ibrahiem17/freelancepay', demo: '' },
    stack: [
      { group: 'On-chain', items: ['Rust', 'Anchor', 'Solana'] },
      { group: 'Client', items: ['Next.js'] },
      { group: 'Storage & tests', items: ['IPFS', 'LiteSVM'] },
    ],
    features: [
      { title: 'Escrow state machine', detail: 'Five instructions move a job from funded through to released.' },
      { title: 'Client revision loop', detail: 'Changes can be requested without releasing or reclaiming funds early.' },
      { title: 'IPFS deliverables', detail: 'Work is uploaded and referenced on-chain rather than stored on it.' },
      { title: 'Integration tested', detail: 'Six LiteSVM tests cover the escrow paths end to end.' },
    ],
  },
];

export const socials = [
  { label: 'GitHub', url: 'https://github.com/Ibrahiem17' },
  { label: 'Email', url: 'mailto:Ibrahiem6161@gmail.com' },
];
