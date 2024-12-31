import React from 'react';
import '../styles/snow.css';

export function SnowAnimation() {
  return (
    <div className="snowflakes" aria-hidden="true">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="snowflake">❅</div>
      ))}
      {[...Array(10)].map((_, i) => (
        <div key={i + 10} className="snowflake">❆</div>
      ))}
    </div>
  );
}