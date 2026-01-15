import { Link } from 'react-router-dom'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          // Inside your Projects.js .map function
          <Link
            to={`/project/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
            key={project.name}
            className='project-link-wrapper'
          >
            <ProjectContainer project={project} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects
