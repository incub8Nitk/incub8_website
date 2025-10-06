import React from 'react'
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
  return (
    <section id="past-sponsors" className="relative text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: 'var(--incub8-sand)' }}>
            Past Sponsors
          </h2>
          <p className="text-white/85 mt-2 max-w-2xl mx-auto">
            Trusted by technology leaders. We will add the sponsor list here soon.
          </p>
        </div>

        <div style={{ height: '140px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))', borderRadius: '16px' }}>
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={80}
            gap={40}
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
