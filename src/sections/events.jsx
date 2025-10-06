import React from 'react'
import { Link } from 'react-router-dom'
import { ParticleCard } from './MagicBento'

export const eventsData = [
  {
    title: "Case Study Challenge - Crack the Code of Business! 📊",
    short:
      "Teams act as business consultants, solving a real-world business case by analysing problems, developing solutions, and presenting to judges.",
    details:
      "A competition where teams act as business consultants, solving a real-world business case by analysing problems, developing solutions, and presenting to judges.",
    why:
      "Fosters critical thinking, problem-solving, and strategic consulting skills.",
    how: "Report submission → Shortlisting → Live presentations.",
    outcome: "Best actionable solution wins.",
    applyLink: "https://forms.gle/riSjp7pDQPNAKC4z9"
  },
  {
    title: "Ideathon - Where Ideas Meet Innovation 💡",
    short:
      "Participants act as entrepreneurs, creating innovative business models or prototypes in Business or Tech tracks to address problem statements.",
    details:
      "A platform for participants to act as entrepreneurs, developing innovative business models or prototypes. Tracks include Business and Tech.",
    why: "Encourages entrepreneurial thinking, creativity, and pitching skills.",
    how: "Teams design and present business models or functional prototypes.",
    outcome: "Most innovative and feasible idea wins.",
    applyLink: "https://forms.gle/cyrkGfACoCETthP96"
  },
  {
    title: "Local to Vocal - Amplify the Unsung Heroes 📢",
    short:
      "Participants create and implement a digital marketing strategy to uplift a local small-scale business, showcasing real-world impact.",
    details:
      "Participants create and implement a digital marketing strategy to uplift a small-scale local business.",
    why:
      "Hands-on marketing with social impact, combining creativity with real-world results.",
    how: "Submit marketing plan → Execute strategy → Final presentations.",
    outcome: "Team with the greatest real impact wins.",
    applyLink: "https://forms.gle/oUhYFtKPKKkkoB5w6"
  },
  {
    title: "Market Mavericks - The Trading Clash 📈",
    short:
      "An online stock market simulation where participants trade virtually, testing financial acumen, risk management, and adaptability.",
    details:
      "An online stock market simulation where participants virtually trade, responding to real-time news and market dynamics.",
    why: "Tests risk management, decision-making, and financial knowledge.",
    how:
      "Participants trade on a virtual platform over a set time period.",
    outcome: "Highest net profit wins.",
    applyLink: "https://forms.gle/TyT1dtEZbx9KvLfw8"
  },
  {
    title: "Youth Parliament - Debate the Future 🗣️",
    short:
      "A parliament-style debate where participants argue over controversial business topics.",
    details:
      "A parliament-style debate where participants argue over controversial business topics.",
    why: "Sharpens public speaking, teamwork, and logical reasoning.",
    how:
      "Structured moderated rounds with arguments, rebuttals, and cross-questions.",
    outcome: "Most persuasive debaters declared winners.",
    applyLink: "https://forms.gle/p7jpjFWnsDmcxpFy6"
  },
  {
    title: "Product Advertising - Sell the Unsellable! 🎯",
    short:
      "Teams market ordinary or “boring” products in the most creative way possible.",
    details:
      "Teams are challenged to market ordinary or “boring” products in the most creative way possible.",
    why: "Improves creativity, salesmanship, and communication.",
    how: "Teams design and pitch ads for given products.",
    outcome: "Most entertaining and persuasive pitch wins.",
    applyLink: "https://forms.gle/9egRiSY3B2TBEmRh7"
  },
  {
    title: "Mock IPL Auction - The Game Behind the Game 🏏💰",
    short:
      "A simulated IPL-style auction where teams act as franchise owners.",
    details:
      "A simulated IPL-style auction where teams act as franchise owners.",
    why: "Combines cricket knowledge, budgeting, and strategy.",
    how: "Finance/Cricket quiz → Top teams qualify → Auction round.",
    outcome: "Best balanced team strategy wins.",
    applyLink: "https://forms.gle/JDYQf5qyQWCPtwx17"
  },
  {
    title: "Pitch to VC",
    short: "Teams present a startup idea to mock venture capitalists.",
    details:
      "Teams present a startup idea to mock venture capitalists.",
    why: "Simulates real-world fundraising and investor pitches.",
    how:
      "Teams create business plans and pitch decks, then present to VCs.",
    outcome: "Most convincing and investable pitch wins.",
    applyLink: "https://forms.gle/oHNN5K9frihDuHei9"
  },
  {
    title: "Hackathon",
    short:
      "A 24-48 hour coding competition to build software/hardware solutions for a problem.",
    details:
      "A 24-48 hour coding competition where teams solve a given problem through software or hardware solutions.",
    why: "Encourages innovation, teamwork, and technical excellence.",
    how: "Coding sprint → Prototype submission → Presentations.",
    outcome: "Most innovative and functional prototype wins.",
    applyLink: "https://forms.gle/PtdXATbxaCLJ2nEv6"
  },
  {
    title: "Find your Mentor",
    short:
      "A networking event for students to connect with industry mentors.",
    details:
      "A networking event for students to connect with industry mentors.",
    why: "One-on-one guidance and speed-mentoring opportunities.",
    how: "Networking sessions + reflections submission.",
    outcome: "Strongest engaged participants recognised.",
    // No applyLink provided
  },
  {
    title: "Startup EXPO",
    short:
      "A showcase for student startups to present their products, services, or prototypes.",
    details:
      "A showcase for student startups to present their products, services, or prototypes.",
    why: "Visibility, feedback, and networking with investors.",
    how: "Teams set up booths for demonstrations.",
    outcome:
      "Startup with strongest innovation and market potential wins.",
    applyLink: "https://forms.gle/TRdcJyrQjFRrGqnw5"
  },
  {
    title: "CSR - Corporate Social Responsibility",
    short:
      "A social innovation challenge to design CSR initiatives for real impact.",
    details:
      "A social innovation challenge to design CSR initiatives for real impact.",
    why: "Encourages balancing profit with purpose.",
    how: "Teams propose and present CSR projects.",
    outcome: "Best impactful idea wins.",
    applyLink: "https://forms.gle/8DGrYa2nQZ76icbeA"
  },
  {
    title: "Bootcamp - Workshop Live Development",
    short:
      "A hands-on skill-building workshop where participants collaboratively build projects.",
    details:
      "A hands-on skill-building workshop where participants collaboratively build projects (apps, websites, etc.) guided by experts.",
    why: "Practical teamwork and mentor feedback.",
    how: "Live coding/design session → Final showcase.",
    outcome: "Best working project wins.",
    // No applyLink provided
  },
  {
    title: "Campus Innovation",
    short: "Students propose solutions to real campus challenges.",
    details: "Students propose solutions to real campus challenges.",
    why: "Encourages localised innovation and practical problem-solving.",
    how:
      "Teams identify issues → Submit proposals/prototypes → Present to judges.",
    outcome: "Most practical campus solution wins.",
    // No applyLink provided
  },
  {
    title: "Etalk",
    short:
      "Industry leaders deliver inspirational talks on startups, technology, and leadership.",
    details:
      "Industry leaders deliver inspirational talks on startups, technology, and leadership.",
    why: "Gain career and entrepreneurial insights from experts.",
    how: "Talks + Q&A/panel discussions.",
    outcome: "Participants gain inspiration and recognition.",
    // No applyLink provided
  },
  {
    title: "Panel Discussion",
    short: "Experts debate trending topics in business and technology.",
    details: "Experts debate trending topics in business and technology.",
    why: "Learn diverse perspectives and latest industry insights.",
    how: "Panel discussion + audience Q&A.",
    outcome: "Most engaged participants recognised.",
    // No applyLink provided
  },
  {
    title: "Expert Nexus (Workshop)",
    short:
      "Advanced workshops on niche topics like blockchain, analytics, or emerging tech.",
    details:
      "Advanced workshops on niche topics like blockchain, analytics, or emerging technologies.",
    why: "Deep dive into specialised skills.",
    how: "Hands-on/lecture workshops + deliverables.",
    outcome: "Best project outputs or engagement recognised.",
    // No applyLink provided
  },
]

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
      className={`card card--border-glow ${compact ? 'event-card-compact' : 'event-card'}`}
      glowColor="132, 0, 255"
      enableTilt={true}
      enableMagnetism={true}
      onMouseMove={handleMouseMove}
      style={{
        border: '1px solid color-mix(in oklab, var(--incub8-sea), white 25%)',
        background: 'linear-gradient(180deg, color-mix(in oklab, var(--incub8-deep), black 10%) 0%, rgba(10,31,54,0.7) 100%)'
      }}
    >
      <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: 'var(--incub8-sand)' }}>{event.title}</h3>
      <p className="text-white/95">{event.short}</p>
      <div className="h-1 w-full mt-4" style={{ background: 'linear-gradient(90deg, var(--incub8-coral), var(--incub8-wood))', opacity: 0.3 }} />
      <button
        {...(!event.applyLink ? { style: { display: 'none' } } : {})}
        className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full transition-colors text-sm "
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

export default function EventsHome() {
  const top6 = eventsData.slice(0, 6)

  return (
    <section className="w-full py-14 px-6 md:px-12 lg:px-20 text-white" style={{
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, var(--incub8-deep) 30%, var(--incub8-sea) 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: 'var(--incub8-sand)' }}>Events</h2>
            <p className="text-white/95 mt-1">Top picks crafted for builders, thinkers, and doers.</p>
          </div>
          <Link
            to="/events"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-colors"
            style={{
              border: '.5px solid color-mix(in oklab, var(--incub8-coral), white 25%)',
              background: 'color-mix(in oklab, var(--incub8-coral), transparent 80%)',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'color-mix(in oklab, var(--incub8-coral), transparent 65%)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'color-mix(in oklab, var(--incub8-coral), transparent 80%)'
            }}
          >
            View all events →
          </Link>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {top6.map((e, i) => (
            <div key={i} className="fade-up" style={{ animationDelay: `${i * 70}ms` }}>
              <EventCard event={e} compact={true} />
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden flex justify-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{
              border: '1px solid color-mix(in oklab, var(--incub8-coral), white 25%)',
              background: 'color-mix(in oklab, var(--incub8-coral), transparent 80%)',
              color: 'white'
            }}
          >
            View all events →
          </Link>
        </div>
      </div>
    </section>
  )
}
