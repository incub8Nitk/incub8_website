import React from 'react';

function FullScreenLoader({ onFinished }) {
  return (
    <div style={{
        position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#0c0c0c', // UPDATED: Changed to an even darker gray
        zIndex: 9999
    }}>
      <div style={{ width: 100, height: 100 }}>
        <video
          src="/8loder.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            transform: 'rotate(90deg)'
          }}
        />
      </div>
    </div>
  );
}

export default FullScreenLoader;