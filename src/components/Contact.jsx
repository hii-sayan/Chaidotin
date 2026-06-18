import React, { useState } from 'react'
import logoImg from '../assets/logo.png'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [feedback, setFeedback] = useState({
    text: '',
    type: '', // 'info', 'success', 'error'
    visible: false
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    // Map HTML input IDs to matches
    const key = id.replace('form-', '')
    setFormData(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, message } = formData

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({
        text: 'Please fill out all fields before submitting.',
        type: 'error',
        visible: true
      })
      return
    }

    if (!validateEmail(email.trim())) {
      setFeedback({
        text: 'Please provide a valid email address.',
        type: 'error',
        visible: true
      })
      return
    }

    // Simulate sending message
    setFeedback({
      text: 'Sending message...',
      type: 'info',
      visible: true
    })

    setTimeout(() => {
      setFeedback({
        text: 'Thank you! Your message has been sent successfully.',
        type: 'success',
        visible: true
      })
      setFormData({
        name: '',
        email: '',
        message: ''
      })

      // Hide message after a delay
      setTimeout(() => {
        setFeedback(prev => ({ ...prev, visible: false }))
      }, 5000)
    }, 1200)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">

          {/* Left Info Column */}
          <div className="contact-info fade-in">
            <div className="contact-brand">
              <a href="#hero" className="contact-logo">
                <img src={logoImg} alt="ChaiDotin Logo" className="contact-logo-img" />
                <span>ChaiDotin<span className="logo-dot">.</span></span>
              </a>
              <p className="contact-tagline">Every cup, a moment.</p>
              <p>Step inside our sanctuary. Let us hear your thoughts, answer your franchise queries, or simply share a morning greeting.</p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <svg className="contact-item-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Store @ Whitefield, Marathahalli, Munekolala and ITPL</span>
              </div>

              <div className="contact-item">
                <svg className="contact-item-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span><a href="mailto:Chaidotin@gmail.com" className="contact-link">Chaidotin@gmail.com</a></span>
              </div>

              <div className="contact-item">
                <svg className="contact-item-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span><a href="https://wa.me/919740264991?text=Hello%20ChaiDotin!%20I'd%20like%20to%20know%20more%20about%20your%20menu%20and%20franchise%20options." target="_blank" rel="noopener noreferrer" className="contact-link">+91 9740264991</a></span>
              </div>
            </div>

            <div className="contact-whatsapp-cta">
              <p className="whatsapp-cta-text">Prefer messaging? Connect with us directly on WhatsApp for quick franchise enquiries or group bookings.</p>
              <a href="https://wa.me/919740264991?text=Hello%20ChaiDotin!%20I'd%20like%20to%20know%20more%20about%20your%20menu%20and%20franchise%20options." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <svg className="whatsapp-btn-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <div className="social-links">
              <a href="https://www.instagram.com/chaidotin/" className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://wa.me/919740264991?text=Hello%20ChaiDotin!%20I'd%20like%20to%20know%20more%20about%20your%20menu%20and%20franchise%20options." className="social-icon social-icon-whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-container fade-in">
            <div className="contact-form-card">
              <form id="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="form-name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="form-name"
                    className="form-input"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="form-email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-message" className="form-label">Message</label>
                  <textarea
                    id="form-message"
                    className="form-textarea"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Message</button>
              </form>

              {/* Feedback UI container */}
              <div className={`form-feedback ${feedback.type} ${feedback.visible ? 'visible' : ''}`}>
                {feedback.text}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
