import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Left text animation
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);

  // Right camera animation
  const cameraY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const cameraRotate = useTransform(scrollYProgress, [0, 1], [-5, 15]);

  return (
    <section ref={containerRef} className="about-section">
      <div className="section-container about-grid">
        <motion.div style={{ opacity, y }} className="about-text-container">
          <h2 className="text-huge" style={{ lineHeight: 1.1 }}>
            Crafting <span className="text-gradient">Excellence</span><br/>Since 2017.
          </h2>
          <div className="about-description">
            <p className="text-large">
              What started as a local live telecasting venture in Venniyur has evolved over the past 9 years into a premier media production house. Today, Flash Media stands as a professional powerhouse, driven by a dedicated team committed to delivering top-tier audio and video solutions.
            </p>
            <p className="text-large" style={{ marginTop: '1.5rem' }}>
              From high-end Podcast Studios equipped with world-class technology to comprehensive media support, we handle every project with professional integrity. Whether it’s a creative concept or a technical execution, we bring your vision to life with precision and passion.
            </p>
          </div>
        </motion.div>
        
        <div className="about-visual-container">
          <motion.img 
            src="/camera-tripod.webp" 
            alt="Professional Camera on Tripod"
            className="about-camera-asset blend-image"
            style={{ y: cameraY, rotate: cameraRotate }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
