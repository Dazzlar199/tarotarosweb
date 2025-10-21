'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 md:top-8 md:right-8 z-50 px-3 py-2 md:px-6 md:py-3 bg-black border-2 border-green-500 text-green-400 font-black text-xs md:text-sm tracking-widest hover:bg-green-500 hover:text-black transition-all"
    >
      {language === 'ko' ? 'ENG' : 'KOR'}
    </button>
  );
}
