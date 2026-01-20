import React, { useEffect, useState } from 'react'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, picture } = about

  const summaryLines = [
    'Worked with big tech companies in Bangladesh',
    'Collaborated with international companies on diverse projects',
    'Software Engineer with a B.Sc. in Computer Science & Engineering',
    'Specialized in building mobile apps with React Native',
    'Focused on efficient and user-friendly solutions',
    'Experience with government platforms & international organizations',
    'Collaborated with freelance clients to bring ideas to life',
    'Problem solver who enjoys tackling challenges',
    'Continuously improving skills to create impactful software',
  ]


  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    summaryLines.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCount((prev) => prev + 1)
      }, i * 1200)
    })
  }, [])

  return (
    <div className='about center'>
      <div className='about__header'>
        {picture && (
          <img
            src='https://avatars.githubusercontent.com/u/95222498?v=4'
            alt={name}
            className='about__picture'
          />
        )}

        <div className='about__intro'>
          {name && (
            <h1>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          )}

          {role && <h2 className='about__role'>{role}.</h2>}

          {/* Fixed space container */}
          <div className='about__desc'>
            {summaryLines.map((line, i) => (
              <p
                key={line}
                className={`about__line ${i < visibleCount ? 'visible' : ''}`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .about__desc {
            display: flex;
            flex-direction: column;
            gap: 12px; /* fixed spacing between lines */
            min-height: 300px; /* reserve space so layout doesn't jump */
            justify-content: flex-start;
          }

          .about__line {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s ease;
            padding: 10px 18px;
            border-radius: 25px;
            font-weight: 500;
            font-size: 1rem;
            text-align: center;
            background: linear-gradient(90deg, #4a90e2, #27ae60);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border: 2px solid transparent;
            border-image: linear-gradient(90deg, #4a90e2, #27ae60) 1;
          }

          .about__line.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </div>
  )
}

export default About
