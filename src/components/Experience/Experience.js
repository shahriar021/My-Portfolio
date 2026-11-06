import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => (
  <section id='experience' className='experience-section'>
    <div className='experience-inner'>
      <header className='experience-header'>
        <p className='experience-eyebrow'>Career journey</p>
        <h2 className='experience-title'>Experience that <span>builds</span></h2>
        <p className='experience-intro'>
          From freelance beginnings to product teams, I’ve grown across
          software development, quality assurance, and mobile and web delivery.
        </p>
      </header>

      <ol className='experience-timeline'>
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className='experience-item'>
            <div className='experience-period'>{item.period}</div>
            <article className='experience-card'>
              <div className='experience-card-heading'>
                <div>
                  <h3>{item.role}</h3>
                  <p className='experience-company'>{item.company}</p>
                </div>
                <span className='experience-marker' aria-hidden='true' />
              </div>
              <p className='experience-description'>{item.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  </section>
)

export default Experience
