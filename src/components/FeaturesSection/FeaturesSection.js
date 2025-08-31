// src/components/FeaturesSection/FeaturesSection.js
import React from 'react';
import { Sparkles, Globe, Type } from 'lucide-react';
import FeaturesAnimation from './FeaturesAnimation';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-layout">
          <div className="features-animation-container">
            <FeaturesAnimation />
          </div>
          <div className="features-content">
            <h2 className="section-title">
              Get Smart Corrections That Understand Context
            </h2>
            <p className="section-description">
              Textly intelligently corrects your spelling and grammar while preserving your intended meaning and style so it feels like your work, just enhanced.
            </p>
            <p className="section-description">
              Whether you're using slang, technical terms, or casual language, Textly gets the context and makes appropriate corrections.
            </p>
          </div>
        </div>
        
        <div className="features-grid">
          <div className="feature-card feature-1">
            <div className="feature-icon blue">
              <Sparkles size={32} />
            </div>
            <h3 className="feature-title">Context-Aware Corrections</h3>
            <p className="feature-description">
              Understands what you mean, not just what you type. Smart enough to know the difference between "there" and "their" in context.
            </p>
          </div>
          
          <div className="feature-card feature-2">
            <div className="feature-icon green">
              <Globe size={32} />
            </div>
            <h3 className="feature-title">Works Everywhere</h3>
            <p className="feature-description">
              Chrome Extension for Gmail, Twitter, LinkedIn, Slack, and more. One extension, everywhere you type.
            </p>
          </div>
          
          <div className="feature-card feature-3">
            <div className="feature-icon purple">
              <Type size={32} />
            </div>
            <h3 className="feature-title">Your Style, Your Way</h3>
            <p className="feature-description">
              Learns your tone and writing style. Whether you're professional, casual, or using slang — Textly adapts to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;