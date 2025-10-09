import React from 'react';
import Whatisincub8 from './Whatisincub8';
import EventsSection from './EventsSection';
import PastSpeakers from './PastSpeakers';
import bg from '/bg.jpg';
import PastSponcers from './pastSponcers';
import DomeGallery from '../components/DomeGallery';
import Footer from './Footer';
import GallerySection from './GallerySection';


export default function AboutAndEvents() {
  return (
    <div style={{
      minHeight: '100vh', // Let content determine height naturally
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white', // Ensures text is visible on the dark background
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Whatisincub8 />
      <EventsSection />
      <PastSpeakers />
      <PastSponcers />
      {/* <GallerySection /> */}
      
     
      <section id="gallery" className="relative py-16">
        <div >
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: 'var(--incub8-sand)' }}>
              Gallery
            </h2>
            <p className="text-white/85 mt-2 max-w-2xl mx-auto">
              Explore our gallery showcasing moments from Incub8 events and experiences.
            </p>
          </div>
          <div style={{ height: '90vh', minHeight: '601px' }}>
            <GallerySection />
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}