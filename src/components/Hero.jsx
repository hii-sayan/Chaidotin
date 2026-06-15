import React from 'react'
import cafeImage from '../assets/cafe.jpg'

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Ambient floating shapes & glows behind content */}
      <div className="hero-shapes">
        <div className="hero-glow"></div>
        
        {/* Floating Leaf SVG 1 */}
        <svg className="hero-leaf leaf-top-right" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 90C30 70 70 30 90 10" stroke="#0D9488" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="3 3"/>
          <path d="M90 10C70 20 60 40 65 60C70 80 90 90 90 10Z" fill="#CCFBF1" fillOpacity="0.35" stroke="#0D9488" strokeOpacity="0.1" strokeWidth="1.5"/>
        </svg>
        
        {/* Floating Leaf SVG 2 */}
        <svg className="hero-leaf leaf-bottom-left" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10C30 20 40 40 35 60C30 80 10 90 10 10Z" fill="#CCFBF1" fill-opacity="0.45" stroke="#0D9488" strokeOpacity="0.1" strokeWidth="1.5"/>
        </svg>
        
        {/* Floating Leaf SVG 3 */}
        <svg className="hero-leaf leaf-center-right" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M90 90C70 80 60 60 65 40C70 20 90 10 90 90Z" fill="#CCFBF1" fill-opacity="0.3" stroke="#0D9488" strokeOpacity="0.12" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content fade-in">
            <h1 className="hero-title">Every cup, a moment.</h1>
            <p className="hero-subtitle">Crafted with single-origin hand-picked leaves, aromatic slow-brewed spices, and the beautiful luxury of unhurried time.</p>
            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">Explore Menu</a>
              <a href="#franchise" className="btn btn-secondary">Get a Franchise</a>
            </div>
          </div>

          {/* Desktop/Mobile visual with Cafe Image and organic backgrounds */}
          <div className="hero-visual fade-in">
            <div className="hero-image-wrapper">
              <div className="organic-composition-bg">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                  <circle cx="100" cy="100" r="90" fill="#CCFBF1" fillOpacity="0.6" />
                </svg>
              </div>
              <div className="cafe-photo-card">
                <img src={cafeImage} alt="ChaiDotin Cafe Storefront" className="cafe-photo" />
                <div className="cafe-photo-caption">
                  <span>Our Bangalore Sanctuary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
