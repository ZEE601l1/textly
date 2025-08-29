// src/components/FeaturesSection/FeaturesAnimation.js
import React, { useState, useEffect, useRef } from 'react';
import './FeaturesAnimation.css';

const FeaturesAnimation = () => {
  const [currentText, setCurrentText] = useState('');
  const [showCorrection, setShowCorrection] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCorrecting, setIsCorrecting] = useState(false);
  const animationRef = useRef(null);
  
  const demoSteps = [
    { 
      text: "Im going too the store tommorow", 
      correction: "I'm going to the store tomorrow",
      preserve: ["Im", "tommorow"]
    },
    { 
      text: "That party was lit fr no cap", 
      correction: "That party was lit fr no cap",
      preserve: ["lit", "fr", "no cap"]
    },
    { 
      text: "Its time for the meeting", 
      correction: "It's time for the meeting",
      preserve: []
    }
  ];
  
  useEffect(() => {
    // Clear any existing animation
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    
    const cycleDemo = async () => {
      const step = demoSteps[currentStep];
      
      // Type incorrect text
      for (let i = 0; i <= step.text.length; i++) {
        setCurrentText(step.text.slice(0, i));
        await new Promise(resolve => {
          animationRef.current = setTimeout(resolve, 80);
        });
      }
      
      // Show correction
      await new Promise(resolve => {
        animationRef.current = setTimeout(resolve, 800);
      });
      setShowCorrection(true);
      
      // Wait before applying correction
      await new Promise(resolve => {
        animationRef.current = setTimeout(resolve, 2000);
      });
      
      // Apply correction
      setIsCorrecting(true);
      await new Promise(resolve => {
        animationRef.current = setTimeout(resolve, 500);
      });
      
      // Apply correction instantly
      setCurrentText(step.correction);
      
      // Reset states
      await new Promise(resolve => {
        animationRef.current = setTimeout(resolve, 1500);
      });
      setShowCorrection(false);
      setIsCorrecting(false);
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    };
    
    cycleDemo();
    
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [currentStep]);
  
  const handleCorrectionClick = () => {
    if (showCorrection && !isCorrecting) {
      setIsCorrecting(true);
      setCurrentText(demoSteps[currentStep].correction);
      
      setTimeout(() => {
        setShowCorrection(false);
        setIsCorrecting(false);
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
      }, 1500);
    }
  };
  
  return (
    <div className="features-animation-container">
      <div className="animation-window">
        <div className="window-controls">
          <div className="control-dot red"></div>
          <div className="control-dot yellow"></div>
          <div className="control-dot green"></div>
        </div>
        
        <div className="text-display">
          <span className="typed-text">
            {currentText}
            <span className="cursor">|</span>
          </span>
        </div>
        
        {showCorrection && (
          <div className={`correction-bubble ${isCorrecting ? 'applying' : ''}`} onClick={handleCorrectionClick}>
            <div className="correction-text">
              {demoSteps[currentStep].correction}
            </div>
            <div className="bubble-arrow"></div>
            <div className="click-hint">Click to apply</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesAnimation;