import React from 'react';
import SpotlightCard from './SpotlightCard';

const speakersData = [
  {
    name: "Ashneer Grover",
    title: "Co-founder & former Managing Director",
    company: "BharatPe",
    image: "/ashneer.png",
    description: "Entrepreneur and former Shark Tank India judge"
  },
  {
    name: "Raj Vikramaditya",
    title: "Co-founder",
    company: "@Striver Co-founder takeUforward",
    image: "/TUF.png",
    description: "Tech entrepreneur and coding educator"
  },
  {
    name: "Iqlipse Nova",
    title: "Singer & Artist",
    company: "Independent Artist",
    image: "/iqlip.png",
    description: "Popular singer and social media influencer"
  }
];

export default function PastSpeakers() {
  return (
    <section id="past-speakers" className="relative text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mb-8 sm:mb-12 text-center">
          <h1 
            className="font-bold mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ 
              color: 'var(--incub8-sand)',
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
            }}
          >
            Past Speakers
          </h1>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Learn from industry leaders and successful entrepreneurs who have shaped the business world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {speakersData.map((speaker, index) => (
            <SpotlightCard key={index} spotlightColor="rgba(17, 128, 132, 0.28)">
              <div 
                className="fade-up flex flex-col items-center p-4 sm:p-6"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div 
                  className="w-58 h-58 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '16px'
                  }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-contain object-center"
                  />
                </div>

                <div className="text-center">
                  <h3 
                    className="text-xl sm:text-xl font-semibold mb-2"
                    style={{ color: 'var(--incub8-sand)' }}
                  >
                    {speaker.name}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-sm mb-1 font-medium">
                    {speaker.title}
                  </p>
                  <p className="text-white/70 text-sm sm:text-sm mb-3">
                    {speaker.company}
                  </p>
                  <p className="text-white/80 text-sm sm:text-sm max-w-xs">
                    {speaker.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div
            className="mx-auto"
            style={{
              height: '2px',
              width: '80px',
              background: 'linear-gradient(90deg, var(--incub8-coral), var(--incub8-wood))',
              borderRadius: '1px'
            }}
          />
        </div>
      </div>
    </section>
  );
}
