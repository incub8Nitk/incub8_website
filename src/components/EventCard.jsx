import React from 'react';
import { ParticleCard } from '../sections/MagicBento';

export default function EventCard({ event, compact = false }) {
  function handleMouseMove(e) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty('--x', `${x}%`);
    target.style.setProperty('--y', `${y}%`);
  }

  return (
    <ParticleCard
      className={`h-full flex flex-col p-3 rounded-[20px] border font-light overflow-hidden transition-all duration-300 ease-in-out card--border-glow`}
      glowColor="132, 0, 255"
      enableTilt={false} // UPDATED: Changed from true to false to disable tilt
      enableMagnetism={true}
      onMouseMove={handleMouseMove}
      style={{
        border: '1px solid color-mix(in oklab, var(--incub8-sea), white 25%)',
        background: 'linear-gradient(180deg, color-mix(in oklab, var(--incub8-deep), black 10%) 0%, rgba(10,31,54,0.7) 100%)'
      }}
    >
      <div className="flex-1 flex flex-col text-center">
        <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: 'var(--incub8-sand)' }}>
          {event.title}
        </h3>
        
        {event.img && (
          <div className="w-full flex justify-center my-2">
            <img
              src={event.img}
              alt={event.title}
              className="rounded-xl object-cover"
              style={{
                width: compact ? '220px' : '160px',
                height: compact ? '220px' : '160px',
                objectFit: 'cover',
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)'
              }}
            />
          </div>
        )}

        <p className="flex-1 text-white/95 text-xs sm:text-sm mb-2">{event.short}</p>

        {event.prizePool && (
          <div className="flex items-baseline justify-center gap-2 my-2">
            <p className="font-bold text-lg" style={{ color: 'var(--incub8-sand)' }}>
              Prize Pool: {event.prizePool}
            </p>
          </div>
        )}
        
        <div className="mt-auto">
            {event.venue && (
              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1">
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <svg width="12" height="12" fill="none" viewBox="0 0 20 20" style={{ marginRight: '0.3em' }}>
                    <path d="M10 2C6.686 2 4 4.686 4 8c0 4.418 5.09 9.36 5.307 9.57a1 1 0 0 0 1.386 0C10.91 17.36 16 12.418 16 8c0-3.314-2.686-6-6-6zm0 13.293C8.14 13.09 6 10.418 6 8a4 4 0 1 1 8 0c0 2.418-2.14 5.09-4 7.293zM10 5.5A2.5 2.5 0 1 0 10 10.5 2.5 2.5 0 0 0 10 5.5zm0 3A0.5 0.5 0 1 1 10 7.5a0.5 0.5 0 0 1 0 1z" fill="var(--incub8-sea)" />
                  </svg>
                </span>
                <span className="text-xs text-white/80">{event.venue}</span>
              </div>
            )}
        </div>
      </div>

      <button
        className="cursor-pointer w-full flex items-center justify-center gap-2 px-5 py-2 mt-3 rounded-full transition-colors text-xs sm:text-sm font-medium"
        onClick={() => { if (event.applyLink) window.open(event.applyLink, '_blank'); }}
        style={{
          border: '.5px solid color-mix(in oklab, var(--incub8-coral), white 25%)',
          background: 'color-mix(in oklab, var(--incub8-coral), transparent 80%)',
          color: 'white',
          ...(event.applyLink ? {} : { display: 'none' }),
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'color-mix(in oklab, var(--incub8-coral), transparent 65%)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'color-mix(in oklab, var(--incub8-coral), transparent 80%)')}
      >
        Register
      </button>
    </ParticleCard>
  );
}