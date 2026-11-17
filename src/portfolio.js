// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  the site — components read everything from these exports.
// ─────────────────────────────────────────────────────────────

const about = {
  name: 'Shahriar Chowdhury',
  firstName: 'Shahriar',
  role: 'Software Engineer',
  focus: 'Mobile & Full-Stack',
  location: 'Bangladesh',
  currently: { role: 'Software Engineer', company: 'Sparktech Software' },
  picture: 'https://avatars.githubusercontent.com/u/95222498?v=4',
  description:
    'I’m a software engineer with a B.Sc. in Computer Science and Engineering and experience spanning freelance work, software quality assurance, and product teams. I build mobile and web applications with React Native, React, TypeScript, and Node.js — taking features from a clear requirement through implementation, testing, and release.',
  resume: '/Shahriar_Chowdhury_Resume.pdf',
  social: {
    github: 'https://github.com/shahriar021',
    linkedin: 'https://www.linkedin.com/in/shahriar021',
  },
  stats: [
    { value: '2018', label: 'Writing code since' },
    { value: '35', label: 'Products built' },
    { value: '10', label: 'Apps live on the stores' },
    { value: '4', label: 'Product teams' },
  ],
}

// `type`: 'app' renders phone frames, 'web' renders browser frames.
// `cover`: a wide hero image. If omitted, the screenshots are fanned out.
const projects = [
  {
    name: 'Arkive',
    type: 'app',
    tagline: 'Multivendor fashion marketplace with a social feed and AI search.',
    description:
      'A multivendor e-commerce app with social and AI-powered features — live on the App Store and Google Play.',
    longDescription: `Arkive is a dynamic multivendor e-commerce platform that connects sellers and buyers in one place. Beyond traditional shopping, Arkive integrates a social news feed where users and sellers can post updates, share product highlights, and engage with the community.

Buyers can browse and purchase products seamlessly, while sellers have full control to add, edit, and delete their listings. An AI-powered search intelligently matches clothing items to user preferences, making product discovery smarter and more personalized.

With advanced analytics, buyers and sellers can view dynamic stats to track performance, trends, and engagement. Arkive blends commerce with community, offering a modern shopping experience that is interactive, social, and AI-enhanced.`,
    stack: ['React Native', 'TypeScript', 'Stripe', 'Firebase', 'Node.js'],
    cover: '/images/opt/arkbg.jpg',
    images: [
      '/images/opt/1a.jpg',
      '/images/opt/ark.jpg',
      '/images/opt/3a.jpg',
      '/images/opt/aru.jpg',
    ],
    features: [
      'Multivendor marketplace with seller and buyer roles',
      'Interactive social news feed',
      'AI-powered clothing search and matching',
      'Product management (add, edit, delete)',
      'Dynamic analytics and performance stats',
      'Stripe-powered checkout',
    ],
    sourceCode: 'https://github.com/shahriar021/e-commerce-app.git',
    apk: 'https://drive.google.com/file/d/1pCs77bdwwPOm6VhO_6a_rdXoidDYNDqb/view?usp=drive_link',
    playStore: 'https://play.google.com/store/apps/details?id=com.sparktech.sas',
    appStore: 'https://apps.apple.com/us/app/arkive-ecom/id6761667415',
  },
  {
    name: 'Preachly',
    type: 'app',
    tagline: 'Weekly Christian lessons with an AI faith companion.',
    description:
      'A Christian learning app with weekly lessons and an AI chatbot to help users explore their faith — live on the App Store.',
    longDescription: `Preachly brings Christian learning together in one app. Users follow weekly lessons designed to build a steady learning habit, and can ask an AI chatbot faith-related questions whenever they want to go deeper.

The app is published on the Apple App Store.`,
    stack: ['React Native', 'TypeScript', 'AI Chatbot'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/40/f3/f3/40f3f321-6d7b-0cf3-e969-8d4231d55adb/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg',
    images: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/5a/d0/a9/5ad0a9a0-8d6b-77f2-43e4-6390ca59bd29/iphoness1_1242x2688.jpg/392x696bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/30/ae/21/30ae2136-6738-b6e2-92c0-1e91ba3a6842/iphoness2_1242x2688.jpg/392x696bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/87/0d/17/870d1769-94b1-adca-9597-23495447f375/iphoness3_1242x2688.jpg/392x696bb.jpg',
    ],
    features: [
      'Weekly Christian learning lessons',
      'AI chatbot for faith-related questions',
    ],
    appStore: 'https://apps.apple.com/us/app/preachly/id6753197639',
  },
  {
    name: 'AI Lawyer BD',
    type: 'web',
    tagline: 'Free AI legal help for Bangladesh, in Bangla and English.',
    description:
      'AI-powered legal assistant for Bangladesh — analyze legal documents and get instant advice in Bangla & English.',
    longDescription: `AI Lawyer BD is an AI-powered legal assistant built for people in Bangladesh who face legal problems daily but can't afford or access a lawyer. Users can upload any legal document (PDF) — rent agreements, job contracts, court notices — or simply describe their situation in Bangla or English.

Powered by LangChain and Groq's LLaMA 3.3 70B model, the app instantly analyzes the document and returns a clear summary, the user's legal rights, dangerous clauses to watch out for, and step-by-step advice — all explained in simple Bangla.

No signup needed. Completely free. Built to make legal help accessible to everyone.`,
    stack: ['Next.js', 'LangChain', 'Groq', 'LLaMA 3.3 70B', 'TypeScript', 'Tailwind CSS'],
    livePreview: 'https://ailawyerapp.netlify.app/',
    cover: '/images/opt/aiLawyer.jpg',
    images: ['/images/opt/aiLawyer.jpg'],
    features: [
      'Upload legal documents (PDF) for instant AI analysis',
      'Describe your situation in Bangla or English',
      'Clear summary of any legal document',
      'Understand your legal rights in plain language',
      'Red flags and dangerous clauses highlighted automatically',
      'Step-by-step advice on what to do next',
      'No signup required — completely free to use',
    ],
  },
  {
    name: 'Magictales AI',
    type: 'app',
    tagline: 'Turn a one-line prompt into a full illustrated story.',
    description:
      'An AI-powered storytelling app with subscription plans, PDF export, and a personal story library.',
    longDescription: `Magictales AI brings imagination to life. Users provide a simple prompt and the app generates a complete story from it, adapting to different genres, styles, and moods to create a unique narrative every time.

Integrated subscriptions through RevenueCat unlock premium plans: higher tiers can download stories as PDFs, create longer and more complex stories, and access exclusive content.

Whether it's an exciting adventure, a heartfelt tale, or a quick bedtime story, the app makes storytelling effortless — it's not just about reading, it's about creating, sharing, and exploring imaginative worlds in a few taps.`,
    stack: ['React Native', 'TypeScript', 'RevenueCat', 'Firebase', 'Django'],
    cover: '/images/opt/magictl.jpg',
    images: [
      '/images/opt/1.jpg',
      '/images/opt/2.1.jpg',
      '/images/opt/2.5.jpg',
      '/images/opt/4.jpg',
    ],
    features: [
      'AI-generated stories from a single prompt',
      'In-app subscriptions with RevenueCat',
      'PDF export for premium users',
      'Offline story saving',
      'Customizable character options',
      'Share stories via social media',
    ],
    sourceCode: 'https://github.com/shahriar021/MagicTales-AI-2.0-app.git',
    apk: 'https://drive.google.com/file/d/1jsz9D7YnOpm2mK2MrV7K4WXrX_cyQ_Dr/view?usp=drive_link',
  },
  {
    name: 'Tika Food',
    type: 'app',
    tagline: 'Three-sided food delivery: customers, restaurants and riders.',
    description:
      'A multivendor food delivery app connecting users, restaurants, and riders.',
    longDescription: `Tika Food is a multivendor food delivery platform. Customers browse nearby restaurants, explore diverse food options, and order based on their location. The app connects users directly with riders who handle timely deliveries.

Restaurants manage their menus, add or edit food items, and track orders. Riders are integrated into the system to accept delivery requests, keeping logistics smooth.

Secure payments and withdrawal options make transactions easy for both customers and vendors — a complete ecosystem for food ordering, delivery, and vendor growth.`,
    stack: ['React Native', 'TypeScript', 'Node.js', 'Stripe'],
    cover: '/images/opt/tika1.jpg',
    images: [
      '/images/opt/t1.jpg',
      '/images/opt/t3.jpg',
      '/images/opt/t4.jpg',
      '/images/opt/t5.jpg',
    ],
    features: [
      'Multivendor food marketplace',
      'Location-based restaurant discovery',
      'Integrated rider delivery flow with live map',
      'Vendor menu management (add, edit, delete)',
      'Secure payments and withdrawal options',
    ],
    sourceCode: 'https://github.com/shahriar021/Tika-food-App.git',
    apk: 'https://drive.google.com/file/d/1m9iBHioWeXR9STlL3mx-YHmxlNnuhfe2/view?usp=drive_link',
  },
  {
    name: 'Sentinel',
    type: 'web',
    tagline: 'Real-time team capacity and burnout-risk dashboard.',
    description:
      'Real-time developer resource management platform for tracking team capacity, workload, and burnout risk.',
    longDescription: `Sentinel is a real-time workforce management platform built for engineering teams. Admins onboard software engineers with their full profile — skills, seniority, current capacity, and availability. Tech leads and team leads get their own login and can assign engineers to projects and tasks directly from the dashboard.

The real power is live visibility. Using WebSockets, Sentinel updates in real time — managers instantly see who is overloaded and at risk of burnout, and who has bandwidth to take on more work. No more Slack pings asking "who's free?" — the answer is always on screen.`,
    stack: ['Next.js', 'Node.js', 'Express', 'MySQL', 'WebSocket'],
    cover: '/images/opt/s1.jpg',
    images: ['/images/opt/s1.jpg'],
    features: [
      'Admin panel to add and manage engineer profiles',
      'Role-based login — Admin, Tech Lead, Team Lead',
      'Assign engineers to projects and tasks',
      'Real-time capacity and workload tracking via WebSockets',
      'Burnout risk detection — see who is overloaded at a glance',
      'Live dashboard showing who is free vs fully booked',
    ],
    note: 'Actively improving — next up: AI-based burnout prediction, Slack notifications, and sprint analytics.',
  },
  {
    name: 'Qulinejb',
    type: 'web',
    tagline: 'Tell it your mood, get a watchlist. AI movie discovery.',
    description:
      'AI-powered movie discovery site that recommends films based on your mood and genre preferences.',
    longDescription: `Qulinejb is an AI-powered movie discovery platform for people who want smarter recommendations. Instead of endless browsing, users describe their current mood and the AI engine — powered by OpenRouter — curates a personalized watchlist on the spot.

The platform pulls live movie data from TMDB, giving users rich metadata, posters, trailers, and ratings. Users can filter by genre, save films to a Watch Later list, and revisit their Recently Viewed history.`,
    stack: ['Next.js', 'TMDB API', 'OpenRouter API'],
    livePreview: 'https://qulinejb.netlify.app/',
    cover: '/images/opt/m1.jpg',
    images: [
      '/images/opt/m1.jpg',
      '/images/opt/m2.jpg',
      '/images/opt/m3.jpg',
      '/images/opt/m4.jpg',
    ],
    features: [
      'AI mood-based movie recommendations',
      'Browse by genre',
      'Watch Later list',
      'Recently Viewed history',
      'Live movie data from TMDB',
    ],
  },
]

