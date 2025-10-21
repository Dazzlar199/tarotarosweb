'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useMemo, memo } from 'react';

const SceneGallery = memo(function SceneGallery() {
  const scenes = useMemo(() => [
    { id: 2, src: '/images/scene/s2.png', alt: 'Scene 2', direction: 'right' as const },
    { id: 3, src: '/images/scene/s3.png', alt: 'Scene 3', direction: 'left' as const },
    { id: 4, src: '/images/scene/s4.png', alt: 'Scene 4', direction: 'right' as const },
    { id: 5, src: '/images/scene/user_review.png', alt: 'User Review', direction: 'left' as const },
  ], []);

  const [visibleScenes, setVisibleScenes] = useState<number[]>([]);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = scenes.map((scene, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleScenes((prev) => {
                if (prev.includes(index)) return prev;
                return [...prev, index];
              });
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -10% 0px'
        }
      );

      if (sceneRefs.current[index]) {
        observer.observe(sceneRefs.current[index]!);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [scenes]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
          <span className="text-white">CONTENTS</span>
        </h2>

        {/* 이미지 세로 나열 with 스크롤 애니메이션 */}
        <div className="flex flex-col gap-12">
          {scenes.map((scene, index) => {
            // user_review는 특별한 레이아웃
            if (scene.id === 5) {
              return (
                <div key={scene.id} id="user-review" className="space-y-8 scroll-mt-0">
                  {/* 카테고리 헤더 */}
                  <div className="text-center">
                    <div className="inline-block px-8 py-3 border-2 border-green-500/50 bg-black">
                      <h3 className="text-2xl md:text-3xl font-black text-green-400 tracking-wider">
                        USER REVIEW
                      </h3>
                    </div>
                  </div>

                  {/* 리뷰 컨텐츠 */}
                  <div
                    ref={(el) => { sceneRefs.current[index] = el; }}
                    className={`w-full transition-all duration-1000 ease-out ${
                      visibleScenes.includes(index)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-16'
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* 왼쪽: 이미지 */}
                    <div className="border-2 border-green-500/30 hover:border-green-500/60 transition-all">
                      <Image
                        src={scene.src}
                        alt={scene.alt}
                        width={800}
                        height={600}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-auto"
                      />
                    </div>

                    {/* 오른쪽: 그래프/통계 */}
                    <div className="space-y-6">
                      <h3 className="text-3xl font-black text-green-400 mb-6 tracking-tight">
                        USER FEEDBACK
                      </h3>

                      {/* 통계 항목들 */}
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-bold text-white">몰입감</span>
                            <span className="text-sm font-black text-green-400">97%</span>
                          </div>
                          <div className="w-full bg-black border border-green-500/30 h-3">
                            <div className="bg-gradient-to-r from-green-500 to-green-400 h-full" style={{width: '97%'}}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-bold text-white">스토리 완성도</span>
                            <span className="text-sm font-black text-green-400">95%</span>
                          </div>
                          <div className="w-full bg-black border border-green-500/30 h-3">
                            <div className="bg-gradient-to-r from-green-500 to-green-400 h-full" style={{width: '95%'}}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-bold text-white">비주얼 퀄리티</span>
                            <span className="text-sm font-black text-green-400">92%</span>
                          </div>
                          <div className="w-full bg-black border border-green-500/30 h-3">
                            <div className="bg-gradient-to-r from-green-500 to-green-400 h-full" style={{width: '92%'}}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-bold text-white">재방문 의향</span>
                            <span className="text-sm font-black text-green-400">96%</span>
                          </div>
                          <div className="w-full bg-black border border-green-500/30 h-3">
                            <div className="bg-gradient-to-r from-green-500 to-green-400 h-full" style={{width: '96%'}}></div>
                          </div>
                        </div>
                      </div>

                      {/* 전체 만족도 */}
                      <div className="mt-8 p-6 cosmic-card border-green-500/50">
                        <div className="text-center">
                          <p className="text-sm text-gray-400 mb-2 tracking-wider">전체 만족도</p>
                          <p className="text-5xl font-black text-green-400">95%</p>
                          <p className="text-xs text-gray-500 mt-2 tracking-wide">based on 120+ user reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              );
            }

            // 나머지 이미지들은 기존 레이아웃
            return (
              <div
                key={scene.id}
                ref={(el) => { sceneRefs.current[index] = el; }}
                className={`w-full transition-all duration-1000 ease-out ${
                  visibleScenes.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : scene.direction === 'left'
                    ? 'opacity-0 -translate-x-32'
                    : 'opacity-0 translate-x-32'
                }`}
              >
                <div className="border-2 border-green-500/30 hover:border-green-500/60 transition-all">
                  <Image
                    src={scene.src}
                    alt={scene.alt}
                    width={1920}
                    height={1080}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1920px"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default SceneGallery;
