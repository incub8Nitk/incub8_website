import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const loadingMessages = [
  "Igniting Your Vision...",
  "Preparing Your Voyage...",
  "Where Ideas Set Sail...",
  "Building What's Next...",
];

function FullScreenLoader({ onFinished }) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessageIndex(prevIndex => {
        // When the last message is shown...
        if (prevIndex === loadingMessages.length - 1) {
          clearInterval(intervalId); // ...stop the interval.
          // Then call the onFinished function after 3 seconds.
          if (onFinished) {
            setTimeout(onFinished, 3000); 
          }
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [onFinished]);

  return (
    <>
      <style>{`
        .blur-text-char {
          color: white;
          font-family: Georgia, serif;
          font-size: 1.6rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0;
          animation: blur-text 1.2s ease-out forwards;
        }
        @keyframes blur-text {
          0% { filter: blur(12px); opacity: 0; }
          100% { filter: blur(0px); opacity: 1; }
        }
      `}</style>

      <div style={{
          position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg, #2e383c 0%, #111827 100%)', zIndex: 9999
      }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              <div key={messageIndex} className="text-container">
                {loadingMessages[messageIndex].split('').map((char, index) => (
                  <span
                    key={`${char}-${index}`}
                    className="blur-text-char"
                    style={{ animationDelay: `${index * 0.04}s` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>

              <div style={{ width: 300, height: 300, marginTop: '-40px' }}>
                  <DotLottieReact
                      src="/DKVikinger2.json"
                      autoplay
                      background="transparent"
                  />
              </div>
          </div>
      </div>
    </>
  );
}

export default FullScreenLoader;