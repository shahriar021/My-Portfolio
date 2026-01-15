// import { useContext } from 'react'
// import { ThemeContext } from './contexts/theme'
// import Header from './components/Header/Header'
// import About from './components/About/About'
// import Projects from './components/Projects/Projects'
// import Skills from './components/Skills/Skills'
// import ScrollToTop from './components/ScrollToTop/ScrollToTop'
// import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'
// import './App.css'
// import Education from './components/Education/Education'

// const App = () => {
//   const [{ themeName }] = useContext(ThemeContext)

//   return (
//     <div id='top' className={`${themeName} app`}>
//       <Header />

//       <main>
//         <About />
//         <Projects />
//         <Skills />
//         <Education/>
//         <Contact />
//       </main>

//       <ScrollToTop />
//       <Footer />
//     </div>
//   )
// }

// export default App

import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import these
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'
import ProjectDetails from './components/ProjectDetails/ProjectDetails' // You will create this
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Router>
      {/* The style here ensures the background fills the whole screen even if the page is empty */}
      <div
        id='top'
        className={`${themeName} app`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          background: 'var(--clr-bg)', // Forces the gradient here
          backgroundAttachment: 'fixed',
        }}
      >
        <Header />

        {/* 'flex: 1' pushes the footer down to the bottom of the screen */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <About />
                  <Projects />
                  <Skills />
                  <Education />
                  <Contact />
                </>
              }
            />
            <Route path='/project/:projectId' element={<ProjectDetails />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
