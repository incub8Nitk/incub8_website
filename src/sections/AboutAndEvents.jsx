import React from 'react';
import Whatisincub8 from './Whatisincub8';
import EventsSection from './EventsSection';
import PastSpeakers from './PastSpeakers';
import bg from '/bg.jpg';
import PastSponcers from './pastSponcers';
import DomeGallery from '../components/DomeGallery';
import Footer from './Footer';
import GallerySection from './GallerySection';
import Team from './team';


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

  {/* Gallery Section with reduced gap */}
  <section id="gallery" className="relative py-6 sm:py-8">
        {/* Header with centered content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mb-3 sm:mb-4">
          <div className="text-center mt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-1" style={{
              color: 'var(--incub8-sand)',
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
            }}>
              Gallery
            </h2>
            <p className="text-white/85 mt-1 text-sm sm:text-base max-w-2xl mx-auto">
              Explore our gallery showcasing moments from Incub8 events and experiences.
            </p>
          </div>
        </div>
        
        {/* Full width gallery */}
  <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px]">
          <GallerySection />
        </div>
      </section>
      <Team />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}