import React from 'react';
import './Footer.css';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Smooth scroll handler for navigation links
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    gsap.to(window, { 
      duration: 0.5, 
      scrollTo: { y: targetId, offsetY: 71 },
      ease: "sine.inOut" 
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/incub8nitk',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
     {
       name: 'X (Twitter)',
       url: 'https://twitter.com/incub8event',
       icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>  
       )
     },
     {
       name: 'Instagram',
       url: 'https://www.instagram.com/incub8.nitk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
       icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
       )
     },
    
  ];

  const quickLinks = [
    { name: 'About', href: '#whatisincub8' },
    { name: 'Events', href: '#events-section' },
    { name: 'Speakers', href: '#past-speakers' },
    { name: 'Sponsors', href: '#past-sponsors' },
    { name: 'Gallery', href: '#gallery' }
  ];

  const contactInfo = {
    email: 'incub8.convenor@nitk.edu.in',
    phone: '+91 78922 64359',
    // --- FIX: Added spaces for correct word wrapping ---
    address: "NITK, NH 66, Srinivasnagar, Surathkal, Mangalore, Karnataka - 575025"
  };

  return (
    <footer id="ocean-footer" className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-slate-950 overflow-hidden mt-auto dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
      {/* ... rest of your code is the same ... */}
      <div className="absolute -top-20 md:-top-24 left-0 w-full h-20 md:h-24 z-[1]">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      <div className="relative z-[2] bg-slate-900/90 dark:bg-slate-950/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 py-12 sm:py-16">
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/30 backdrop-blur-sm transition-all duration-300 ease-out hover:bg-blue-500/20 hover:border-blue-500/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20">
                  <img src="/Incub8'25 logo dark bg 1.png" alt="Incub8 Logo" className="h-10 sm:h-12 w-auto" />
                </div>
              </div>
              <p className="text-blue-200/80 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Incub8 is the premier startup and entrepreneurship event that brings together innovators, investors, and industry leaders to shape the future of technology.
              </p>
              <div className="flex flex-row justify-center items-center space-x-3 sm:space-x-4 social-links-container">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-blue-500/10 border border-blue-500/30 rounded-xl text-blue-300 transition-all duration-300 ease-out backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-500/60 hover:text-blue-100 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30" aria-label={`Follow us on ${social.name}`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-blue-300 text-sm transition-all duration-300 ease-out relative inline-block hover:text-blue-100 hover:translate-x-1 before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-300 before:ease-out hover:before:w-full" onClick={handleNavClick}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${contactInfo.email}`} className="text-blue-300 text-sm transition-all duration-300 ease-out relative inline-block hover:text-blue-100 hover:translate-x-1 before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-300 before:ease-out hover:before:w-full">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start gap-3 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-blue-300 text-sm transition-all duration-300 ease-out relative inline-block hover:text-blue-100 hover:translate-x-1 before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-300 before:ease-out hover:before:w-full">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-blue-200/80 text-sm">
                    {contactInfo.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800/30 py-6 sm:py-8">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 text-center">
              <div className="text-blue-200/60 text-xs sm:text-sm px-4 sm:px-0 text-center">
                © {currentYear} Incub8. All rights reserved. Built with passion for innovation.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>
    </footer>
  );
}