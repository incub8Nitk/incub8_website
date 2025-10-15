import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Whatisincub8() {
  return (
    <div id="whatisincub8" className="flex items-center justify-center min-h-[60vh] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-6xl mx-auto text-center">
        {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8" style={{
          color: 'var(--incub8-sand)',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
        }}> */}

         <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2" style={{          color: 'var(--incub8-sand)',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
          What is Incub8?
          </h2>
        {/* </h1> */}
        
        <div className="scroll-reveal-container text-white">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={3}
            blurStrength={4}
            containerClassName="custom-scroll-reveal"
            textClassName="custom-scroll-reveal-text text-base sm:text-lg md:text-xl lg:text-2xl"
            rotationEnd="bottom bottom"
            wordAnimationEnd="top 35%"
          >
            {`Every startup begins with a spark, and Incub8 turns that spark into a voyage.

Hosted by NITK Surathkal, Incub8 is a two day entrepreneurship summit that brings together founders, investors, creators, and changemakers who believe in building what’s next. It’s where campus innovation meets real world ambition through talks, pitch battles, exhibitions, and partnerships that go beyond the event itself.

Rooted in NITK’s legacy of innovation since 1960, Incub8 is more than a summit. It’s a movement where ideas take shape, networks deepen, and visions set sail.`}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}