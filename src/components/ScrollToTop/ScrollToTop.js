import { useEffect, useState } from 'react'
import { ArrowUp } from '../Icons'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type='button'
      className={`to-top ${visible ? 'is-visible' : ''}`}
      aria-label='Back to top'
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp />
    </button>
  )
}

export default ScrollToTop
