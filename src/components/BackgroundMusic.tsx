import React, { useEffect } from 'react';

export function BackgroundMusic() {
  useEffect(() => {
    const audio = new Audio('/new-year-music.mp3');
    audio.loop = true;
    
    const playMusic = () => {
      audio.play().catch(e => console.log('Audio autoplay was prevented'));
      document.removeEventListener('click', playMusic);
    };

    // Try to play automatically
    audio.play().catch(() => {
      // If autoplay fails, play on first user interaction
      document.addEventListener('click', playMusic);
    });

    return () => {
      audio.pause();
      audio.src = '';
      document.removeEventListener('click', playMusic);
    };
  }, []);

  return null;
}