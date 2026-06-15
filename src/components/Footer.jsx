import React from 'react'
import logoImg from '../assets/logo.png'

function Footer() {
  return (
    <footer className="footer-bottom">
      <div className="container footer-inner">
        <img src={logoImg} alt="ChaiDotin Logo" className="footer-logo-img" />
        <p>&copy; 2026 ChaiDotin Café. All rights reserved. Built with unhurried care.</p>
      </div>
    </footer>
  )
}

export default Footer
