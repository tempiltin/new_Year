import React from 'react';
import '../styles/greeting.css';

interface GreetingMessageProps {
  name: string;
}

export function GreetingMessage({ name }: GreetingMessageProps) {
  return (
    <div className="greeting-message">
      <p className="fade-in-text">
        Qadirdonim {name}! men sizni kirib kelayotgan yangi yil bayrami bilan chin yurakdan muborakbod etaman
      </p>
      <p className="fade-in-text delay-1">
        Yangi yil eshikni qoqmoqda, orzular va umidlarimizga qanot beradigan yangi sahifa ochilmoqda! 
        Ushbu yil hayotingizga tinchlik, baxt va omad olib kelsin. Har bir kuningiz quvonch va yangi 
        imkoniyatlar bilan to'lsin.
      </p>
      <p className="fade-in-text delay-2">
        2024-yilda barcha orzularingiz ro'yobga chiqishini, ishlaringizda ulkan zafarlar va oilangizda 
        doimo farovonlik bo'lishini tilayman. Yaqinlaringiz bilan totuvlikda, sog'lik-salomatlikda yashang.
      </p>
      <p className="fade-in-text delay-3">
        Keling, eski yilni minnatdorlik bilan kuzataylik va yangi yilga chin qalbimizdan yaxshi niyatlar 
        bilan qadam qo'yaylik!
      </p>
      <p className="fade-in-text delay-4">
        Yangi Yil Muborak bo'lsin! 🌟
      </p>
      <p className="fade-in-text delay-5">
        Hurmat bilan,<br/>
        Tempiltin
      </p>
    </div>
  );
}