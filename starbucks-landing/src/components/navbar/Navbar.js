import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='nav-container'>
        <div className='logo'>Starbucks</div>
        <ul className='menu-items'>
            <li>Menu</li>
            <li>Gallery</li>
            <li>Contacts</li>
        </ul>
    </nav>
  )
}

export default Navbar