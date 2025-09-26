import React, { useEffect } from 'react'
import { eventsData } from './events'
import { ParticleCard } from './MagicBento'

export default function EventsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleMouseMove(e) {
    const t = e.currentTarget
    const rect = t.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    t.style.setProperty('--x', `${x}%`)
    t.style.setProperty('--y', `${y}%`)
  }

  return (
    <main className="min-h-screen relative text-white" style={{ background: 'linear-gradient(180deg, var(--incub8-deep) 0%, #0f3846 40%, var(--incub8-sea) 100%)' }}>
      <div className="absolute inset-0 -z-10 opacity-30" style={{
        background:
          'radial-gradient(900px 340px at 25% 10%, rgba(17,128,132,0.25), transparent 60%), radial-gradient(1000px 360px at 75% 0%, rgba(255,106,61,0.18), transparent 60%)'
      }} />

      <section className="px-6 md:px-12 lg:px-20 py-16">
        <header className="max-w-7xl mx-auto mb-10">
          <h1 className="text-3xl md:text-5xl font-bold" style={{ color: 'var(--incub8-sand)' }}>All Events</h1>
          <p className="mt-3 text-white/95 max-w-2xl">Dive into our complete lineup. From strategy to code, pitch to product — everything for builders, thinkers, and leaders.</p>
        </header>

        <div className="max-w-7xl mx-auto grid gap-8  items-stretch">
          {eventsData.map((event, idx) => (
            <ParticleCard
              key={idx}
              className="card card--border-glow event-card fade-up h-full"
              glowColor="132, 0, 255"
              enableTilt={true}
              enableMagnetism={true}
              onMouseMove={handleMouseMove}
              style={{
                animationDelay: `${idx * 60}ms`,
                border: '1px solid color-mix(in oklab, var(--incub8-sea), white 25%)',
                background: 'linear-gradient(180deg, color-mix(in oklab, var(--incub8-deep), black 10%) 0%, rgba(10,31,54,0.7) 100%)'
              }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--incub8-sand)' }}>{event.title}</h3>
              <p className="text-white/95 mb-4">{event.details}</p>
              <ul className="text-white/95 space-y-1">
                <li><span style={{ color: 'var(--incub8-sea)' }}>Why join?</span> {event.why}</li>
                <li><span style={{ color: 'var(--incub8-sea)' }}>How it works:</span> {event.how}</li>
                <li><span style={{ color: 'var(--incub8-sea)' }}>Outcome:</span> {event.outcome}</li>
              </ul>
              <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, var(--incub8-coral), var(--incub8-wood))', opacity: 0.9 }} />
            </ParticleCard>
          ))}
        </div>
      </section>
    </main>
  )
}
