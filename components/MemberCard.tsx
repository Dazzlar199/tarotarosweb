'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TeamMember } from '@/data/team';
import { useLanguage } from '@/contexts/LanguageContext';
import { memo, useState, useEffect } from 'react';

interface MemberCardProps {
  member: TeamMember;
  showDetail?: boolean;
}

const MemberCard = memo(function MemberCard({ member, showDetail = true }: MemberCardProps) {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 김찬주는 카카오톡 버튼 추가
  const isKimChanJoo = member.id === 'kim-chan-joo';

  const handleKakaoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('http://pf.kakao.com/_gxgbxcn/friend', '_blank', 'noopener,noreferrer');
  };

  const currentLang = mounted ? language : 'ko';

  if (!showDetail) {
    return (
      <div className="cosmic-card p-8 h-full">
        {/* 프로필 이미지 영역 */}
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-4xl font-black text-black overflow-hidden relative">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{member.name.charAt(0)}</span>
          )}
        </div>

        {/* 이름 */}
        <h3 className="text-2xl font-black text-center mb-2 tracking-tight">
          {currentLang === 'ko' ? member.name : member.nameEn}
        </h3>
        <p className="text-sm text-gray-500 text-center mb-6 tracking-wider">
          {currentLang === 'ko' ? member.nameEn : member.name}
        </p>

        {/* 역할 */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-2 bg-black border border-white/20 text-white font-bold text-xs tracking-wider">
            {currentLang === 'ko' ? member.role : member.roleEn}
          </span>
        </div>

        {/* 스킬 태그 */}
        <div className="flex flex-wrap gap-2 justify-center">
          {member.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-black border border-green-500/30 text-green-400 text-xs font-bold tracking-wide"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link href={`/member/${member.id}`}>
      <div className="cosmic-card p-8 h-full cursor-pointer group">
        {/* 프로필 이미지 영역 */}
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-4xl font-black text-black overflow-hidden relative">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{member.name.charAt(0)}</span>
          )}
        </div>

        {/* 이름 */}
        <h3 className="text-2xl font-black text-center mb-2 group-hover:text-green-400 transition-colors tracking-tight">
          {currentLang === 'ko' ? member.name : member.nameEn}
        </h3>
        <p className="text-sm text-gray-500 text-center mb-6 tracking-wider">
          {currentLang === 'ko' ? member.nameEn : member.name}
        </p>

        {/* 역할 */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-2 bg-black border border-white/20 text-white font-bold text-xs tracking-wider">
            {currentLang === 'ko' ? member.role : member.roleEn}
          </span>
        </div>

        {/* 김찬주 개인 웹사이트 링크 */}
        {isKimChanJoo && (
          <div className="text-center mb-6">
            <span className="text-xs text-gray-500">link : </span>
            <a
              href="https://dazzlar.dev/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-green-400 hover:text-white transition-colors tracking-wide"
            >
              dazzlar.dev
            </a>
          </div>
        )}

        {/* 스킬 태그 */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {member.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-black border border-green-500/30 text-green-400 text-xs font-bold tracking-wide"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* 설명 */}
        <p className="text-gray-500 text-xs text-center line-clamp-2 font-normal">
          {currentLang === 'ko' ? member.description : member.descriptionEn}
        </p>

        {/* 김찬주 카카오톡 버튼 */}
        {isKimChanJoo && (
          <div className="mt-6 text-center">
            <button
              onClick={handleKakaoClick}
              className="px-4 py-2 bg-black border border-yellow-400/50 hover:border-yellow-400 transition-all"
            >
              <span className="text-xs font-black text-yellow-400 hover:text-white tracking-widest transition-colors">
                KAKAO TALK
              </span>
            </button>
          </div>
        )}

        {/* 더보기 인디케이터 */}
        <div className="mt-8 text-center">
          <span className="text-green-400 text-xs font-black tracking-widest group-hover:text-white transition-colors">
            VIEW →
          </span>
        </div>
      </div>
    </Link>
  );
});

export default MemberCard;
