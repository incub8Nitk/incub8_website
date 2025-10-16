import React from 'react';

const facultyMembers = [
  {
    name: "Dr. Gangadharan K V",
    designation: "Professor",
    image: "/Faculties/Gangadharan_K_V.jpg"
  },
  {
    name: "Dr. Subray R. Hegde",
    designation: "Professor",
    image: "/Faculties/Subray_R_Hegde.webp"
  },
  {
    name: "Dr. Suprabha K R",
    designation: "Associate Professor",
    image: "/Faculties/Suprabha_K_R.jpg"
  },
  {
    name: "Dr. B Dastagiri Reddy",
    designation: "Assistant Professor",
    image: "/Faculties/dasthagiri.jpeg" 
  }
];

const FacultySection = () => {
  return (
    <div className="w-full py-12 sm:py-16 px-4">
      <div className="mb-8 sm:mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2" style={{
          color: '#d4af37',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
        }}>
          Faculty Advisors
        </h2>
        <p className="text-white/85 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          Guiding our vision with their invaluable experience and wisdom.
        </p>
      </div>

      {/* UPDATED: Changed grid to center items and constrain width on mobile */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {facultyMembers.map((member, index) => (
          // UPDATED: Added a max-width to the card for mobile view
          <div 
            key={index}
            className="group w-full max-w-[280px] sm:max-w-none flex flex-col items-center text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="relative w-full">
              <img
                src={member.image}
                alt={member.name}
                // UPDATED: Image now fills the container with a square aspect ratio
                className="w-full h-auto aspect-square rounded-lg object-cover border-4 border-slate-600 group-hover:border-blue-400 transition-all duration-300 transform group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">
              {member.name}
            </h3>
            <p className="mt-1 text-sm text-blue-300">
              {member.designation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultySection;