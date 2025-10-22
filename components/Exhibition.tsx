'use client';

import Image from 'next/image';
import { useMemo, memo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Exhibition = memo(function Exhibition() {
  const { language } = useLanguage();

  const exhibitions = useMemo(() => [
    {
      id: 1,
      image: '/images/showcase.jpeg',
      titleKo: 'NCA 2기 SHOWCASE',
      titleEn: 'NCA 2nd SHOWCASE',
      date: '2025.08.21 ~ 22',
      locationKo: '홍릉콘텐츠인재캠퍼스 (서울특별시 동대문구 회기로 66)',
      locationEn: 'Hongneung Contents Campus (66 Hoegi-ro, Dongdaemun-gu, Seoul)',
      url: 'https://www.donga.com/news/Culture/article/all/20250904/132321329/1',
    },
    {
      id: 2,
      image: '/images/kkal.jpeg',
      titleKo: '깔,깔,깔',
      titleEn: 'Kkal, Kkal, Kkal',
      date: '2025.08.27 ~ 09.02',
      locationKo: '스페이스 458 (서울 마포구 동교로17길 37)',
      locationEn: 'Space 458 (37 Donggyo-ro 17-gil, Mapo-gu, Seoul)',
      url: 'https://www.ajunews.com/view/20250819110714645',
    },
    {
      id: 3,
      image: '/images/theoulim.png',
      titleKo: '더어울림(Oulim) in Seoul',
      titleEn: 'Oulim in Seoul',
      date: '2025.10.23 ~ 24',
      locationKo: 'SJ쿤스트할레 (서울 강남구 언주로148길 5)',
      locationEn: 'SJ Kunsthalle (148-gil 5, Eonju-ro, Gangnam-gu, Seoul)',
    },
    {
      id: 4,
      isComingSoon: true,
      titleKo: 'COMING SOON',
      titleEn: 'COMING SOON',
      date: 'TBD',
      locationKo: '공개 예정',
      locationEn: 'To Be Announced',
    },
  ], []);

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
          <span className="text-white">EXHIBITION</span>
        </h2>

        {/* 전시 그리드 */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {/* 첫 줄: NCA SHOWCASE와 깔,깔,깔 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {exhibitions.slice(0, 2).map((exhibition) => (
              <div
                key={exhibition.id}
                className="cosmic-card overflow-hidden group w-full flex flex-col"
              >
                {/* 이미지 */}
                <div className="relative w-full bg-black h-[400px] flex items-center justify-center">
                  {exhibition.image && (
                    <Image
                      src={exhibition.image}
                      alt={language === 'ko' ? exhibition.titleKo : exhibition.titleEn}
                      width={400}
                      height={300}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* 정보 */}
                <div className="p-6 bg-black">
                  <h3 className="text-xl font-black text-white mb-2 tracking-tight">
                    {language === 'ko' ? exhibition.titleKo : exhibition.titleEn}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-green-400 font-black">
                      {exhibition.date}
                    </span>
                  </div>
                  {exhibition.locationKo && (
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      {language === 'ko' ? exhibition.locationKo : exhibition.locationEn}
                    </p>
                  )}
                  {exhibition.url && (
                    <a
                      href={exhibition.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/50 hover:bg-green-500/30 hover:border-green-500 transition-all"
                    >
                      <span className="text-xs text-green-400 font-black tracking-wider">
                        {language === 'ko' ? '기사보기' : 'READ ARTICLE'}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 두 번째 줄: 더어울림 + Coming Soon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {exhibitions.slice(2).map((exhibition) => (
              <div
                key={exhibition.id}
                className="cosmic-card overflow-hidden group w-full flex flex-col"
              >
                {/* 이미지 또는 Coming Soon 플레이스홀더 */}
                <div className={`relative w-full h-[400px] flex items-center justify-center ${
                  exhibition.isComingSoon
                    ? 'bg-gradient-to-br from-black via-gray-900 to-black'
                    : 'bg-black'
                }`}>
                  {exhibition.isComingSoon ? (
                    // Coming Soon 박스
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      {/* 신비로운 배경 효과 */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/30 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
                      </div>

                      {/* 물음표 아이콘 */}
                      <div className="relative mb-6">
                        <div className="text-8xl font-black text-green-400/20 group-hover:text-green-400/40 transition-colors">
                          ?
                        </div>
                      </div>

                      {/* Coming Soon 텍스트 */}
                      <h3 className="text-4xl font-black text-white mb-4 tracking-tight group-hover:text-green-400 transition-colors">
                        COMING SOON
                      </h3>

                      {/* 장식선 */}
                      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
                    </div>
                  ) : exhibition.image ? (
                    // 일반 전시 이미지
                    <Image
                      src={exhibition.image}
                      alt={language === 'ko' ? exhibition.titleKo : exhibition.titleEn}
                      width={400}
                      height={300}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}
                </div>

                {/* 정보 */}
                <div className="p-6 bg-black">
                  <h3 className="text-xl font-black text-white mb-2 tracking-tight">
                    {language === 'ko' ? exhibition.titleKo : exhibition.titleEn}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-sm font-black ${
                      exhibition.isComingSoon ? 'text-gray-500' : 'text-green-400'
                    }`}>
                      {exhibition.date}
                    </span>
                  </div>
                  {exhibition.locationKo && (
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      {language === 'ko' ? exhibition.locationKo : exhibition.locationEn}
                    </p>
                  )}
                  {exhibition.url && (
                    <a
                      href={exhibition.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/50 hover:bg-green-500/30 hover:border-green-500 transition-all"
                    >
                      <span className="text-xs text-green-400 font-black tracking-wider">
                        {language === 'ko' ? '기사보기' : 'READ ARTICLE'}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Exhibition;
