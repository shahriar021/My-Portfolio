import './Marquee.css'

const items = [
  'React Native',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Firebase',
  'Stripe',
  'MySQL',
  'WebSockets',
  'LangChain',
  'Redux',
  'Tailwind CSS',
  'Docker',
]

const Row = ({ hidden }) => (
  <ul className='marquee__row' aria-hidden={hidden || undefined}>
    {items.map((item) => (
      <li key={item}>
        {item}
        <span className='marquee__sep' aria-hidden>
          ✦
        </span>
      </li>
    ))}
  </ul>
)

const Marquee = () => (
  <div className='marquee' aria-label='Technologies I work with'>
    <div className='marquee__track'>
      <Row />
      <Row hidden />
    </div>
  </div>
)

export default Marquee
