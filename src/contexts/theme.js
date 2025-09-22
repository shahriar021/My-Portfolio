import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    const lightMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    setThemeName(lightMediaQuery.matches ? 'light' : 'light')
    lightMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'light' : 'light')
    });
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'light' ? 'light' : 'light'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
