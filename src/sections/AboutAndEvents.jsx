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
      
      {/* <GallerySection /> */}
      
     
      <section id="gallery" className="relative py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2" style={{
          color: 'var(--incub8-sand)',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
              Gallery
            </h2>
            <p className="text-white/85 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
              Explore our gallery showcasing moments from Incub8 events and experiences.
            </p>
          </div>
          <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
            <GallerySection />
          </div>
        </div>
      </section>
      <Team />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}