const experience = [
  {
    period: 'May 2025 — Present',
    company: 'Sparktech Software',
    role: 'Software Engineer',
    current: true,
    description:
      'Build and improve mobile and web product features using React Native, React, TypeScript, and Node.js, contributing across implementation, debugging, testing, and release workflows.',
    tags: ['React Native', 'React', 'TypeScript', 'Node.js'],
  },
  {
    period: 'Jan 2025 — May 2025',
    company: 'Smart Software Ltd',
    role: 'Software Engineer',
    description:
      'Worked with the software team on feature implementation, debugging, and testing to support the delivery and ongoing improvement of its products.',
  },
  {
    period: '2024',
    company: 'Urban IT Solution',
    role: 'Software Engineer',
    description:
      'Contributed to software delivery by implementing and maintaining features, investigating bugs, and collaborating with the team to meet project requirements.',
  },
  {
    period: '2022',
    company: 'Qunolist',
    role: 'Software Quality Assurance (SQA)',
    description:
      'Focused on product quality by checking user flows, documenting defects, and sharing clear reproduction steps so issues could be investigated and resolved.',
  },
  {
    period: '2019 — 2022',
    company: 'Local Clients',
    role: 'Freelance Developer',
    description:
      'Partnered with local clients to turn their needs into practical software solutions, managing communication, implementation, revisions, and delivery.',
  },
  {
    period: '2018 — 2019',
    company: 'Fiverr & Upwork',
    role: 'Freelance Developer',
    description:
      'Started my professional journey through freelance projects — working directly with clients to understand requests, deliver software features, and refine the work through feedback.',
  },
]

