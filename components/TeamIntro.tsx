'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TeamIntro() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('team.tarotaros@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* 로고 이미지 */}
        <div className="flex justify-center mb-12">
          <Image
            src="/images/logo.png"
            alt="TAROTAROS Logo"
            width={350}
            height={140}
            className="object-contain"
            priority
          />
        </div>

        <h2 className="text-5xl md:text-7xl font-black mb-4">
          <span className="text-pink-500" style={{ textShadow: '0 0 30px rgba(236, 72, 153, 0.6)' }}>TAROTAROS</span>
        </h2>
        <p className="text-sm text-gray-500 tracking-[0.3em] mb-12">TEAM</p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <button
            onClick={copyEmail}
            className="cosmic-card px-8 py-4 hover:border-green-500/60 transition-all cursor-pointer"
          >
            <span className="text-sm text-gray-300 tracking-wide">
              {copied ? (language === 'ko' ? '복사됨!' : 'Copied!') : 'team.tarotaros@gmail.com'}
            </span>
          </button>
          <a
            href="https://www.instagram.com/team_tarotaros"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-card px-8 py-4 hover:border-green-500/60 transition-all"
          >
            <span className="text-sm text-gray-300 tracking-wide">
              @team_tarotaros
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
