'use client'

import { useState } from "react";

interface AccordionProps {
    title: string;
    content: React.ReactNode;
  }
  
  const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="accordion">
        <div className="accordion-header" onClick={toggleAccordion}>
          <div className="accordion-title">{title}</div>
          <div className={`accordion-icon ${isExpanded ? 'expanded' : ''}`}>+</div>
        </div>
        {isExpanded && <div className="accordion-content">{content}</div>}
      </div>
    )
}
  
export default Accordion;