import uniqid from 'uniqid'

const certificates = [
  {
    title: 'JavaScript',
    issuer: 'Udemy',
    link: 'https://drive.google.com/file/d/1J7gBUqvneA1DpDGEfsd2CPBh0Zt2_Uyu/view?usp=drive_link',
  },
  {
    title: 'React Developer',
    issuer: 'Udemy',
    link: 'https://drive.google.com/file/d/1l4DabmfonJb1qq0gZsiD0-h6FAsfV6A0/view',
  },
  {
    title: 'Node.js Mastery',
    issuer: 'Udemy',
    link: 'https://drive.google.com/file/d/15aPJe7pzeSDHvolodW_6e9GTijaJ6V_8/view',
  },
  {
    title: 'SQL',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/iframe/53f3cc9da2b7',
  },
]

const Education = () => (
  <section
    id='education'
    style={{
      padding: '100px 40px',
      background:
        'linear-gradient(160deg, #0f172a 0%, #162032 60%, #0f172a 100%)',
      margin: '60px 0',
      borderRadius: '20px',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid #1e293b',
      boxShadow: '0 0 0 1px #000, 0 32px 80px rgba(0,0,0,0.6)',
    }}
  >
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap');

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes glowPulse {
        0%, 100% { opacity: 0.35; }
        50%       { opacity: 0.55; }
      }

      .cert-card:hover {
        border-color: #60a5fa55 !important;
        background: rgba(96,165,250,0.06) !important;
      }
      .cert-card:hover .cert-arrow {
        transform: translate(3px, -3px);
        opacity: 1 !important;
      }
      .cert-card:hover .cert-title {
        color: #60a5fa !important;
      }
    `}</style>

    {/* Ambient glow */}
    <div
      style={{
        position: 'absolute',
        top: '-60px',
        right: '15%',
        width: '420px',
        height: '360px',
        background:
          'radial-gradient(ellipse, rgba(167,139,250,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'glowPulse 6s ease-in-out infinite',
      }}
    />

    {/* Grid texture */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }}
    />

    {/* ── Header ── */}
    <div
      style={{
        marginBottom: '64px',
        position: 'relative',
        animation: 'fadeUp 0.6s ease forwards',
      }}
    >
      <p
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '0.68rem',
          letterSpacing: '0.28em',
          color: '#7a7070',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}
      >
        Background & Credentials
      </p>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
          fontWeight: '800',
          color: '#f0f0f0',
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        Education
      </h2>
      <div
        style={{
          marginTop: '28px',
          height: '1px',
          background: 'linear-gradient(90deg, #2a2a2a, transparent)',
        }}
      />
    </div>

    {/* ── Degree block ── */}
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '32px',
        marginBottom: '80px',
        animation: 'fadeUp 0.65s ease forwards',
        animationDelay: '0.1s',
        opacity: 0,
        position: 'relative',
      }}
    >
      {/* Left: year column */}
      <div
        style={{
          minWidth: '80px',
          paddingTop: '4px',
          textAlign: 'right',
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '0.72rem',
            color: '#7a7070',
            letterSpacing: '0.1em',
            lineHeight: 1.6,
          }}
        >
          2019
          <br />—<br />
          2023
        </span>
      </div>

      {/* Divider line */}
      <div
        style={{
          width: '1px',
          background: 'linear-gradient(to bottom, #a78bfa, transparent)',
          alignSelf: 'stretch',
          minHeight: '80px',
          flexShrink: 0,
        }}
      />

      {/* Right: content */}
      <div>
        <div
          style={{
            display: 'inline-block',
            padding: '3px 10px',
            borderRadius: '999px',
            background: 'rgba(167,139,250,0.1)',
            border: '1px solid rgba(167,139,250,0.2)',
            fontSize: '0.7rem',
            color: '#a78bfa',
            fontWeight: '500',
            marginBottom: '14px',
            letterSpacing: '0.05em',
          }}
        >
          Bachelor of Science
        </div>

        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
            fontWeight: '700',
            color: '#f0f0f0',
            margin: '0 0 8px',
            lineHeight: 1.2,
          }}
        >
          Computer Science & Engineering
        </h3>

        <p
          style={{
            fontSize: '0.88rem',
            color: '#7a7070',
            margin: '0 0 4px',
            fontWeight: '400',
          }}
        >
          East West University — Dhaka, Bangladesh
        </p>
      </div>
    </div>

    {/* ── Certificates ── */}
    <div
      style={{
        animation: 'fadeUp 0.65s ease forwards',
        animationDelay: '0.2s',
        opacity: 0,
      }}
    >
      {/* Section label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '28px',
        }}
      >
        <p
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '0.68rem',
            letterSpacing: '0.28em',
            color: '#7a7070',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Certifications
        </p>
        <div style={{ flex: 1, height: '1px', background: '#1e1e1e' }} />
      </div>

      {/* Cert cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
        }}
      >
        {certificates.map((cert, i) => (
          <a
            key={uniqid()}
            href={cert.link}
            target='_blank'
            rel='noopener noreferrer'
            className='cert-card'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 22px',
              borderRadius: '10px',
              border: '1px solid #1e1e1e',
              background: 'transparent',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              animation: 'fadeUp 0.5s ease forwards',
              animationDelay: `${0.25 + i * 0.08}s`,
              opacity: 0,
            }}
          >
            <div>
              <p
                className='cert-title'
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  color: '#d0d0d0',
                  margin: '0 0 4px',
                  transition: 'color 0.25s',
                }}
              >
                {cert.title}
              </p>
              <p
                style={{
                  fontSize: '0.72rem',
                  color: '#7a7070',
                  margin: 0,
                  fontWeight: '400',
                }}
              >
                {cert.issuer}
              </p>
            </div>

            {/* Arrow icon */}
            <span
              className='cert-arrow'
              style={{
                fontSize: '1rem',
                color: '#60a5fa',
                opacity: 0.3,
                transition: 'all 0.25s ease',
                flexShrink: 0,
                marginLeft: '12px',
              }}
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Education