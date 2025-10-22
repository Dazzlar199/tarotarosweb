'use client';

import { projectInfo } from '@/data/team';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectInfo() {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-2">
          <span className="neon-green">PROJECT</span>
        </h2>
        <p className="text-sm text-center text-gray-500 mb-16 tracking-widest">
          {language === 'ko' ? '프로젝트 소개' : 'About Project'}
        </p>

        {/* 프로젝트 설명 */}
        <div className="cosmic-card p-10 md:p-14">
          {language === 'ko' ? (
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-300 font-normal">
                GOD DOES NOT BLINK는 극한 상황에서의 선택을 통해 자신을 마주하는 코즈믹 호러 VR 체험 콘텐츠입니다.
              </p>
              <p className="text-base leading-relaxed text-gray-300 font-normal">
                사용자는 안내자 미미르와 함께 세 가지 딜레마에 직면합니다.
              </p>
              <p className="text-base leading-relaxed text-gray-300 font-normal">
                모든 선택은 기록되고 분석되며, 최종적으로 당신을 지켜본 존재와 마주하게 됩니다.
              </p>
              <p className="text-base leading-relaxed text-gray-300 font-normal">
                선택에 따른 유형 분석 카드 형식의 8가지 성향 진단 결과가 제공됩니다.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-300 font-normal">
                GOD DOES NOT BLINK is a cosmic horror VR experience where users face extreme dilemmas.
              </p>
              <p className="text-base leading-relaxed text-gray-300 font-normal">
                Guided by Mimir, participants confront three critical choices.
              </p>
              <p className="text-base leading-relaxed text-gray-300 font-normal">
                Every decision is recorded and analyzed, ultimately leading to an encounter with the entity that has been watching.
              </p>
              <p className="text-base leading-relaxed text-gray-300 font-normal">
                Results are presented as one of eight personality analysis cards based on your choices.
              </p>
            </div>
          )}
        </div>

        {/* 프로젝트 영상 */}
        <div className="mt-16 mb-16">
          <div className="cosmic-card overflow-hidden bg-black">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <video
                className="w-full h-full object-contain"
                controls
                preload="auto"
              >
                <source src="/images/tarovideo.mp4" type="video/mp4" />
                {language === 'ko' ? '브라우저가 비디오를 지원하지 않습니다.' : 'Your browser does not support the video tag.'}
              </video>
            </div>
          </div>
        </div>

        {/* 특징 요약 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-8 bg-black border-2 border-green-500/20">
            <h4 className="text-2xl font-black text-green-400 mb-2 tracking-tight">IMMERSIVE</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              {language === 'ko' ? '몰입형 성향 진단' : 'Immersive Personality Test'}
            </p>
          </div>
          <div className="text-center p-8 bg-black border-2 border-green-500/20">
            <h4 className="text-2xl font-black text-white mb-2 tracking-tight">DILEMMA</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              {language === 'ko' ? '극한의 선택 상황' : 'Extreme Choice Situations'}
            </p>
          </div>
          <div className="text-center p-8 bg-black border-2 border-green-500/20">
            <h4 className="text-2xl font-black text-green-400 mb-2 tracking-tight">RESULT</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              {language === 'ko' ? '8가지 결과 카드' : '8 Result Cards'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
