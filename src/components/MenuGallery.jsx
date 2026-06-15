import React, { useState } from 'react'
import imgPaneerCrispy from '../assets/menu/WhatsApp Image 2026-04-14 at 3.00.07 PM.jpeg'
import imgNachos      from '../assets/menu/WhatsApp Image 2026-04-14 at 3.00.08 PM.jpeg'
import imgSandwich    from '../assets/menu/WhatsApp Image 2026-04-14 at 3.00.08 PM (1).jpeg'
import imgFries       from '../assets/menu/WhatsApp Image 2026-04-14 at 3.00.08 PM (2).jpeg'
import imgPasta       from '../assets/menu/WhatsApp Image 2026-04-14 at 3.00.08 PM (3).jpeg'

const menuItems = [
  {
    id: 1,
    name: 'Paneer Crispies',
    category: 'Snack Bites',
    desc: 'Golden-fried cottage cheese strips with our signature sriracha mayo.',
    img: imgPaneerCrispy,
    tag: 'Fan Favourite',
    tagColor: 'tag-yellow'
  },
  {
    id: 2,
    name: 'Loaded Nachos',
    category: 'Snack Bites',
    desc: 'Crunchy nachos topped with salsa, jalapeños, sour cream & herbs.',
    img: imgNachos,
    tag: 'Shareable',
    tagColor: 'tag-teal'
  },
  {
    id: 3,
    name: 'Grilled Veggie Sandwich',
    category: 'Mains',
    desc: 'Freshly grilled multigrain sandwich with veggies and house sauces.',
    img: imgSandwich,
    tag: 'Best Seller',
    tagColor: 'tag-yellow'
  },
  {
    id: 4,
    name: 'Masala Wedge Fries',
    category: 'Snack Bites',
    desc: 'Thick-cut wedges tossed in our spice blend, served with dips.',
    img: imgFries,
    tag: 'Spicy',
    tagColor: 'tag-teal'
  },
  {
    id: 5,
    name: 'Arrabiata Penne Pasta',
    category: 'Mains',
    desc: 'Al-dente penne in slow-cooked spiced tomato sauce with fresh basil.',
    img: imgPasta,
    tag: 'Chef\'s Pick',
    tagColor: 'tag-yellow'
  }
]

function MenuGallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const categories = ['All', 'Snack Bites', 'Mains']

  const filtered = activeFilter === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeFilter)

  return (
    <section id="menu-gallery" className="menu-gallery">
      <div className="container">

        {/* Section Header */}
        <div className="section-header fade-in">
          <h2 className="section-title">From Our Kitchen</h2>
          <p>Honest ingredients, bold flavours — every plate made with the same care we put into every cup.</p>
          <div className="section-divider"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="menu-filter-row fade-in">
          {categories.map(cat => (
            <button
              key={cat}
              className={`menu-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="menu-grid">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className={`menu-card fade-in ${index === 0 && filtered.length === 5 ? 'menu-card--featured' : ''}`}
            >
              {/* Tag badge */}
              <span className={`menu-tag ${item.tagColor}`}>{item.tag}</span>

              {/* Photo */}
              <div className="menu-card-img-wrap">
                <img
                  src={item.img}
                  alt={item.name}
                  className="menu-card-img"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="menu-card-overlay">
                  <p className="menu-card-desc">{item.desc}</p>
                </div>
              </div>

              {/* Info */}
              <div className="menu-card-info">
                <span className="menu-card-category">{item.category}</span>
                <h3 className="menu-card-name">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default MenuGallery
