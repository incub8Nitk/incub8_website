import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [isMobileLogoVisible, setIsMobileLogoVisible] = useState(false);
    const mobileVideoRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // This consolidated hook handles all video-based logic and animations
    useEffect(() => {
        const video = mobileVideoRef.current;
        if (!isMobileView || !video) return;

        // --- 1. Force Video Playback ---
        // This attempts to play the video programmatically, which can override some browser restrictions.
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Autoplay was prevented by the browser (e.g., Low Power Mode).
                // The poster image will be shown as a fallback.
                console.error("Video autoplay was blocked:", error);
            });
        }

        // --- 2. Handle Animations and Scrolling ---
        let logoTriggered = false;
        let scrollTriggered = false;

        const handleTimeUpdate = () => {
            if (!video.duration) return; // Wait until video metadata is loaded

            // Trigger logo fade-in
            if (!logoTriggered && video.currentTime >= 6.3) {
                setIsMobileLogoVisible(true);
                logoTriggered = true;
            }

            // Trigger scroll 1 second before the video ends
            if (!scrollTriggered && video.currentTime >= video.duration - 1) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: { y: "#whatisincub8", offsetY: 70 },
                    ease: "power2.inOut"
                });
                scrollTriggered = true;
            }

            // Clean up listener after both actions are done
            if (logoTriggered && scrollTriggered) {
                video.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);

        // Cleanup function for the effect
        return () => {
            if (video) {
                video.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, [isMobileView]);

    const handleNavClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        gsap.to(window, {
            duration: 0.5,
            scrollTo: { y: targetId, offsetY: 70 },
            ease: "sine.inOut"
        });
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
            <link rel="preload" as="video" href={isMobileView ? '/Convert2iphone.mp4' : '/landing-bg-pc.mp4'} />
            <style>{`
                @keyframes fadeInLogo {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .logo-fade-in {
                    animation: fadeInLogo 0.8s ease-out forwards;
                }
                .logo-slow-fade-in {
                    animation: fadeInLogo 1.0s ease-out forwards;
                }
            `}</style>

            {/* Desktop Video */}
            {!isMobileView && (
                <video
                    autoPlay loop muted playsInline preload="auto"
                    poster="/imageincubbgext.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="landing-bg-pc.mp4"
                />
            )}

            {/* Mobile Video with All Necessary Attributes */}
            {isMobileView && (
                <video
                    ref={mobileVideoRef}
                    autoPlay     // Tries to play automatically
                    muted        // Muting is REQUIRED for autoplay
                    playsInline  // CRITICAL for iOS to prevent fullscreen
                    preload="auto"
                    poster="/imageincubbgext.jpg" // Important fallback
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/Convert2iphone.mp4"
                />
            )}
            
            {/* --- Rest of your JSX --- */}
            <nav className="absolute top-0 right-0 z-20 p-8 hidden md:block">
                <ul className="flex items-center space-x-12 text-white text-[1.3rem] font-poppins">
                    {navItems.map((item, index) => (
                        <li key={index}><a href={item.href} onClick={handleNavClick} className="hover:text-gray-300 transition-colors">{item.label}</a></li>
                    ))}
                </ul>
            </nav>
            <button onClick={toggleMenu} className="absolute top-6 right-6 z-30 md:hidden p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:bg-black/30" aria-label="Toggle navigation menu">
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                </div>
            </button>
            <div className={`fixed inset-0 z-20 md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-slate-900/95 via-blue-900/95 to-slate-950/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-8 pt-20">
                        <div className="mb-8 flex justify-center"><img src="Incub8'25 logo dark bg 1.png" alt="Incub8 Logo" className="h-16 w-auto" /></div>
                        <nav className="space-y-6">
                            {navItems.map((item, index) => (<a key={index} href={item.href} onClick={handleNavClick} className="block text-white text-xl font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-blue-300 transition-all duration-300">{item.label}</a>))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="relative z-10 flex-col items-start mt-29 ml-20 h-full text-white hidden md:flex logo-fade-in">
                <img src="Incub8'25 logo dark bg 1.png" alt="Incub8 Logo" loading="eager" fetchPriority="high" />
            </div>
            <div className={`relative z-10 flex flex-col items-center justify-center h-full text-white md:hidden px-4 sm:px-8 ${isMobileLogoVisible ? 'logo-slow-fade-in' : 'opacity-0'}`}>
                <img src="Incub8'25 logo dark bg 1.png" alt="Incub8 Logo" className="w-full max-w-sm h-auto" loading="eager" fetchPriority="high" />
            </div>
        </div>
    );
}