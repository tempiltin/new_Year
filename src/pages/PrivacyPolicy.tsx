import React from 'react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-8">Maxfiylik Siyosati</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Umumiy ma'lumot</h2>
              <p>
                Ushbu maxfiylik siyosati foydalanuvchilarning shaxsiy ma'lumotlarini himoya qilish va ulardan foydalanish tartibini belgilaydi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Ma'lumotlardan foydalanish</h2>
              <p>
                Biz sizning ismingizdan faqat tabrik xabarini shaxsiylashtirish uchun foydalanamiz. Boshqa hech qanday ma'lumot saqlanmaydi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Cookie-fayllar</h2>
              <p>
                Saytimiz cookie-fayllardan foydalanmaydi va foydalanuvchi ma'lumotlarini saqlamaydi.
              </p>
            </section>
          </div>

          <div className="mt-8">
            <Link to="/" className="text-yellow-400 hover:text-yellow-300">
              Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}