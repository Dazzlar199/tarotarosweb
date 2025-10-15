'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const handleEmailClick = () => {
    // 이메일 클라이언트(Gmail 앱 포함)를 열어서 타로타로스 이메일이 수신자로 자동 입력됨
    window.location.href = 'mailto:tarotaros.team@gmail.com?subject=TAROTAROS 문의';
  };

  const handleInstagramClick = () => {
    // 인스타그램 앱이 설치되어 있으면 앱으로, 없으면 웹으로 DM 창이 열림
    window.open('https://ig.me/m/tarotaros.official', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* 배경 오버레이 (모바일에서 메뉴 닫기용) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        {/* 연락 옵션 메뉴 */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 flex flex-col gap-2 mb-2 animate-fadeIn">
            {/* 이메일 버튼 */}
            <button
              onClick={handleEmailClick}
              className="px-6 py-3 bg-black border border-green-500/30 hover:border-green-500 transition-all"
            >
              <span className="text-xs font-black text-green-400 hover:text-white tracking-widest transition-colors">
                EMAIL
              </span>
            </button>

            {/* 인스타그램 버튼 */}
            <button
              onClick={handleInstagramClick}
              className="px-6 py-3 bg-black border border-green-500/30 hover:border-green-500 transition-all"
            >
              <span className="text-xs font-black text-green-400 hover:text-white tracking-widest transition-colors">
                INSTAGRAM
              </span>
            </button>
          </div>
        )}

        {/* 메인 버튼 */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-black border border-green-500/50 hover:border-green-500 transition-all"
          aria-label="Contact"
        >
          <span className="text-xs font-black text-green-400 tracking-widest">
            {isOpen ? 'CLOSE' : 'CONTACT'}
          </span>
        </button>
      </div>
    </>
  );
}
