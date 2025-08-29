// src/components/HeroSection/HeroSection.js
import React from 'react';
import HeroAnimation from './HeroAnimation';
import { Download } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Mobile Layout */}
        <div className="mobile-layout">
          <h1 className="hero-title">
            <span className="title-line-1">Imagine you can just write,</span>
            <span className="title-line-2">and not worry</span>
          </h1>
          
          <p className="hero-description">
            Textly goes beyond spelling fixes, it understands context, slang, and style while you type.
          </p>
          
          {/* Live Typing Demo */}
          <div className="animation-container">
            <HeroAnimation />
          </div>
          
          <div className="cta-buttons">
            <button className="cta-button primary">
              <Download size={20} className="button-icon" />
              Add to Chrome
            </button>
            <button className="cta-button secondary">
              Try on Web
            </button>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="desktop-layout">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line-1">Imagine you can just text,</span>
              <span className="title-line-2">and not worry</span>
            </h1>
            
            <p className="hero-description">
              Textly goes beyond spelling fixes, it understands context, slang, and style while you type.
            </p>
            
            <div className="cta-buttons">
              <button className="cta-button primary">
                <Download size={20} className="button-icon" />
                Add to Chrome
              </button>
              <button className="cta-button secondary">
                Try on Web
              </button>
            </div>
          </div>
          
          <div className="hero-animation">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

