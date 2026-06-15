import React from 'react'

function Franchise() {
  const benefits = [
    {
      title: 'Low Investment',
      desc: 'Highly optimized modular setup costs and space utilization allow quick returns and high margins.',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
        </svg>
      )
    },
    {
      title: 'Training & Support',
      desc: 'Comprehensive training programs from brewing standards to operations management and local outreach.',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
        </svg>
      )
    },
    {
      title: 'Proven Brand',
      desc: 'A respected name with a highly dedicated community following, established supplier networks, and streamlined workflows.',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
        </svg>
      )
    }
  ]

  return (
    <section id="franchise" className="franchise">
      <div className="container">
        <div className="section-header franchise-header fade-in">
          <h2 className="section-title">Grow With Us</h2>
          <p>Own a ChaiDotin. Bring the artisanal experience and warm community focus of our cafe to your city.</p>
          <div className="section-divider"></div>
        </div>

        <div className="franchise-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-col fade-in">
              <div className="benefit-icon-wrapper">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="franchise-cta-wrapper fade-in">
          <a href="#contact" className="btn btn-yellow">Apply for Franchise</a>
        </div>
      </div>
    </section>
  )
}

export default Franchise
