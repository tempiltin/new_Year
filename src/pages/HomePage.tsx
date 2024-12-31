import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold mb-8 text-center">Yangi Yil Tabrik</h1>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl mb-8">
            Yangi yil tabrigini yuborish uchun ismingizni kiriting
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Ismingizni kiriting"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
              id="nameInput"
            />
            <button
              onClick={() => {
                const name = (document.getElementById('nameInput') as HTMLInputElement).value;
                window.location.href = `/#/happy/${name || 'Mehmon'}`;
              }}
              className="w-full bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition"
            >
              Tabrikni Ko'rish
            </button>
          </div>
          <div className="mt-8">
            <Link to="/privacy" className="text-yellow-400 hover:text-yellow-300">
              Maxfiylik Siyosati
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}