import React, { useEffect, useRef } from 'react';

export default function AnimatedBorder({ children, className = '', style = {} }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseEnter = () => {
      if (container) {
        container.style.setProperty('--border-opacity', '1');
      }
    };

    const handleMouseLeave = () => {
      if (container) {
        container.style.setProperty('--border-opacity', '0');
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`animated-border-container ${className}`}
      style={{
        position: 'relative',
        width: '280px',
        height: '280px',
        borderRadius: '8px',
        background: 'transparent',
        ...style
      }}
    >
      {/* Animated border */}
      <div
        style={{
          position: 'absolute',
          inset: '-2px',
          borderRadius: '10px',
          background: 'linear-gradient(45deg, var(--incub8-coral), var(--incub8-sea), var(--incub8-sand), var(--incub8-wood))',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 3s ease infinite',
          opacity: 'var(--border-opacity, 0)',
          transition: 'opacity 0.3s ease',
          zIndex: 1
        }}
      />
      
      {/* Glow effect */}
      <div
        style={{
          position: 'absolute',
          inset: '-4px',
          borderRadius: '12px',
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 106, 61, 0.2), transparent 40%)',
          opacity: 'var(--border-opacity, 0)',
          transition: 'opacity 0.3s ease',
          zIndex: 0
        }}
      />
      
      {/* Content */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '8px',
          background: 'transparent',
          zIndex: 2,
          overflow: 'hidden'
        }}
      >
        {children}
      </div>
      
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
