import { about } from '../../portfolio'

const About = () => {
  const { name, role, resume, social, description, picture } = about

  const skills = ['React Native', 'React', 'TypeScript', 'Node.js', 'REST APIs']

  return (
    <section
      id='about'
      style={{
        padding: '100px 40px',
        margin: '60px 0',
        borderRadius: '22px',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.72))',
        border: '1px solid rgba(148, 163, 184, 0.15)',
        boxShadow: '0 24px 80px rgba(15, 23, 42, 0.24)',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');

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
          50%       { opacity: 0.75; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .about-photo-wrap:hover .about-photo-ring {
          opacity: 0.8 !important;
        }
        .about-photo-wrap:hover img {
          transform: scale(1.04);
        }
        .about-photo-wrap img {
          transition: transform 0.4s ease;
        }
        .about-cta:hover {
          background: #60a5fa !important;
          color: #020817 !important;
          border-color: #60a5fa !important;
          transform: translateY(-1px);
        }
        .about-social-link:hover {
          color: #60a5fa !important;
          border-color: #60a5fa44 !important;
          transform: translateY(-1px);
        }
        .about-tag {
          transition: all 0.2s ease;
        }
        .about-tag:hover {
          background: rgba(96,165,250,0.15) !important;
          border-color: #60a5fa55 !important;
          transform: translateY(-1px);
        }
      `}</style>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 15% 20%, rgba(96,165,250,0.18), transparent 36%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '-80px',
          left: '5%',
          width: '520px',
          height: '420px',
          background: 'radial-gradient(ellipse, rgba(96,165,250,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'glowPulse 5s ease-in-out infinite',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '72px',
          position: 'relative',
          flexWrap: 'wrap',
        }}
      >
        <div
          className='about-photo-wrap'
          style={{
            position: 'relative',
            flexShrink: 0,
            animation: 'fadeIn 0.8s ease forwards',
            opacity: 0,
          }}
        >
          <div
            className='about-photo-ring'
            style={{
              position: 'absolute',
              inset: '-12px',
              borderRadius: '50%',
              border: '1px dashed rgba(96,165,250,0.35)',
              animation: 'rotateSlow 18s linear infinite',
              opacity: 0.5,
              transition: 'opacity 0.4s',
            }}
          />

          <div
            style={{
              position: 'absolute',
              inset: '-5px',
              borderRadius: '50%',
              background: 'conic-gradient(from 180deg, rgba(96,165,250,0.22), rgba(167,139,250,0.2), rgba(96,165,250,0.22))',
            }}
          />

          <img
            src={picture || 'https://avatars.githubusercontent.com/u/95222498?v=4'}
            alt={name}
            style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
              position: 'relative',
              border: '3px solid rgba(148, 163, 184, 0.3)',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.28)',
            }}
          />
        </div>

        <div style={{ flex: 1, minWidth: '280px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid rgba(96,165,250,0.25)',
              background: 'rgba(96,165,250,0.08)',
              color: '#93c5fd',
              borderRadius: '999px',
              padding: '6px 12px',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '18px',
              animation: 'fadeUp 0.6s ease forwards',
              opacity: 0,
            }}
          >
            Open to software engineering opportunities
          </div>

          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '0.68rem',
              letterSpacing: '0.28em',
              color: '#94a3b8',
              textTransform: 'uppercase',
              marginBottom: '16px',
              animation: 'fadeUp 0.65s ease forwards',
              animationDelay: '0.08s',
              opacity: 0,
            }}
          >
            About me
          </p>

          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(2.1rem, 4vw, 3.8rem)',
              fontWeight: '800',
              color: '#f8fafc',
              lineHeight: 1.02,
              margin: '0 0 12px',
              animation: 'fadeUp 0.7s ease forwards',
              animationDelay: '0.14s',
              opacity: 0,
            }}
          >
            {name}
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '22px',
              animation: 'fadeUp 0.75s ease forwards',
              animationDelay: '0.2s',
              opacity: 0,
            }}
          >
            <div
              style={{
                width: '28px',
                height: '2px',
                background: '#60a5fa',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.02rem',
                color: '#60a5fa',
                fontWeight: '600',
                letterSpacing: '0.04em',
              }}
            >
              {role}
            </span>
          </div>

          <p
            style={{
              fontSize: '0.98rem',
              color: '#cbd5e1',
              lineHeight: 1.8,
              margin: '0 0 28px',
              maxWidth: '540px',
              fontWeight: '400',
              animation: 'fadeUp 0.8s ease forwards',
              animationDelay: '0.26s',
              opacity: 0,
            }}
          >
            {description ||
              'I build products that live on phones and browsers — from pixel to production. I turn complex ideas into clean, efficient software that feels effortless for users and valuable for businesses.'}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '32px',
              animation: 'fadeUp 0.85s ease forwards',
              animationDelay: '0.32s',
              opacity: 0,
            }}
          >
            {skills.map((tag) => (
              <span
                key={tag}
                className='about-tag'
                style={{
                  padding: '6px 12px',
                  borderRadius: '999px',
                  fontSize: '0.73rem',
                  fontWeight: '500',
                  color: '#93c5fd',
                  border: '1px solid rgba(96,165,250,0.22)',
                  background: 'rgba(96,165,250,0.06)',
                  cursor: 'default',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              animation: 'fadeUp 0.9s ease forwards',
              animationDelay: '0.38s',
              opacity: 0,
            }}
          >
            {resume && (
              <a
                href={resume}
                target='_blank'
                rel='noopener noreferrer'
                className='about-cta'
                style={{
                  padding: '12px 24px',
                  borderRadius: '999px',
                  border: '1px solid rgba(96,165,250,0.9)',
                  color: '#bfdbfe',
                  fontSize: '0.83rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: '0.04em',
                }}
              >
                Resume ↗
              </a>
            )}

            {social &&
              Object.entries(social).map(
                ([platform, link]) =>
                  link && (
                    <a
                      key={platform}
                      href={link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='about-social-link'
                      style={{
                        padding: '11px 16px',
                        borderRadius: '999px',
                        border: '1px solid rgba(148, 163, 184, 0.2)',
                        color: '#cbd5e1',
                        fontSize: '0.78rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.25s ease',
                        textTransform: 'capitalize',
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {platform}
                    </a>
                  )
              )}
          </div>
        </div>
      </div>

    </section>
  )
}

export default About