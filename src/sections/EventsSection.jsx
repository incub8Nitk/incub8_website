import React, { useState } from 'react';
import { eventsData } from '../constants/events';
import { EventCard } from '../components/EventCard';
import EventsModal from '../components/EventsModal';

export default function EventsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const top6 = eventsData.slice(0, 6);

  return (
    <>
      <section className="w-full py-14 px-6 md:px-12 lg:px-20 text-white" style={{
      }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: 'var(--incub8-sand)' }}>Events</h2>
              <p className="text-white/95 mt-1">Top picks crafted for builders, thinkers, and doers.</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-colors text-white border border-[var(--incub8-coral)] bg-[var(--incub8-coral)]/20 hover:bg-[var(--incub8-coral)]/40"
            >
              View all events →
            </button>
          </div>

          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
            {top6.map((e, i) => (
              <div key={i} className="fade-up" style={{ animationDelay: `${i * 70}ms` }}>
                <EventCard event={e} compact={true} />
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white border border-[var(--incub8-coral)] bg-[var(--incub8-coral)]/20 hover:bg-[var(--incub8-coral)]/40 transition-colors"
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
