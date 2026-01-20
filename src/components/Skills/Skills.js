import uniqid from 'uniqid'
import { useEffect, useState } from 'react'

const skillsData = {
  languages: ['JavaScript', 'Python', 'C++', 'React', 'Node.js'],
  tools: ['Git', 'GitHub', 'Firebase', 'Docker', 'VS Code'],
  problemSolving: ['LeetCode', 'HackerRank', 'Uva', 'Uri'],
}

const SkillCard = ({ name, color, delay }) => (
  <div
    key={uniqid()}
    style={{
      width: '160px',
      margin: '10px',
      padding: '20px',
      borderRadius: '15px',
      background: color,
      color: '#fff',
      fontWeight: '600',
      textAlign: 'center',
      cursor: 'default',
      transform: 'translateY(30px) scale(0.95)',
      opacity: 0,
      animation: `slideFadeIn 0.6s forwards, pulse 3s infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    {name}
  </div>
)

const Skills = () => {
  const [, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <section
      id='skills'
      style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #1a1a1a, #24303c, #2c3e50)', // dark theme
        borderRadius: '12px',
        margin: '60px 0',
        textAlign: 'center',
        color: '#eee',
        boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
      }}
    >
      <h2
        style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '10px' }}
      >
        Skills & Expertise
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '50px' }}>
        My technical skills and problem-solving strengths with an animated
        touch.
      </p>

      {/* Languages */}
      <div style={{ marginBottom: '40px' }}>
        <h3
          style={{
            fontSize: '1.6rem',
            fontWeight: '600',
            marginBottom: '20px',
          }}
        >
          Languages & Frameworks
        </h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {skillsData.languages.map((skill, i) => (
            <SkillCard
              key={uniqid()}
              name={skill}
              color='#4a90e2'
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>

      {/* Tools */}
      <div style={{ marginBottom: '40px' }}>
        <h3
          style={{
            fontSize: '1.6rem',
            fontWeight: '600',
            marginBottom: '20px',
          }}
        >
          Tools & Platforms
        </h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {skillsData.tools.map((skill, i) => (
            <SkillCard
              key={uniqid()}
              name={skill}
              color='#f39c12'
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>

      {/* Problem Solving */}
      <div>
        <h3
          style={{
            fontSize: '1.6rem',
            fontWeight: '600',
            marginBottom: '20px',
          }}
        >
          Problem Solving
        </h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            overflowX: 'auto',
            padding: '10px 0',
          }}
        >
          {skillsData.problemSolving.map((skill, i) => (
            <SkillCard
              key={uniqid()}
              name={skill}
              color='#27ae60'
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes slideFadeIn {
            to {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  )
}

export default Skills
