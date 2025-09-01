// src/components/FAQSection/FAQSection.js
import React from 'react';
import FAQItem from './FAQItem';
import './FAQSection.css';

const FAQSection = () => {
  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="section-title centered">
          Frequently Asked Questions
        </h2>
        
        <div className="faq-list">
          <FAQItem 
            question="How do I install Textly?"
            answer="For now, we're still in devolopment phase but when we launch V1 all you have to do is click 'Add to Chrome,' install it from the Chrome Web Store, and you're ready to go. It takes less than 30 seconds and works immediately."
          />
          <FAQItem 
            question="Does Textly work on Mac?"
            answer="Yes! If you use Chrome on Mac, just install the Textly Chrome extension. For Safari, a future version is planned."
          />
          <FAQItem 
            question="Will there be a mobile version?"
            answer="Yes, Textly will be available as a mobile keyboard app soon. Join the waitlist to be notified when it's ready."
          />
          <FAQItem 
            question="Is my data private?"
            answer="Absolutely. We don't sell your data, your words stay yours. We use industry-standard encryption and only process text temporarily to provide corrections."
          />
          <FAQItem 
            question="Does it work offline?"
            answer="Basic corrections work offline, but advanced AI features require an internet connection for the best experience."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;