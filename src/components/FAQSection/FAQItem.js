// src/components/FAQSection/FAQItem.js
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQItem.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="question-text">{question}</span>
        <ChevronDown className={`chevron ${isOpen ? 'open' : ''}`} />
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <div className="answer-content">{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;