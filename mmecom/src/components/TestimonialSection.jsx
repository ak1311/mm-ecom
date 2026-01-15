import React from 'react';
import './TestimonialSection.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aditi Sharma",
      location: "New Delhi",
      text: "The authentic taste of Mithila! I ordered the Thekua and it reminded me of my grandmother's cooking. Absolutely delicious and fresh.",
    },
    {
      id: 2,
      name: "Rahul Verma",
      location: "Mumbai",
      text: "Great packaging and fast delivery. The pickles are spicy and tangy, just perfect. Will definitely order again.",
    },
    {
      id: 3,
      name: "Priya Singh",
      location: "Bangalore",
      text: "I love the variety of traditional snacks available here. It's hard to find such quality elsewhere. Highly recommended!",
    }
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h4>Customer Love</h4>
          <h2>What Our Clients Say</h2>
          <p>We cherish every feedback from our lovely customers.</p>
        </div>
        
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <div className="quote-icon-container">
                <FormatQuoteIcon className="quote-icon" />
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-author">
                <h5>{item.name}</h5>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;