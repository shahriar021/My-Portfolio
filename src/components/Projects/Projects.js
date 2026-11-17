import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, slugify } from '../../portfolio'
import { ArrowUpRight, Apple, PlayStore, Globe } from '../Icons'
import './Projects.css'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'app', label: 'Mobile' },
  { id: 'web', label: 'Web' },
]

const spotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export const ProjectBadges = ({ project }) => (
  <>
    {project.appStore && (
      <span className='badge-live'>
        <Apple /> App Store
      </span>
    )}
    {project.playStore && (
      <span className='badge-live'>
        <PlayStore /> Google Play
      </span>
    )}
    {project.livePreview && (
      <span className='badge-live'>
        <Globe /> Live site
      </span>
    )}
  </>
)

export const ProjectMedia = ({ project, eager }) => {
  if (project.cover) {
    return (
      <img
        src={project.cover}
        alt={`${project.name} preview`}
        className={`pcard__cover pcard__cover--${project.type}`}
        loading={eager ? 'eager' : 'lazy'}
      />
    )
  }
  // No cover: fan out the phone screenshots
  return (
    <div className='pcard__fan'>
      {project.images.slice(0, 3).map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${project.name} screen ${i + 1}`}
          className='pcard__phone'
          style={{ '--i': i - 1 }}
          loading={eager ? 'eager' : 'lazy'}
        />
      ))}
      {project.icon && <img src={project.icon} alt='' className='pcard__appicon' />}
    </div>
  )
}

const ProjectCard = ({ project, index, featured, animate }) => (
  <Link
    to={`/project/${slugify(project.name)}`}
    className={`pcard ${animate ? 'pcard--in' : 'reveal'} ${featured ? 'pcard--featured' : ''}`}
    style={{ '--delay': `${(index % 2) * 0.08}s` }}
    onMouseMove={spotlight}
  >
    <div className={`pcard__media pcard__media--${project.type}`}>
      <ProjectMedia project={project} eager={featured} />
      <span className='pcard__index'>{String(index + 1).padStart(2, '0')}</span>
    </div>

    <div className='pcard__body'>
      <div className='pcard__top'>
        <div>
          <p className='pcard__kind'>{project.type === 'app' ? 'Mobile app · React Native' : 'Web app'}</p>
          <h3 className='pcard__title'>{project.name}</h3>
        </div>
        <span className='pcard__go' aria-hidden>
          <ArrowUpRight />
        </span>
      </div>

      <p className='pcard__tagline'>{project.tagline}</p>

      <div className='pcard__badges'>
        <ProjectBadges project={project} />
      </div>

      <ul className='pcard__stack'>
        {project.stack.slice(0, featured ? 6 : 4).map((s) => (
          <li key={s} className='chip'>
            {s}
          </li>
        ))}
      </ul>
    </div>
  </Link>
)

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [touched, setTouched] = useState(false)
  const list = filter === 'all' ? projects : projects.filter((p) => p.type === filter)

  return (
    <section id='work' className='section'>
      <div className='container'>
        <div className='section-head'>
          <div className='reveal'>
            <p className='eyebrow'>
              <span>01</span> — Selected work
            </p>
            <h2 className='section-title'>
              Things I&apos;ve built <span className='serif accent'>&amp; shipped.</span>
            </h2>
          </div>

          <div className='filters reveal' role='tablist' aria-label='Filter projects'>
            {filters.map((f) => (
              <button
                key={f.id}
                type='button'
                role='tab'
                aria-selected={filter === f.id}
                className={`filters__btn ${filter === f.id ? 'is-active' : ''}`}
                onClick={() => {
                  setFilter(f.id)
                  setTouched(true)
                }}
              >
                {f.label}
                <span>
                  {f.id === 'all' ? projects.length : projects.filter((p) => p.type === f.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className='pgrid' key={filter}>
          {list.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={projects.indexOf(project)}
              featured={filter === 'all' && i === 0}
              animate={touched}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
