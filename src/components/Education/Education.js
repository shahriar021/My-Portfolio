const certificates = [
  {
    title: 'JavaScript ',
    link: 'https://drive.google.com/file/d/1J7gBUqvneA1DpDGEfsd2CPBh0Zt2_Uyu/view?usp=drive_link',
  },
  {
    title: 'React Developer',
    link: 'https://drive.google.com/file/d/1l4DabmfonJb1qq0gZsiD0-h6FAsfV6A0/view',
  },
  {
    title: 'Node.js Mastery',
    link: 'https://drive.google.com/file/d/15aPJe7pzeSDHvolodW_6e9GTijaJ6V_8/view',
  },
  {
    title: 'SQL',
    link: 'https://www.hackerrank.com/certificates/iframe/53f3cc9da2b7',
  },
  // { title: 'DSA', link: '#' },
]

const Education = () => (
  <section
    id='education'
    style={{
      padding: '80px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #1a1a1a, #24303c, #2c3e50)', // dark gradient
      borderRadius: '12px',
      color: '#eee',
      overflow: 'hidden',
    }}
  >
    <h2
      style={{
        fontSize: '2.6rem',
        fontWeight: '700',
        color: '#fff',
        marginBottom: '15px',
        animation: 'fadeSlideDown 1s ease forwards',
      }}
    >
      Education & Achievements
    </h2>
    <p
      style={{
        fontSize: '1.1rem',
        color: '#ccc',
        marginBottom: '60px',
        lineHeight: '1.6',
        animation: 'fadeIn 1.5s ease forwards',
      }}
    >
      My academic background, problem-solving skills, and professional
      certificates.
    </p>

    {/* University */}
    <div
      style={{
        background: '#2c3e50',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
        marginBottom: '60px',
        transition: 'all 0.3s ease',
        animation: 'floatUp 1.2s ease forwards',
      }}
    >
      <h3
        style={{
          fontSize: '1.8rem',
          fontWeight: '600',
          color: '#4a90e2',
          marginBottom: '10px',
        }}
      >
        BSc in Computer Science & Engineering
      </h3>
      <p style={{ fontSize: '1rem', color: '#ddd', marginBottom: '6px' }}>
        East West University, Dhaka, Bangladesh
      </p>
      <p style={{ fontSize: '0.95rem', color: '#aaa' }}>2019 – 2023</p>
    </div>

    {/* Certificates */}
    <h2
      style={{
        fontSize: '3rem',
        fontWeight: '800',
        marginBottom: '20px',
        background: 'linear-gradient(90deg, #4a90e2, #27ae60)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        letterSpacing: '1px',
        textShadow: '0 2px 6px rgba(0,0,0,0.6)',
        animation: 'fadeSlideUp 1.2s ease forwards',
      }}
    >
      Certificates
    </h2>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '25px',
      }}
    >
      {certificates.map((cert, i) => (
        <a
          key={cert.title}
          href={cert.link}
          target='_blank'
          rel='noopener noreferrer'
          style={{
            padding: '25px 20px',
            borderRadius: '14px',
            background: '#1e2a38',
            boxShadow: '0 6px 22px rgba(0,0,0,0.5)',
            textDecoration: 'none',
            color: '#fff',
            fontWeight: '500',
            fontSize: '1rem',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            animation: `fadeInScale 0.8s ease forwards`,
            animationDelay: `${i * 0.25}s`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.08)'
            e.currentTarget.style.boxShadow = '0 14px 35px rgba(0,0,0,0.7)'
            e.currentTarget.style.background = '#4a90e2'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 6px 22px rgba(0,0,0,0.5)'
            e.currentTarget.style.background = '#1e2a38'
          }}
        >
          {cert.title}
        </a>
      ))}
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
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}
    </style>
  </section>
)

export default Education
