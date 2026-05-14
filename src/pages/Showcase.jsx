import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Works from '../components/Works';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const Showcase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="showcase-page" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="section-container" style={{ paddingTop: '8rem', paddingBottom: '0' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', textDecoration: 'none', marginBottom: '1rem', fontWeight: '500', fontSize: '1.1rem', transition: 'var(--transition-smooth)' }} className="back-link">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
      <Works />
      <Footer />
    </div>
  );
};

export default Showcase;
