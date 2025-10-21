import Image from 'next/image';
import Hero from '@/components/Hero';
import ProjectInfo from '@/components/ProjectInfo';
import SceneGallery from '@/components/SceneGallery';
import RoadMap from '@/components/RoadMap';
import TeamIntro from '@/components/TeamIntro';
import MemberCard from '@/components/MemberCard';
import Exhibition from '@/components/Exhibition';
import LanguageToggle from '@/components/LanguageToggle';
import FloatingContact from '@/components/FloatingContact';
import SectionNav from '@/components/SectionNav';
import { teamMembers, supportMembers, supervisors } from '@/data/team';

export default function Home() {
  return (
    <main>
      {/* Language Toggle */}
      <LanguageToggle />

      {/* Floating Contact Button */}
      <FloatingContact />

      {/* Section Navigation */}
      <SectionNav />

      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>

      {/* Project Info Section */}
      <div id="project">
        <ProjectInfo />
      </div>

      {/* Scene Gallery Section */}
      <div id="gallery">
        <SceneGallery />
      </div>

      {/* RoadMap Section */}
      <div id="roadmap">
        <RoadMap />
      </div>

      {/* Team Intro Section */}
      <div id="team-intro">
        <TeamIntro />
      </div>

      {/* Exhibition Section */}
      <div id="exhibition">
        <Exhibition />
      </div>

      {/* Team Members Grid */}
      <section id="members" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-2">
            <span className="text-white">TEAM</span>
          </h2>
          <p className="text-sm text-center text-gray-500 mb-16 tracking-widest">MEMBERS</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Support Members Section */}
      <section id="support-members" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-2">
            <span className="text-green-400">SUPPORT</span>
          </h2>
          <p className="text-sm text-center text-gray-500 mb-16 tracking-widest">MEMBERS</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supportMembers.map((member) => (
              <MemberCard key={member.id} member={member} showDetail={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Supervisor Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-2">
            <span className="text-green-400">SUPERVISOR</span>
          </h2>
          <p className="text-sm text-center text-gray-500 mb-16 tracking-widest">MENTORS</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supervisors.map((supervisor) => (
              <MemberCard key={supervisor.id} member={supervisor} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t-2 border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* 로고 및 CI 이미지 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
            {/* 팀 로고 */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="TAROTAROS Logo"
                width={200}
                height={80}
                loading="lazy"
                sizes="(max-width: 768px) 150px, 200px"
                className="object-contain"
              />
            </div>

            {/* CI 이미지 */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/CI.png"
                alt="TAROTAROS CI"
                width={200}
                height={80}
                loading="lazy"
                sizes="(max-width: 768px) 150px, 200px"
                className="object-contain"
              />
            </div>

            {/* Moon 로고 */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/moon.png"
                alt="Moon Logo"
                width={200}
                height={80}
                loading="lazy"
                sizes="(max-width: 768px) 150px, 200px"
                className="object-contain"
              />
            </div>

            {/* New Contents 로고 */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/newcontents.png"
                alt="New Contents"
                width={200}
                height={80}
                loading="lazy"
                sizes="(max-width: 768px) 150px, 200px"
                className="object-contain"
              />
            </div>
          </div>

          {/* 카피라이트 */}
          <div className="text-center border-t-2 border-white/5 pt-12">
            <p className="text-xs text-gray-700 mb-3 tracking-[0.3em] font-black">
              PRESENTED BY
            </p>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              TAROTAROS
            </h3>
            <p className="text-xs text-gray-700 mb-6 tracking-[0.25em] font-black">
              NEW CONTENTS ACADEMY - VIRTUAL VISUALIZATION MODULE
            </p>
            <div className="h-px w-32 bg-white/10 mx-auto mb-6"></div>
            <p className="text-xs text-gray-600 mb-2 tracking-wider">
              CONTACT : <a href="mailto:team.tarotaros@gmail.com" className="text-green-400 hover:text-white transition-colors">team.tarotaros@gmail.com</a>
            </p>
            <div className="h-px w-32 bg-white/10 mx-auto my-4"></div>
            <p className="text-xs text-gray-700 mb-2 tracking-[0.2em] font-black">
              © 2025 TAROTAROS
            </p>
            <p className="text-xs text-gray-800 tracking-[0.15em] font-bold">
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
