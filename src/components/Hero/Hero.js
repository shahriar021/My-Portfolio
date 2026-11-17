import { Link } from 'react-router-dom'
import { about, projects, slugify } from '../../portfolio'
import { ArrowRight, Download, GitHub, LinkedIn, MapPin, Apple } from '../Icons'
import './Hero.css'

const Hero = () => {
  const { firstName, name, focus, location, currently, picture, resume, social, stats } = about
  const shipped = projects.filter((p) => p.appStore || p.playStore)

  return (
    <section className='hero'>
      <div className='hero__bg' aria-hidden>
        <div className='hero__grid' />
        <div className='hero__glow' />
      </div>

      <div className='container hero__inner'>
        <div className='hero__copy'>
          <p className='hero__pill reveal'>
            <span className='dot' />
            {currently.role} at <strong>{currently.company}</strong>
          </p>

          <h1 className='hero__title reveal' style={{ '--delay': '0.08s' }}>
            I build mobile &amp; web apps
            <span className='hero__title-line'>
              <span className='serif accent'>and ship them</span> to real users.
            </span>
          </h1>

          <p className='hero__lead reveal' style={{ '--delay': '0.16s' }}>
            Hi, I&apos;m {firstName}, a {focus.toLowerCase()} engineer working with
            React Native, React, TypeScript and Node.js. I take products from the
            first requirement to the App Store and Google Play.
          </p>

          <div className='hero__actions reveal' style={{ '--delay': '0.24s' }}>
            <Link to='/#work' className='btn btn--primary'>
              See my work <ArrowRight />
            </Link>
            <a href={resume} download className='btn btn--ghost'>
              <Download /> Résumé
            </a>
            <div className='hero__social'>
              <a href={social.github} target='_blank' rel='noopener noreferrer' className='icon-btn' aria-label='GitHub'>
                <GitHub />
              </a>
              <a href={social.linkedin} target='_blank' rel='noopener noreferrer' className='icon-btn' aria-label='LinkedIn'>
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>

        <div className='hero__visual reveal' style={{ '--delay': '0.2s' }}>
          <div className='portrait'>
            <img src={picture} alt={name} className='portrait__img' width='460' height='460' />
            <div className='portrait__caption'>
              <div>
                <p className='portrait__name'>{name}</p>
                <p className='portrait__meta'>
                  <MapPin /> {location}
                </p>
              </div>
              <span className='chip'>{focus}</span>
            </div>
          </div>

          {shipped.length > 0 && (
            <Link to={`/project/${slugify(shipped[0].name)}`} className='float-card float-card--store'>
              <span className='float-card__icon'>
                <Apple />
              </span>
              <span>
                <span className='float-card__label'>Live on the stores</span>
                <span className='float-card__value'>{shipped.map((p) => p.name).join(' · ')}</span>
              </span>
            </Link>
          )}

          <div className='float-card float-card--code' aria-hidden>
            <span className='float-card__mono'>
              <span className='tok-k'>const</span> stack = [<br />
              &nbsp;&nbsp;<span className='tok-s'>&apos;React Native&apos;</span>,<br />
              &nbsp;&nbsp;<span className='tok-s'>&apos;TypeScript&apos;</span>,<br />
              &nbsp;&nbsp;<span className='tok-s'>&apos;Node.js&apos;</span>,<br />
              ]
            </span>
          </div>
        </div>
      </div>

      <div className='container'>
        <dl className='stats'>
          {stats.map((s, i) => (
            <div key={s.label} className='stat reveal' style={{ '--delay': `${0.3 + i * 0.07}s` }}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
