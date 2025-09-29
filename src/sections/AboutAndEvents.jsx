import React from 'react';
import Whatisincub8 from './Whatisincub8';
import EventsPage from './EventsPage';
import PastSpeakers from './PastSpeakers';
import imageincubbgext from '/imageincubbgext.jpg';
import PastSponcers from './pastSponcers';


export default function AboutAndEvents() {
  return (
    <div style={{
      minHeight: '2000px', // Increased height to accommodate the new section
      backgroundImage: `url(${imageincubbgext})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white' // Ensures text is visible on the dark background
    }}>
      <Whatisincub8 />
      <EventsPage />
      <PastSpeakers />
      <PastSponcers />
    </div>
  );
}