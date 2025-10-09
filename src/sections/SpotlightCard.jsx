import { useRef } from 'react';
import './SpotlightCard.css';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }) => {
  const divRef = useRef(null);

  const handleMouseMove = e => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`relative rounded-[1.5rem] border border-[color-mix(in_oklab,var(--incub8-sea),white_20%)] bg-[color-mix(in_oklab,var(--incub8-deep),black_10%)] p-8 overflow-hidden transition-[transform,box-shadow,border-color] duration-[250ms] ease ${className}`}>
      {children}
    </div>
  );
};

export default SpotlightCard;
