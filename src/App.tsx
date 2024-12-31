import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SnowAnimation } from './components/SnowAnimation';
import { NewYearAnimations } from './components/NewYearAnimations';
import { GreetingMessage } from './components/GreetingMessage';
import { BackgroundMusic } from './components/BackgroundMusic';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const { name = 'Mehmon' } = useParams();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const newYear = new Date(2025, 0, 1);
      const diff = newYear.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&q=80')"
        }}
      />
      <div className="relative min-h-screen z-10">
        <BackgroundMusic />
        <SnowAnimation />
        <NewYearAnimations />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 py-20 text-center text-white">
            <h1 className="text-6xl font-bold mb-8 text-yellow-400 animate-pulse">
              HAPPY
            </h1>
            <h2 className="text-5xl font-bold mb-16 text-yellow-400 animate-pulse">
              NEW YEAR
            </h2>
            
            <div className="text-4xl font-bold mb-12">
              QOLGAN VAQT
            </div>
            
            <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
              <TimeBox value={timeLeft.days} label="Kun" />
              <TimeBox value={timeLeft.hours} label="Soat" />
              <TimeBox value={timeLeft.minutes} label="Minut" />
              <TimeBox value={timeLeft.seconds} label="Soniya" />
            </div>

            <GreetingMessage name={name} />
          </div>
        </div>
      </div>
    </>
  );
}

function TimeBox({ value, label }: { value: number, label: string }) {
  return (
    <div className="bg-black bg-opacity-70 rounded-lg p-6">
      <div className="text-5xl font-bold mb-2">{value}</div>
      <div className="text-xl">{label}</div>
    </div>
  );
}

export default App;