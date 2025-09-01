// src/components/WaitlistSection/WaitlistSection.js
import React, { useState } from 'react';
import { Download, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { addToWaitlist } from '../../Firebase';
import './WaitlistSection.css';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await addToWaitlist(email);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      console.error('Error adding to waitlist:', error);
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setErrorMessage('');
    setEmail('');
  };

  if (status === 'success') {
    return (
      <section className="waitlist-section success-view">
        <div className="waitlist-container">
          <div className="success-card">
            <div className="success-icon">
              <CheckCircle className="icon" />
            </div>
            
            <h2 className="success-title">You're on the list!</h2>
            
            <p className="success-description">
              Thanks for joining the Textly waitlist. We'll notify you as soon as V1 is ready for early access.
            </p>
            
            <div className="next-steps">
              <h3 className="next-steps-title">What's next?</h3>
              <p className="next-steps-text">
                We're putting the finishing touches on Textly. Expect an email from us in the coming weeks with your early access link.
              </p>
            </div>
            
            <button onClick={resetForm} className="reset-button">
              Join another email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="waitlist-section">
      <div className="waitlist-container">
        <div className="waitlist-content">
          {/* Header */}
          <div className="waitlist-header">
            <div className="extension-badge">
              <Download className="badge-icon" />
              Join Textly Waitlist
            </div>
            
            <h2 className="waitlist-title">
              <span className="title-gradient">Get early access!</span>
            
            </h2>
            
            <p className="waitlist-description">
             Be the first to experience AI that understands your style, slang, and context, right on your keyboard. Join the waitlist.
            </p>
          </div>

          {/* Form */}
          <div className="form-wrapper">
            <div className="form-card">
              <div className="form-icon-wrapper">
                <Mail className="form-icon" />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="email-input"
                  disabled={status === 'loading'}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                />
                
                {status === 'error' && (
                  <div className="error-message">
                    <AlertCircle className="error-icon" />
                    <span className="error-text">{errorMessage}</span>
                  </div>
                )}
                
                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading' || !email}
                  className="submit-button"
                >
                  {status === 'loading' ? (
                    <div className="loading-content">
                      <div className="spinner"></div>
                      <span>Adding you to the list...</span>
                    </div>
                  ) : (
                    <div className="button-content">
                      
                      <span>Get Early Access</span>
                    </div>
                  )}
                </button>
              </div>
              
              <p className="privacy-text">
                The future of AI assistance is here!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;