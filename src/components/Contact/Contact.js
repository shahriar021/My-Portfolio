import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import { contact, about } from '../../portfolio'

const Contact = () => {
  if (!contact.email) return null
  const { social } = about

  return (
    <section
      id='contact'
      style={{
        padding: '70px 25px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1a1a1a, #24303c, #2c3e50)', // dark theme
        borderRadius: '16px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
        margin: '60px auto',
        maxWidth: '850px',
        color: '#eee',
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: '2.6rem',
          fontWeight: '700',
          marginBottom: '12px',
          color: '#fff',
          animation: 'fadeSlideDown 1.2s ease forwards',
        }}
      >
        Get in touch
      </h2>

      {/* Subheading line */}
      <p
        style={{
          fontSize: '1.1rem',
          color: '#ccc',
          marginBottom: '45px',
          lineHeight: '1.6',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          animation: 'fadeIn 2s ease forwards',
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
        <span
          className='btn btn--outline'
          style={{
            padding: '12px 30px',
            borderRadius: '10px',
            fontWeight: '500',
            fontSize: '1rem',
            letterSpacing: '0.5px',
            background: '#2c3e50',
            color: '#fff',
            animation: 'pulse 2s infinite',
          }}
        >
          shahriarc19@gmail.com
        </span>

        <span
          className='btn btn--outline'
          style={{
            padding: '12px 30px',
            borderRadius: '10px',
            fontWeight: '500',
            fontSize: '1rem',
            letterSpacing: '0.5px',
            background: '#2c3e50',
            color: '#fff',
            animation: 'pulse 2s infinite',
          }}
        >
          01604173222
        </span>
      </div>

      {/* Social links */}
      <h3
        style={{
          fontSize: '1.3rem',
          fontWeight: '500',
          marginBottom: '25px',
          color: '#ddd',
          animation: 'fadeSlideUp 1.5s ease forwards',
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
            aria-label='github'
            style={{
              color: '#fff',
              fontSize: '2.3rem',
              animation: 'float 3s ease-in-out infinite',
            }}
          >
            <GitHubIcon fontSize='inherit' />
          </a>
        )}

        {social?.linkedin && (
          <a
            href={social.linkedin}
            aria-label='linkedin'
            style={{
              color: '#0a66c2',
              fontSize: '2.3rem',
              animation: 'float 3s ease-in-out infinite',
              animationDelay: '0.5s',
            }}
          >
            <LinkedInIcon fontSize='inherit' />
          </a>
        )}

        {social?.instagram && (
          <a
            href={social.instagram}
            aria-label='instagram'
            style={{
              color: '#e1306c',
              fontSize: '2.3rem',
              animation: 'float 3s ease-in-out infinite',
              animationDelay: '1s',
            }}
          >
            <InstagramIcon fontSize='inherit' />
          </a>
        )}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeSlideDown {
            from { opacity: 0; transform: translateY(-40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 0 rgba(255,255,255,0.7); }
            50% { transform: scale(1.05); box-shadow: 0 0 15px rgba(255,255,255,0.6); }
            100% { transform: scale(1); box-shadow: 0 0 0 rgba(255,255,255,0.7); }
          }
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </section>
  )
}

export default Contact
