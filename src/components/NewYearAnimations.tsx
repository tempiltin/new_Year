import React from 'react';
import '../styles/animations.css';

export function NewYearAnimations() {
  return (
    <div className="new-year-decorations">
      <div className="fireworks">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`firework-${i + 1}`} />
        ))}
      </div>
      <div className="floating-items">
        <span className="bell">🔔</span>
        <span className="gift">🎁</span>
        <span className="star">⭐</span>
        <span className="tree">🎄</span>
      </div>
    </div>
  );
}