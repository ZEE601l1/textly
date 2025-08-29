// src/components/FloatingElements/FloatingElement.js
import React from 'react';

const FloatingElement = ({ children, className = "", delay = 0 }) => (
  <div 
    className={`floating-element ${className}`} 
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

export default FloatingElement;