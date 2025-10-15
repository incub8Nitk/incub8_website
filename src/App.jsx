import React, { Suspense, lazy } from 'react';
import MerchPopup from './components/MerchPopup.jsx';
const LandingPage = lazy(() => import('./sections/LandingPage'));
const AboutAndEvents = lazy(() => import('./sections/AboutAndEvents'));
// const TransitionSection = lazy(() => import('./sections/TransitionSection'));
import FullScreenLoader from './components/FullScreenLoader.jsx';

function App() {
  return (
    <Suspense fallback={null}>
      <LandingPage />
      {/* <TransitionSection /> */}
      <AboutAndEvents />
      <MerchPopup />
    </Suspense>
  );
}

export default App;