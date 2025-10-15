'use client';

import Image from 'next/image';
import { projectInfo } from '@/data/team';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">
      {/* 배경 장식 효과 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* 메인 타이틀 */}
        <h1 className="hero-title mb-6" style={{ fontWeight: 400 }}>
          <span className="block text-white">GOD DOES NOT</span>
          <span className="block neon-green">BLINK</span>
        </h1>

        {/* 서브타이틀 */}
        <p className="text-xl md:text-2xl font-black text-white mb-16 tracking-widest">
          <span className="glitch-text" data-text={projectInfo.subtitle}>
            {projectInfo.subtitle}
          </span>
        </p>

        {/* 스펙 정보 - 로고 이미지 */}
        <div className="flex flex-wrap justify-center items-center gap-20 md:gap-24 mb-20">
          {/* Meta Quest 3 Logo */}
          <div className="relative flex flex-col items-center">
            <Image
              src="/images/scene/meta-logo.png"
              alt="Meta Quest 3"
              width={120}
              height={60}
              priority
              sizes="(max-width: 768px) 100px, 120px"
              className="object-contain brightness-150"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))',
                height: 'auto',
                width: '120px'
              }}
            />
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mt-4"
                 style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.4)' }}>
            </div>
          </div>

          {/* Unreal Engine Logo */}
          <div className="relative flex flex-col items-center">
            <Image
              src="/images/scene/unreal_logo.png"
              alt="Unreal Engine"
              width={120}
              height={60}
              priority
              sizes="(max-width: 768px) 100px, 120px"
              className="object-contain brightness-150"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))',
                height: 'auto',
                width: '120px'
              }}
            />
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mt-4"
                 style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.4)' }}>
            </div>
          </div>

          {/* Blender Logo */}
          <div className="relative flex flex-col items-center">
            <Image
              src="/images/scene/blender_logo.png"
              alt="Blender"
              width={170}
              height={85}
              priority
              sizes="(max-width: 768px) 140px, 170px"
              className="object-contain brightness-150"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))',
                height: 'auto',
                width: '170px'
              }}
            />
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mt-4"
                 style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.4)' }}>
            </div>
          </div>

          {/* AI Tech Logo */}
          <div className="relative flex flex-col items-center">
            <Image
              src="/images/scene/aitech_logo.png"
              alt="AI Tech"
              width={150}
              height={75}
              priority
              sizes="(max-width: 768px) 120px, 150px"
              className="object-contain brightness-150"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))',
                height: 'auto',
                width: '150px'
              }}
            />
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mt-4"
                 style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.4)' }}>
            </div>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs text-gray-600 uppercase tracking-widest">Scroll</p>

          {/* 마우스 아이콘 */}
          <div className="mouse-scroll">
            <div className="mouse">
              <div className="mouse-wheel"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
