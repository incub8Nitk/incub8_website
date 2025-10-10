import React, { useState } from 'react';
import { eventsData } from '../constants/events';
import { EventCard } from '../components/EventCard';
import EventsModal from '../components/EventsModal';

export default function EventsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const top6 = eventsData.slice(0, 6);

  return (
    <>
      <section id="events-section" className="w-full py-8 sm:py-12 md:py-14 px-4 sm:px-6 md:px-12 lg:px-20 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-end sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2" style={{ color: 'var(--incub8-sand)' }}>Events</h2>
              <p className="text-white/95 text-sm sm:text-base">Top picks crafted for builders, thinkers, and doers.</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors text-white border border-[var(--incub8-coral)] bg-[var(--incub8-coral)]/20 hover:bg-[var(--incub8-coral)]/40 text-sm sm:text-base"
            >
              View all events →
            </button>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {top6.map((e, i) => (
              <div key={i} className="fade-up" style={{ animationDelay: `${i * 70}ms` }}>
                <EventCard event={e} compact={true} />
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 sm:hidden flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-white border border-[var(--incub8-coral)] bg-[var(--incub8-coral)]/20 hover:bg-[var(--incub8-coral)]/40 transition-colors text-sm"
            >
              View all events →
            </button>
          </div>
        </div>
      </section>

      {/* Events Modal */}
      <EventsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
