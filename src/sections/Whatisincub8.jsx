import React, { useEffect, useRef, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal';

export default function Whatisincub8() {
  return (
    <div style={{
      padding: '80px 20px',
      textAlign: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'var(--incub8-sand)',
        marginBottom: '2rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
      }}>
        What is Incub8?
      </h1>
      
        <div style={{ maxWidth: '800px', textAlign: 'center', color: 'white' }}>
         <ScrollReveal
           baseOpacity={0.1}
           enableBlur={true}
           baseRotation={3}
           blurStrength={4}
           containerClassName="custom-scroll-reveal"
           textClassName="custom-scroll-reveal-text"
           rotationEnd="bottom bottom"
           wordAnimationEnd="top 35%"
         >
           {`Incub8, one of the flagship events of NITK, is an innovative platform designed as a laboratory for aspiring entrepreneurs.
           
           Participants will develop key venture-building skills, refine business ideas, and receive guidance from industry experts.
           
           Through hands-on activities and real-world simulations, Incub8 provides practical tools and mentorship to support entrepreneurial growth.
           
           The event fosters collaboration and equips individuals to turn their entrepreneurial ambitions into successful ventures.`}
         </ScrollReveal>
       </div>
    </div>
  );
}
