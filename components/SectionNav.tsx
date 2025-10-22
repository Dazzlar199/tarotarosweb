'use client';

import { useState, useEffect, memo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const sections = [
  { id: 'hero', nameKo: '메인', nameEn: 'HERO' },
  { id: 'project', nameKo: '프로젝트', nameEn: 'PROJECT' },
  { id: 'gallery', nameKo: '콘텐츠', nameEn: 'CONTENTS' },
  { id: 'user-review', nameKo: '리뷰', nameEn: 'REVIEW' },
  { id: 'roadmap', nameKo: '로드맵', nameEn: 'ROADMAP' },
  { id: 'team-intro', nameKo: '팀소개', nameEn: 'TEAM' },
  { id: 'exhibition', nameKo: '전시', nameEn: 'EXHIBITION' },
  { id: 'members', nameKo: '멤버', nameEn: 'MEMBERS' },
];

const SectionNav = memo(function SectionNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let rafId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (rafId) {
          cancelAnimationFrame(rafId);
        }

        rafId = requestAnimationFrame(() => {
          // 현재 보이는 섹션들 중 가장 위에 있는 것을 찾기
          const visibleEntries = entries.filter(entry => entry.isIntersecting);

          if (visibleEntries.length > 0) {
            // 가장 위에 있는 섹션 찾기
            const topEntry = visibleEntries.reduce((prev, current) => {
              return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current;
            });

            setActiveSection(topEntry.target.id);
          }
        });
      },
      {
        threshold: [0, 0.3],
        rootMargin: '-15% 0px -60% 0px'
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      observer.disconnect();
    };
  }, [mounted]);

  const scrollToSection = (id: string) => {
    setActiveSection(id); // 즉시 활성화
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-3">
          {sections.map(({ id, nameKo, nameEn }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`group flex items-center gap-2.5 transition-all duration-200 ${
                activeSection === id ? 'opacity-100' : 'opacity-30 hover:opacity-60'
              }`}
              aria-label={`Go to ${language === 'ko' ? nameKo : nameEn} section`}
            >
              {/* 점 인디케이터 */}
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  activeSection === id
                    ? 'bg-green-400 scale-150 shadow-[0_0_12px_rgba(34,197,94,1)]'
                    : 'bg-white/40 scale-100 group-hover:bg-green-400/50'
                }`}
              />

              {/* 텍스트 레이블 */}
              <span
                className={`text-[10px] font-black tracking-[0.15em] uppercase transition-all duration-200 ${
                  activeSection === id ? 'text-green-400' : 'text-gray-600 group-hover:text-gray-400'
                }`}
              >
                {language === 'ko' ? nameKo : nameEn}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-black/95 backdrop-blur-sm border-t border-white/10">
        <div className="flex justify-around items-center py-2 px-2 overflow-x-auto">
          {sections.map(({ id, nameKo, nameEn }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex flex-col items-center gap-1 min-w-[60px] py-2 px-1 transition-all duration-200 ${
                activeSection === id ? 'opacity-100' : 'opacity-40'
              }`}
              aria-label={`Go to ${language === 'ko' ? nameKo : nameEn} section`}
            >
              {/* 점 인디케이터 */}
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  activeSection === id
                    ? 'bg-green-400 shadow-[0_0_8px_rgba(34,197,94,1)]'
                    : 'bg-white/40'
                }`}
              />

              {/* 텍스트 레이블 */}
              <span
                className={`text-[9px] font-black tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${
                  activeSection === id ? 'text-green-400' : 'text-gray-500'
                }`}
              >
                {language === 'ko' ? nameKo : nameEn}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
});

export default SectionNav;
