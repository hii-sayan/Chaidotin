import React from 'react'

function Products() {
  const teaItems = [
    'Signature Masala Chai',
    'Kashmiri Saffron Kahwa',
    'Organic Mountain Green Tea',
    'Hibiscus Rose Herbal Infusion'
  ]

  const coffeeItems = [
    'South Indian Filter Coffee',
    '18-Hour Slow Drip Cold Brew',
    'Classic Double Espresso',
    'Spiced Cardamom Cappuccino'
  ]

  const snackItems = [
    'Crispy Baked Herb Samosa',
    'Walnut Banana Bread Slice',
    'Warm Maska Bun with Fruit Jam',
    'Spiced Salted Butter Cookies'
  ]

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">What We Serve</h2>
          <p>A carefully curated menu of fine organic brews and fresh light accompaniments, prepared with artisanal care daily.</p>
          <div className="section-divider"></div>
        </div>

        <div className="products-grid">
          
          {/* Card 1: Teas */}
          <div className="product-card fade-in">
            <div className="card-icon-container">
              {/* Custom SVG Tea Cup Icon */}
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 9H19C20.1046 9 21 9.89543 21 11V13C21 14.1046 20.1046 15 19 15H17" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 9H17V16C17 18.2091 15.2091 20 13 20H7C4.79086 20 3 18.2091 3 16V9Z" fill="#CCFBF1" stroke="#0D9488" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M7 4C7 4 8 3 8 5C8 7 7 6 7 8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
                <path d="M11 3C11 3 12 2 12 4C12 6 11 5 11 7" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 4C15 4 16 3 16 5C16 7 15 6 15 8" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="card-title">Teas</h3>
            <p className="card-desc">Sourced from selected high-elevation estates, slow-brewed with fresh hand-crushed botanicals.</p>
            <ul className="menu-items-list">
              {teaItems.map((item, index) => (
                <li key={index} className="menu-item">{item}</li>
              ))}
            </ul>
          </div>

          {/* Card 2: Coffee */}
          <div className="product-card fade-in">
            <div className="card-icon-container">
              {/* Custom SVG Coffee French Press Icon */}
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H16V20H6V6Z" fill="#CCFBF1" stroke="#0D9488" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M16 9H19C20.1046 9 21 9.89543 21 11V16C21 17.1046 20.1046 18 19 18H16" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 6H17" stroke="#0D9488" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 13H17" stroke="#0D9488" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 20H17" stroke="#0D9488" strokeWidth="2" strokeLinecap="round"/>
                <path d="M11 2V6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="11" cy="2" r="1.5" fill="#F59E0B"/>
                <path d="M8 6H14" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 13H15" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 class="card-title">Coffee</h3>
            <p className="card-desc">Medium-dark roasted single origin arabica beans, prepared manually to express balanced tasting notes.</p>
            <ul className="menu-items-list">
              {coffeeItems.map((item, index) => (
                <li key={index} className="menu-item">{item}</li>
              ))}
            </ul>
          </div>

          {/* Card 3: Snacks */}
          <div className="product-card fade-in">
            <div className="card-icon-container">
              {/* Custom SVG Biscuit/Cookie Plate Icon */}
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="7" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
                <circle cx="9" cy="9" r="1.2" fill="#0D9488"/>
                <circle cx="15" cy="10" r="1.2" fill="#0D9488"/>
                <circle cx="11" cy="14" r="1.2" fill="#0D9488"/>
                <circle cx="15" cy="14" r="1" fill="#0D9488"/>
                <circle cx="8" cy="13" r="1" fill="#0D9488"/>
                <path d="M3 18C3 18 6 21 12 21C18 21 21 18 21 18" stroke="#0D9488" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 class="card-title">Snacks</h3>
            <p className="card-desc">Warm, home-style bakes and savory snacks crafted to pair beautifully with your warm cup.</p>
            <ul className="menu-items-list">
              {snackItems.map((item, index) => (
                <li key={index} className="menu-item">{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Products
