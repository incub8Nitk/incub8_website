import React from 'react';
import { Linkedin } from 'lucide-react';

const CoreTeamScroll = () => {
  const teamMembers = [
    { name: "Katapally SaiKiran", role: "CEO, SUMVN", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", linkedin: "https://www.linkedin.com/in/saikiran" },
    { name: "Vahini Devi", role: "Director VIBA", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", linkedin: "https://www.linkedin.com/in/vahinidevi" },
    { name: "Salim Amirali Jiwani", role: "CEO, VIBA", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", linkedin: "https://www.linkedin.com/in/salimjiwani" },
    { name: "Domalapally Vamshi", role: "Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", linkedin: "https://www.linkedin.com/in/vamshi" },
    { name: "Cheguri Rishwanth", role: "Lead", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop", linkedin: "https://www.linkedin.com/in/rishwanth" },
    { name: "Bollu Shrekanth", role: "Team Member", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", linkedin: "https://www.linkedin.com/in/shrekanth" },
    { name: "Leela Glory Gazal", role: "Team Member", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", linkedin: "https://www.linkedin.com/in/leelaglory" },
    { name: "Sriraj Dingiri", role: "Team Member", image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=400&fit=crop", linkedin: "https://www.linkedin.com/in/sriraj" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <div className="w-full py-16 overflow-hidden">
      <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: 'var(--incub8-sand)' }}>
            Core Team
          </h2>
          <p className="text-white/85 mt-2 max-w-2xl mx-auto">
            A dynamic team turning vision into impact
          </p>
        </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 2s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative">
        <div className="flex animate-scroll items-stretch">
          {duplicatedMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 mx-4 group"
            >
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 bg-blue-500/20 p-2 rounded-full shadow-lg hover:bg-blue-900/90 text-white transition-all duration-300 z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-blue-400 text-center font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-400 text-sm">Hover to pause</p>
      </div>
    </div>
  );
};

export default CoreTeamScroll;