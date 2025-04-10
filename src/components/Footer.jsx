// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"; // For navigation links
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"; // Optional icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Logo */}
        <div className="footer-section">
          <h2>ShopEase</h2>
          <p>Your one-stop shop for everything trendy & affordable!</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><Mail size={16} /> support@fakestore.com</p>
          <p>📞 +91 7016620542</p>
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Twitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FakeStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
