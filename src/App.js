import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Marquee from './components/Marquee/Marquee'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import useReveal from './hooks/useReveal'

const Home = () => (
  <>
    <Hero />
    <Marquee />
    <Projects />
    <Experience />
    <Skills />
    <Education />
    <Contact />
  </>
)

const NotFound = () => (
  <section className='container notfound'>
    <p className='eyebrow'>
      <span>404</span> — Page not found
    </p>
    <h1 className='section-title'>
      This page took a <span className='serif accent'>wrong turn.</span>
    </h1>
    <a href='/' className='btn btn--primary' style={{ marginTop: 32 }}>
      Back home
    </a>
  </section>
)

const Shell = () => {
  const { pathname, hash } = useLocation()
  useReveal(pathname)

  // Handle "/#section" links and reset scroll on route change
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <div className='grain' aria-hidden />
      <Navbar />
      <main id='top'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:projectId' element={<ProjectDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

const App = () => (
  <BrowserRouter>
    <Shell />
  </BrowserRouter>
)

export default App
