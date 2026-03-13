const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shahriar Chowdhury',
  role: 'Software Engineer',
  picture:
    'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'I’m a Software Engineer with a B.Sc. in Computer Science and Engineering. I specialize in building mobile applications with React Native, focusing on delivering efficient and user-friendly solutions. I’ve worked on projects for government platforms, international organizations, and have collaborated directly with freelance clients to bring their ideas to life. I enjoy tackling challenging problems and continuously improving my skills to create impactful software.',
  resume:
    'https://drive.google.com/file/d/13oMM3ZBptzPMsul-OyTzoWNpX0tspqnZ/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/shahriar021',
    github: 'https://github.com/shahriar021',
  },
}

const projects = [
  {
    name: 'Magictales AI',
    description: 'An AI-powered app for interactive storytelling.',
    longDescription: `
    This is an AI-powered storytelling app that brings your imagination to life. Users can provide a simple prompt, and the app intelligently generates a complete story based on that input. The AI adapts to different genres, styles, and moods, creating engaging, unique narratives every time.

The app also features integrated payment methods for premium plans, allowing users to unlock advanced capabilities. With higher-tier subscriptions, users can download their generated stories as PDFs, create longer and more complex stories, and access exclusive content.

Whether you want to generate exciting adventures, heartfelt tales, or creative short stories, this app makes storytelling effortless and enjoyable. It’s not just about reading — it’s about creating, sharing, and exploring imaginative worlds in a few taps.
  `,
    stack: ['React Native', 'TypeScript', 'Revenuecat', 'firebase', 'django'],
    livePreview: 'https://github.com',
    image: 'magictl.png',
    images: [
      '/images/1.png',
      '/images/2.1.png',
      '/images/2.5.png',
      '/images/4.png',
    ],
    features: [
      'AI-generated interactive stories',
      'User-friendly interface',
      'Offline story saving',
      'Customizable character options',
      'Share stories via social media',
    ],
    sourceCode: 'https://github.com/shahriar021/MagicTales-AI-2.0-app.git',
    apk: 'https://drive.google.com/file/d/1jsz9D7YnOpm2mK2MrV7K4WXrX_cyQ_Dr/view?usp=drive_link',
  },
  {
    name: 'Arkive',
    description:
      'A multivendor e-commerce app with social and AI-powered features.',
    longDescription: ` Arkive is a dynamic multivendor e-commerce platform that connects sellers and buyers in one place. Beyond traditional shopping, Arkive integrates a social news feed where users and sellers can post updates, share product highlights, and engage with the community. Buyers can browse and purchase products seamlessly, while sellers have full control to add, edit, and delete their listings. The app also features an AI-powered search functionality that intelligently matches clothing items to user preferences, making product discovery smarter and more personalized. With advanced analytics, buyers and sellers can view highly dynamic stats to track performance, trends, and engagement. Arkive blends commerce with community, offering a modern shopping experience that is interactive, social, and AI-enhanced. `,
    stack: ['React Native', 'TypeScript', 'Stripe', 'firebase', 'node js'],
    livePreview: 'https://github.com',
    image: 'arkbg.png',
    images: [
      '/images/1a.png',
      '/images/ark.png',
      '/images/3a.png',
      '/images/aru.png',
    ],
    features: [
      'Multivendor marketplace with seller and buyer roles',
      'Interactive social news feed',
      'AI-powered clothing search and matching',
      'Product management (add, edit, delete)',
      'Dynamic analytics and performance stats',
      'Seamless product purchasing experience',
    ],
    sourceCode: 'https://github.com/shahriar021/e-commerce-app.git',
    apk: 'https://drive.google.com/file/d/1pCs77bdwwPOm6VhO_6a_rdXoidDYNDqb/view?usp=drive_link',
  },
  {
    name: 'Tika Food',
    description:
      'A multivendor food delivery app connecting users, restaurants, and riders.',
    longDescription: `
    Tika Food is a multivendor food delivery platform designed to bring convenience and variety to users. 
    Customers can browse and select from nearby restaurants, explore diverse food options, and order based 
    on location preferences. The app ensures a seamless experience by connecting users directly with riders 
    who handle timely deliveries.

    Sellers (restaurants) can manage their menus, add or edit food items, and track orders efficiently. 
    Riders are integrated into the system to accept delivery requests, ensuring smooth logistics and 
    customer satisfaction. 

    Tika Food also includes secure payment methods and withdrawal options, making transactions easy for 
    both users and vendors. With its blend of marketplace flexibility and delivery management, Tika Food 
    offers a complete ecosystem for food ordering, delivery, and vendor growth.
  `,
    stack: ['React Native', 'TypeScript', 'node', 'stripe'],
    livePreview: 'https://github.com',
    image: 'tika1.png',
    images: [
      '/images/t1.png',
      '/images/t3.png',
      '/images/t4.png',
      '/images/t5.png',
    ],
    features: [
      'Multivendor food marketplace',
      'Browse and select nearby restaurants',
      'Location-based food discovery',
      'Integrated rider delivery system',
      'Vendor product management (add, edit, delete)',
      'Secure payments and withdrawal options',
    ],
    sourceCode: 'https://github.com/shahriar021/Tika-food-App.git',
    apk: 'https://drive.google.com/file/d/1m9iBHioWeXR9STlL3mx-YHmxlNnuhfe2/view?usp=drive_link',
  },
  {
    name: 'Qulinejb',
    type: 'web',
    description:
      'AI-powered movie discovery site that recommends films based on your mood and genre preferences.',
    longDescription: `
    Qulinejb is an AI-powered movie discovery platform built for cinephiles who want smarter recommendations. 
    Instead of endless browsing, users simply select their current mood and the AI engine — powered by 
    OpenRouter — curates a personalized watchlist on the spot.

    The platform pulls live movie data from TMDB, giving users access to rich metadata, posters, trailers, 
    and ratings. Users can filter by genre, save films to a Watch Later list, and revisit their Recently 
    Viewed history. Every session feels tailored, not algorithmic.
    `,
    stack: ['Next.js', 'TMDB API', 'OpenRouter API'],
    livePreview: 'https://qulinejb.netlify.app/',
    image: 'm1.png',
    images: [
      '/images/m1.png',
      '/images/m2.png',
      '/images/m3.png',
      '/images/m4.png',
    ],
    features: [
      'AI mood-based movie recommendations',
      'Browse by genre',
      'Watch Later list',
      'Recently Viewed history',
      'Live movie data from TMDB',
    ],
    sourceCode: '#',
  },
  {
    name: 'Sentinel',
    type: 'web',
    description:
      'Real-time developer resource management platform for tracking team capacity, workload, and burnout risk.',
    longDescription: `
    Sentinel is a real-time workforce management platform built for engineering teams. 
    Admins can onboard software engineers with their full profile — skills, seniority, 
    current capacity, and availability. Tech leads and team leads get their own login 
    with the ability to assign engineers to projects and tasks directly from the dashboard.

    The real power is in the live visibility. Using WebSockets, Sentinel updates in real 
    time — managers can instantly see who is overloaded and at risk of burnout, and who 
    has bandwidth to take on more work. No more guessing, no more Slack pings asking 
    "who's free?" — the answer is always on screen.
    `,
    stack: ['Next.js', 'Node.js', 'Express', 'MySQL', 'WebSocket'],
    livePreview: '#',
    image: 's1.png',
    images: ['/images/s1.png'],
    features: [
      'Admin panel to add and manage engineer profiles',
      'Role-based login — Admin, Tech Lead, Team Lead',
      'Assign engineers to projects and tasks',
      'Real-time capacity and workload tracking via WebSockets',
      'Burnout risk detection — see who is overloaded at a glance',
      'Live dashboard showing who is free vs fully booked',
    ],
    sourceCode: '#',
    imp:'Actively improving this — planning to add AI-based burnout prediction, Slack notifications, and sprint analytics. May run into rough edges while exploring.'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'DSA',
  'React Native',
  'Android and Ios app development',
  'App Deployment',
  'Tailwind CSS',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const educatioin = {
  signal: 'true',
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shahriarc19@mail.com',
  call: '01604173222',
}

export { header, about, projects, skills, contact, educatioin }
