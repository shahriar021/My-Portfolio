import { about } from '../../portfolio'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <div className='container footer__inner'>
      <p className='footer__big' aria-hidden>
        {about.firstName}
        <span className='accent'>.</span>
      </p>
      <div className='footer__row'>
        <p>
          © {new Date().getFullYear()} {about.name}. Designed &amp; built by me.
        </p>
        <p className='footer__links'>
          <a href={about.social.github} target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
          <a href={about.social.linkedin} target='_blank' rel='noopener noreferrer'>
            LinkedIn
          </a>
          <a href={about.resume} download>
            Résumé
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
