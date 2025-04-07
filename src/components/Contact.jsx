// src/pages/Contact.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>📞 Contact Us</h2>
      <div className="contact-content">
        {/* Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Reach Us At</h3>
          <p>📧 support@fakestore.com</p>
          <p>📞 +91 7016620542</p>
          <p>📍 123 Market Lane, New Delhi, India</p>
          <p>🕒 Mon - Fri: 9AM - 6PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
