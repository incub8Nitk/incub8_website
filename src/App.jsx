import React, { Suspense, lazy } from 'react';
import MerchPopup from './components/MerchPopup.jsx';
import FullScreenLoader from './components/FullScreenLoader.jsx'; // Import the loader

// These components will be loaded only after the main assets are ready
const LandingPage = lazy(() => import('./sections/LandingPage'));
const AboutAndEvents = lazy(() => import('./sections/AboutAndEvents'));

function App() {
  return (
    // Use your FullScreenLoader as the fallback for Suspense.
    // This handles the brief moment while the lazy-loaded component code is fetched.
    <Suspense fallback={<FullScreenLoader />}>
      <LandingPage />
      <AboutAndEvents />
      <MerchPopup />
    </Suspense>
  );
}

export default App;