import './Education.css'



const certificates = [
  { title: 'JavaScript ', link: '#' },
  { title: 'React Developer', link: '#' },
  { title: 'Node.js Mastery', link: '#' },
  { title: 'SQL', link: '#' },
  { title: 'DSA', link: '#' },
]

const Education = () => (
  <section
  id="education"
  style={{
    padding: '80px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
    background: '#f5f7fa', // subtle light background
    borderRadius: '12px',  // optional, to soften edges
  }}
>

    <h2 style={{ fontSize: '2.6rem', fontWeight: '700', color: '#222', marginBottom: '15px' }}>
      Education & Achievements
    </h2>
    <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '60px', lineHeight: '1.6' }}>
      My academic background, problem-solving skills, and professional certificates.
    </p>

    {/* University */}
    <div
      style={{
        background: '#fff',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
        marginBottom: '60px',
        transition: 'all 0.3s ease',
      }}
    >
      <h3 style={{ fontSize: '1.8rem', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
        BSc in Computer Science & Engineering
      </h3>
      <p style={{ fontSize: '1rem', color: '#555', marginBottom: '6px' }}>
        East West University, Dhaka, Bangladesh
      </p>
      <p style={{ fontSize: '0.95rem', color: '#777' }}>2019 – 2023</p>
    </div>

    

    {/* Certificates */}
    <h2
  style={{
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '20px',
    color: '#1a1a1a',
    background: 'linear-gradient(90deg, #4a90e2, #27ae60)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    letterSpacing: '1px',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
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
      {certificates.map((cert) => (
        <a
          key={cert.title}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '25px 20px',
            borderRadius: '14px',
            background: '#fff',
            boxShadow: '0 6px 22px rgba(0,0,0,0.08)',
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            fontSize: '1rem',
            textAlign: 'center',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 22px rgba(0,0,0,0.08)';
          }}
        >
          {cert.title}
        </a>
      ))}
    </div>
  </section>
)

export default Education
