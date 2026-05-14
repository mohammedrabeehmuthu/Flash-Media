import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MicVocal, Clapperboard, Music, Zap, RadioTower, Camera, X, Play } from 'lucide-react';
import './Works.css';

const extractYoutubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const worksData = [
  {
    id: 'podcasts',
    title: 'Podcasts',
    subtitle: 'The Conversation Series',
    icon: MicVocal,
    desc: 'High-definition video podcasts recorded in our premium acoustic environment.',
    type: 'instagram',
    links: [
      'https://www.instagram.com/p/DYR3lfNk2C5/?hl=en',
      'https://www.instagram.com/p/DWyNj0bxoFk/?hl=en',
      'https://www.instagram.com/p/DWwg768z2xQ/?hl=en',
      'https://www.instagram.com/p/DWv7Zy5TmUQ/?hl=en'
    ]
  },
  {
    id: 'ads',
    title: 'Advertisement Works',
    subtitle: 'Brand Stories',
    icon: Clapperboard,
    desc: 'Strategic commercial films designed to elevate brands and drive engagement.',
    type: 'instagram',
    links: [
      'https://www.instagram.com/reel/DWdC8vODvdF/?hl=en',
      'https://www.instagram.com/reel/DWPFxZaDsZY/?hl=en',
      'https://www.instagram.com/reel/DX8uMGeEQjA/?hl=en',
      'https://www.instagram.com/reel/DTVnFzMAXPa/?hl=en'
    ]
  },
  {
    id: 'albums',
    title: 'Album Videos',
    subtitle: 'Cinematic Music',
    icon: Music,
    desc: 'Expressive and artistic music videos produced with cinematic flair.',
    type: 'youtube',
    links: [
      'https://youtu.be/yCvn9IUvkHQ?si=1okb1V4XYd7mVtl_',
      'https://www.youtube.com/watch?v=wULrj93F1zM',
      'https://www.youtube.com/watch?v=gf734bTWqZc',
      'https://youtu.be/NU6DvTvtYy4?si=AJBoSz2gnNsq4YeY',
      'https://www.youtube.com/watch?v=8U1dymkYWMk',
      'https://www.youtube.com/watch?v=Kq-NkvnHz88',
      'https://www.youtube.com/watch?v=kTWaXFjHMFQ',
      'https://www.youtube.com/watch?v=xwatIIgaKfk'
    ]
  },
  {
    id: 'highlights',
    title: 'Highlights',
    subtitle: 'Event Recaps',
    icon: Zap,
    desc: 'Capturing the energy and key moments of weddings, events, and corporate milestones.',
    type: 'mixed',
    links: [
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=lmWtGeMJpkY' },
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=r5kn0PC_ZUg&t=3s' },
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=NASkcHF9Lvk' },
      { type: 'instagram', url: 'https://www.instagram.com/reel/DTR6JuejzxU/?hl=en' }
    ]
  },
  {
    id: 'live',
    title: 'Live Streaming',
    subtitle: 'Real-Time Coverage',
    icon: RadioTower,
    desc: 'Professional multi-cam streaming for global audiences.',
    type: 'redirect',
    url: 'https://www.youtube.com/@FLASHMEDIA/streams'
  },
  {
    id: 'product',
    title: 'Product Photography',
    subtitle: 'Visual Assets',
    icon: Camera,
    desc: 'High-detail imagery focusing on form, texture, and brand appeal.',
    type: 'redirect',
    url: 'https://drive.google.com/drive/u/0/folders/1roTwO-Ubzv7zAIixT6ZzE7wLgXEHDETT'
  }
];

const Works = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const renderInstagramCard = (link, idx) => (
    <a key={idx} href={link.url || link} target="_blank" rel="noopener noreferrer" className="media-card ig-card">
      <div className="ig-overlay">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        <span>View on Instagram</span>
      </div>
    </a>
  );

  const renderYoutubeCard = (link, idx) => {
    const url = link.url || link;
    const videoId = extractYoutubeId(url);
    if (!videoId) return null;
    return (
      <div key={idx} className="media-card yt-card" onClick={() => setActiveVideo(videoId)}>
        <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="Thumbnail" />
        <div className="yt-overlay">
          <div className="play-btn"><Play size={24} fill="currentColor" /></div>
        </div>
      </div>
    );
  };

  return (
    <section className="works-section">
      <div className="section-container">
        
        {/* Showcase Architecture */}
        <div className="bento-architecture">
          {worksData.map((section, idx) => {
            const Icon = section.icon;
            
            if (section.type === 'redirect') {
              return (
                <a href={section.url} target="_blank" rel="noopener noreferrer" className="bento-section redirect-box" key={section.id}>
                  <div className="section-header">
                    <div className="icon-box"><Icon size={28} /></div>
                    <div>
                      <h3>{section.title}</h3>
                      <span className="subtitle">{section.subtitle}</span>
                    </div>
                  </div>
                  <p>{section.desc}</p>
                </a>
              );
            }

            return (
              <div className="bento-section" key={section.id}>
                <div className="section-header">
                  <div className="icon-box"><Icon size={28} /></div>
                  <div>
                    <h3>{section.title}</h3>
                    <span className="subtitle">{section.subtitle}</span>
                  </div>
                </div>
                <p className="section-desc">{section.desc}</p>
                
                <div className="media-grid">
                  {section.type === 'instagram' && section.links.map((link, i) => renderInstagramCard(link, i))}
                  {section.type === 'youtube' && section.links.map((link, i) => renderYoutubeCard(link, i))}
                  {section.type === 'mixed' && section.links.map((link, i) => 
                    link.type === 'youtube' ? renderYoutubeCard(link, i) : renderInstagramCard(link, i)
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <button className="close-btn" onClick={() => setActiveVideo(null)}>
              <X size={32} />
            </button>
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;
