import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Whatisincub8() {
  return (
    <div id="whatisincub8" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8" style={{
          color: 'var(--incub8-sand)',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
        }}> */}

         <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2" style={{
          color: 'var(--incub8-sand)',
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
            {`Incub8, one of the flagship events of NITK, is an innovative platform designed as a laboratory for aspiring entrepreneurs. Participants will develop key venture-building skills, refine business ideas, and receive guidance from industry experts.

Through hands-on activities and real-world simulations, Incub8 provides practical tools and mentorship to support entrepreneurial growth. The event fosters collaboration and equips individuals to turn their entrepreneurial ambitions into successful ventures.`}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}