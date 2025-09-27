import React from 'react';
import LandingPage from './sections/LandingPage';
import AboutAndEvents from './sections/AboutAndEvents'; // Import the new combined component

function App() {
  return (
    <div>
      <LandingPage />
      <AboutAndEvents /> {/* This now contains both the "About" and "Events" sections */}
      {/* Other sections of your website */}
    </div>
  );
}

export default App;