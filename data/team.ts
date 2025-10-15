export interface TeamMember {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  skills: string[];
  description: string;
  descriptionEn: string;
  image?: string;
  portfolio?: {
    title: string;
    description: string;
    link?: string;
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'kim-so-hee',
    name: '김소희',
    nameEn: 'Kim So Hee',
    role: '팀 리더 / 디렉터',
    roleEn: 'Team Leader / Director',
    skills: ['Content Planning', 'Team Management', 'Project Direction'],
    description: '프로젝트의 전체적인 방향성을 설정하고 팀을 이끌어갑니다.',
    descriptionEn: 'Sets the overall direction of the project and leads the team.',
    portfolio: []
  },
  {
    id: 'lee-ji-yeong',
    name: '이지영',
    nameEn: 'Lee Ji Yeong',
    role: '아트 디렉터',
    roleEn: 'Art Director',
    skills: ['Concept Design', 'Level Design', '3D Animation'],
    description: '프로젝트의 비주얼 콘셉트와 레벨 디자인을 담당합니다.',
    descriptionEn: 'Responsible for visual concepts and level design of the project.',
    portfolio: []
  },
  {
    id: 'nam-da-sol',
    name: '남다솔',
    nameEn: 'Nam Da Sol',
    role: '플래너 / 3D 모델러',
    roleEn: 'Planner / 3D Modeler',
    skills: ['Content Planning', 'Blender 3D Modeling', 'Asset Creation'],
    description: '콘텐츠 기획과 3D 모델링 작업을 진행합니다.',
    descriptionEn: 'Handles content planning and 3D modeling work.',
    portfolio: []
  },
  {
    id: 'kim-chan-joo',
    name: '김찬주',
    nameEn: 'Kim Chan Joo',
    role: '테크 엔지니어',
    roleEn: 'Tech Engineer',
    skills: ['Music & Sound', 'Web Development', 'Audio Engineering'],
    description: '사운드 디자인과 웹 개발을 담당합니다.',
    descriptionEn: 'Responsible for sound design and web development.',
    portfolio: []
  }
];

export const projectInfo = {
  title: 'GOD DOES NOT BLINK',
  subtitle: 'Cosmic Horror Dilemma VR',
  descriptionKo: 'GOD DOES NOT BLINK는 극한 상황에서의 선택을 통해 자신을 마주하는 코즈믹 호러 VR 체험 콘텐츠입니다. 사용자는 안내자 미미르와 함께 세 가지 딜레마에 직면합니다. 모든 선택은 기록되고 분석되며, 최종적으로 당신을 지켜본 존재와 마주하게 됩니다. 선택에 따른 유형 분석 카드 형식의 8가지 성향 진단 결과가 제공됩니다.',
  descriptionEn: 'GOD DOES NOT BLINK is a cosmic horror VR experience where users face extreme dilemmas. Guided by Mimir, participants confront three critical choices. Every decision is recorded and analyzed, ultimately leading to an encounter with the entity that has been watching. Results are presented as one of eight personality analysis cards based on your choices.',
  specs: {
    platform: 'Quest 3',
    engine: 'Unreal Engine',
    duration: '10 min',
    rating: '15+',
    type: 'VR Experience'
  }
};

export const teamInfo = {
  nameKo: '타로타로스',
  nameEn: 'TAROTAROS',
  descriptionKo: '타로타로스는 서사와 기술을 결합한 인터랙티브 콘텐츠 제작팀입니다. VR과 AI 기술을 활용한 콘텐츠를 제작하며, IP 기반 크로스 플랫폼 확장을 지향합니다. 나아가 커뮤니티 기반 Crowd-Sourced 플랫폼 구축을 목표로 합니다.',
  descriptionEn: 'TAROTAROS is an interactive content creative team that combines narrative and technology. We create VR and AI-powered content with a focus on cross-platform IP expansion. Our long-term goal is to build a community-driven content development platform.',
  philosophy: '진지하지만 무겁지 않고, 가볍지만 공허하지 않게',
  contact: {
    email: 'team.tarotaros@gmail.com',
    instagram: '@team_tarotaros'
  }
};
