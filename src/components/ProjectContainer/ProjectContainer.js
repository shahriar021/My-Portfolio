import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    {project.image && (
      <img
        src={
          project.image.startsWith('http')
            ? project.image
            : `${process.env.PUBLIC_URL}/images/${project.image}`
        }
        alt={`${project.name} screenshot`}
        style={{ width: '100%', objectFit: 'cover' }}
      />
    )}

    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    <button type='button' className='view-details-btn'>
      View Details
    </button>
  </div>
)

export default ProjectContainer
