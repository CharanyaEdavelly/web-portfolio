import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {

  return (
    <div className="nav-bar">
        <div className='name'>
          <Link to="/">Charanya</Link>
        </div>
        <div className='nav-links'>
            <Link to="/about" className='nav-link'>About</Link>
            <Link to="/work" className='nav-link'>Work</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
        </div> 
    </div>
  )
}

export default NavBar