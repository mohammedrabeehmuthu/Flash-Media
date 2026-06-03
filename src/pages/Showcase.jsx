import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Works from '../components/Works';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const Showcase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="showcase-page" 
      style={{ backgroundColor: 'var(--bg-primary)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="section-container" 
        style={{ paddingTop: '8rem', paddingBottom: '2rem' }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', textDecoration: 'none', marginBottom: '3rem', fontWeight: '500', fontSize: '1.1rem', transition: 'var(--transition-smooth)' }} className="back-link">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        <h1 className="text-massive" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', marginBottom: '1rem', lineHeight: 1 }}>THE PORTFOLIO.</h1>
        <p className="text-large" style={{ color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.5, fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>
          A decade of visual storytelling, precision production, and creative excellence captured in every frame.
        </p>
      </motion.div>

      <Works />

      <section className="section-container" style={{ paddingBottom: '10rem', paddingTop: '5rem', textAlign: 'center' }}>
        <motion.h2 
          className="text-huge" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: '1rem' }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          EXPLORE <span className="text-gradient">MORE.</span>
        </motion.h2>
        <motion.p 
          className="text-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: 1.6 }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Connect with us across our social platforms to see behind-the-scenes content, daily updates, and our latest creative experiments.
        </motion.p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          
          <motion.a 
            href="https://www.instagram.com/_flash_media_/" target="_blank" rel="noopener noreferrer" className="profile-card"
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            <div className="profile-banner ig-banner"></div>
            <div className="avatar-wrapper">
              <img src="/logo.webp" alt="Flash Media" className="profile-avatar" />
              <div className="platform-badge ig-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
            </div>
            <h3 className="profile-name">Flash Media</h3>
            <p className="profile-handle">@_flash_media_</p>
            <span className="profile-btn">View Profile</span>
          </motion.a>

          <motion.a 
            href="https://www.instagram.com/dreamscape_productions_/" target="_blank" rel="noopener noreferrer" className="profile-card"
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <div className="profile-banner ig-banner"></div>
            <div className="avatar-wrapper">
              <img src="/logo.webp" alt="Dreamscape" className="profile-avatar" />
              <div className="platform-badge ig-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
            </div>
            <h3 className="profile-name">Dreamscape</h3>
            <p className="profile-handle">@dreamscape_productions_</p>
            <span className="profile-btn">View Profile</span>
          </motion.a>

          <motion.a 
            href="https://www.youtube.com/@FLASHMEDIA" target="_blank" rel="noopener noreferrer" className="profile-card"
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          >
            <div className="profile-banner yt-banner"></div>
            <div className="avatar-wrapper">
              <img src="/logo.webp" alt="Flash Media" className="profile-avatar" />
              <div className="platform-badge yt-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </div>
            </div>
            <h3 className="profile-name">Flash Media</h3>
            <p className="profile-handle">@FLASHMEDIA</p>
            <span className="profile-btn">Subscribe</span>
          </motion.a>

          <motion.a 
            href="https://wa.me/917510114322" target="_blank" rel="noopener noreferrer" className="profile-card"
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          >
            <div className="profile-banner wa-banner"></div>
            <div className="avatar-wrapper">
              <img src="/logo.webp" alt="Flash Media" className="profile-avatar" />
              <div className="platform-badge wa-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
            </div>
            <h3 className="profile-name">Flash Media</h3>
            <p className="profile-handle">+91 7510 114 322</p>
            <span className="profile-btn">Message Us</span>
          </motion.a>

        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Showcase;
