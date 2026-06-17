import React, { useState } from 'react'
import logoImg from '../assets/logo.png'

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#hero" className="logo" onClick={handleLinkClick}>
          <img src={logoImg} alt="ChaiDotin Logo" className="logo-img" />
          <span className="logo-text">ChaiDotin<span className="logo-dot">.</span></span>
        </a>

        {/* Navigation links */}
        <nav aria-label="Main Navigation">
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>
              <a 
                href="#menu-gallery" 
                className={`nav-link ${activeSection === 'menu-gallery' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Menu
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#franchise" 
                className={`nav-link ${activeSection === 'franchise' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Franchise
              </a>
            </li>
            <li>
              <a 
                href="#reviews" 
                className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Reviews
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Toggle button */}
        <button 
          className={`hamburger-btn ${isOpen ? 'active' : ''}`} 
          id="hamburger-btn" 
          aria-label="Toggle Navigation Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
