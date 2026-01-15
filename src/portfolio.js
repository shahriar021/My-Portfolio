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
    'https://drive.google.com/file/d/1fV9tUObnmH18otpVu_ISl3T63TX44Su8/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/shahriar021',
    github: 'https://github.com/shahriar021',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Magictales AI',
    description: 'An AI-powered app for interactive storytelling.',
    longDescription: `
    This is an AI-powered storytelling app that brings your imagination to life. Users can provide a simple prompt, and the app intelligently generates a complete story based on that input. The AI adapts to different genres, styles, and moods, creating engaging, unique narratives every time.

The app also features integrated payment methods for premium plans, allowing users to unlock advanced capabilities. With higher-tier subscriptions, users can download their generated stories as PDFs, create longer and more complex stories, and access exclusive content.

Whether you want to generate exciting adventures, heartfelt tales, or creative short stories, this app makes storytelling effortless and enjoyable. It’s not just about reading — it’s about creating, sharing, and exploring imaginative worlds in a few taps.
  `,
    stack: ['React Native', 'TypeScript', 'Revenuecat'],
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
    sourceCode: 'https://github.com/yourusername/magictales-ai',
    apk: '/apk/magicTales-AI.apk',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'magic.png',
    images: [
      '/images/1a.png',
      '/images/ark.png',
      '/images/3a.png',
      '/images/aru.png',
    ],
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'magic.png',
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
