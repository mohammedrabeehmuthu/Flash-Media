import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import './StudioGallery.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// All images converted to webp
const images = [
  'DSC00142.webp', 'DSC00153.webp', 'DSC00155.webp', 'DSC00193.webp',
  'DSC00216.webp', 'DSC00226.webp', 'DSC00306.webp', 'DSC00308.webp',
  'DSC00323.webp', 'DSC00324.webp', 'DSC00325.webp', 'DSC00340.webp',
  'DSC00348.webp', 'DSC00355.webp', 'DSC00364.webp', 'DSC00444.webp',
  'DSC00446.webp', 'DSC00570.webp', 'DSC00574.webp', 'DSC00575.webp',
  'DSC00579.webp', 'DSC00582.webp', 'DSC00590.webp', 'DSC00601.webp',
  'DSC00610.webp', 'DSC00622.webp', 'DSC00630.webp'
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

  const featured = ['DSC00570.webp', 'DSC00142.webp'];

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
              loading="lazy"
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
              className="sg-carousel-wrapper"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={3}
                coverflowEffect={{
                  rotate: 15,
                  stretch: 0,
                  depth: 250,
                  modifier: 1.5,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="studio-swiper"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index} className="studio-slide">
                    <div className="studio-slide-inner">
                      <img src={`/Our Studio/${img}`} alt={`Flash Media Studio - ${index + 1}`} loading="lazy" />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StudioGallery;
