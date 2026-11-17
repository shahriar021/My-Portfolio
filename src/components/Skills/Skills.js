import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => (
  <section id='skills' className='section'>
    <div className='container'>
      <div className='section-head'>
        <div className='reveal'>
          <p className='eyebrow'>
            <span>03</span> — Skills
          </p>
          <h2 className='section-title'>
            The <span className='serif accent'>toolkit.</span>
          </h2>
        </div>
        <p className='section-sub reveal'>
          A mobile-first engineer who&apos;s comfortable across the stack, from
          native builds and store releases to APIs, real-time systems and LLMs.
        </p>
      </div>

      <div className='skills'>
        {skills.map((group, i) => (
          <article
            key={group.area}
            className='skill reveal'
            style={{ '--delay': `${(i % 3) * 0.07}s` }}
          >
            <div className='skill__head'>
              <span className='skill__num'>{String(i + 1).padStart(2, '0')}</span>
              <h3 className='skill__area'>{group.area}</h3>
            </div>
            <p className='skill__desc'>{group.description}</p>
            <ul className='skill__list'>
              {group.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
