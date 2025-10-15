'use client';

import { useMemo, memo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const RoadMap = memo(function RoadMap() {
  const { language } = useLanguage();

  const phases = useMemo(() => [
    {
      phase: 'PHASE 1',
      period: '2025-2026',
      titleKo: 'VR 콘텐츠 제작',
      titleEn: 'VR Content Creation',
      descriptionKo: '코즈믹 호러 VR 체험 콘텐츠 "GOD DOES NOT BLINK" 제작 및 출시. 서사와 기술을 결합한 몰입형 인터랙티브 경험 제공.',
      descriptionEn: 'Create and launch cosmic horror VR experience "GOD DOES NOT BLINK". Deliver immersive interactive experience combining narrative and technology.',
      status: 'current' as const
    },
    {
      phase: 'PHASE 2',
      period: '2026-2027',
      titleKo: 'IP 기반 크로스 플랫폼 확장',
      titleEn: 'Cross-Platform IP Expansion',
      descriptionKo: 'IP를 활용한 모바일, 웹 기반 콘텐츠 제작. AI 기술을 접목한 인터랙티브 스토리텔링 확장. 다양한 플랫폼에서 경험 가능한 콘텐츠 생태계 구축.',
      descriptionEn: 'Develop mobile and web-based content utilizing IP. Expand interactive storytelling with AI technology. Build content ecosystem accessible across multiple platforms.',
      status: 'planned' as const
    },
    {
      phase: 'PHASE 3',
      period: '2027+',
      titleKo: '커뮤니티 플랫폼 구축',
      titleEn: 'Community Platform Development',
      descriptionKo: 'Crowd-Sourced 방식의 콘텐츠 제작 플랫폼 구축. 크리에이터와 유저가 함께 만들어가는 인터랙티브 콘텐츠 생태계 완성.',
      descriptionEn: 'Build crowd-sourced content creation platform. Complete interactive content ecosystem co-created by creators and users.',
      status: 'future' as const
    }
  ], []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-8">
          <span className="neon-green">ROADMAP</span>
        </h2>

        {/* 팀 비전 설명 */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-base leading-relaxed text-gray-300 font-normal">
            {language === 'ko'
              ? '타로타로스는 서사와 기술을 결합한 인터랙티브 콘텐츠 제작팀입니다. VR과 AI 기술을 활용한 콘텐츠를 제작하며, IP 기반 크로스 플랫폼 확장을 지향합니다. 나아가 커뮤니티 기반 Crowd-Sourced 플랫폼 구축을 목표로 합니다.'
              : 'TAROTAROS is an interactive content creative team that combines narrative and technology. We create VR and AI-powered content with a focus on cross-platform IP expansion. Our long-term goal is to build a community-driven content development platform.'
            }
          </p>
        </div>

        {/* 로드맵 타임라인 */}
        <div className="relative">
          {/* 세로 라인 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500 via-green-500/50 to-transparent hidden md:block"></div>

          {/* Phase 카드들 */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 카드 */}
                <div className="w-full md:w-5/12">
                  <div className={`cosmic-card p-8 ${
                    phase.status === 'current'
                      ? 'border-green-500 shadow-lg shadow-green-500/20'
                      : 'border-green-500/20'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-black text-green-400 tracking-tight">
                        {phase.phase}
                      </h3>
                      <span className="text-xs text-gray-500 tracking-widest">
                        {phase.period}
                      </span>
                    </div>
                    <h4 className="text-xl font-black text-white mb-3 tracking-tight">
                      {language === 'ko' ? phase.titleKo : phase.titleEn}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed font-normal">
                      {language === 'ko' ? phase.descriptionKo : phase.descriptionEn}
                    </p>
                    {phase.status === 'current' && (
                      <div className="mt-4 inline-block px-4 py-2 bg-green-500/20 border border-green-500/50">
                        <span className="text-xs text-green-400 font-black tracking-wider">
                          {language === 'ko' ? '진행 중' : 'IN PROGRESS'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 중앙 점 (데스크탑만) */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-4 h-4 rounded-full ${
                    phase.status === 'current'
                      ? 'bg-green-400 shadow-lg shadow-green-400/50'
                      : 'bg-green-500/50'
                  }`}></div>
                </div>

                {/* 빈 공간 (정렬용) */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default RoadMap;
