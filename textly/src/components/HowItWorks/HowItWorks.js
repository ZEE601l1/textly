// src/components/HowItWorks/HowItWorks.js
import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <h2 className="section-title centered">
          How It Works
        </h2>
        
        <div className="steps-grid">
          <div className="step-card step-1">
            <div className="step-number blue">1</div>
            <h3 className="step-title">Install the Chrome Extension</h3>
            <p className="step-description">
              Quick one-click install from the Chrome Web Store. Takes less than 30 seconds.
            </p>
          </div>
          
          <div className="step-card step-2">
            <div className="step-number green">2</div>
            <h3 className="step-title">Start Typing Anywhere Online</h3>
            <p className="step-description">
              Works seamlessly across all your favorite websites and web apps.
            </p>
          </div>
          
          <div className="step-card step-3">
            <div className="step-number purple">3</div>
            <h3 className="step-title">Get Instant, Smarter Corrections</h3>
            <p className="step-description">
              AI-powered suggestions that understand context and improve your writing in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;