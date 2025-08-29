// src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo">
          Textly
        </div>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#faq">FAQ</a>
        </div>
        
        <button className="cta-button desktop-only">
          Get Started for Free
        </button>
        
        {/* Mobile Hamburger Menu */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="menu-line line-1"></span>
          <span className="menu-line line-2"></span>
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <a href="#features" onClick={toggleMobileMenu}>Features</a>
          <a href="#how-it-works" onClick={toggleMobileMenu}>How it Works</a>
          <a href="#faq" onClick={toggleMobileMenu}>FAQ</a>
          <button className="cta-button mobile-cta">
            Get Started for Free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;