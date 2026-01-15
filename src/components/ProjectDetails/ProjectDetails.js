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
            {project.apk && (
              <a href={project.apk} download>
                Download APK
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails
