import React, { useState, useEffect } from 'react'
import LogoLoop from './LogoLoop'

const imageLogos = [
  { src: "/pastSponcers/StartupVisors.jpg", alt: "StartupVisors"},
  { src: "/pastSponcers/IMFS.jpg", alt: "IMFS" },
  { src: "/pastSponcers/Adrenalin.jpg", alt: "Adrenalin" },
  { src: "/pastSponcers/Aethos.jpg", alt: "Aethos" },
  { src: "/pastSponcers/ProductFolks.jpg", alt: "ProductFolks" },
  { src: "/pastSponcers/IndiaAccelerator.jpg", alt: "IndiaAccelerator" },
  { src: "/pastSponcers/MastersUnion.jpg", alt: "MastersUnion" },
  { src: "/pastSponcers/StartupLab.jpg", alt: "StartupLab" },
  { src: "/pastSponcers/InterviewBuddy.jpg", alt: "InterviewBuddy" },
  { src: "/pastSponcers/IMS.jpg", alt: "IMS" },
  { src: "/pastSponcers/Abhibus.jpg", alt: "Abhibus" },
  { src: "/pastSponcers/DAD.jpg", alt: "DAD" },
  { src: "/pastSponcers/EaseMyTrip.jpg", alt: "EaseMyTrip" },
  { src: "/pastSponcers/MathWorks.jpg", alt: "MathWorks" },
  { src: "/pastSponcers/Unstop.jpg", alt: "Unstop" },
  { src: "/pastSponcers/TruScholar.jpg", alt: "TruScholar" },
]

export default function PastSponcers() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="past-sponsors" className="relative text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
  <div className="mb-2 sm:mb-2 text-center">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2" style={{
          color: 'var(--incub8-sand)',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
            Past Sponsors
          </h2>
          <p className="text-white/85 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
            Trusted by technology leaders. We will add the sponsor list here soon.
          </p>
        </div>

        <div 
          className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-80"
          style={{ 
            position: 'relative', 
            overflow: 'hidden', 
            background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))', 
            borderRadius: '16px' 
          }}
        >
          <LogoLoop
            logos={imageLogos}
            speed={isMobile ? 60 : 80}
            direction="left"
            logoHeight={isMobile ? 72 : 90}
            gap={isMobile ? 40 : 48}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Past sponsors"
          />
        </div>
      </div>
    </section>
  )
}
