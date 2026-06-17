import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import MenuGallery from './components/MenuGallery'
import About from './components/About'
import Franchise from './components/Franchise'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    // Scroll Fade-in observer
    const fadeObserverOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Animates just before entering 10% from viewport bottom
      threshold: 0.05
    }

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          fadeObserver.unobserve(entry.target) // Trigger animation once
        }
      })
    }, fadeObserverOptions)

    document.querySelectorAll('.fade-in').forEach(element => {
      fadeObserver.observe(element)
    })

    // Active Section observer
    const sectionObserverOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Triggers when the section dominates the center view
      threshold: 0
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('id'))
        }
      })
    }, sectionObserverOptions)

    // Track all sections with an id
    document.querySelectorAll('section[id]').forEach(section => {
      sectionObserver.observe(section)
    })

    // Reset active highlight when at absolute top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('')
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      fadeObserver.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Products />
        <MenuGallery />
        <About />
        <Franchise />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
