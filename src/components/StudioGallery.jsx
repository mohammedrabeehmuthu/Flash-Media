import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './StudioGallery.css';

const images = [
  'DSC00142.jpg', 'DSC00153.jpg', 'DSC00155.jpg', 'DSC00193.jpg',
  'DSC00216.jpg', 'DSC00226.jpg', 'DSC00306.jpg', 'DSC00308.jpg',
  'DSC00323.jpg', 'DSC00324.jpg', 'DSC00325.jpg', 'DSC00340.jpg',
  'DSC00348.jpg', 'DSC00355.jpg', 'DSC00364.jpg', 'DSC00444.jpg',
  'DSC00446.jpg', 'DSC00570.jpg', 'DSC00574.jpg', 'DSC00575.jpg',
  'DSC00579.jpg', 'DSC00582.jpg', 'DSC00590.jpg', 'DSC00601.jpg',
  'DSC00610.jpg', 'DSC00622.jpg', 'DSC00630.jpg'
];

const StudioGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isModalOpen]);

  // Featured images from the array for the main preview layout
  const featured = ['DSC00570.jpg', 'DSC00142.jpg'];
  const galleryImages = images.filter(img => !featured.includes(img));

  // Helper to determine masonry classes dynamically for a Bento box feel
  const getBentoClass = (index) => {
    if (index % 6 === 0) return 'sg-bento-item sg-span-2-col';
    if (index % 8 === 0) return 'sg-bento-item sg-span-2-row';
    return 'sg-bento-item';
  };

  return (
    <section className="studio-gallery-section">
      <div className="section-container">
        <motion.p 
          className="sg-subheading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          THE SPACE WHERE IDEAS LIVE
        </motion.p>
        
        <motion.h2 
          className="sg-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore Our Premium Podcast Studio
        </motion.h2>

        <div className="sg-featured-wrapper">
          {featured.map((img, idx) => (
            <motion.img 
              key={idx}
              src={`/Our Studio/${img}`} 
              alt="Premium Podcast Studio Area" 
              className="sg-featured-img"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + (idx * 0.2) }}
            />
          ))}
        </div>

        <motion.button 
          className="sg-cta-button"
          onClick={() => setIsModalOpen(true)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Studio
        </motion.button>
      </div>

      {/* Full-screen Bento Grid Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="sg-modal-overlay"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsModalOpen(false)}
          >
            <button className="sg-modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            
            <motion.div 
              className="sg-bento-grid"
              onClick={(e) => e.stopPropagation()} 
            >
              {galleryImages.map((img, idx) => (
                <motion.div 
                  key={idx} 
                  className={getBentoClass(idx)}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 0.5, delay: (idx % 6) * 0.1 }}
                >
                  <img src={`/Our Studio/${img}`} loading="lazy" alt="Flash Media Studio Facility" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StudioGallery;
