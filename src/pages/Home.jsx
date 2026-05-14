import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Services />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Home;
