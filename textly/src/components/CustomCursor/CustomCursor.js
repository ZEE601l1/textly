// src/components/CustomCursor/CustomCursor.js
import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [trailPositions, setTrailPositions] = useState([]);
  const [ripples, setRipples] = useState([]);
  const cursorRef = useRef();
  const animationRef = useRef();

  // Direct cursor movement (no easing)
  useEffect(() => {
    // No animation loop needed - cursor moves directly with mouse
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let trailIndex = 0;

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Direct position update (no lag)
      setPosition({ x, y });
      setTargetPosition({ x, y });
      
      // Update trail
      setTrailPositions(prev => {
        const newTrail = [...prev];
        newTrail[trailIndex] = { 
          x, 
          y, 
          timestamp: Date.now(),
          id: Math.random()
        };
        trailIndex = (trailIndex + 1) % 8;
        return newTrail;
      });
      
      // Check if element is clickable
      const target = e.target;
      const isClickable = (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick !== null ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]')
      );
      
      setIsPointer(isClickable);
    };

    const handleMouseDown = (e) => {
      setIsPressed(true);
      
      // Create ripple effect
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Math.random(),
        timestamp: Date.now()
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 800);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    // Initialize trail positions
    setTrailPositions(Array(8).fill({ x: 0, y: 0, timestamp: Date.now(), id: 0 }));
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Trail Effects */}
      {trailPositions.map((trail, index) => (
        <div
          key={`${trail.id}-${index}`}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: (index + 1) / trailPositions.length * 0.3,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trailPositions.length})`,
            animationDelay: `${index * 0.05}s`
          }}
        />
      ))}

      {/* Main Cursor */}
      <div 
        ref={cursorRef}
        className={`cursor ${isPointer ? 'cursor-pointer' : ''} ${isPressed ? 'cursor-pressed' : ''} ${isHidden ? 'cursor-hidden' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`
        }}
      >
        <div className="cursor-inner">
          <div className="cursor-dot"></div>
        </div>
        
        {/* Outer ring with rotation */}
        <div className="cursor-outer-ring"></div>
        
        {/* Particle effects for hover */}
        {isPointer && (
          <>
            <div className="cursor-particle particle-1"></div>
            <div className="cursor-particle particle-2"></div>
            <div className="cursor-particle particle-3"></div>
            <div className="cursor-particle particle-4"></div>
          </>
        )}
      </div>

      {/* Click Ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="cursor-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;