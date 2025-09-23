import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <div className='resume'>
        <a href='/Shahriar_Chowdhury.pdf' download><span className='btn btn--outline'>
        Resume
      </span></a>
      
      </div>
      <Navbar />
    </header>
  )
}

export default Header
