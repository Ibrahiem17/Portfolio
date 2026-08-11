// ── Edit this file to personalize your portfolio ──────────────────────────

export const profile = {
  name: 'Muhammad Ibrahiem',
  title: 'Software Engineer',
  tagline: 'Full-stack, DevOps, and mobile — I build things and actually ship them.',
  location: 'Lahore, Pakistan',
  email: 'Ibrahiem6161@gmail.com',
  // Served from public/. Set to '' to hide the download button entirely.
  resumeUrl: '/resume.pdf',
  resumeFileName: 'Muhammad-Ibrahiem-CV.pdf',
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
    subtitle: 'On-device AI that catches unsafe driving before it becomes an accident',
    accent: '#ffb457',
    meta: [
      { label: 'Type', value: 'Final Year Project · 3-person team' },
      { label: 'Focus', value: 'Computer vision, Android, fleet dashboard' },
      { label: 'Year', value: '2025 — 2026' },
    ],
    summary:
      'A driver-facing Android app plus a fleet dashboard, built to bring expensive dash-cam-grade safety monitoring down to hardware every driver already owns: a phone. The AI runs entirely on-device, watching for drowsiness, distraction, phone use, no seatbelt, and smoking — then reports every incident to a live web dashboard.',
    description: [
      'The phone sits on the dashboard facing the driver, checks their face matches who logged in, then continuously classifies behaviour from the front camera — no internet required for the watching itself. Google ML Kit tracks eye closure and head angle frame by frame; a second model spots objects like a phone or a lit cigarette. Nothing is graded from a single frame: PERCLOS (percentage of recent time eyes were closed) and multi-frame object voting exist specifically to keep single-blink or single-glance false positives out.',
      'Severity is a function of duration, not appearance — 0.5 seconds of closed eyes is a blink, 3.5+ seconds is graded Critical. The moment something crosses that line, the driver gets an immediate on-screen and audio alert, a photo is captured as proof, and the incident queues for upload. If there is no signal, nothing is lost: violations write to a local queue first and a background worker keeps retrying until they land — the app was built offline-first from day one, not patched to tolerate it.',
      'On the fleet side, every incident lands on a manager dashboard in close to real time: per-driver safety scores, a live violation feed, photo evidence, and company-configurable severity thresholds and penalty weights — a Critical drowsiness event can be scored differently from a Critical smoking event, because a fleet operator should get to decide that, not the codebase.',
    ],
    stats: [
      { value: '5', label: 'behaviours detected' },
      { value: '2', label: 'on-device AI models' },
      { value: '4', label: 'severity levels' },
      { value: '0', label: 'signal required to detect' },
    ],
    tags: ['Kotlin', 'Android', 'ML Kit', 'Computer Vision', 'Firebase', 'React', 'Node.js'],
    device: 'phone',
    links: { repo: '', demo: '' },
    screens: [
      {
        src: '/projects/dms/01-face-verify.jpg',
        label: 'Face verification',
        caption: 'A 512-number face embedding gates every session before monitoring starts',
      },
      {
        src: '/projects/dms/02-driver-home.jpg',
        label: 'Driver home',
        caption: 'Live session stats — violations, elapsed time, running performance score',
      },
      {
        src: '/projects/dms/03-alert-critical.jpg',
        label: 'Critical alert',
        caption: 'Full-screen, high-contrast warning the instant a behaviour crosses threshold',
      },
      {
        src: '/projects/dms/04-violations.jpg',
        label: 'Violation log',
        caption: "Every incident timestamped and graded on the driver's own device",
      },
      {
        src: '/projects/dms/05-dashboard.png',
        label: 'Fleet dashboard',
        caption: 'Live violation feed, safety-score trend, and fleet-wide breakdown by type',
        device: 'browser',
      },
      {
        src: '/projects/dms/06-driver-detail.png',
        label: 'Driver detail',
        caption: 'Per-driver safety-score history, live location, and full violation record',
        device: 'browser',
      },
      {
        src: '/projects/dms/07-severity-info.png',
        label: 'Severity thresholds',
        caption: 'The exact duration bands — Low through Critical — behind every grade',
        device: 'browser',
      },
      {
        src: '/projects/dms/08-penalty-settings.png',
        label: 'Configurable penalties',
        caption: 'Score deduction per violation type and severity, set by the fleet operator',
        device: 'browser',
      },
    ],
    flow: [
      {
        title: 'Verify',
        detail:
          'The driver logs in, then the camera confirms their face matches — cosine similarity against a saved embedding — before a session can start.',
      },
      {
        title: 'Watch',
        detail:
          'ML Kit tracks eye closure and head angle continuously on-device; a second model watches for phones, seatbelts, and cigarettes across recent frames.',
      },
      {
        title: 'Grade',
        detail:
          'Sustained behaviour, not a single frame, sets severity — Low to Critical, purely a function of how long it lasted.',
      },
      {
        title: 'Alert & queue',
        detail:
          'The driver is warned immediately with a photo captured as proof; the report queues locally and uploads the moment there is signal.',
      },
      {
        title: 'Review',
        detail:
          'The fleet dashboard updates near-instantly with the incident, photo, and its effect on that driver’s safety score.',
      },
    ],
    stack: [
      { group: 'Android', items: ['Kotlin', 'CameraX', 'WorkManager'] },
      { group: 'On-device AI', items: ['Google ML Kit', 'TFLite object detection'] },
      { group: 'Backend', items: ['Node.js', 'SQLite', 'Firebase Auth', 'Firestore', 'Cloudinary'] },
      { group: 'Dashboard', items: ['React'] },
    ],
    features: [
      {
        title: 'Fully on-device detection',
        detail: 'Drowsiness, distraction, and object detection all run on the phone — no connection needed to watch, only to report.',
      },
      {
        title: 'Face-verified sessions',
        detail: 'A 512-dimension embedding, compared by cosine similarity, confirms the right driver before monitoring begins.',
      },
      {
        title: 'Duration-based severity',
        detail: 'PERCLOS and multi-frame voting mean a single blink or glance never triggers a false alarm.',
      },
      {
        title: 'Offline-first by design',
        detail: 'Violations queue locally and retry automatically — a lost signal never loses an incident.',
      },
      {
        title: 'Configurable fleet policy',
        detail: 'Severity thresholds and score penalties per violation type are set by the operator, not hard-coded.',
      },
      {
        title: 'Live fleet dashboard',
        detail: 'Per-driver history, photo evidence, and safety scores, synced from the phone in close to real time.',
      },
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
      'A full freelance marketplace where payment is held by a Solana smart contract instead of a platform. SOL is locked on job creation and released only on approval — zero platform fees, no middleman, live on devnet.',
    description: [
      'The design problem was the revision loop — real freelance work rarely lands right the first time, so the state machine had to let a client request changes without either side losing custody of the funds.',
      'Around the contract sits a complete product: a freelancer marketplace, a filterable job board, Phantom wallet connection, and a Practice Mode that lets people try the whole flow before committing real SOL.',
    ],
    stats: [
      { value: '5', label: 'on-chain instructions' },
      { value: '6', label: 'LiteSVM integration tests' },
      { value: '0%', label: 'platform fees' },
      { value: '<2s', label: 'payment settlement' },
    ],
    tags: ['Solana', 'Rust', 'Anchor', 'Next.js', 'IPFS'],
    device: 'browser',
    links: {
      repo: 'https://github.com/Ibrahiem17/freelancepay',
      demo: 'https://freelancepay-roan.vercel.app/',
    },
    screens: [
      {
        src: '/projects/freelancepay/01-home.jpg',
        label: 'Landing',
        caption: 'Wallet connection and live devnet status',
      },
      {
        src: '/projects/freelancepay/02-escrow-create.jpg',
        label: 'Creating an escrow',
        caption: 'Client names a wallet and amount; SOL moves into a PDA vault',
      },
      {
        src: '/projects/freelancepay/03-escrow-lifecycle.jpg',
        label: 'Escrow lifecycle',
        caption: 'Create → submit → approve, with cancel as the escape hatch',
      },
      {
        src: '/projects/freelancepay/04-jobs.jpg',
        label: 'Job board',
        caption: 'Filter open jobs by skill, budget, and recency',
      },
      {
        src: '/projects/freelancepay/05-y2k-theme.jpg',
        label: 'Y2K Glass theme',
        caption: 'A second skin, switchable at runtime',
      },
    ],
    flow: [
      {
        title: 'Create escrow',
        detail:
          'The client enters the freelancer’s wallet address and the agreed amount. The SOL moves into a Program Derived Account — a vault only the contract can open.',
      },
      {
        title: 'Submit work',
        detail:
          'The freelancer calls submit_work, recording the delivery note permanently on-chain. Escrow status moves Active → Submitted.',
      },
      {
        title: 'Approve',
        detail:
          'The client calls approve_work. The contract closes the escrow and transfers the full balance to the freelancer in the same transaction.',
      },
      {
        title: 'Or cancel',
        detail:
          'While the escrow is still Active, the client can call cancel_escrow for a full refund — the escape hatch if work never starts.',
      },
    ],
    stack: [
      { group: 'On-chain', items: ['Rust', 'Anchor', 'Solana'] },
      { group: 'Client', items: ['Next.js', 'Phantom Wallet'] },
      { group: 'Storage & tests', items: ['IPFS', 'LiteSVM'] },
    ],
    features: [
      { title: 'PDA-held funds', detail: 'SOL sits in a program-derived vault — neither party can touch it mid-contract.' },
      { title: 'Escrow state machine', detail: 'Five instructions move a job from funded through to released.' },
      { title: 'Cancel and refund', detail: 'If work never starts, the client reclaims the full amount on-chain.' },
      { title: 'IPFS deliverables', detail: 'Work is uploaded and referenced on-chain rather than stored on it.' },
      { title: 'Marketplace & job board', detail: 'Browse freelancers or filter open jobs by skill, budget, and recency.' },
      { title: 'Practice Mode', detail: 'Run the full flow on devnet before switching to real money.' },
      { title: 'Integration tested', detail: 'Six LiteSVM tests cover the escrow paths end to end.' },
    ],
  },
];

export const socials = [
  { label: 'GitHub', url: 'https://github.com/Ibrahiem17' },
  { label: 'Email', url: 'mailto:Ibrahiem6161@gmail.com' },
];
