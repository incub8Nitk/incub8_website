import React from 'react';

// Data for the timeline, including all your speakers and events
const timelineData = [
  {
    day: "Day 0",
    date: "October 24, 2025",
    events: [
      {
        type: "Fireside Chat",
        title: "The Visionary & The Builder", // Fixed typo: Builde -> Builder
        participants: [
          { name: "BVR Mohan Reddy", role: "Former Chairperson, NASSCOM", image: "/mohanreddy.png" },
          { name: "Suyog Shetty", role: "CEO of Niveus Solutions", image: "/suyogshetty.png" },
          { name: "Prof. B Ravi", role: "Moderator (Director, NITK)", image: "/bravi.png" }
        ]
      },
      {
        type: "E-Talk",
        title: "Logistics of a Nation",
        participants: [
          { name: "Ajith Pai", role: "COO, Delhivery", image: "/ajithpai.png" }
        ]
      }
    ]
  },
  {
    day: "Day 1",
    date: "October 25, 2025",
    events: [
      {
        type: "E-Talk",
        title: "Building Scalable Social Impact",
        participants: [
          { name: "Ajit Sivaram", role: "Co-founder, U&I", image: "/ajitsivaram.png" }
        ]
      },
      {
        type: "E-Talk",
        title: "Sustainable Entrepreneurship",
        participants: [
          { name: "Sitaram Gupta", role: "Founder, Gaumaya Pariwar", image: "/sitaramguptha.png" }
        ]
      }
    ]
  },
  {
    day: "Day 2",
    date: "October 26, 2025",
    events: [
      {
        type: "E-Talk",
        title: "Achieving Market Fit",
        participants: [
          { name: "Kiran Shah", role: "Founder, Go Zero", image: "/kiranshah.png" }
        ]
      }
    ]
  }
];

// Data for past speakers
const pastSpeakersData = [
  {
    name: "Ashneer Grover",
    role: "Co-founder, BharatPe",
    image: "/ashneercrt.png", // Fixed broken image path
  },
  {
    name: "Raj Vikramaditya",
    role: "Co-founder, takeUforward",
    image: "/strivertuf1.png",
  },
  {
    name: "Iqlipse Nova",
    role: "Singer & Artist",
    image: "/novs.png",
  }
];

// --- RE-DESIGNED COMPONENTS ---

// Large Horizontal Card (for solo speakers)
const LargeParticipantCard = ({ name, role, image }) => (
  <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 p-6 bg-slate-900/30 backdrop-blur-lg rounded-lg border border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50 hover:border-slate-600 hover:-translate-y-1 hover:shadow-xl">
    <img
      src={image}
      alt={name}
      className="w-48 h-48 rounded-full object-cover border-4 border-slate-600 flex-shrink-0"
    />
    <div>
      <h4 className="font-semibold text-white text-3xl">{name}</h4>
      <p className="text-blue-300 text-xl mt-1">{role}</p>
    </div>
  </div>
);

// Small Vertical Card (for multi-speaker events)
const SmallParticipantCard = ({ name, role, image }) => (
  <div className="flex flex-col items-center text-center p-4 bg-slate-900/30 backdrop-blur-lg rounded-lg border border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50 hover:border-slate-600 hover:-translate-y-1 hover:shadow-lg">
    <img
      src={image}
      alt={name}
      className="w-40 h-40 rounded-full object-cover border-4 border-slate-600 flex-shrink-0"
    />
    <h4 className="font-semibold text-white text-xl mt-4">{name}</h4>
    <p className="text-blue-300 text-sm">{role}</p>
  </div>
);

// Component for the day header
const DayHeader = ({ day, date }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
    {/* UPDATED: Date is now visible on all screen sizes */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-x-4">
      <h2 className="text-4xl font-bold" style={{ color: "var(--incub8-sand)" }}>
        {day}
      </h2>
      {date && (
        <span className="text-xl text-white/70 font-medium sm:pt-1">
          {/* Removed | separator for a cleaner look on mobile */}
          {date}
        </span>
      )}
    </div>
    <div className="h-0.5 flex-1 bg-gradient-to-r from-slate-700 via-slate-800 to-transparent mt-2 sm:mt-0 sm:ml-6"></div>
  </div>
);

// --- MAIN COMPONENT ---

export default function EventTimeline() {
  return (
    <section id="speakers-timeline" className="relative text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1
            className="font-bold mb-3 text-3xl sm:text-4xl md:text-5xl"
            style={{
              color: "var(--incub8-sand)",
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Speakers & Timeline
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Meet the visionaries and experts joining us for Incub8'25.
          </p>
        </div>

        {/* --- PRESENT SPEAKERS TIMELINE --- */}
        <div className="space-y-16">
          {timelineData.map((day) => (
            <div key={day.day}>
              <DayHeader day={day.day} date={day.date} />
              <div className="space-y-10">
                {day.events.map((event) => (
                  <div 
                    key={event.title}
                    className="p-6 bg-slate-900/30 backdrop-blur-lg rounded-lg border border-slate-700 shadow-xl"
                  >
                    <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-3 mb-6">{event.title}</h3>
                    
                    {event.participants.length > 1 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {event.participants.map((person) => (
                          <SmallParticipantCard key={person.name} {...person} />
                        ))}
                      </div>
                    ) : (
                      <LargeParticipantCard key={event.participants[0].name} {...event.participants[0]} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- DIVIDER --- */}
        <div className="my-20 text-center">
          <div
            className="mx-auto"
            style={{
              height: "2px",
              width: "90px",
              background: "linear-gradient(90deg, var(--incub8-coral), var(--incub8-wood))",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* --- PAST SPEAKERS SECTION --- */}
        <div>
          <DayHeader day="Past Speakers" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastSpeakersData.map((person) => (
              <LargeParticipantCard key={person.name} {...person} />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}