import React from 'react';
import LandingPage from './sections/LandingPage';
import EventsHome from './sections/events';
import PastSpeakers from './sections/PastSpeakers';
import PastSponcers from './sections/pastSponcers';

function App() {
  return (
    <>
      <LandingPage />
      <EventsHome />
      <PastSpeakers />
      <PastSponcers />
    </>
  );
}

export default App;