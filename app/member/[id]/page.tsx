'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { teamMembers } from '@/data/team';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

export default function MemberPage() {
  const params = useParams();
  const id = params?.id as string;
  const member = teamMembers.find((m) => m.id === id);
  const { language } = useLanguage();

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20 px-4">
      <LanguageToggle />

      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 버튼 */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-green-400 hover:text-white mb-12 transition-colors font-black text-sm tracking-widest"
        >
          <span>←</span>
          <span>BACK</span>
        </Link>

        {/* 프로필 헤더 */}
        <div className="cosmic-card p-10 md:p-14 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* 프로필 이미지 */}
            <div className="w-40 h-40 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-7xl font-black text-black flex-shrink-0">
              {member.name.charAt(0)}
            </div>

            {/* 기본 정보 */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-black mb-3 neon-green tracking-tight">
                {language === 'ko' ? member.name : member.nameEn}
              </h1>
              <p className="text-xl text-gray-500 mb-6 tracking-wider">
                {language === 'ko' ? member.nameEn : member.name}
              </p>

              <div className="inline-block px-6 py-3 bg-black border-2 border-white/20 mb-6">
                <p className="text-white font-black text-sm tracking-wider">
                  {language === 'ko' ? member.role : member.roleEn}
                </p>
              </div>

              <p className="text-gray-400 text-base font-normal">
                {language === 'ko' ? member.description : member.descriptionEn}
              </p>
            </div>
          </div>
        </div>

        {/* 스킬 섹션 */}
        <div className="cosmic-card p-10 mb-8">
          <h2 className="text-3xl font-black mb-8 text-white tracking-tight">SKILLS</h2>
          <div className="flex flex-wrap gap-3">
            {member.skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-black border-2 border-green-500/30 text-green-400 font-black text-sm tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 포트폴리오 섹션 */}
        <div className="cosmic-card p-10">
          <h2 className="text-3xl font-black mb-8 neon-green tracking-tight">PORTFOLIO</h2>

          {member.portfolio && member.portfolio.length > 0 ? (
            <div className="space-y-4">
              {member.portfolio.map((item, index) => (
                <div key={index} className="p-8 bg-black border-2 border-white/10">
                  <h3 className="text-xl font-black text-green-400 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 mb-6 text-sm font-normal">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-green-400 transition-colors font-black text-xs tracking-widest"
                    >
                      <span>VIEW</span>
                      <span>→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-sm font-black tracking-widest mb-2">
                COMING SOON
              </p>
              <p className="text-gray-800 text-xs tracking-wider">
                {language === 'ko' ? '포트폴리오 준비 중' : 'Portfolio in preparation'}
              </p>
            </div>
          )}
        </div>

        {/* 다른 팀원 보기 */}
        <div className="mt-16">
          <h3 className="text-3xl font-black text-center mb-8 text-white tracking-tight">OTHER MEMBERS</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {teamMembers
              .filter((m) => m.id !== member.id)
              .map((otherMember) => (
                <Link
                  key={otherMember.id}
                  href={`/member/${otherMember.id}`}
                  className="p-6 bg-black border-2 border-white/10 hover:border-green-500 transition-all text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-2xl font-black text-black">
                    {otherMember.name.charAt(0)}
                  </div>
                  <p className="text-sm font-black text-white tracking-tight">
                    {language === 'ko' ? otherMember.name : otherMember.nameEn}
                  </p>
                  <p className="text-xs text-gray-600 mt-1 font-bold tracking-wider">
                    {language === 'ko' ? otherMember.role : otherMember.roleEn}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
