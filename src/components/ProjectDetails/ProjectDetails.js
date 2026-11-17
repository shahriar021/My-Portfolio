import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { about, projects, slugify } from '../../portfolio'
import { ProjectMedia } from '../Projects/Projects'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Apple,
  PlayStore,
  Globe,
  Code,
  Smartphone,
} from '../Icons'
import './ProjectDetails.css'

const ProjectDetails = () => {
  const { projectId } = useParams()
  const index = projects.findIndex((p) => slugify(p.name) === projectId)
  const project = projects[index]

  useEffect(() => {
    document.title = project ? `${project.name} · ${about.name}` : about.name
    return () => {
      document.title = `${about.name} · Software Engineer`
    }
  }, [project])

  if (!project) {
    return (
      <section className='container notfound'>
        <p className='eyebrow'>
          <span>404</span> — Project not found
        </p>
        <h1 className='section-title'>That project doesn&apos;t exist.</h1>
        <Link to='/#work' className='btn btn--primary' style={{ marginTop: 32 }}>
          <ArrowLeft /> All projects
        </Link>
      </section>
    )
  }

  const next = projects[(index + 1) % projects.length]
  const isApp = project.type === 'app'
  const paragraphs = project.longDescription
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .filter(Boolean)

  const links = [
    project.appStore && { href: project.appStore, label: 'App Store', icon: <Apple />, primary: true },
    project.playStore && { href: project.playStore, label: 'Google Play', icon: <PlayStore />, primary: true },
    project.livePreview && { href: project.livePreview, label: 'Visit live site', icon: <Globe />, primary: true },
    project.sourceCode && { href: project.sourceCode, label: 'Source code', icon: <Code /> },
    project.apk && { href: project.apk, label: 'Android APK', icon: <Smartphone /> },
  ].filter(Boolean)

  return (
    <article className='pd' key={project.name}>
      <div className='container'>
        <Link to='/#work' className='pd__back reveal'>
          <ArrowLeft /> All projects
        </Link>

        <header className='pd__header'>
          <p className='eyebrow reveal'>
            <span>{String(index + 1).padStart(2, '0')}</span> —{' '}
            {isApp ? 'Mobile app · React Native' : 'Web app'}
          </p>
          <h1 className='pd__title reveal' style={{ '--delay': '0.06s' }}>
            {project.name}
          </h1>
          <p className='pd__tagline reveal' style={{ '--delay': '0.12s' }}>
            {project.tagline}
          </p>

          {links.length > 0 && (
            <div className='pd__links reveal' style={{ '--delay': '0.18s' }}>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`btn ${l.primary ? 'btn--primary' : 'btn--ghost'}`}
                >
                  {l.icon} {l.label}
                </a>
              ))}
            </div>
          )}
        </header>

        <div className={`pd__hero reveal pd__hero--${project.type}`} style={{ '--delay': '0.2s' }}>
          <ProjectMedia project={project} eager />
        </div>

        <div className='pd__grid'>
          <div className='pd__overview reveal'>
            <h2 className='pd__h'>Overview</h2>
            {paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            {project.note && (
              <p className='pd__note'>
                <span className='dot' /> {project.note}
              </p>
            )}
          </div>

          <aside className='pd__facts reveal' style={{ '--delay': '0.08s' }}>
            <div className='pd__fact'>
              <p className='pd__fact-label'>Platform</p>
              <p>{isApp ? 'Mobile (React Native)' : 'Web'}</p>
            </div>
            {(project.appStore || project.playStore || project.livePreview) && (
              <div className='pd__fact'>
                <p className='pd__fact-label'>Status</p>
                <p className='accent'>
                  {project.appStore || project.playStore ? 'Live on the stores' : 'Live in production'}
                </p>
              </div>
            )}
            <div className='pd__fact'>
              <p className='pd__fact-label'>Tech stack</p>
              <ul className='pd__stack'>
                {project.stack.map((s) => (
                  <li key={s} className='chip'>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {project.features && (
          <section className='pd__section'>
            <h2 className='pd__h reveal'>Key features</h2>
            <ol className='pd__features'>
              {project.features.map((f, i) => (
                <li key={f} className='reveal' style={{ '--delay': `${(i % 3) * 0.06}s` }}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {f}
                </li>
              ))}
            </ol>
          </section>
        )}

        {project.images && project.images.length > 0 && (
          <section className='pd__section'>
            <h2 className='pd__h reveal'>Screens</h2>
            <div className={isApp ? 'pd__phones' : 'pd__browsers'}>
              {project.images.map((src, i) =>
                isApp ? (
                  <figure key={src} className='phone reveal' style={{ '--delay': `${i * 0.07}s` }}>
                    <img src={src} alt={`${project.name} screen ${i + 1}`} loading='lazy' />
                  </figure>
                ) : (
                  <figure key={src} className='browser reveal'>
                    <div className='browser__bar' aria-hidden>
                      <i />
                      <i />
                      <i />
                      {project.livePreview && (
                        <span>{project.livePreview.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                      )}
                    </div>
                    <img src={src} alt={`${project.name} screenshot ${i + 1}`} loading='lazy' />
                  </figure>
                )
              )}
            </div>
          </section>
        )}

        <Link to={`/project/${slugify(next.name)}`} className='pd__next reveal'>
          <span className='pd__next-label'>Next project</span>
          <span className='pd__next-name'>
            {next.name} <ArrowRight />
          </span>
          <span className='pd__next-tag'>{next.tagline}</span>
        </Link>

        <p className='pd__cta reveal'>
          Like what you see?{' '}
          <Link to='/#contact' className='accent'>
            Get in touch <ArrowUpRight />
          </Link>
        </p>
      </div>
    </article>
  )
}

export default ProjectDetails
