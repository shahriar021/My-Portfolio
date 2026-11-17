import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => (
  <section id='experience' className='section'>
    <div className='container xp'>
      <div className='xp__head'>
        <div className='reveal'>
          <p className='eyebrow'>
            <span>02</span> — Experience
          </p>
          <h2 className='section-title'>
            Where I&apos;ve <span className='serif accent'>grown.</span>
          </h2>
          <p className='section-sub' style={{ marginTop: 20 }}>
            From freelance gigs in 2018 to product teams today, with a stint in
            QA that taught me to obsess over the details users actually feel.
          </p>
        </div>
      </div>

      <ol className='xp__list'>
        {experience.map((item, i) => (
          <li
            key={`${item.company}-${item.period}`}
            className={`xp__item reveal ${item.current ? 'xp__item--current' : ''}`}
            style={{ '--delay': `${Math.min(i, 3) * 0.05}s` }}
          >
            <div className='xp__period'>
              {item.current && <span className='dot' />}
              {item.period}
            </div>
            <div className='xp__content'>
              <h3 className='xp__role'>{item.role}</h3>
              <p className='xp__company'>{item.company}</p>
              <p className='xp__desc'>{item.description}</p>
              {item.tags && (
                <ul className='xp__tags'>
                  {item.tags.map((t) => (
                    <li key={t} className='chip'>
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
)

export default Experience
