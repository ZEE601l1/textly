// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import FAQSection from './components/FAQSection/FAQSection';
import Footer from './components/Footer/Footer';
import FloatingElements from './components/FloatingElements/FloatingElements';
import CustomCursor from './components/CustomCursor/CustomCursor';
import './App.css';
import WaitlistSection from './components/WaitlistSection/WaitlistSection';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <FloatingElements />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <WaitlistSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;