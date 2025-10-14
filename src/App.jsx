import React, { Suspense, lazy } from 'react';
const LandingPage = lazy(() => import('./sections/LandingPage'));
const AboutAndEvents = lazy(() => import('./sections/AboutAndEvents'));
// const TransitionSection = lazy(() => import('./sections/TransitionSection'));
import FullScreenLoader from './components/FullScreenLoader.jsx';

function App() {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <LandingPage />
      {/* <TransitionSection /> */}
      <AboutAndEvents />
    </Suspense>
  );
}

export default App;