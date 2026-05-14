import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingCTA.css';

const FloatingCTA = () => {
  return (
    <a 
      href="https://wa.me/917510114322" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-cta"
    >
      <span className="cta-text">Enquire Now</span>
      <div className="cta-icon">
        <MessageCircle size={24} />
      </div>
    </a>
  );
};

export default FloatingCTA;
