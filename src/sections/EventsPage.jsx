import React, { useState } from 'react';
import { eventsData } from './events';
import { EventCard } from './events';
import EventsModal from '../components/EventsModal';

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const top6 = eventsData.slice(0, 6);

  return (
    <>
      <main className="relative text-white" style={{ background: 'transparent' }}>
        <section className="px-6 md:px-12 lg:px-20 pt-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <div>
                <h1 
                  className="font-bold"
                  style={{ 
                    fontSize: '3rem',
                    color: 'var(--incub8-sand)',
                    marginBottom: '0.5rem',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
                  }}
                >
                  Events
                </h1>
              </div>
            </div>

            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
              {top6.map((event, i) => (
                <div key={i} className="fade-up" style={{ animationDelay: `${i * 70}ms` }}>
                  <EventCard event={event} compact={true} />
                </div>
              ))}
            </div>

            {/* Centered button at bottom */}
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors text-sm"
                style={{
                  border: '.5px solid color-mix(in oklab, var(--incub8-coral), white 25%)',
                  background: 'color-mix(in oklab, var(--incub8-coral), transparent 80%)',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'color-mix(in oklab, var(--incub8-coral), transparent 65%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'color-mix(in oklab, var(--incub8-coral), transparent 80%)';
                }}
              >
                View more events →
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Events Modal */}
      <EventsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}