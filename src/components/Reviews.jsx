import React from 'react'

function Reviews() {
  const reviews = [
    {
      name: "Aarav Mehta",
      role: "Chai Enthusiast",
      text: "The Ginger Elaichi Chai here is easily the best in Bangalore. Brewed to absolute perfection.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Regular Customer",
      text: "I love the unhurried atmosphere. The Bun Maska and Hot Kulhad Chai is my ultimate comfort food.",
      rating: 5
    },
    {
      name: "Rohan Das",
      role: "Freelancer",
      text: "A perfect workspace café. High-speed Wi-Fi, fantastic coffee, and the ambient music is never loud.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      role: "Local Guide",
      text: "The staff is incredibly welcoming. The premium ingredients really stand out in every single sip.",
      rating: 5
    },
    {
      name: "Vikram Sen",
      role: "Tea Lover",
      text: "Their Hibiscus Iced Tea is a refreshing masterpiece. Beautiful presentation and cozy minimal aesthetics.",
      rating: 5
    },
    {
      name: "Meera Nair",
      role: "Weekend Regular",
      text: "ChaiDotin is my go-to sanctuary. It feels like a warm hug on a rainy Bangalore afternoon.",
      rating: 5
    }
  ]

  // Duplicate the reviews array to ensure seamless infinite scroll loop
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="section-header reviews-header fade-in">
          <h2 className="section-title">Community Love</h2>
          <p>Here is what our lovely tea enthusiasts and regulars have to say about their ChaiDotin moments.</p>
          <div className="section-divider"></div>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="reviews-marquee-container fade-in">
        <div className="reviews-marquee-track">
          {duplicatedReviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-card-header">
                <div className="review-avatar">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="review-meta">
                  <h4 className="reviewer-name">{review.name}</h4>
                  <span className="reviewer-role">{review.role}</span>
                </div>
                <div className="review-rating">
                  {"★".repeat(Math.round(review.rating))}
                </div>
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
