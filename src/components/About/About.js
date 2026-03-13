import { useEffect, useState } from 'react'
import { about } from '../../portfolio'

const About = () => {
  const { name, role, resume, social } = about
  const [, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id='about'
      style={{
        padding: '100px 40px',
        // background: 'linear-gradient(160deg, #0f172a 0%, #162032 60%, #0f172a 100%)',
        margin: '60px 0',
        borderRadius: '20px',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        // border: '1px solid #1e293b',
        // boxShadow: '0 0 0 1px #000, 0 32px 80px rgba(0,0,0,0.6)',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.65; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .about-photo-wrap:hover .about-photo-ring {
          opacity: 0.6 !important;
        }
        .about-photo-wrap:hover img {
          transform: scale(1.03);
        }
        .about-photo-wrap img {
          transition: transform 0.4s ease;
        }
        .about-cta:hover {
          background: #60a5fa !important;
          color: #000 !important;
          border-color: #60a5fa !important;
        }
        .about-social-link:hover {
          color: #60a5fa !important;
          border-color: #60a5fa44 !important;
        }
        .about-tag {
          transition: all 0.2s ease;
        }
        .about-tag:hover {
          background: rgba(96,165,250,0.15) !important;
          border-color: #60a5fa55 !important;
        }
      `}</style>

      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0,
        // backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '-80px', left: '5%',
        width: '500px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(96,165,250,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'glowPulse 5s ease-in-out infinite',
      }} />

      {/* Main layout */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '72px',
        position: 'relative',
        flexWrap: 'wrap',
      }}>

        {/* ── Left: Photo ── */}
        <div
          className='about-photo-wrap'
          style={{
            position: 'relative',
            flexShrink: 0,
            animation: 'fadeIn 0.8s ease forwards',
            opacity: 0,
          }}
        >
          {/* Rotating ring */}
          <div
            className='about-photo-ring'
            style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '50%',
              border: '1px dashed rgba(96,165,250,0.25)',
              animation: 'rotateSlow 18s linear infinite',
              opacity: 0.35,
              transition: 'opacity 0.4s',
            }}
          />

          {/* Static accent ring */}
          <div style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            background: 'conic-gradient(from 180deg, #60a5fa22, #a78bfa22, #60a5fa22)',
          }} />

          <img
            src= 'https://avatars.githubusercontent.com/u/95222498?v=4'
            alt={name}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
              position: 'relative',
              border: '3px solid #1e293b',
            }}
          />
        </div>

        {/* ── Right: Content ── */}
        <div style={{ flex: 1, minWidth: '280px' }}>

          {/* Eyebrow */}
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '0.68rem',
            letterSpacing: '0.28em',
            color: '#3a4a5a',
            textTransform: 'uppercase',
            marginBottom: '16px',
            animation: 'fadeUp 0.6s ease forwards',
            opacity: 0,
          }}>
            About me
          </p>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: '800',
            color: '#f0f0f0',
            lineHeight: 1.05,
            margin: '0 0 8px',
            animation: 'fadeUp 0.65s ease forwards',
            animationDelay: '0.08s',
            opacity: 0,
          }}>
            {name}
          </h1>

          {/* Role with accent */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '28px',
            animation: 'fadeUp 0.65s ease forwards',
            animationDelay: '0.14s',
            opacity: 0,
          }}>
            <div style={{
              width: '24px', height: '2px',
              background: '#60a5fa',
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              color: '#60a5fa',
              fontWeight: '500',
              letterSpacing: '0.03em',
            }}>
              {role}
            </span>
          </div>

          {/* Bio — short and punchy, no bullet list */}
          <p style={{
            fontSize: '0.95rem',
            color: '#4a5a6a',
            lineHeight: 1.8,
            margin: '0 0 32px',
            maxWidth: '480px',
            fontWeight: '300',
            animation: 'fadeUp 0.65s ease forwards',
            animationDelay: '0.2s',
            opacity: 0,
          }}>
            I build products that live on phones and browsers —
            from pixel to production. Worked with companies across
            Bangladesh and internationally, turning complex problems
            into clean, efficient software.
          </p>

          {/* Tags */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '36px',
            animation: 'fadeUp 0.65s ease forwards',
            animationDelay: '0.26s',
            opacity: 0,
          }}>
            {['React Native', 'React', 'Node.js', 'Full Stack', 'Mobile Dev'].map(tag => (
              <span
                key={tag}
                className='about-tag'
                style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '0.74rem',
                  fontWeight: '500',
                  color: '#60a5fa',
                  border: '1px solid rgba(96,165,250,0.2)',
                  background: 'rgba(96,165,250,0.06)',
                  cursor: 'default',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.65s ease forwards',
            animationDelay: '0.32s',
            opacity: 0,
          }}>
            {resume && (
              <a
                href={resume}
                target='_blank'
                rel='noopener noreferrer'
                className='about-cta'
                style={{
                  padding: '10px 24px',
                  borderRadius: '999px',
                  border: '1px solid #60a5fa',
                  color: '#60a5fa',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: '0.04em',
                }}
              >
                Resume ↗
              </a>
            )}

            {social && Object.entries(social).map(([platform, link]) => (
              link && (
                <a
                  key={platform}
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='about-social-link'
                  style={{
                    padding: '10px 18px',
                    borderRadius: '999px',
                    border: '1px solid #1e293b',
                    color: '#3a4a5a',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    textTransform: 'capitalize',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {platform}
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div style={{
        marginTop: '72px',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #1e293b, transparent)',
      }} />

      {/* Stats row */}
      <div style={{
        display: 'flex',
        gap: '48px',
        marginTop: '40px',
        flexWrap: 'wrap',
        animation: 'fadeUp 0.65s ease forwards',
        animationDelay: '0.4s',
        opacity: 0,
      }}>
        {[
          { number: '2+',  label: 'Years experience' },
          { number: '10+', label: 'Projects shipped' },
          { number: '500+', label: 'Problems solved' },
        ].map(stat => (
          <div key={stat.label}>
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '2rem',
              fontWeight: '800',
              color: '#f0f0f0',
              margin: '0 0 4px',
              lineHeight: 1,
            }}>
              {stat.number}
            </p>
            <p style={{
              fontSize: '0.75rem',
              color: '#2a3a4a',
              margin: 0,
              fontWeight: '400',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default About