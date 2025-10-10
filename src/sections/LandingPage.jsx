import React, { useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);
 
export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (e) => {
        // Prevent the default anchor link behavior
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        gsap.to(window, { duration: 0.5, scrollTo: { y: targetId, offsetY: 70 },
            ease: "sine.inOut" 
            });
        // Close mobile menu after navigation
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { href: "#whatisincub8", label: "About" },
        { href: "#events-section", label: "Events" },
        { href: "#past-speakers", label: "Past Speakers" },
        { href: "#gallery", label: "Gallery" },
        { href: "#ocean-footer", label: "Contact" }
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
                src="landing-bg-pc.mp4"
            />
            
            {/* Desktop Navigation */}
            <nav className="absolute top-0 right-0 z-20 p-8 hidden md:block">
                <ul className="flex items-center space-x-12 text-white text-[1.3rem] font-poppins">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.href} 
                                onClick={handleNavClick} 
                                className="hover:text-gray-300 transition-colors"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 z-30 md:hidden p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:bg-black/30 transition-all duration-300"
                aria-label="Toggle navigation menu"
            >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-20 md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                
                {/* Menu Content */}
                <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-slate-900/95 via-blue-900/95 to-slate-950/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-8 pt-20">
                        {/* Logo in mobile menu */}
                        <div className="mb-8 flex justify-center">
                            <img 
                                src="Incub8'25 logo dark bg 1.png" 
                                alt="Incub8 Logo" 
                                className="h-16 w-auto"
                            />
                        </div>
                        
                        {/* Navigation Links */}
                        <nav className="space-y-6">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    onClick={handleNavClick}
                                    className="block text-white text-xl font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-blue-300 transition-all duration-300 border border-transparent hover:border-white/20"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* Additional mobile menu content */}
                        <div className="mt-12 pt-8 border-t border-white/20">
                            <div className="text-center text-white/80 text-sm">
                                <p className="mb-4">Connect with us</p>
                                <div className="flex justify-center space-x-4">
                                    <a href="https://www.linkedin.com/company/incub8nitk" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    <a href="https://twitter.com/incub8event" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/incub8.nitk" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Logo */}
            <div className="relative z-10 flex flex-col items-start mt-29 ml-20 h-full text-white hidden md:flex">
                <img src="Incub8'25 logo dark bg 1.png" alt="Incub8 Logo" />
            </div>

            {/* Mobile Logo */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white md:hidden px-4 sm:px-8">
                <img src="Incub8'25 logo dark bg 1.png" alt="Incub8 Logo" className="w-full max-w-sm h-auto" />
            </div>
        </div>
    )
}
