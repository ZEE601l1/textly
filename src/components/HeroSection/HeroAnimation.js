// src/components/HeroSection/HeroAnimation.js
import React, { useState } from 'react';
import './HeroAnimation.css';

const HeroAnimation = () => {
  const [inputValue, setInputValue] = useState('');
  const [showChat, setShowChat] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    
    if (e.target.value.toLowerCase().includes('hey textly') && !showChat) {
      setShowChat(true);
    }
  };

  return (
    <div className="hero-animation-container">
      {showChat && (
        <div className="ai-chat-card">
          <div className="window-controls">
           
          </div>
          
          <div className="ai-chat-interface">
            <div className="chat-messages">
              <div className="message ai-message">
                <div className="message-avatar">T</div>
                <div className="message-content">
                  <div className="message-sender">Textly</div>
                  <div className="message-text">Hey there, scroll down to see more about Textly</div>
                </div>
              </div>
            </div>
            <div className="chat-input-container">
              <input
                type="text"
                placeholder="Type your message..."
                className="chat-input"
              />
              <button className="send-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="user-input-card">
        <div className="window-controls">
          <div className="control-dot red"></div>
          <div className="control-dot yellow"></div>
          <div className="control-dot green"></div>
        </div>
        
        <div className="user-input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type 'Hey Textly' to see the magic..."
            className="user-input"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;