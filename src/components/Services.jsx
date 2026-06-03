import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MicVocal, RadioTower, Camera, Box, Video, Clapperboard, MonitorPlay, TrendingUp, Share2, PenTool, LayoutGrid, Sliders, Code } from 'lucide-react';
import './Services.css';

const services = [
  { id: 1, title: 'Fully Equipped Podcast Studio', icon: MicVocal, desc: 'Step into a space designed for voice. Our studio features world-class acoustic treatment and high-end broadcasting microphones, providing a pristine environment for creators to record, film, and launch professional-grade podcasts with zero technical friction.' },
  { id: 2, title: 'Multicam Live Streaming', icon: RadioTower, desc: 'Bring your event to a global audience in real-time. Using industry-leading switching technology and synchronized multi-camera setups, we deliver seamless, high-definition live broadcasts for corporate events, weddings, and seminars.' },
  { id: 3, title: 'Photography Studio', icon: Camera, desc: 'A controlled environment where lighting meets art. Our studio is optimized for high-resolution portraits and creative concepts, utilizing professional strobe systems and versatile backdrops to capture the perfect frame every time.' },
  { id: 4, title: 'Product Photography', icon: Box, desc: 'Transform your inventory into visual assets. We specialize in high-detail product shoots that highlight texture, form, and functionality—perfect for e-commerce, catalogs, and premium branding.' },
  { id: 5, title: 'Videography', icon: Video, desc: 'Cinematic storytelling at its finest. From 4K handheld captures to stabilized motion shots, we document your moments and milestones with a focus on lighting, composition, and emotional impact.' },
  { id: 6, title: 'Advertisement Shoot', icon: Clapperboard, desc: 'Conceptualized to convert. We produce high-impact commercial films tailored for television and digital platforms, blending creative direction with technical precision to make your brand stand out.' },
  { id: 7, title: 'Professional Video Editing', icon: MonitorPlay, desc: 'Where the magic happens. Our post-production suite handles everything from color grading and sound design to advanced motion graphics, ensuring your raw footage is transformed into a polished, cinematic masterpiece.' },
  { id: 8, title: 'Digital Marketing', icon: TrendingUp, desc: 'Data-driven growth for the modern age. We craft targeted strategies that increase your online visibility, drive traffic, and convert viewers into loyal customers through SEO, PPC, and content strategy.' },
  { id: 9, title: 'Social Media Management', icon: Share2, desc: 'Your brand’s voice, amplified. We handle the daily grind of content scheduling, community engagement, and trend analysis, ensuring your social profiles remain active, aesthetic, and influential.' },
  { id: 10, title: 'Graphic Designing', icon: PenTool, desc: 'Visual communication that sticks. From minimalist logos to complex brand identities, our design team creates high-contrast, modern visuals that define your business across all mediums.' },
  { id: 11, title: 'LED Wall Solution', icon: LayoutGrid, desc: 'Immersive visuals on a grand scale. We provide high-refresh-rate LED walls for events and stages, offering vibrant clarity and seamless integration to ensure your content is seen from every corner of the room.' },
  { id: 12, title: 'Live Audio Mixing', icon: Sliders, desc: 'Precision sound for live environments. Our engineers ensure crystal-clear audio balance for stage shows and events, managing everything from wireless frequencies to complex soundscapes with professional finesse.' },
  { id: 13, title: 'Website Development', icon: Code, desc: 'Build your digital storefront. We design and develop fast, responsive, and visually stunning websites that elevate your brand and provide seamless user experiences across all devices.' }
];

const Services = () => {
  return (
    <section className="services-section section-container">
      <motion.div 
        className="services-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-huge">Our <span className="text-gradient">Services</span></h2>
      </motion.div>
      
      <div className="services-minimal-grid">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={service.id} 
              className="minimal-service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.4 }}
            >
              <motion.div 
                className="minimal-icon-wrapper"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
              >
                <Icon size={28} strokeWidth={1.5} />
              </motion.div>
              <h3 className="minimal-service-title">{service.title}</h3>
              <p className="minimal-service-desc">{service.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="services-footer">
        <Link to="/showcase" className="secondary-cta">View Our Works</Link>
      </div>
    </section>
  );
};

export default Services;
