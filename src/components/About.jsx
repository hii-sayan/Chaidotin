import React from 'react'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-quote-container fade-in">
            <blockquote className="about-quote">
              "We believe the finest conversations emerge when time is allowed to slow down, and life is measured in sips."
            </blockquote>
          </div>

          <div className="about-paragraphs fade-in">
            <h2 className="section-title">Our Story</h2>
            <p className="about-text">ChaiDotin was born out of a simple desire: to bring back the beauty of unhurried mornings. In a fast-paced world, we carve out a quiet sanctuary where tea leaves are selected by hand, spices are ground by hand, and every cup is prepared with focus and devotion.</p>
            <p className="about-text">We source our teas directly from biodynamic, fair-trade family estates in Assam and Darjeeling. By celebrating clean ingredients, local communities, and patient processes, we offer a moment of pure presence with every brew.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
