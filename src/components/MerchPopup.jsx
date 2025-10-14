import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Zap, Wind } from 'lucide-react';

const MerchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [floatingParticles, setFloatingParticles] = useState([]);

  const description = `The Official Incub8 Merch Is Here!\nWhere vision becomes a voyage and style meets spirit.\n\nGrab your merch just for ₹299 before they're gone!`;
  const orderLink = `https://forms.gle/uki8iNHxioyPBVGcA`;

  useEffect(() => {
    const particles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setFloatingParticles(particles);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-20px) rotate(10deg); opacity: 1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(250, 204, 21, 0.4), 0 0 40px rgba(250, 204, 21, 0.2); }
          50% { box-shadow: 0 0 30px rgba(250, 204, 21, 0.6), 0 0 60px rgba(250, 204, 21, 0.3); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .particle {
          animation: float 6s ease-in-out infinite;
          position: absolute;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, rgba(250, 204, 21, 0.8), rgba(250, 204, 21, 0.2));
          border-radius: 50%;
          pointer-events: none;
        }

        .pulse-button {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        .popup-enter {
          animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      {/* Floating Button */}
      <div
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 transition-all duration-300 transform ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'
        }`}
      >
        <button
          onClick={togglePopup}
          className="pulse-button relative group"
          aria-label="Open Merch Popup"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-gradient-to-br from-yellow-300 to-yellow-500 hover:from-yellow-200 hover:to-yellow-400 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-yellow-200/50">
            <ShoppingCart className="w-6 h-6" />
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </button>
      </div>

      {/* Merch Popup */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={togglePopup}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-3 sm:p-4">
            <div className="popup-enter relative w-full max-w-sm">
              {/* Floating particles */}
              {floatingParticles.map((particle) => (
                <div
                  key={particle.id}
                  className="particle"
                  style={{
                    left: `${particle.left}%`,
                    top: '20px',
                    animationDelay: `${particle.delay}s`,
                  }}
                ></div>
              ))}

              {/* Main Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 relative">
                {/* Shimmer effect on top */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>

                {/* Close Button - Top Left */}
                <button
                  onClick={togglePopup}
                  className="absolute -top-8 -left-8 z-10 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-red-400 transition-all duration-300 backdrop-blur-sm border border-gray-600/50 hover:border-red-500/50"
                  aria-label="Close Merch Popup"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Header */}
                <div className="relative overflow-hidden bg-gradient-to-r from-yellow-600/20 via-orange-600/20 to-red-600/20 px-4 sm:px-6 pt-6 pb-4">
                  <div className="shimmer-effect absolute inset-0 opacity-50"></div>
                  <h2 className="relative text-xl sm:text-2xl font-black bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent text-center">
                    Official Incub8 Merch!
                  </h2>
                  <p className="relative text-xs text-gray-400 text-center mt-2">SEASON 25 - LIMITED EDITION</p>
                </div>

                {/* Content */}
                <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4">
                  {/* Image */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-xl overflow-hidden border border-gray-600/50 aspect-square">
                      <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                        <div className="text-center">
                          <Wind className="w-16 h-16 mx-auto mb-2 text-yellow-400 opacity-50" />
                          <p className="text-xs text-gray-500">[Merch Image]</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-300 whitespace-pre-line">
                      {description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-3 py-3 border-y border-gray-700/50">
                      <div className="flex-1 text-center">
                        <p className="text-base sm:text-lg font-bold text-yellow-400">₹299</p>
                        <p className="text-xs text-gray-500">Special Price</p>
                      </div>
                      <div className="w-px bg-gray-700"></div>
                      <div className="flex-1 text-center">
                        <p className="text-base sm:text-lg font-bold text-orange-400 flex items-center justify-center gap-1">
                          <Zap className="w-4 h-4" /> Limited
                        </p>
                        <p className="text-xs text-gray-500">Stocks Running</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={orderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
                    <button className="relative w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 hover:from-yellow-300 hover:via-orange-300 hover:to-red-400 text-black font-bold py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base">
                      <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                      Order Now
                    </button>
                  </a>

                  {/* Footer */}
                  <p className="text-xs text-center text-gray-500 italic">
                    Don't miss out! Grab yours before they're gone ✨
                  </p>
                </div>

                {/* Bottom glow */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-30"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MerchPopup;