import React from 'react';
import Whatisincub8 from './Whatisincub8';
import EventsPage from './EventsPage';
import PastSpeakers from './PastSpeakers';
import imageincubbgext from '/imageincubbgext.jpg';
import PastSponcers from './pastSponcers';
import DomeGallery from '../components/DomeGallery';
import Footer from './Footer';


export default function AboutAndEvents() {
  return (
    <div style={{
      minHeight: '100vh', // Let content determine height naturally
      backgroundImage: `url(${imageincubbgext})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white', // Ensures text is visible on the dark background
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Whatisincub8 />
      <EventsPage />
      <PastSpeakers />
      <PastSponcers />
      
      {/* DomeGallery Section */}
      <section id="gallery" className="relative py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: 'var(--incub8-sand)' }}>
              Gallery
            </h2>
            <p className="text-white/85 mt-2 max-w-2xl mx-auto">
              Explore our interactive 3D gallery showcasing moments from Incub8 events and experiences.
            </p>
          </div>
          <div style={{ height: '80vh', minHeight: '600px' }}>
            <DomeGallery 
              grayscale={false}
              imageBorderRadius="20px"
              openedImageBorderRadius="20px"
              overlayBlurColor="#060010"
              fit={0.6}
              dragSensitivity={15}
            />
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}