import React from 'react';
import { MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="section-container footer-grid">
        <div className="footer-brand">
          <img src="/logo.png" alt="Flash Media Logo" className="footer-logo blend-image" />
          <p className="text-large footer-desc">Complete Video & Audio Solution.</p>
        </div>
        
        <div className="footer-links">
          <h4>Sitemap</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/showcase">Showcase</a></li>
          </ul>
        </div>
        
        <div className="footer-location">
          <h4>Location</h4>
          <a href="https://maps.app.goo.gl/ibrv6nrC9UnY4A4y9" target="_blank" rel="noopener noreferrer" className="location-text location-link">
            <MapPin size={20} className="location-icon" />
            <span>Arumada Road, Venniyur,<br/>Malappuram, Kerala</span>
          </a>
        </div>
        
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/_flash_media_/" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram 1">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.instagram.com/dreamscape_productions_/" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram 2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.youtube.com/@FLASHMEDIA" target="_blank" rel="noopener noreferrer" className="social-link" title="YouTube">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="https://www.facebook.com/flashmediayt" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom section-container">
        <p>&copy; {new Date().getFullYear()} Flash Media. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
