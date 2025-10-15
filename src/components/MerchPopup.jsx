import React, { useState, useEffect } from "react";
import { X, ShoppingCart } from "lucide-react";

const MerchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isChestOpening, setIsChestOpening] = useState(false);
  const [isChestOpened, setIsChestOpened] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showTshirt, setShowTshirt] = useState(false);

  const description = `The Official Incub8 Merch Is Here!\nWhere vision becomes a voyage and style meets spirit. Grab your merch before they're gone!`;
  const orderLink = `https://forms.gle/uki8iNHxioyPBVGcA`;

  const closedChestImage = "/vaultclose.png";
  const openChestImage = "/vaultopen.png";
  const merchTshirtImage = "/Incub8_merch.jpg";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePopup = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsChestOpening(true);
      setTimeout(() => {
        setIsChestOpening(false);
        setIsChestOpened(true);
      }, 700);

      setTimeout(() => {
        setShowPopup(true);
      }, 900);

      setTimeout(() => {
        setShowTshirt(true);
      }, 1500);
    } else {
      setShowTshirt(false);
      setShowPopup(false);
      setIsChestOpened(false);
      setTimeout(() => setIsOpen(false), 500);
    }
  };

  return (
    <>
      <style>{`
        @keyframes chestOpen {
          0% { transform: scale(0.9) rotateX(15deg); opacity: 0.8; }
          50% { transform: scale(1.05) rotateX(0deg); opacity: 1; }
          100% { transform: scale(1) rotateX(0deg); opacity: 1; }
        }

        @keyframes popupFadeIn {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes tshirtHeartbeat {
          0% { transform: translateY(-15px) scale(1); }
          50% { transform: translateY(-15px) scale(1.03); }
          100% { transform: translateY(-15px) scale(1); }
        }
        
        @keyframes intermittent-shake {
          0%, 10%, 100% { transform: rotate(0deg); }
          2% { transform: rotate(-5deg); }
          4% { transform: rotate(5deg); }
          6% { transform: rotate(-5deg); }
          8% { transform: rotate(5deg); }
        }

        .animate-popup {
          animation: popupFadeIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-tshirt-heartbeat {
          animation: tshirtHeartbeat 1.5s ease-in-out infinite;
        }
        .animate-chest-open {
          animation: chestOpen 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-shake {
          animation: intermittent-shake 4s ease-in-out infinite;
        }

        .btn-vintage-gold {
          background: transparent;
          border: 3px double #bfa56a;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.3), inset 0 0 10px rgba(0,0,0,0.5);
          color: #fff2d4;
          text-shadow: 0 0 5px #bfa56a;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .btn-vintage-gold:hover {
          box-shadow: 0 0 25px rgba(255, 215, 0, 0.6), inset 0 0 15px rgba(0,0,0,0.3);
          transform: scale(1.05);
          color: #ffffff;
          border-color: #d4c098;
        }
      `}</style>

      {/* Floating Treasure Chest Button */}
      <div
        className={`fixed bottom-5 sm:bottom-8 right-4 sm:right-6 z-50 transition-all duration-500 ${ // MOVED RIGHT
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[150%]"
        }`}
      >
        <button
          onClick={togglePopup}
          className="relative transition-all duration-500 transform hover:scale-110 p-0" 
        >
          <img
            src={isChestOpening || isChestOpened ? openChestImage : closedChestImage}
            alt="Treasure Chest"
            className={`w-28 h-28 sm:w-32 sm:h-32 object-contain ${ // INCREASED SIZE
              isChestOpening ? "animate-chest-open" : ""
            } ${!isOpen ? "animate-shake" : ""}`}
          />
        </button>
      </div>

      {/* Merch Popup */}
      {showPopup && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
            onClick={togglePopup}
          ></div>

          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="animate-popup relative w-full max-w-4xl">
              <div className="bg-gradient-to-br from-slate-900 via-[#10182B] to-black rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
                <button
                  onClick={togglePopup}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-red-400 transition-all duration-300 backdrop-blur-sm border border-gray-600/50 hover:border-red-500/50"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-[40%] p-4 sm:p-6 flex items-center justify-center relative">
                    <img
                      src={openChestImage}
                      alt="Open Chest"
                      className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] object-contain"
                    />
                    {showTshirt && (
                      <img
                        src={merchTshirtImage}
                        alt="T-shirt"
                        className="animate-tshirt-heartbeat absolute w-[375px] h-[375px] sm:w-[425px] sm:h-[425px] object-contain"
                      />
                    )}
                  </div>

                  <div className="w-full md:w-[60%] p-8 space-y-5 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-black tracking-wider text-gray-100">
                      INCUB8'25 MERCH
                    </h2>
                    
                    <div className="flex justify-center md:justify-start items-baseline gap-4 text-gray-300 font-semibold">
                       <p className="text-2xl text-yellow-400">₹299</p>
                       <span className="text-gray-600">|</span>
                       <p>SIZES: S, M, L, XL</p>
                    </div>

                    <p className="text-sm sm:text-base text-gray-400 whitespace-pre-line leading-relaxed uppercase font-bold tracking-tight">
                      {description}
                    </p>

                    <a
                      href={orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block pt-4"
                    >
                      <button className="btn-vintage-gold w-full py-3 text-lg font-bold flex items-center justify-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        BUY NOW
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MerchPopup;