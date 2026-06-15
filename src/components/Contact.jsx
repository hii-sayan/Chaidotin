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
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.515 0 10.002-4.484 10.005-9.998.002-2.673-1.03-5.186-2.907-7.068C16.595 1.656 14.087.625 11.417.625c-5.52 0-10.01 4.486-10.014 10.002-.002 1.812.486 3.586 1.414 5.161l-.979 3.57 3.657-.96c1.516.827 3.01 1.258 4.549 1.256zm13.484-9.932c-.3-.15-1.771-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.777.975-.951 1.174-.176.2-.351.224-.652.074-1.88-1-3.187-1.8-4.453-3.974-.336-.574-.029-.887.271-1.186.27-.269.6-.7.9-1.05.099-.115.18-.233.242-.349.125-.233.063-.437-.031-.637-.094-.2-.777-1.874-1.066-2.572-.28-.674-.563-.583-.778-.594-.2-.01-.43-.01-.66-.01-.23 0-.601.087-.917.43-.315.345-1.203 1.177-1.203 2.87 0 1.693 1.232 3.327 1.405 3.55 1.74 2.28 3.42 3.49 5.86 4.41.6.225 1.17.36 1.605.498.497.159.949.136 1.306.083.398-.059 1.229-.501 1.402-.985.173-.484.173-.898.121-.985-.052-.087-.2-.15-.5-.3z" />
                </svg>
                <span><a href="https://wa.me/919876543210?text=Hello%20ChaiDotin!%20I'd%20like%20to%20know%20more%20about%20your%20menu%20and%20franchise%20options." target="_blank" rel="noopener noreferrer" className="contact-link">+91 98765 43210</a></span>
              </div>
            </div>

            <div className="contact-whatsapp-cta">
              <p className="whatsapp-cta-text">Prefer messaging? Connect with us directly on WhatsApp for quick franchise enquiries or group bookings.</p>
              <a href="https://wa.me/919876543210?text=Hello%20ChaiDotin!%20I'd%20like%20to%20know%20more%20about%20your%20menu%20and%20franchise%20options." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <svg className="whatsapp-btn-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.515 0 10.002-4.484 10.005-9.998.002-2.673-1.03-5.186-2.907-7.068C16.595 1.656 14.087.625 11.417.625c-5.52 0-10.01 4.486-10.014 10.002-.002 1.812.486 3.586 1.414 5.161l-.979 3.57 3.657-.96c1.516.827 3.01 1.258 4.549 1.256zm13.484-9.932c-.3-.15-1.771-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.777.975-.951 1.174-.176.2-.351.224-.652.074-1.88-1-3.187-1.8-4.453-3.974-.336-.574-.029-.887.271-1.186.27-.269.6-.7.9-1.05.099-.115.18-.233.242-.349.125-.233.063-.437-.031-.637-.094-.2-.777-1.874-1.066-2.572-.28-.674-.563-.583-.778-.594-.2-.01-.43-.01-.66-.01-.23 0-.601.087-.917.43-.315.345-1.203 1.177-1.203 2.87 0 1.693 1.232 3.327 1.405 3.55 1.74 2.28 3.42 3.49 5.86 4.41.6.225 1.17.36 1.605.498.497.159.949.136 1.306.083.398-.059 1.229-.501 1.402-.985.173-.484.173-.898.121-.985-.052-.087-.2-.15-.5-.3z" />
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
              <a href="https://wa.me/919876543210?text=Hello%20ChaiDotin!%20I'd%20like%20to%20know%20more%20about%20your%20menu%20and%20franchise%20options." className="social-icon social-icon-whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.515 0 10.002-4.484 10.005-9.998.002-2.673-1.03-5.186-2.907-7.068C16.595 1.656 14.087.625 11.417.625c-5.52 0-10.01 4.486-10.014 10.002-.002 1.812.486 3.586 1.414 5.161l-.979 3.57 3.657-.96c1.516.827 3.01 1.258 4.549 1.256zm13.484-9.932c-.3-.15-1.771-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.777.975-.951 1.174-.176.2-.351.224-.652.074-1.88-1-3.187-1.8-4.453-3.974-.336-.574-.029-.887.271-1.186.27-.269.6-.7.9-1.05.099-.115.18-.233.242-.349.125-.233.063-.437-.031-.637-.094-.2-.777-1.874-1.066-2.572-.28-.674-.563-.583-.778-.594-.2-.01-.43-.01-.66-.01-.23 0-.601.087-.917.43-.315.345-1.203 1.177-1.203 2.87 0 1.693 1.232 3.327 1.405 3.55 1.74 2.28 3.42 3.49 5.86 4.41.6.225 1.17.36 1.605.498.497.159.949.136 1.306.083.398-.059 1.229-.501 1.402-.985.173-.484.173-.898.121-.985-.052-.087-.2-.15-.5-.3z" />
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
