import React, { useState } from "react";

const speakersData = [
  {
    name: "BVR Mohan Reddy",
    title: "Former chairperson",
    company: "NASSCOM",
    image: "/mohanreddy.png",
    description: "A stalwart in the Indian IT industry with decades of leadership experience.",
  },
  {
    name: "Ajith Pai",
    title: "COO",
    company: "Delhivery",
    image: "/ajithpai.png",
    description: "Leading one of India's largest logistics companies.",
  },
  {
    name: "Ajit Sivaram",
    title: "Co-founder",
    company: "U&I",
    image: "/ajitsivaram.png",
    description: "Driving innovation in the tech accessory space.",
  },
  {
    name: "Kiran Shah",
    title: "Founder - Market Fit",
    company: "Go Zero",
    image: "/kiranshah.png",
    description: "Pioneering sustainable solutions in the market.",
  },
  {
    name: "Sitaram Guptha",
    title: "Founder",
    company: "Gaumaya Pariwar",
    image: "/sitaramguptha.png",
    description: "Championing traditional and sustainable practices.",
  },
];

// Helper function to apply special grid classes for desktop
const getGridClasses = (index) => {
  switch (index) {
    case 0:
      return 'lg:col-span-2 lg:col-start-1'; // Speaker 1
    case 1:
      return 'lg:col-span-2 lg:col-start-3'; // Speaker 2
    case 2:
      return 'lg:col-span-2 lg:col-start-5'; // Speaker 3
    case 3:
      return 'lg:col-span-2 lg:col-start-2'; // Speaker 4
    case 4:
      return 'lg:col-span-2 lg:col-start-4'; // Speaker 5
    default:
      return 'lg:col-span-2';
  }
};

export default function PresentSpeakers() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="present-speakers" className="relative text-white py-16 sm:py-20">
      {/* UPDATED: Changed to max-w-6xl for a better 3-2 grid fit */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1
            className="font-bold mb-3 text-3xl sm:text-4xl md:text-5xl"
            style={{
              color: "var(--incub8-sand)",
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Our Speakers
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Meet the visionaries and experts joining us for Incub8'25.
          </p>
        </div>

        {/* UPDATED: New grid layout for 5 speakers (1 mobile, 2 tablet, 3-2 desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12 justify-items-center">
          {speakersData.map((speaker, index) => {
            const isActive = activeIndex === index;
            const gridClasses = getGridClasses(index); // Get desktop grid classes

            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                // Apply grid classes and adjust card sizing
                className={`${gridClasses} relative w-full flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ease-in-out 
                  ${isActive
                    ? "max-w-[24rem] h-[28rem] rounded-2xl bg-[rgba(17,128,132,0.15)] shadow-[0_0_50px_rgba(17,128,132,0.6)] scale-105 z-10"
                    : "w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[rgba(17,128,132,0.15)] shadow-[0_0_40px_rgba(17,128,132,0.4)] z-0" 
                  }`}
              >
                <div
                  className={`transition-all duration-500 flex items-center justify-center ${isActive
                      ? "w-full h-full rounded-2xl overflow-hidden" 
                      : "w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden p-2" 
                    }`}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className={`transition-all duration-500 ${isActive
                        ? "object-cover w-full h-full rounded-2xl brightness-75"
                        : "object-contain w-[90%] h-[90%] rounded-full"
                      } `}
                  />
                </div>

                {isActive ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 transition-all duration-500">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-2" style={{ color: "var(--incub8-sand)" }}>
                      {speaker.name}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base mb-1 font-medium">
                      {speaker.title}
                    </p>
                    <p className="text-white/70 text-sm sm:text-base mb-2">
                      {speaker.company}
                    </p>
                    <p className="text-white/80 text-sm sm:text-base max-w-xs">
                      {speaker.description}
                    </p>
                  </div>
                ) : (
                  <div className="absolute bottom-0 mb-[-10px] bg-black/50 rounded-full px-5 py-2 backdrop-blur-sm transition-all duration-500">
                    <span className="text-base sm:text-lg font-semibold" style={{ color: "var(--incub8-sand)" }}>
                      {speaker.name}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mt-16 text-center">
          <div
            className="mx-auto"
            style={{
              height: "2px",
              width: "90px",
              background:
                "linear-gradient(90deg, var(--incub8-coral), var(--incub8-wood))",
              borderRadius: "1px",
            }}
          />
        </div>
      </div>
    </section>
  );
}