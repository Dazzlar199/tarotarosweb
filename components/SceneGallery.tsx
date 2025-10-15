'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useMemo, memo } from 'react';

const SceneGallery = memo(function SceneGallery() {
  const scenes = useMemo(() => [
    { id: 1, src: '/images/scene/s1.png', alt: 'Scene 1', direction: 'left' as const },
    { id: 2, src: '/images/scene/s2.png', alt: 'Scene 2', direction: 'right' as const },
    { id: 3, src: '/images/scene/s3.png', alt: 'Scene 3', direction: 'left' as const },
    { id: 4, src: '/images/scene/s4.png', alt: 'Scene 4', direction: 'right' as const },
  ], []);

  const [visibleScenes, setVisibleScenes] = useState<number[]>([]);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = scenes.map((scene, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleScenes((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (sceneRefs.current[index]) {
        observer.observe(sceneRefs.current[index]!);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
          <span className="text-white">CONTENTS</span>
        </h2>

        {/* 이미지 세로 나열 with 스크롤 애니메이션 */}
        <div className="flex flex-col gap-12">
          {scenes.map((scene, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
});

export default SceneGallery;
