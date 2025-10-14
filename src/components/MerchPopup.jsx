import React, { useState, useEffect } from 'react';

import merchImage from '/Incub8_merch.jpg';

const MerchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const description = `The Official Incub8 Merch Is Here!\nWhere vision becomes a voyage and style meets spirit.\n\nGrab your merch just for ₹299 before they’re gone! 🌊🔥`;
  const orderLink = `https://forms.gle/uki8iNHxioyPBVGcA`;
  const deadline = `Deadline: 18-10-2025 (Saturday)`;
  const contactSachin = `Sachin – 7892264359`;
  const contactDhanush = `Dhanush T – 7204707900`;

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
      {/* Static Container Button */}
      <div
        className={`fixed bottom-4 right-4 z-50 transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={togglePopup}
          className="bg-[rgb(224,204,172)] text-white rounded-lg p-3 shadow-lg hover:bg-[color-mix(in_oklab,rgb(224,204,172),black_10%)] focus:outline-none focus:ring-2 focus:ring-[rgb(224,204,172)] focus:ring-opacity-75"
          aria-label="Open Merch Popup"
        >
          <img src={merchImage} alt="Incub8 Merch" className="w-12 h-12 rounded-md object-cover" />
        </button>
      </div>

      {/* Merch Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-1 transition-opacity duration-300 opacity-100">
          <div className="bg-gradient-to-br from-gray-800 to-gray-950 text-white rounded-xl shadow-2xl max-w-xs w-full mx-auto p-2 relative transform transition-all duration-300 ease-out scale-100">
            <button
              onClick={togglePopup}
              className="absolute top-1 right-1 text-2xl text-gray-400 hover:text-gray-100 leading-none focus:outline-none"
              aria-label="Close Merch Popup"
            >
              &times;
            </button>
            <h2 className="text-xl font-extrabold mb-2 text-yellow-400 text-center">Official Incub8 Merch!</h2>
            <img src={merchImage} alt="Incub8 Merch T-Shirt" className="w-full h-auto rounded-lg mb-3 shadow-md" />
            <p className="text-gray-300 whitespace-pre-line text-xs mb-3 leading-relaxed">{description}</p>
            <p className="text-gray-200 mb-1 text-center"><strong><a href={orderLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm font-semibold">Order Here</a></strong></p>
            <p className="text-gray-300 mb-1 text-center text-xs">{deadline}</p>
            <p className="text-gray-300 mb-0 text-center text-xs">For any queries, reach out to:</p>
            <p className="text-gray-200 text-center text-xs">{contactSachin}</p>
            <p className="text-gray-200 text-center text-xs">{contactDhanush}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MerchPopup;