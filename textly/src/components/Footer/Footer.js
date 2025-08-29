// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">Textly</div>
          </div>
          <div className="footer-links">
            <a href="#">Pricing</a>
            <a href="#">Docs</a>
            <a href="#">Contact</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            © 2025 Textly. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;