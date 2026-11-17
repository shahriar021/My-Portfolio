import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { about } from '../../portfolio'
import { Download, Menu, Close } from '../Icons'
import './Navbar.css'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    if (pathname !== '/' || !('IntersectionObserver' in window)) {
      setActive('')
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  const go = (id) => {
    close()
    if (pathname === '/') {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className='nav__inner'>
        <Link to='/' className='nav__brand' onClick={close} aria-label='Home'>
          <span className='nav__logo'>SC</span>
          <span className='nav__name'>{about.name}</span>
        </Link>

        <nav className='nav__links' aria-label='Primary'>
          {links.map(({ id, label }) => (
            <Link
              key={id}
              to={`/#${id}`}
              onClick={() => go(id)}
              className={`nav__link ${active === id ? 'is-active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className='nav__actions'>
          <a href={about.resume} download className='btn btn--primary btn--sm nav__cta'>
            <Download /> Résumé
          </a>
          <button
            type='button'
            className='nav__toggle'
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div className='nav__sheet' aria-hidden={!open}>
        <nav aria-label='Mobile'>
          {links.map(({ id, label }, i) => (
            <Link
              key={id}
              to={`/#${id}`}
              onClick={() => go(id)}
              className='nav__sheet-link'
              style={{ '--i': i }}
              tabIndex={open ? 0 : -1}
            >
              <span>0{i + 1}</span>
              {label}
            </Link>
          ))}
        </nav>
        <a
          href={about.resume}
          download
          className='btn btn--primary'
          tabIndex={open ? 0 : -1}
        >
          <Download /> Download résumé
        </a>
      </div>
    </header>
  )
}

export default Navbar
