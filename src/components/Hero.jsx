import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="hero-section">
      <motion.div 
        className="hero-bg" 
        style={{ y, backgroundImage: `url('/hero-section.webp')` }}
      />
      <div className="hero-overlay" />
      <div className="hero-content section-container">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{ opacity, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          className="hero-logo-wrapper"
        >
          <img 
            src="/logo.webp" 
            alt="Flash Media Logo"
            className="hero-logo"
          />
        </motion.div>
        <motion.h1 
          className="text-massive hero-main-text text-gradient"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          style={{ opacity }}
        >
          FLASH MEDIA
        </motion.h1>
        <motion.p 
          className="text-large hero-sub-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.6 }}
          style={{ opacity }}
        >
          Complete Video & Audio Solution
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
