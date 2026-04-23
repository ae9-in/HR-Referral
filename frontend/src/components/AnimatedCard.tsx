"use client";

import React from 'react';
import './AnimatedCard.css';

interface AnimatedCardProps {
  image: string;
  title: string;
  content: string;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  image, 
  title, 
  content 
}) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="card-img-container">
          <img src={image} alt={title} />
        </div>
        <div className="content-box">
          <span className="card-title">{title}</span>
          <p className="card-content">
            {content}
          </p>
          <div className="see-more">
            <span>Explore Now</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
