import React, { useState } from 'react';
import './Tooltip.css';

interface TooltipProps {
  text: string;
  tooltipText: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, tooltipText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="tooltip-wrapper" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="truncate">{text}</span>
      {isHovered && <div className="tooltip">{tooltipText}</div>}
    </div>
  );
};

export default Tooltip;


