import React from 'react'
import LogoLoop from './LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
]

export default function PastSponcers() {
  return (
    <section className="relative text-white py-16">
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
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
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
