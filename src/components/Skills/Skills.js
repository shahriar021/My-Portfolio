import uniqid from 'uniqid'

const stack = [
  {
    area: 'Frontend',
    description: 'Building interfaces that feel alive',
    accent: '#60a5fa',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'SASS',
      'Material UI',
      'HTML',
      'CSS',
    ],
  },
  {
    area: 'Mobile',
    description: 'Cross-platform apps, shipped to stores',
    accent: '#f472b6',
    skills: ['React Native', 'Android & iOS Development', 'App Deployment'],
  },
  {
    area: 'Backend',
    description: 'APIs, databases, and server-side logic',
    accent: '#fb923c',
    skills: ['Node.js', 'Express.js', 'MySQL', 'REST APIs'],
  },
  {
    area: 'State & Architecture',
    description: 'Managing complexity at scale',
    accent: '#a78bfa',
    skills: ['Redux', 'DSA', 'Component Architecture'],
  },
  {
    area: 'Toolchain & Quality',
    description: 'From commit to production, reliably',
    accent: '#34d399',
    skills: ['Git', 'Docker', 'CI/CD', 'Jest', 'Enzyme'],
  },
]

const Skills = () => (
  <section
    id='skills'
    style={{
      padding: '100px 40px',
      // Slightly warm dark — distinct from pure black portfolios
      background:
        'linear-gradient(160deg, #0f172a 0%, #162032 60%, #0f172a 100%)',
      margin: '60px 0',
      borderRadius: '20px',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
      // Key: border gives section definition against dark bg
      border: '1px solid #1f1f1f',
      boxShadow: '0 0 0 1px #000, 0 32px 80px rgba(0,0,0,0.6)',
    }}
  >
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap');

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes lineGrow {
        from { transform: scaleX(0); }
        to   { transform: scaleX(1); }
      }
      @keyframes chipPop {
        from { opacity: 0; transform: scale(0.88); }
        to   { opacity: 1; transform: scale(1); }
      }
      @keyframes glowPulse {
        0%, 100% { opacity: 0.4; }
        50%       { opacity: 0.65; }
      }

      .skill-chip:hover {
        background: var(--chip-accent) !important;
        color: #000 !important;
        transform: translateY(-2px);
        box-shadow: 0 4px 16px var(--chip-accent-shadow);
      }
      .stack-block {
        transition: background 0.3s;
      }
      .stack-block:hover {
        background: rgba(255,255,255,0.025) !important;
      }
      .stack-block:hover .area-label {
        letter-spacing: 0.1em;
      }
      .area-label {
        transition: letter-spacing 0.35s ease;
      }
    `}</style>

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

    {/* Ambient glow behind header — gives the section its own "light source" */}
    <div
      style={{
        position: 'absolute',
        top: '-80px',
        left: '10%',
        width: '500px',
        height: '400px',
        background:
          'radial-gradient(ellipse, rgba(96,165,250,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'glowPulse 5s ease-in-out infinite',
      }}
    />

    {/* Header */}
    <div
      style={{
        marginBottom: '72px',
        position: 'relative',
        animation: 'fadeUp 0.7s ease forwards',
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
        What I bring to the table
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
        Stack & Expertise
      </h2>

      {/* Thin horizontal rule under header */}
      <div
        style={{
          marginTop: '32px',
          height: '1px',
          background: 'linear-gradient(90deg, #2a2a2a, transparent)',
        }}
      />
    </div>

    {/* Stack grid */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2px',
        position: 'relative',
      }}
    >
      {stack.map((group, gi) => (
        <div
          key={uniqid()}
          className='stack-block'
          style={{
            padding: '36px 32px',
            borderTop: '1px solid #1a1a1a',
            animation: `fadeUp 0.6s ease forwards`,
            animationDelay: `${gi * 0.1}s`,
            opacity: 0,
            borderRadius: '4px',
          }}
        >
          {/* Accent line */}
          <div
            style={{
              height: '2px',
              background: group.accent,
              width: '28px',
              marginBottom: '24px',
              transformOrigin: 'left',
              animation: `lineGrow 0.5s ease forwards`,
              animationDelay: `${gi * 0.1 + 0.25}s`,
              transform: 'scaleX(0)',
            }}
          />

          <h3
            className='area-label'
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '1.2rem',
              fontWeight: '700',
              color: '#efefef',
              margin: '0 0 6px',
            }}
          >
            {group.area}
          </h3>

          <p
            style={{
              fontSize: '0.8rem',
              color: '#7a7070',
              margin: '0 0 24px',
              fontWeight: '300',
              lineHeight: 1.5,
            }}
          >
            {group.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
            {group.skills.map((skill, si) => (
              <span
                key={uniqid()}
                className='skill-chip'
                style={{
                  '--chip-accent': group.accent,
                  '--chip-accent-shadow': `${group.accent}55`,
                  padding: '5px 13px',
                  borderRadius: '999px',
                  fontSize: '0.76rem',
                  fontWeight: '500',
                  color: group.accent,
                  border: `1px solid ${group.accent}30`,
                  background: `${group.accent}0a`,
                  transition: 'all 0.2s ease',
                  animation: 'chipPop 0.4s ease forwards',
                  animationDelay: `${gi * 0.1 + si * 0.04}s`,
                  opacity: 0,
                  cursor: 'default',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Skills
