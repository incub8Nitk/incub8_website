import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Whatisincub8() {
  return (
    <div id="whatisincub8" style={{
      padding: '40px 20px 20px', // Reduced top padding from 80px to 40px, bottom from 10px to 20px
      textAlign: 'center',
      maxWidth: '1200px', // Increased width for the content container
      margin: '0 auto', // Centers the content container
      minHeight: '70vh', // Reduced from 100vh to 70vh
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'var(--incub8-sand)', // Ensures the color is applied
        marginBottom: '2rem',
        textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
      }}>
        What is Incub8?
      </h1>
      
      <div 
        className="scroll-reveal-container" // Add this class for CSS optimizations
        style={{ 
          maxWidth: '100%', // Allows text to take the full width of its parent (1200px)
          textAlign: 'center', 
          color: 'white' 
      }}>
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={3} // High rotation for dramatic effect
          blurStrength={4} // High blur for dramatic effect
          containerClassName="custom-scroll-reveal"
          textClassName="custom-scroll-reveal-text"
          rotationEnd="bottom bottom"
          wordAnimationEnd="top 35%"
        >
          {`Incub8, one of the flagship events of NITK, is an innovative platform designed as a laboratory for aspiring entrepreneurs. Participants will develop key venture-building skills, refine business ideas, and receive guidance from industry experts.

Through hands-on activities and real-world simulations, Incub8 provides practical tools and mentorship to support entrepreneurial growth. The event fosters collaboration and equips individuals to turn their entrepreneurial ambitions into successful ventures.`}
        </ScrollReveal>
      </div>
    </div>
  );
}