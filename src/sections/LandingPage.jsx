import React from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);
 
export default function LandingPage() {

    const handleNavClick = (e) => {
        // Prevent the default anchor link behavior
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        gsap.to(window, { duration: 1.5, scrollTo: { y: targetId, offsetY: 70 }, ease: 'power2.inOut' });
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
                src="landing-bg-pc.mp4"
            />
            <nav className="absolute top-0 right-0 z-20 p-8">
                <ul className="flex items-center space-x-12 text-white text-[1.3rem] font-poppins">
                    <li><a href="#whatisincub8" onClick={handleNavClick} className="hover:text-gray-300 transition-colors">About</a></li>
                    <li><a href="#events-section" onClick={handleNavClick} className="hover:text-gray-300 transition-colors">Events</a></li>
                    <li><a href="#past-speakers" onClick={handleNavClick} className="hover:text-gray-300 transition-colors">Past Speakers</a></li>
                    <li><a href="#gallery" onClick={handleNavClick} className="hover:text-gray-300 transition-colors">Gallery</a></li>
                    <li><a href="#contact" onClick={handleNavClick} className="hover:text-gray-300 transition-colors">Contact</a></li>
                </ul>
            </nav>
            <div className="relative z-10 flex flex-col items-start mt-29 ml-20 h-full text-white">
                <img src="Incub8'25 logo dark bg 1.png" alt="" />
            </div>
        </div>

    )
}
