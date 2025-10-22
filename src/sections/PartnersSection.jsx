import React from 'react';

// You need to replace the placeholder "#" with the correct website URL for each partner
const partnersData = [
  { name: "Unstop", tier: "PLATFORM PARTNER", logo: "/sponsers/unstop.jpg", href: "https://unstop.com/" },
  { name: "IndiaStack", tier: "INNOVATION PARTNER", logo: "/sponsers/indiastack.png", href: "#" },
  { name: "UmbraPrivacy", tier: "BLOCKCHAIN PARTNER", logo: "/sponsers/umbra.png", href: "#" },
  { name: "JustPlace", tier: "INTERVIEW PARTNER", logo: "/sponsers/justplace.png", href: "#" },
  { name: "Vilcart", tier: "EVENT PARTNER", logo: "/sponsers/vilcart.png", href: "#" },
  { name: "Swipe", tier: "INVOICE PARTNER", logo: "/sponsers/swipe.png", href: "#" },
  { name: "eSamuday", tier: "THEME PARTNER", logo: "/sponsers/esamudaay.png", href: "#" },
  { name: "Abhibus", tier: "TRAVEL PARTNER", logo: "sponsers/abhibus.png", href: "#" }
];

// This is the component for each individual partner card
const PartnerCard = ({ name, tier, logo, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center justify-center text-center p-6 bg-slate-900/30 backdrop-blur-lg rounded-2xl border border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50 hover:border-slate-600 hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="h-24 flex items-center justify-center">
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-20 w-auto transition-all duration-300 group-hover:scale-105"
      />
    </div>
    <p className="mt-4 text-sm font-semibold text-white uppercase tracking-wider">{tier}</p>
  </a>
);

// This is the main section component
export default function PartnersSection() {
  return (
    <section id="partners" className="relative text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1
            className="font-bold mb-3 text-3xl sm:text-4xl md:text-5xl"
            style={{
              color: "var(--incub8-sand)",
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Our Partners
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            The driving force behind our success, enabling innovation and growth.
          </p>
        </div>
        
        {/* Responsive grid for the partner logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partnersData.map((partner) => (
            <PartnerCard key={partner.name} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}