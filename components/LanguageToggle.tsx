'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-8 right-8 z-50 px-6 py-3 bg-black border-2 border-green-500 text-green-400 font-black text-sm tracking-widest hover:bg-green-500 hover:text-black transition-all"
    >
      {language === 'ko' ? 'ENG' : 'KOR'}
    </button>
  );
}
