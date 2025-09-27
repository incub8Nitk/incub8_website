import React from 'react';

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
    <section className="relative text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-12 text-center">
          <h1 
            className="font-bold mb-4"
            style={{ 
              fontSize: '3rem',
              color: 'var(--incub8-sand)',
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
            }}
          >
            Past Speakers
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Learn from industry leaders and successful entrepreneurs who have shaped the business world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {speakersData.map((speaker, index) => (
            <div 
              key={index} 
              className="fade-up flex flex-col items-center"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div 
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '24px'
                }}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>

              <div className="text-center">
                <h3 
                  className="text-xl font-semibold mb-2"
                  style={{ color: 'var(--incub8-sand)' }}
                >
                  {speaker.name}
                </h3>
                <p className="text-white/90 text-sm mb-1 font-medium">
                  {speaker.title}
                </p>
                <p className="text-white/70 text-sm mb-3">
                  {speaker.company}
                </p>
                <p className="text-white/80 text-xs max-w-xs">
                  {speaker.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div
            style={{
              height: '2px',
              width: '100px',
              background: 'linear-gradient(90deg, var(--incub8-coral), var(--incub8-wood))',
              margin: '0 auto',
              borderRadius: '1px'
            }}
          />
        </div>
      </div>
    </section>
  );
}
