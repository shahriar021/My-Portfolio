import { education } from '../../portfolio'
import { ArrowUpRight } from '../Icons'
import './Education.css'

const Education = () => (
  <section id='education' className='section'>
    <div className='container'>
      <div className='section-head'>
        <div className='reveal'>
          <p className='eyebrow'>
            <span>04</span> — Education
          </p>
          <h2 className='section-title'>
            Foundations <span className='serif accent'>&amp; credentials.</span>
          </h2>
        </div>
      </div>

      <div className='edu'>
        <article className='edu__degree reveal'>
          <p className='edu__period'>{education.period}</p>
          <h3 className='edu__title'>{education.degree}</h3>
          <p className='edu__school'>
            {education.school} <span>· {education.location}</span>
          </p>
          <div className='edu__mark' aria-hidden>
            CSE
          </div>
        </article>

        <div className='edu__certs reveal' style={{ '--delay': '0.08s' }}>
          <p className='edu__label'>Certifications</p>
          <ul>
            {education.certificates.map((c) => (
              <li key={c.title}>
                <a href={c.link} target='_blank' rel='noopener noreferrer' className='cert'>
                  <span>
                    <span className='cert__title'>{c.title}</span>
                    <span className='cert__issuer'>{c.issuer}</span>
                  </span>
                  <ArrowUpRight />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Education
