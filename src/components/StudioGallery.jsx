import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';
import './StudioGallery.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const landscapeImages = [
  'DSC00142.webp', 'DSC00153.webp', 'DSC00155.webp', 'DSC00193.webp',
  'DSC00306.webp', 'DSC00323.webp', 'DSC00364.webp', 'DSC00446.webp',
  'DSC00630.webp'
];

const portraitImages = [
  'DSC00324.webp', 'DSC00340.webp', 'DSC00570.webp', 'DSC00582.webp',
  'DSC00590.webp', 'DSC00601.webp', 'DSC00610.webp', 'DSC00622.webp'
];

const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

// Create a combined array of slides (interleaved)
const slides = [];
const portraitChunks = chunkArray(portraitImages, 3);

let lIndex = 0;
let pIndex = 0;
while (lIndex < landscapeImages.length || pIndex < portraitChunks.length) {
  // Add 2 landscape slides, then 1 portrait group slide to interleave beautifully
  if (lIndex < landscapeImages.length) slides.push({ type: 'landscape', src: landscapeImages[lIndex++] });
  if (lIndex < landscapeImages.length) slides.push({ type: 'landscape', src: landscapeImages[lIndex++] });
  if (pIndex < portraitChunks.length) slides.push({ type: 'portrait-group', images: portraitChunks[pIndex++] });
}

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
    <section id="studio" className="studio-gallery-section">
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
            animate={{ opacity: 1, backdropFilter: 'blur(30px)' }}
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
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                speed={800} /* Smooth transition */
                grabCursor={true}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[EffectFade, Pagination, Navigation, Autoplay]}
                className="studio-swiper"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index} className="studio-slide-container">
                    {slide.type === 'landscape' ? (
                      <div className="landscape-slide">
                        <img src={`/Our Studio/${slide.src}`} alt="Flash Media Studio" loading="lazy" />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                      </div>
                    ) : (
                      <div className="portrait-grid-slide">
                        {slide.images.map((img, i) => (
                          <div key={i} className="portrait-item">
                            <img src={`/Our Studio/${img}`} alt={`Flash Media Studio Detail ${i+1}`} loading="lazy" />
                          </div>
                        ))}
                      </div>
                    )}
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
