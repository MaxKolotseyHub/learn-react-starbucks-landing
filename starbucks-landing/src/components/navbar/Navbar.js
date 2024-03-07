import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav-container'>
       
          <div className='logo'> <Link to='/'>Starbucks</Link></div>
        
        <ul className='menu-items'>
        <li>
          <Link to='/catalog'>
            Catalog
          </Link>
          </li>
          <li>
          <Link to='/gallery'>
            Gallery
          </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar