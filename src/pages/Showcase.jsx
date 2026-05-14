import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Works from '../components/Works';
import Footer from '../components/Footer';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const Showcase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="showcase-page" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="section-container" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', textDecoration: 'none', marginBottom: '3rem', fontWeight: '500', fontSize: '1.1rem', transition: 'var(--transition-smooth)' }} className="back-link">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        <h1 className="text-massive" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', marginBottom: '1rem', lineHeight: 1 }}>THE PORTFOLIO.</h1>
        <p className="text-large" style={{ color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.5, fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>
          A decade of visual storytelling, precision production, and creative excellence captured in every frame.
        </p>
      </div>

      <Works />

      <section className="section-container" style={{ paddingBottom: '10rem', paddingTop: '5rem', textAlign: 'center' }}>
        <h2 className="text-huge" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: '1rem' }}>EXPLORE <span className="text-gradient">MORE.</span></h2>
        <p className="text-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
          Connect with us across our social platforms to see behind-the-scenes content, daily updates, and our latest creative experiments.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          
          <a href="https://www.instagram.com/_flash_media_/" target="_blank" rel="noopener noreferrer" className="profile-card">
            <div className="profile-banner ig-banner"></div>
            <img src="/logo.png" alt="Flash Media" className="profile-avatar" />
            <h3 className="profile-name">Flash Media</h3>
            <p className="profile-handle">@_flash_media_</p>
            <span className="profile-btn">View Profile</span>
          </a>

          <a href="https://www.youtube.com/@FLASHMEDIA" target="_blank" rel="noopener noreferrer" className="profile-card">
            <div className="profile-banner yt-banner"></div>
            <img src="/logo.png" alt="Flash Media" className="profile-avatar" />
            <h3 className="profile-name">Flash Media</h3>
            <p className="profile-handle">@FLASHMEDIA</p>
            <span className="profile-btn">Subscribe</span>
          </a>

          <a href="https://wa.me/917510114322" target="_blank" rel="noopener noreferrer" className="profile-card">
            <div className="profile-banner wa-banner"></div>
            <img src="/logo.png" alt="Flash Media" className="profile-avatar" />
            <h3 className="profile-name">Flash Media</h3>
            <p className="profile-handle">+91 7510 114 322</p>
            <span className="profile-btn">Message Us</span>
          </a>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Showcase;
