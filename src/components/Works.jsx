import React from 'react';
import { motion } from 'framer-motion';
import { Video, FolderOpen, Play } from 'lucide-react';
import './Works.css';

const works = [
  { id: 1, title: 'Podcast Episode 01', type: 'youtube', link: '#', span: 'col-span-2 row-span-2' },
  { id: 2, title: 'Corporate Ad Shoot', type: 'drive', link: '#', span: 'col-span-1 row-span-1' },
  { id: 3, title: 'Live Music Mixing', type: 'youtube', link: '#', span: 'col-span-1 row-span-1' },
  { id: 4, title: 'Wedding Videography', type: 'drive', link: '#', span: 'col-span-1 row-span-2' },
  { id: 5, title: 'Brand Identity', type: 'drive', link: '#', span: 'col-span-1 row-span-1' },
  { id: 6, title: 'Short Film Edit', type: 'youtube', link: '#', span: 'col-span-2 row-span-1' },
];

const Works = () => {
  return (
    <section className="works-section section-container">
      <motion.div 
        className="works-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-huge">Selected <span className="highlight">Works</span></h2>
        <p className="text-large">A glimpse into our creative journey. Links point to our Drive and YouTube.</p>
      </motion.div>

      <div className="bento-grid">
        {works.map((work, idx) => (
          <motion.a 
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            key={work.id} 
            className={`bento-item glass-panel ${work.span}`}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bento-content">
              <div className="bento-icon-wrapper">
                {work.type === 'youtube' ? <Video size={28} /> : <FolderOpen size={28} />}
              </div>
              <div className="bento-text">
                <h3 className="bento-title">{work.title}</h3>
                <span className="bento-type">
                  {work.type === 'youtube' ? 'Watch on YouTube' : 'View on Drive'}
                </span>
              </div>
            </div>
            {work.type === 'youtube' && (
              <div className="play-overlay">
                <Play size={48} fill="currentColor" />
              </div>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Works;
