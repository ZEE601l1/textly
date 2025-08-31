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
  text: "Im defo going too the store tommorow after skool cuz I gotta grab some snackz fr, then we chillin at mikes house l8r.", 
  correction: "I'm defo going to the store tomorrow after school cuz I gotta grab some snacks fr, then we're chilling at Mike's house l8r.", 
  preserve: ["Im", "tommorow", "fr", "no cap", "snackz", "l8r", "cuz", "defo"]
},
{ 
  text: "Bruh that party last nite was mad crazy ong, ppl was dancing off beat smh but it was still lit af fr.", 
  correction: "Bruh, that party last night was mad crazy ong. People were dancing off beat smh, but it was still lit af fr.", 
  preserve: ["Bruh", "ong", "smh", "lit", "af", "fr", "nite", "ppl"]
},
{ 
  text: "Its time for the meeting rn but idk if I shud even go cuz Im lowkey tired af nd my head hurtin.", 
  correction: "It's time for the meeting rn, but idk if I should even go cuz I'm lowkey tired af and my head hurting.", 
  preserve: ["rn", "idk", "cuz", "Im", "lowkey", "af", "nd", "shud"]
},
{ 
  text: "She was like omg I cant believe u actually said dat in class bruh, teacher was starin lowkey sus.", 
  correction: "She was like omg, I can't believe u actually said dat in class bruh. The teacher was staring lowkey sus.", 
  preserve: ["omg", "u", "dat", "bruh", "lowkey", "sus"]
},
{ 
  text: "We finna pul up 2 the mall l8r, u down? Bet we grab food n jus vibe dere til its dark.", 
  correction: "We finna pull up to the mall l8r, u down? Bet we grab food and jus vibe dere till it's dark.", 
  preserve: ["finna", "l8r", "u", "Bet", "jus", "dere", "2"]
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
        animationRef.current = setTimeout(resolve, 10000);
      });
      
      // Apply correction
      setIsCorrecting(true);
      await new Promise(resolve => {
        animationRef.current = setTimeout(resolve, 1000);
      });
      
      // Apply correction instantly
      setCurrentText(step.correction);
      
      // Reset states
      await new Promise(resolve => {
        animationRef.current = setTimeout(resolve, 5000);
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
            <div className="click-hint">Click to apply correction</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesAnimation;