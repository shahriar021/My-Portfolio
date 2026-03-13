
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../portfolio'

const typeIcon = { app: '📱', web: '🌐' }
const typeMeta = {
  app: {
    label: 'Mobile App',
    color: '#00e5ff',
    bg: 'rgba(0,229,255,.07)',
    border: 'rgba(0,229,255,.25)',
  },
  web: {
    label: 'Web App',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,.07)',
    border: 'rgba(167,139,250,.25)',
  },
}

const Projects = () => {
  const [active] = useState('All')
  if (!projects.length) return null

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.type === active.toLowerCase())


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');

        :root {
          --surface:   rgba(255,255,255,0.04);
          --border:    rgba(255,255,255,0.08);
          --border-h:  rgba(99,149,255,0.5);
          --blue:      #6395ff;
          --blue-glow: rgba(99,149,255,0.2);
          --cyan:      #00e5ff;
          --violet:    #a78bfa;
          --text:      #e2e8f0;
          --muted:     #64748b;
          --muted2:    rgba(255,255,255,0.06);
          --mono:      'Space Mono', monospace;
          --sans:      'Syne', sans-serif;
          --r:         12px;
        }

        /* ── Section ── */
        .pj-section {
          background: linear-gradient(160deg, #0f172a 0%, #162032 60%, #0f172a 100%);
          min-height: 100vh;
          padding: 5rem 1.5rem 8rem;
          position: relative;
          overflow: hidden;
          font-family: var(--sans);
          color: var(--text);
        }

        /* subtle dot grid overlay */
        .pj-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(99,149,255,0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        /* ambient top-right glow */
        .pj-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          top: -200px;
          right: -150px;
          background: radial-gradient(circle, rgba(99,149,255,0.08) 0%, transparent 65%);
          pointer-events: none;
          border-radius: 50%;
        }

        .pj-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .pj-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .pj-eyebrow {
          font-family: var(--mono);
          font-size: .65rem;
          letter-spacing: .25em;
          text-transform: uppercase;
          color: var(--blue);
          margin: 0 0 .6rem;
          display: flex;
          align-items: center;
          gap: .6rem;
        }
        .pj-eyebrow::before {
          content: '';
          width: 18px;
          height: 1px;
          background: var(--blue);
          display: inline-block;
        }

        .pj-title {
          font-family: var(--sans);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          color: #fff;
          margin: 0;
          line-height: 1.1;
        }
        .pj-title em {
          font-style: normal;
          background: linear-gradient(90deg, var(--blue), var(--cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* project count stats */
        .pj-stats {
          display: flex;
          gap: 2rem;
          padding-bottom: .2rem;
        }
        .pj-stat {
          text-align: center;
        }
        .pj-stat-num {
          font-family: var(--mono);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--blue);
          line-height: 1;
        }
        .pj-stat-lbl {
          font-family: var(--mono);
          font-size: .58rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: .25rem;
        }

        /* ── Filter tabs ── */
        .pj-filters {
          display: flex;
          align-items: center;
          gap: .45rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .pj-flabel {
          font-family: var(--mono);
          font-size: .6rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--muted);
          margin-right: .4rem;
        }
        .pj-filter {
          font-family: var(--mono);
          font-size: .65rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: .45rem 1.2rem;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          transition: all .2s ease;
          outline: none;
        }
        .pj-filter:hover {
          border-color: var(--blue);
          color: var(--text);
          background: rgba(99,149,255,.06);
        }
        .pj-filter.active {
          background: var(--blue);
          border-color: var(--blue);
          color: #fff;
          box-shadow: 0 0 20px var(--blue-glow);
        }

        /* ── Grid ── */
        .pj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
          gap: 1.25rem;
        }

        /* ── Card ── */
        .pj-card {
          position: relative;
          background: #0d1526;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: var(--r);
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
          text-decoration: none;
          color: var(--text);
          overflow: hidden;
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
          animation: cardIn .4s ease both;
          cursor: pointer;
        }
        .pj-card:nth-child(1) { animation-delay: .05s }
        .pj-card:nth-child(2) { animation-delay: .10s }
        .pj-card:nth-child(3) { animation-delay: .15s }
        .pj-card:nth-child(4) { animation-delay: .20s }
        .pj-card:nth-child(5) { animation-delay: .25s }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(20px) }
          to   { opacity: 1; transform: translateY(0) }
        }

        /* hover glow sweep */
        .pj-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99,149,255,.07) 0%, transparent 60%);
          opacity: 0;
          transition: opacity .3s ease;
          pointer-events: none;
        }
        .pj-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-h);
          box-shadow:
            0 0 0 1px rgba(99,149,255,.2),
            0 20px 50px rgba(0,0,0,.4),
            0 0 40px rgba(99,149,255,.08);
        }
        .pj-card:hover::after { opacity: 1; }

        /* top accent line sweep */
        .pj-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .35s ease;
          border-radius: 2px 2px 0 0;
        }
        .pj-bar.app { background: linear-gradient(90deg, #00e5ff, #6395ff); }
        .pj-bar.web { background: linear-gradient(90deg, #a78bfa, #6395ff); }
        .pj-card:hover .pj-bar { transform: scaleX(1); }

        /* card body below image */
        .pj-body {
          padding: 1.25rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: .85rem;
          flex: 1;
        }

        /* ── Badge ── */
        .pj-badge {
          font-family: var(--mono);
          font-size: .58rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          padding: .25rem .7rem;
          border-radius: 999px;
          border: 1px solid;
          display: inline-flex;
          align-items: center;
          gap: .3rem;
          width: fit-content;
        }

        /* ── Card image strip ── */
        .pj-img-strip {
          display: flex;
          gap: 6px;
          width: 100%;
          height: 175px;
          flex-shrink: 0;
        }
        .pj-img-strip-item {
          flex: 1;
          border-radius: 8px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
        }
        .pj-img-strip-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform .4s ease;
          display: block;
        }
        .pj-card:hover .pj-img-strip-item img { transform: scale(1.06); }

        /* single wide image for web projects */
        .pj-img-single {
          width: 100%;
          height: 275px;
          border-radius: 8px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          flex-shrink: 0;
        }
        .pj-img-single img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform .4s ease;
          display: block;
        }
        .pj-card:hover .pj-img-single img { transform: scale(1.04); }

        /* ── Card body ── */
        .pj-name {
          font-family: var(--sans);
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }

        .pj-desc {
          font-size: .84rem;
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* animated divider */
        .pj-divider {
          height: 1px;
          background: var(--border);
          position: relative;
          overflow: hidden;
        }
        .pj-divider::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, var(--blue), var(--cyan), transparent);
          transform: translateX(-100%);
          transition: transform .5s ease;
        }
        .pj-card:hover .pj-divider::after { transform: translateX(0); }

        /* ── Stack chips ── */
        .pj-stack {
          display: flex;
          flex-wrap: wrap;
          gap: .3rem;
        }
        .pj-chip {
          font-family: var(--mono);
          font-size: .58rem;
          letter-spacing: .07em;
          color: var(--muted);
          background: var(--muted2);
          border: 1px solid var(--border);
          padding: .2rem .5rem;
          border-radius: 4px;
          transition: color .2s, border-color .2s, background .2s;
        }
        .pj-card:hover .pj-chip {
          color: #93b4ff;
          border-color: rgba(99,149,255,.25);
          background: rgba(99,149,255,.07);
        }

        /* ── View details hint ── */
        .pj-hint {
          font-family: var(--mono);
          font-size: .6rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: .4rem;
          transition: color .2s, gap .2s;
        }
        .pj-hint::after {
          content: '→';
          transition: transform .2s ease;
        }
        .pj-card:hover .pj-hint {
          color: var(--blue);
        }
        .pj-card:hover .pj-hint::after {
          transform: translateX(4px);
        }

        /* ── Empty ── */
        .pj-empty {
          grid-column: 1 / -1;
          font-family: var(--mono);
          font-size: .75rem;
          color: var(--muted);
          text-align: center;
          padding: 5rem 0;
          letter-spacing: .1em;
        }

        @media (max-width: 640px) {
          .pj-grid   { grid-template-columns: 1fr; }
          .pj-header { flex-direction: column; align-items: flex-start; }
          .pj-stats  { gap: 1.2rem; }
        }
      `}</style>

      <section id='projects' className='pj-section'>
        <div className='pj-glow' />

        <div className='pj-inner'>
          {/* Header */}
          <div className='pj-header'>
            <div>
              <p className='pj-eyebrow'>selected work</p>
              <h2 className='pj-title'>
                Things I&apos;ve <em>Built</em>
              </h2>
            </div>
            
          </div>

          {/* Grid */}
          <div className='pj-grid'>
            {filtered.length === 0 && (
              <p className='pj-empty'>&#47;&#47; no projects found</p>
            )}

            {filtered.map((project) => {
              const meta = typeMeta[project.type] || typeMeta.app
              const slug = project.name.toLowerCase().replace(/\s+/g, '-')
              return (
                <Link
                  key={project.name}
                  to={`/project/${slug}`}
                  className='pj-card'
                >
                  {/* accent bar */}
                  <div className={`pj-bar ${project.type}`} />

                  {/* image strip for app projects */}
                  {project.type === 'app' &&
                    project.images &&
                    project.images.length > 0 && (
                      <div className='pj-img-strip'>
                        {project.images.slice(0, 3).map((src) => (
                          <div key={src} className='pj-img-strip-item'>
                            <img src={src} alt={project.name} />
                          </div>
                        ))}
                      </div>
                    )}

                  {/* single image for web projects */}
                  <div className='pj-img-single'>
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
                  </div>

                  {/* content below image */}
                  <div className='pj-body'>
                    {/* type badge */}
                    <span
                      className='pj-badge'
                      style={{
                        color: meta.color,
                        background: meta.bg,
                        borderColor: meta.border,
                      }}
                    >
                      {typeIcon[project.type]} {meta.label}
                    </span>

                    {/* name + desc */}
                    <h3 className='pj-name'>{project.name}</h3>
                    <p className='pj-desc'>{project.description}</p>

                    {/* divider */}
                    <div className='pj-divider' />

                    {/* stack */}
                    <div className='pj-stack'>
                      {project.stack.map((tech) => (
                        <span key={tech} className='pj-chip'>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* view hint */}
                    <span className='pj-hint'>View details</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects