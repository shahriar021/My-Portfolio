import { useState } from 'react'
import { about, contact } from '../../portfolio'
import { ArrowUpRight, Copy, Check, Phone, GitHub, LinkedIn, Download } from '../Icons'
import './Contact.css'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      window.location.href = `mailto:${contact.email}`
    }
  }

  const links = [
    contact.phone && {
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/[^\d+]/g, '')}`,
      icon: <Phone />,
    },
    about.social.linkedin && {
      label: 'LinkedIn',
      value: 'in/shahriar021',
      href: about.social.linkedin,
      icon: <LinkedIn />,
      external: true,
    },
    about.social.github && {
      label: 'GitHub',
      value: '@shahriar021',
      href: about.social.github,
      icon: <GitHub />,
      external: true,
    },
    {
      label: 'Résumé',
      value: 'Download PDF',
      href: about.resume,
      icon: <Download />,
      download: true,
    },
  ].filter(Boolean)

  return (
    <section id='contact' className='section'>
      <div className='container'>
        <div className='contact reveal'>
          <div className='contact__glow' aria-hidden />
          <p className='eyebrow'>
            <span>05</span> — Contact
          </p>
          <h2 className='contact__title'>
            Have a role or a product in mind?{' '}
            <span className='serif accent'>Let&apos;s talk.</span>
          </h2>
          <p className='contact__sub'>
            I&apos;m always open to new opportunities and collaborations. The
            fastest way to reach me is email.
          </p>

          <div className='contact__email'>
            <a href={`mailto:${contact.email}`} className='btn btn--primary contact__mailto'>
              {contact.email} <ArrowUpRight />
            </a>
            <button type='button' className='btn btn--ghost' onClick={copyEmail} aria-live='polite'>
              {copied ? <Check /> : <Copy />}
              {copied ? 'Copied!' : 'Copy email'}
            </button>
          </div>

          <ul className='contact__links'>
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className='clink'
                  {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...(l.download ? { download: true } : {})}
                >
                  <span className='clink__icon'>{l.icon}</span>
                  <span>
                    <span className='clink__label'>{l.label}</span>
                    <span className='clink__value'>{l.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
