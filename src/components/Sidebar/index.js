import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/canvas profile picture.jpg'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faSuitcase, faBars, faClose, faPlug } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

  const [showNav, setShowNav] = useState(false)  

  return (
    <div className='nav-bar'>
      <Link 
        className='logo' 
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt='logo' />
      </Link>
      <nav className={showNav ? 'mobile-show' : 'pc-show'}>
        <NavLink 
            onClick={() => setShowNav(false)}
            exact='true'
            className='nav-button-icon'
            activeclassname='active' 
            to="/"
        >
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink
            onClick={() => setShowNav(false)} 
            exact='true'
            activeclassname='active' 
            className='nav-button-icon'
            to='about'
        >
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink
            onClick={() => setShowNav(false)}
            exact='true' 
            activeclassname='active' 
            className='nav-button-icon'
            to='/portfolio'
        >
            <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
        </NavLink>
        <NavLink
            onClick={() => setShowNav(false)}
            exact='true'
            activeclassname='active' 
            className='nav-button-icon'
            to='/contact'
        >
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
        <a
            className='burger-show'
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/teddy-horvath-342194242/'    
        >
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
        </a>
        <a
            className='burger-show'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/HorvathTeddy'    
        >
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
        </a>
        <a
            className='burger-show'
            target='_blank'
            rel='noreferrer'
            href='https://docs.google.com/document/d/e/2PACX-1vSz-yeISLDE_M6BV8v_4YzZlR3qO1X4WJe0PX3ZEJlck57ZKDQuvacFycM-puVSQtuDge23ReiA3j7e/pub'    
        >
            <FontAwesomeIcon icon={faPlug} color='#4d4d4e' />
        </a>
        <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color='#ffd700'
            size='3x'
            className='close-icon'
        />
      </nav>
      <ul>
        <li>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/teddy-horvath-342194242/'    
            >
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/HorvathTeddy'    
            >
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://docs.google.com/document/d/e/2PACX-1vSBkQgUc2RbIvO2_dfrQOSEq5Xs8uSaiColbqG_jSBactffDSPbXAudN_fytC0hg7iUzwKUHXR0ROpH/pub'    
            >
                <FontAwesomeIcon icon={faPlug} color='#4d4d4e' />
            </a>
        </li>
      </ul>
      <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={faBars}
        color='#ffd700'
        size='3x'
        className='burger-icon'
      />
    </div>
  )
}

export default Sidebar