const skills = [
  {
    area: 'Mobile',
    description: 'Cross-platform apps, shipped to the stores',
    skills: ['React Native', 'iOS & Android', 'App Store & Play Store deployment', 'RevenueCat', 'Firebase'],
  },
  {
    area: 'Frontend',
    description: 'Interfaces that feel fast and considered',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SASS', 'Material UI', 'HTML & CSS'],
  },
  {
    area: 'Backend',
    description: 'APIs, data, and real-time systems',
    skills: ['Node.js', 'Express.js', 'MySQL', 'REST APIs', 'WebSockets', 'Stripe'],
  },
  {
    area: 'AI',
    description: 'LLM features that solve real problems',
    skills: ['LangChain', 'Groq', 'OpenRouter', 'Prompt design'],
  },
  {
    area: 'Architecture',
    description: 'Keeping complexity in check',
    skills: ['Redux', 'Component architecture', 'SOLID', 'System design', 'DSA'],
  },
  {
    area: 'Quality & Tooling',
    description: 'From commit to production, reliably',
    skills: ['Git', 'Docker', 'CI/CD', 'Jest', 'Manual QA & bug reporting'],
  },
]

const education = {
  degree: 'B.Sc. in Computer Science & Engineering',
  school: 'East West University',
  location: 'Dhaka, Bangladesh',
  period: '2019 — 2023',
  certificates: [
    {
      title: 'JavaScript',
      issuer: 'Udemy',
      link: 'https://drive.google.com/file/d/1J7gBUqvneA1DpDGEfsd2CPBh0Zt2_Uyu/view?usp=drive_link',
    },
    {
      title: 'React Developer',
      issuer: 'Udemy',
      link: 'https://drive.google.com/file/d/1l4DabmfonJb1qq0gZsiD0-h6FAsfV6A0/view',
    },
    {
      title: 'Node.js Mastery',
      issuer: 'Udemy',
      link: 'https://drive.google.com/file/d/15aPJe7pzeSDHvolodW_6e9GTijaJ6V_8/view',
    },
    {
      title: 'SQL',
      issuer: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/iframe/53f3cc9da2b7',
    },
  ],
}

const contact = {
  email: 'shahriarc19@gmail.com',
  phone: '+880 1604-173222',
}

const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-')

export { about, projects, experience, skills, education, contact, slugify }
