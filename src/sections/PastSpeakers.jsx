import React, { useState } from "react";

const speakersData = [
  {
    name: "Ashneer Grover",
    title: "Co-founder & former Managing Director",
    company: "BharatPe",
    image: "public/asneer-ezgif.com-webp-to-jpg-converter-removebg-preview.png",
    description: "Entrepreneur and former Shark Tank India judge",
  },
  {
    name: "Raj Vikramaditya",
    title: "Co-founder",
    company: "@Striver Co-founder takeUforward",
    image: "public/strivertuf1.png",
    description: "Tech entrepreneur and coding educator",
  },
  {
    name: "Iqlipse Nova",
    title: "Singer & Artist",
    company: "Independent Artist",
    image: "public/novs.png",
    description: "Popular singer and social media influencer",
  },
];

export default function PastSpeakers() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="past-speakers" className="relative text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1
            className="font-bold mb-3 text-3xl sm:text-4xl md:text-5xl"
            style={{
              color: "var(--incub8-sand)",
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Past Speakers
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Learn from industry leaders and successful entrepreneurs who have
            shaped the business world
          </p>
        </div>

        {/* Speaker Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {speakersData.map((speaker, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`relative flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ease-in-out 
                  ${isActive
                    ? "w-[24rem] h-[28rem] rounded-2xl bg-[rgba(17,128,132,0.15)] shadow-[0_0_50px_rgba(17,128,132,0.6)] scale-105"
                    : "w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[rgba(17,128,132,0.15)] shadow-[0_0_40px_rgba(17,128,132,0.4)]"
                  }`}
              >
                {/* Speaker Image */}
                <div
                  className={`transition-all duration-500 flex items-center justify-center ${isActive
                      ? "w-[24rem] h-[28rem] rounded-2xl overflow-hidden"
                      : "w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden p-2"
                    }`}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className={`transition-all duration-500 ${isActive
                        ? "object-cover w-full h-full rounded-2xl brightness-75"
                        : "object-contain w-[90%] h-[90%] rounded-full"
                      } ${speaker.image.includes("tuf-removebg-preview.png")
                        ? "scale-125" // zoom in tuf image
                        : ""
                      }`}
                  />

                </div>

                {/* Info Overlay */}
                {isActive ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 transition-all duration-500">
                    <h3
                      className="text-2xl sm:text-3xl font-semibold mb-2"
                      style={{ color: "var(--incub8-sand)" }}
                    >
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
                    <span
                      className="text-base sm:text-lg font-semibold"
                      style={{ color: "var(--incub8-sand)" }}
                    >
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
