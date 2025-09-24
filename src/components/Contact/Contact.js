import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import { contact, about } from '../../portfolio'

const Contact = () => {
  if (!contact.email) return null
  const { social } = about

  return (
    <section
      id="contact"
      style={{
        padding: '70px 25px',
        textAlign: 'center',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
        margin: '60px auto',
        maxWidth: '850px',
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: '2.6rem',
          fontWeight: '700',
          marginBottom: '12px',
          color: '#222',
        }}
      >
        Get in touch
      </h2>

      {/* Subheading line */}
      <p
        style={{
          fontSize: '1.1rem',
          color: '#555',
          marginBottom: '45px',
          lineHeight: '1.6',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        I’m always open to discussing new opportunities, collaborations, or just
        a chat. Let’s connect.
      </p>

      {/* Direct contact buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '18px',
          marginBottom: '55px',
        }}
      >
        <a href={`mailto:${contact.email}`}>
          <span
            className="btn btn--outline"
            style={{
              padding: '12px 30px',
              borderRadius: '10px',
              fontWeight: '500',
              fontSize: '1rem',
              letterSpacing: '0.5px',
            }}
          >
            Send me an Email
          </span>
        </a>

        <a href={`tel:${contact.call}`}>
          <span
            className="btn btn--outline"
            style={{
              padding: '12px 30px',
              borderRadius: '10px',
              fontWeight: '500',
              fontSize: '1rem',
              letterSpacing: '0.5px',
            }}
          >
            Call me
          </span>
        </a>
      </div>

      {/* Social links */}
      <h3
        style={{
          fontSize: '1.3rem',
          fontWeight: '500',
          marginBottom: '25px',
          color: '#444',
        }}
      >
        Find me online
      </h3>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '35px',
        }}
      >
        {social?.github && (
          <a
            href={social.github}
            aria-label="github"
            style={{
              color: '#333',
              fontSize: '2.3rem',
              transition: 'transform 0.25s ease, color 0.25s ease',
            }}
          >
            <GitHubIcon fontSize="inherit" />
          </a>
        )}

        {social?.linkedin && (
          <a
            href={social.linkedin}
            aria-label="linkedin"
            style={{
              color: '#0a66c2',
              fontSize: '2.3rem',
              transition: 'transform 0.25s ease, color 0.25s ease',
            }}
          >
            <LinkedInIcon fontSize="inherit" />
          </a>
        )}

        {social?.instagram && (
          <a
            href={social.instagram}
            aria-label="instagram"
            style={{
              color: '#e1306c',
              fontSize: '2.3rem',
              transition: 'transform 0.25s ease, color 0.25s ease',
            }}
          >
            <InstagramIcon fontSize="inherit" />
          </a>
        )}
      </div>
    </section>
  )
}

export default Contact
