import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <div className='resume'>
      <h3 className='text'>
        Resume
      </h3>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
