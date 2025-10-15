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
  ], []);

  return (
    <section className="py-20 px-4">
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
                  <Image
                    src={exhibition.image}
                    alt={language === 'ko' ? exhibition.titleKo : exhibition.titleEn}
                    width={400}
                    height={300}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
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

          {/* 두 번째 줄: 더어울림 (중앙) */}
          <div className="flex justify-center">
            {exhibitions.slice(2).map((exhibition) => (
              <div
                key={exhibition.id}
                className="cosmic-card overflow-hidden group w-full md:w-1/2"
              >
                {/* 이미지 */}
                <div className="relative w-full bg-black">
                  <Image
                    src={exhibition.image}
                    alt={language === 'ko' ? exhibition.titleKo : exhibition.titleEn}
                    width={1920}
                    height={1080}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
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
        </div>
      </div>
    </section>
  );
});

export default Exhibition;
