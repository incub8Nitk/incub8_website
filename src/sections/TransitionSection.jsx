import React from 'react';

export default function TransitionSection() {
  return (
    <div
      className="sticky top-0 -z-10"
      style={{
        height: '38.5vh', // Full viewport height for the transition
        width: '100%',
        backgroundImage: `url('/transition.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}