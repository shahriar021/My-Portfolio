const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shahriar Chowdhury',
  role: 'Software Engineer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'I’m a Software Engineer with a B.Sc. in Computer Science and Engineering. I specialize in building mobile applications with React Native, focusing on delivering efficient and user-friendly solutions. I’ve worked on projects for government platforms, international organizations, and have collaborated directly with freelance clients to bring their ideas to life. I enjoy tackling challenging problems and continuously improving my skills to create impactful software.',
  resume: 'https://drive.google.com/file/d/1fV9tUObnmH18otpVu_ISl3T63TX44Su8/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/shahriar021',
    github: 'https://github.com/shahriar021',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
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

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
