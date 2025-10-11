import React, { useEffect } from 'react';
import { eventsData } from '../constants/events';
import { ParticleCard } from '../sections/MagicBento';

export default function EventsModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  function handleMouseMove(e) {
    const t = e.currentTarget;
    const rect = t.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    t.style.setProperty('--x', `${x}%`);
    t.style.setProperty('--y', `${y}%`);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-7xl mx-4 max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--incub8-sand)' }}>
                All Events
              </h2>
              <p className="text-white/80 mt-1">
                Discover our complete lineup of events
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Events Grid */}
          <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
            <div className="flex flex-wrap justify-center gap-6">
              {eventsData.map((event, idx) => (
                <div
                  key={idx}
                  className="fade-up"
                  style={{
                    animationDelay: `${idx * 50}ms`,
                    width: '323px',
                    flexShrink: 0
                  }}
                >
                  <ParticleCard
                    className="flex flex-col justify-between relative w-full h-full p-5 rounded-[20px] border border-[#392e4e] bg-[#060010] font-light overflow-hidden transition-all duration-300 ease-in-out card--border-glow"
                    glowColor="132, 0, 255"
                    enableTilt={true}
                    enableMagnetism={true}
                    onMouseMove={handleMouseMove}
                    style={{
                      border: '1px solid color-mix(in oklab, var(--incub8-sea), white 25%)',
                      background: 'linear-gradient(180deg, color-mix(in oklab, var(--incub8-deep), black 20%) 0%, rgba(10,31,54,0.8) 100%)',
                      backdropFilter: 'blur(10px)',
                      width: '100%',
                      height: '100%',
                      padding: '1.25rem',
                      borderRadius: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxSizing: 'border-box',
                      margin: 0
                    }}
                  >
                    <div className="flex-1 flex flex-col">
                      {event.img && (
                        <div className="w-full flex justify-center mb-3">
                          <img
                            src={event.img}
                            alt={event.title}
                            className="rounded-xl object-cover"
                            style={{
                              width: 80,
                              height: 80,
                              objectFit: 'cover',
                              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)',
                              background: '#181c24'
                            }}
                          />
                        </div>
                      )}
                      <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--incub8-sand)' }}>
                        {event.title}
                      </h3>
                      <p className="text-white/95 mb-3 text-sm flex-1 overflow-hidden">{event.short}</p>

                      <div className="space-y-2 text-sm">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-medium" style={{ color: 'var(--incub8-sea)' }}>
                            Why join?
                          </span>
                          <span className="text-white/90 text-xs">{event.why}</span>
                        </div>

                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-medium" style={{ color: 'var(--incub8-sea)' }}>
                            How it works:
                          </span>
                          <span className="text-white/90 text-xs">{event.how}</span>
                        </div>

                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-medium" style={{ color: 'var(--incub8-sea)' }}>
                            Outcome:
                          </span>
                          <span className="text-white/90 text-xs">{event.outcome}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                          {/* Location icon (SVG) */}
                          <svg width="16" height="16" fill="none" viewBox="0 0 20 20" style={{ marginRight: '0.4em' }}>
                            <path
                              d="M10 2C6.686 2 4 4.686 4 8c0 4.418 5.09 9.36 5.307 9.57a1 1 0 0 0 1.386 0C10.91 17.36 16 12.418 16 8c0-3.314-2.686-6-6-6zm0 13.293C8.14 13.09 6 10.418 6 8a4 4 0 1 1 8 0c0 2.418-2.14 5.09-4 7.293zM10 5.5A2.5 2.5 0 1 0 10 10.5 2.5 2.5 0 0 0 10 5.5zm0 3A0.5 0.5 0 1 1 10 7.5a0.5 0.5 0 0 1 0 1z"
                              fill="var(--incub8-sea)"
                            />
                          </svg>
                        </span>
                        <span className="text-xs text-white/80">{event.venue}</span>
                      </div>
                    </div>
                    {event.applyLink && (
                      <button
                        className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full transition-colors text-sm"
                        style={{
                          border: '.5px solid color-mix(in oklab, var(--incub8-coral), white 25%)',
                          background: 'color-mix(in oklab, var(--incub8-coral), transparent 80%)',
                          color: 'white'
                        }}
                        onClick={() => {
                          window.open(event.applyLink, '_blank');
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = 'color-mix(in oklab, var(--incub8-coral), transparent 65%)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = 'color-mix(in oklab, var(--incub8-coral), transparent 80%)';
                        }}
                      >
                        Registration
                      </button>
                    )}
                    {/* <div className="h-1 w-full mt-4" style={{ background: 'linear-gradient(90deg, var(--incub8-coral), var(--incub8-wood))', opacity: 0.9 }} /> */}
                  </ParticleCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
