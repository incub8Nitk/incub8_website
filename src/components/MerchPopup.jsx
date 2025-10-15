import React, { useState, useEffect, memo, useCallback } from "react";
import { X, ShoppingCart } from "lucide-react";

// --- ANIMATION COMPONENTS ---

// 1. CountUp Component
const CountUp = ({ end, duration = 2500, delay = 500, onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const timeoutId = setTimeout(() => {
      let start = 0;
      const endValue = parseInt(end, 10);
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const rawProgress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = rawProgress === 1 ? 1 : 1 - Math.pow(2, -10 * rawProgress);
        setCount(Math.floor(easedProgress * (endValue - start) + start));

        if (rawProgress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          if (onComplete) {
            onComplete();
          }
        }
      };
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, delay, onComplete]);

  return <span>{count}</span>;
};

// 2. SplitText Component for the title
const SplitText = memo(({ text, startDelay = 0.4 }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="split-text-char"
          style={{ animationDelay: `${startDelay + index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
});

// 3. NEW Sparkle Burst Component for the blast effect
const SparkleBurst = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="sparkle"
        style={{
          animationDelay: `${i * 0.08}s`, // Staggered delay for each sparkle
          // Random initial positions around the center for a burst effect
          transform: `translate(${Math.random() * 50 - 25}%, ${Math.random() * 50 - 25}%)`
        }}
      />
    ))}
  </div>
);


// --- MAIN POPUP COMPONENT ---

const MerchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isChestOpening, setIsChestOpening] = useState(false);
  const [isChestOpened, setIsChestOpened] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showTshirt, setShowTshirt] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false); // Renamed from showBlast

  const description = `The Official Incub8 Merch Is Here!\nWhere vision becomes a voyage and style meets spirit. Grab your merch before they're gone!`;
  const orderLink = `https://forms.gle/uki8iNHxioyPBVGcA`;
  const title = "INCUB8'25 MERCH";

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

  // Effect to hide the sparkle animation after it plays
  useEffect(() => {
    if (showSparkles) {
      const timer = setTimeout(() => setShowSparkles(false), 1200); // Increased duration
      return () => clearTimeout(timer);
    }
  }, [showSparkles]);

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

  const handleCountUpComplete = useCallback(() => {
    setShowSparkles(true);
  }, []);

  return (
    <>
      <style>{`
        /* --- Text & Sparkle Animations --- */
        @keyframes split-text-fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .split-text-char { display: inline-block; opacity: 0; animation: split-text-fade-in 0.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1); }
        
        @keyframes sparkle-fade-grow {
          0% { transform: scale(0.2); opacity: 1; }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes sparkle-travel {
          0% { transform: translate(0, 0) scale(0.2); opacity: 1; }
          100% {
            transform: translate(
              calc(var(--rand-x, 0) * 10px), /* Use CSS variables for random offset */
              calc(var(--rand-y, 0) * 10px)
            ) scale(1);
            opacity: 0;
          }
        }
        .sparkle {
          position: absolute;
          width: 8px; /* Size of the sparkle */
          height: 8px; /* Size of the sparkle */
          background-color: #FFD700; /* Gold color */
          border-radius: 50%;
          filter: blur(1px); /* Soften the edges */
          opacity: 0;
          animation: sparkle-fade-grow 0.6s ease-out forwards, sparkle-travel 1.2s ease-out forwards;
          /* Setting random CSS variables for sparkle-travel animation */
          --rand-x: ${Math.random() * 2 - 1}; /* -1 to 1 */
          --rand-y: ${Math.random() * 2 - 1}; /* -1 to 1 */
        }

        .price-gradient { background-image: linear-gradient(to right, #fde047, #fbbf24, #f59e0b); -webkit-background-clip: text; background-clip: text; color: transparent; }

        /* --- Other Animations & Styles --- */
        @keyframes chestOpen { from { transform: scale(0.9) rotateX(15deg); } to { transform: scale(1) rotateX(0deg); } }
        @keyframes popupFadeIn { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes tshirtHeartbeat { 0%, 100% { transform: translateY(-15px) scale(1); } 50% { transform: translateY(-15px) scale(1.03); } }
        @keyframes intermittent-shake { 0%, 10%, 100% { transform: rotate(0deg); } 2% { transform: rotate(-5deg); } 4% { transform: rotate(5deg); } 6% { transform: rotate(-5deg); } 8% { transform: rotate(5deg); } }
        .animate-popup { animation: popupFadeIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-tshirt-heartbeat { animation: tshirtHeartbeat 1.5s ease-in-out infinite; }
        .animate-chest-open { animation: chestOpen 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-shake { animation: intermittent-shake 4s ease-in-out infinite; }
        .btn-vintage-gold { background: transparent; border: 3px double #bfa56a; box-shadow: 0 0 15px rgba(255, 215, 0, 0.3), inset 0 0 10px rgba(0,0,0,0.5); color: #fff2d4; text-shadow: 0 0 5px #bfa56a; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
        .btn-vintage-gold:hover { box-shadow: 0 0 25px rgba(255, 215, 0, 0.6), inset 0 0 15px rgba(0,0,0,0.3); transform: scale(1.05); color: #ffffff; border-color: #d4c098; }
      `}</style>

      {/* Floating Treasure Chest Button */}
      <div className={`fixed bottom-8 sm:bottom-12 right-4 sm:right-6 z-50 transition-all duration-500 ${ isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[150%]" }`}>
        <button onClick={togglePopup} className="relative transition-all duration-500 transform hover:scale-110 p-0">
          <img src={isChestOpening || isChestOpened ? openChestImage : closedChestImage} alt="Treasure Chest" className={`w-28 h-28 sm:w-32 sm:h-32 object-contain ${ isChestOpening ? "animate-chest-open" : "" } ${!isOpen ? "animate-shake" : ""}`} />
        </button>
      </div>

      {/* Merch Popup */}
      {showPopup && (
        <>
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-40" onClick={togglePopup}></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="animate-popup relative w-full max-w-sm max-h-[90vh] overflow-y-auto md:max-w-4xl md:h-auto md:max-h-[unset] rounded-2xl bg-gradient-to-br from-slate-900 via-[#10182B] to-black border border-gray-700/50">
              <div className="sticky top-0 z-10">
                <button onClick={togglePopup} className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-red-400 transition-all duration-300 backdrop-blur-sm border border-gray-600/50 hover:border-red-500/50">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[40%] p-4 flex items-center justify-center relative min-h-[330px] md:min-h-0">
                  <img src={openChestImage} alt="Open Chest" className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] object-contain" />
                  {showTshirt && ( <img src={merchTshirtImage} alt="T-shirt" className="animate-tshirt-heartbeat absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] object-contain" /> )}
                </div>
                <div className="w-full md:w-[60%] px-6 pt-2 pb-4 md:p-8 space-y-4 text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-black tracking-wider text-gray-100">
                    <SplitText text={title} startDelay={0.4} />
                  </h2>
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-4 text-gray-300 font-semibold text-sm md:text-base">
                    <div className="relative">
                      <p className="text-4xl md:text-5xl font-black price-gradient">
                        ₹<CountUp end={299} onComplete={handleCountUpComplete} />
                      </p>
                      {showSparkles && <SparkleBurst />} {/* Renamed from showBlast */}
                    </div>
                    <p className="text-sm md:mt-2">SIZES: S, M, L, XL</p>
                  </div>
                  <p className="text-xs md:text-base text-gray-400 whitespace-pre-line leading-relaxed uppercase font-bold tracking-tight">
                    {description}
                  </p>
                  <a href={orderLink} target="_blank" rel="noopener noreferrer" className="block pt-4">
                    <button className="btn-vintage-gold w-full py-2.5 text-base md:py-3 md:text-lg font-bold flex items-center justify-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      BUY NOW
                    </button>
                  </a>
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