import React from 'react'

function WhatsAppButton() {
  const phoneNumber = '919876543210' // Standard Bangalore placeholder number for the café
  const message = encodeURIComponent("Hello ChaiDotin! I'd like to know more about your menu, timings, and franchise options.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-fab-tooltip">Chat with us</span>
      <div className="whatsapp-fab-pulse"></div>
      <svg
        className="whatsapp-fab-icon"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.515 0 10.002-4.484 10.005-9.998.002-2.673-1.03-5.186-2.907-7.068C16.595 1.656 14.087.625 11.417.625c-5.52 0-10.01 4.486-10.014 10.002-.002 1.812.486 3.586 1.414 5.161l-.979 3.57 3.657-.96c1.516.827 3.01 1.258 4.549 1.256zm13.484-9.932c-.3-.15-1.771-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.777.975-.951 1.174-.176.2-.351.224-.652.074-1.88-1-3.187-1.8-4.453-3.974-.336-.574-.029-.887.271-1.186.27-.269.6-.7.9-1.05.099-.115.18-.233.242-.349.125-.233.063-.437-.031-.637-.094-.2-.777-1.874-1.066-2.572-.28-.674-.563-.583-.778-.594-.2-.01-.43-.01-.66-.01-.23 0-.601.087-.917.43-.315.345-1.203 1.177-1.203 2.87 0 1.693 1.232 3.327 1.405 3.55 1.74 2.28 3.42 3.49 5.86 4.41.6.225 1.17.36 1.605.498.497.159.949.136 1.306.083.398-.059 1.229-.501 1.402-.985.173-.484.173-.898.121-.985-.052-.087-.2-.15-.5-.3z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
