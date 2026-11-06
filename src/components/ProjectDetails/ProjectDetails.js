import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react' // Import useEffect
import { projects } from '../../portfolio'
import './ProjectDetails.css'

const ProjectDetails = () => {
  const { projectId } = useParams()

  // Scroll to top automatically when this page opens
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === projectId
  )

  console.log(
    projects.find(
      (p) => p.name.toLowerCase().replace(/\s+/g, '-') === projectId
    )
  )

  if (!project) {
    return (
      <section
        className='section'
        style={{ textAlign: 'center', color: 'var(--clr-fg)' }}
      >
        <h2 className='section__title'>Project not found</h2>
        <Link to='/' className='link'>
          Go Back to Home
        </Link>
      </section>
    )
  }

  return (
    <section
      className='section project-details'
      style={{ minHeight: '100vh', padding: '2rem 0' }}
    >
      <div style={{ maxWidth: '100%', margin: '0 auto', width: '90%' }}>
        <Link
          to='/'
          className='link'
          style={{ marginBottom: '2rem', display: 'inline-block' }}
        >
          ← Back to Projects
        </Link>

        <h2
          className='section__title gradient-text'
          style={{ marginBottom: '1.5rem' }}
        >
          {project.name}
        </h2>

        {/* Project Images */}
        {project.images && (
          <div className='project-images'>
            {project.images.map((img) => (
              <img key={img} src={img} alt={project.name} />
            ))}
          </div>
        )}

        <div
          className='details__content'
          style={{
            background: 'var(--clr-bg-alt)',
            padding: '2.5rem',
            borderRadius: '12px',
            boxShadow: 'var(--shadow)',
            lineHeight: '1.8',
            color: 'var(--clr-fg)',
          }}
        >
          {/* Main Description */}
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            {project.description}
          </p>

          {project.longDescription && (
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--clr-primary)' }}>
                Project Overview
              </h4>
              <p style={{ whiteSpace: 'pre-line', opacity: 0.9 }}>
                {project.longDescription}
              </p>
            </div>
          )}

          {/* Features List */}
          {project.features && (
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--clr-primary)' }}>
                Features:
              </h4>
              <ul
                style={{
                  listStyleType: 'disc',
                  paddingLeft: '20px',
                  opacity: 0.9,
                }}
              >
                {project.features.map((feature) => (
                  <li key={feature} style={{ marginBottom: '0.5rem' }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack List (Optional) */}
          {project.stack && (
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--clr-primary)' }}>
                Technologies Used:
              </h4>
              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  listStyle: 'none',
                  padding: 0,
                }}
              >
                {project.stack.map((item) => (
                  <li
                    key={item}
                    style={{
                      padding: '5px 15px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className='project-links'>
            {project.sourceCode && (
              <a href={project.sourceCode} target='_blank' rel='noreferrer'>
                Source Code
              </a>
            )}
            {project.livePreview && (
              <a href={project.livePreview} target='_blank' rel='noreferrer'>
                Live Preview
              </a>
            )}
            {project.apk && (
              <a href={project.apk} download>
                Download APK
              </a>
            )}

            {project.imp && <p className='note-color'>NOTE:{project.imp}</p>}
          </div>
          {(project.playStore || project.appStore) && (
            <p style={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
              Available on
            </p>
          )}
          <div className='publish-links'>
            {project.playStore && (
              <a href={project.playStore} target='_blank' rel='noreferrer'>
                <img
                  src='/images/playstore.avif'
                  alt='Play Store'
                  style={{ width: 100, height: 'auto', cursor: 'pointer' }}
                />
              </a>
            )}
            {project.appStore && (
              <a
                href={project.appStore}
                target='_blank'
                rel='noreferrer'
                className='app-store-badge'
                aria-label={`Download ${project.name} on the App Store`}
              >
                <svg
                  aria-hidden='true'
                  viewBox='0 0 24 24'
                  width='25'
                  height='25'
                  fill='currentColor'
                >
                  <path d='M16.37 1.43c0 1.14-.42 2.28-1.26 3.09-.84.81-2.13 1.44-3.25 1.35-.13-1.1.4-2.38 1.21-3.2.9-.91 2.45-1.56 3.3-1.24ZM20.5 15.6c-.5 1.15-.75 1.65-1.4 2.67-.92 1.46-2.21 3.28-3.81 3.3-1.43.02-1.8-.93-3.73-.92-1.93 0-2.34.95-3.78.93-1.6-.02-2.82-1.66-3.74-3.12-2.58-4.1-2.85-8.91-1.26-11.46 1.12-1.82 2.9-2.89 4.57-2.89 1.7 0 2.77.95 4.18.95 1.37 0 2.21-.95 4.17-.95 1.49 0 3.08.81 4.2 2.21-3.69 2.02-3.09 7.29.6 9.28Z' />
                </svg>
                <span className='app-store-badge__text'>
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails
