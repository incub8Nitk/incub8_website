import React, { useState, useEffect } from 'react';
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

const CoreTeamCarousel = () => {
  const teamMembers = [
    { name: "Katapally SaiKiran", role: "CEO, SUMVN", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", bio: "Visionary leader driving innovation", linkedin: "https://www.linkedin.com/in/saikiran" },
    { name: "Vahini Devi", role: "Director VIBA", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", bio: "Strategic thinker with passion", linkedin: "https://www.linkedin.com/in/vahinidevi" },
    { name: "Salim Amirali Jiwani", role: "CEO, VIBA", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", bio: "Expert in business development", linkedin: "https://www.linkedin.com/in/salimjiwani" },
    { name: "Domalapally Vamshi", role: "Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", bio: "Tech enthusiast & problem solver", linkedin: "https://www.linkedin.com/in/vamshi" },
    { name: "Cheguri Rishwanth", role: "Lead", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop", bio: "Creative mind behind solutions", linkedin: "https://www.linkedin.com/in/rishwanth" },
    { name: "Bollu Shrekanth", role: "Team Member", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", bio: "Dedicated and result-oriented", linkedin: "https://www.linkedin.com/in/shrekanth" },
    { name: "Leela Glory Gazal", role: "Team Member", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", bio: "Passionate about excellence", linkedin: "https://www.linkedin.com/in/leelaglory" },
    { name: "Sriraj Dingiri", role: "Team Member", image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=400&fit=crop", bio: "Innovative thinker & collaborator", linkedin: "https://www.linkedin.com/in/sriraj" },
  ];

  const [startIdx, setStartIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) setVisibleCount(1);
      else if (window.innerWidth < 768) setVisibleCount(2);
      else setVisibleCount(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = teamMembers.length;
  const visibleMembers = teamMembers.slice(startIdx, startIdx + visibleCount);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setStartIdx((prev) => (prev + visibleCount >= total ? 0 : prev + visibleCount));
      setIsTransitioning(false);
    }, 600);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setStartIdx((prev) => (prev - visibleCount < 0 ? Math.max(0, total - visibleCount) : prev - visibleCount));
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <div className="w-full py-12 sm:py-16 px-4 overflow-visible">
      <div className="mb-8 sm:mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2" style={{
          color: '#d4af37',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
        }}>
          Core Team
        </h2>
        <p className="text-white/85 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          A dynamic team turning vision into impact
        </p>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0 10px;
        }

        .carousel-arrow {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          border: 2px solid #60a5fa;
          color: #fff;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          min-width: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
          z-index: 10;
        }

        .carousel-arrow:hover {
          background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.5);
          transform: scale(1.15);
        }

        .carousel-arrow:active {
          transform: scale(0.95);
        }

        .carousel-arrow:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .carousel-content {
          flex: 1;
          display: flex;
          justify-content: center;
          overflow: hidden;
          min-width: 0;
        }

        .carousel-track {
          display: flex;
          gap: 1rem;
          justify-content: center;
          width: 100%;
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          flex-wrap: nowrap;
        }

        .carousel-track.transitioning {
          opacity: 0;
        }

        .carousel-item {
          flex-shrink: 0;
          width: clamp(150px, 90vw, 280px);
          animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .carousel-item:nth-child(2) {
          animation-delay: 0.1s;
        }

        .carousel-item:nth-child(3) {
          animation-delay: 0.2s;
        }

        .team-card {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid #334155;
          transition: border-color 0.3s;
        }

        .team-card:hover {
          border-color: #2563eb;
        }

        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), filter 0.5s;
        }

        .team-card:hover .team-image {
          transform: scale(1.15) rotate(2deg);
          filter: brightness(0.4);
        }

        .team-info-front {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          background: linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.8) 50%, transparent);
          transform: translateY(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card:hover .team-info-front {
          transform: translateY(-70px);
        }

        .team-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.15rem;
          line-height: 1.2;
        }

        .team-role {
          color: #60a5fa;
          font-weight: 600;
          font-size: 0.75rem;
        }

        .team-info-back {
          position: absolute;
          inset: 0;
          padding: 1.5rem;
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card:hover .team-info-back {
          opacity: 1;
          transform: scale(1);
        }

        .team-bio {
          color: white;
          text-align: center;
          font-size: 0.8rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .linkedin-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.25);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          border: 2px solid white;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 600;
          font-size: 0.7rem;
        }

        .linkedin-link:hover {
          background: white;
          color: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .carousel-wrapper {
            padding: 0 5px;
          }

          .carousel-arrow {
            width: 40px;
            height: 40px;
            min-width: 40px;
          }

          .team-card {
            height: 260px;
          }

          .team-info-front {
            padding: 0.8rem;
          }

          .team-card:hover .team-info-front {
            transform: translateY(-60px);
          }
        }

        @media (max-width: 480px) {
          .carousel-wrapper {
            padding: 0;
          }

          .carousel-arrow {
            width: 36px;
            height: 36px;
            min-width: 36px;
          }

          .carousel-track {
            gap: 0.75rem;
          }

          .carousel-item {
            width: clamp(140px, 85vw, 250px);
          }

          .team-card {
            height: 240px;
          }

          .team-name {
            font-size: 0.85rem;
          }

          .team-role {
            font-size: 0.7rem;
          }

          .team-bio {
            font-size: 0.75rem;
          }
        }
      `}</style>

      <div className="carousel-wrapper">
        <button 
          className="carousel-arrow" 
          onClick={handlePrev}
          disabled={isTransitioning}
          aria-label="Previous team members"
        >
          <ChevronLeft size={24} strokeWidth={3} />
        </button>

        <div className="carousel-content">
          <div className={`carousel-track ${isTransitioning ? 'transitioning' : ''}`}>
            {visibleMembers.map((member, index) => (
              <div
                key={`${startIdx}-${index}`}
                className="carousel-item"
              >
                <div className="team-card">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-image"
                  />
                  
                  <div className="team-info-front">
                    <div className="team-name">{member.name}</div>
                    <div className="team-role">{member.role}</div>
                  </div>

                  <div className="team-info-back">
                    <div className="team-bio">{member.bio}</div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={14} />
                      Connect
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="carousel-arrow" 
          onClick={handleNext}
          disabled={isTransitioning}
          aria-label="Next team members"
        >
          <ChevronRight size={24} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default CoreTeamCarousel;