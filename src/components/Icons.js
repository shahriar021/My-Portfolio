/* Lightweight inline SVG icon set (no icon library needed). */

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const ArrowUpRight = (props) => (
  <svg {...base} className='arrow' {...props}>
    <path d='M7 17 17 7M8 7h9v9' />
  </svg>
)

export const ArrowRight = (props) => (
  <svg {...base} className='arrow' {...props}>
    <path d='M5 12h14M13 6l6 6-6 6' />
  </svg>
)

export const ArrowLeft = (props) => (
  <svg {...base} {...props}>
    <path d='M19 12H5M11 18l-6-6 6-6' />
  </svg>
)

export const ArrowUp = (props) => (
  <svg {...base} {...props}>
    <path d='M12 19V5M6 11l6-6 6 6' />
  </svg>
)

export const Download = (props) => (
  <svg {...base} {...props}>
    <path d='M12 4v11M7 10l5 5 5-5M5 20h14' />
  </svg>
)

export const Mail = (props) => (
  <svg {...base} {...props}>
    <rect x='3' y='5' width='18' height='14' rx='3' />
    <path d='m4 7 8 6 8-6' />
  </svg>
)

export const Phone = (props) => (
  <svg {...base} {...props}>
    <path d='M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2' />
  </svg>
)

export const Copy = (props) => (
  <svg {...base} {...props}>
    <rect x='9' y='9' width='12' height='12' rx='2.5' />
    <path d='M5 15V5a2 2 0 0 1 2-2h10' />
  </svg>
)

export const Check = (props) => (
  <svg {...base} {...props}>
    <path d='m5 12 5 5 9-10' />
  </svg>
)

export const Globe = (props) => (
  <svg {...base} {...props}>
    <circle cx='12' cy='12' r='9' />
    <path d='M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18' />
  </svg>
)

export const Code = (props) => (
  <svg {...base} {...props}>
    <path d='m8 7-5 5 5 5M16 7l5 5-5 5' />
  </svg>
)

export const Smartphone = (props) => (
  <svg {...base} {...props}>
    <rect x='6' y='2.5' width='12' height='19' rx='3' />
    <path d='M11 18.5h2' />
  </svg>
)

export const MapPin = (props) => (
  <svg {...base} {...props}>
    <path d='M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z' />
    <circle cx='12' cy='9.5' r='2.5' />
  </svg>
)

export const Menu = (props) => (
  <svg {...base} {...props}>
    <path d='M4 8h16M4 16h16' />
  </svg>
)

export const Close = (props) => (
  <svg {...base} {...props}>
    <path d='M6 6l12 12M18 6 6 18' />
  </svg>
)

export const GitHub = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden {...props}>
    <path d='M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z' />
  </svg>
)

export const LinkedIn = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden {...props}>
    <path d='M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' />
  </svg>
)

export const Apple = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden {...props}>
    <path d='M16.37 12.6c-.03-2.66 2.17-3.94 2.27-4-1.24-1.81-3.16-2.06-3.84-2.09-1.63-.17-3.19.96-4.02.96-.83 0-2.1-.94-3.46-.91-1.78.03-3.42 1.04-4.34 2.63-1.85 3.21-.47 7.96 1.33 10.57.88 1.27 1.93 2.71 3.3 2.65 1.33-.05 1.83-.86 3.43-.86 1.6 0 2.05.86 3.45.83 1.43-.02 2.33-1.29 3.2-2.57 1.01-1.48 1.42-2.91 1.45-2.98-.03-.01-2.77-1.06-2.8-4.22zM13.73 4.8c.73-.89 1.22-2.12 1.09-3.35-1.05.04-2.33.7-3.08 1.59-.67.78-1.27 2.03-1.11 3.24 1.18.09 2.37-.6 3.1-1.48z' />
  </svg>
)

export const PlayStore = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden {...props}>
    <path d='M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1 9.9-9.9v-.2L3.7 1.7l-.1.1zm13.3 13.9-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2h-.1zm-.1.1L13.4 12 3.6 21.8c.4.4 1 .4 1.7.1l11.5-6.1M16.8 8.2 5.3 2.1c-.7-.4-1.3-.3-1.7.1l9.8 9.8 3.4-3.8z' />
  </svg>
)
