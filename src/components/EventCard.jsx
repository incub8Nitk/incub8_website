import React from 'react'
import { ParticleCard } from '../sections/MagicBento'

export function EventCard({ event, compact = false }) {
  function handleMouseMove(e) {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    target.style.setProperty('--x', `${x}%`)
    target.style.setProperty('--y', `${y}%`)
  }

  return (
    <ParticleCard
      className={`flex flex-col justify-between relative w-full max-w-full p-3 sm:p-4 md:p-5 rounded-[20px] border border-[#392e4e] bg-[#060010] font-light overflow-hidden transition-all duration-300 ease-in-out ${compact ? 'event-card-compact' : 'event-card'} card--border-glow`}
      glowColor="132, 0, 255"
      enableTilt={true}
      enableMagnetism={true}
      onMouseMove={handleMouseMove}
      style={{
        border: '1px solid color-mix(in oklab, var(--incub8-sea), white 25%)',
        background: 'linear-gradient(180deg, color-mix(in oklab, var(--incub8-deep), black 10%) 0%, rgba(10,31,54,0.7) 100%)'
      }}
    >
      {/* Thumbnail image */}
      {event.img && (
        <div className="w-full flex justify-center">
          <img
            src={event.img}
            alt={event.title}
            className="rounded-xl object-cover mb-2"
            style={{
              width: compact ? '120px' : '60px',
              height: compact ? '120px' : '60px',
              objectFit: 'cover',
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)',
              background: '#181c24'
            }}
          />
        </div>
      )}
      <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: 'var(--incub8-sand)' }}>{event.title}</h3>
      <p className="text-white/95 text-xs sm:text-sm">
        {event.short.length > (compact ? 60 : 80)
          ? event.short.slice(0, compact ? 60 : 80) + '...'
          : event.short}
      </p>
      {/* Location */}
      {event.venue && (
        <div className="flex items-center gap-1 sm:gap-2 mt-1 mb-1">
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            {/* Location icon (SVG) */}
            <svg width="12" height="12" fill="none" viewBox="0 0 20 20" style={{ marginRight: '0.3em' }}>
              <path
                d="M10 2C6.686 2 4 4.686 4 8c0 4.418 5.09 9.36 5.307 9.57a1 1 0 0 0 1.386 0C10.91 17.36 16 12.418 16 8c0-3.314-2.686-6-6-6zm0 13.293C8.14 13.09 6 10.418 6 8a4 4 0 1 1 8 0c0 2.418-2.14 5.09-4 7.293zM10 5.5A2.5 2.5 0 1 0 10 10.5 2.5 2.5 0 0 0 10 5.5zm0 3A0.5 0.5 0 1 1 10 7.5a0.5 0.5 0 0 1 0 1z"
                fill="var(--incub8-sea)"
              />
            </svg>
          </span>
          <span className="text-xs text-white/80">{event.venue}</span>
        </div>
      )}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, var(--incub8-coral), var(--incub8-wood))', opacity: 0.3 }} />
      <button
        {...(!event.applyLink ? { style: { display: 'none' } } : {})}
        className="cursor-pointer inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mt-3 sm:mt-4 rounded-full transition-colors text-xs sm:text-sm"
        onClick={() => {
          if (event.applyLink) window.open(event.applyLink, '_blank');
        }}
        style={{
          border: '.5px solid color-mix(in oklab, var(--incub8-coral), white 25%)',
          background: 'color-mix(in oklab, var(--incub8-coral), transparent 80%)',
          color: 'white',
          ...(event.applyLink ? {} : { display: 'none' })
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'color-mix(in oklab, var(--incub8-coral), transparent 65%)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'color-mix(in oklab, var(--incub8-coral), transparent 80%)';
        }}
      >
        Apply
      </button>
    </ParticleCard>
  )
}
