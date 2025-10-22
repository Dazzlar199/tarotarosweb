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
    skills: ['Content Planning', 'Team Management', 'Theater Directing', 'AI Video'],
    description: '프로젝트의 전체적인 방향성을 설정하고 팀을 이끌어갑니다.',
    descriptionEn: 'Sets the overall direction of the project and leads the team.',
    image: '/images/sofie.png',
    portfolio: [
      {
        title: 'GOD DOES NOT BLINK - VR 프로젝트',
        description: '팀 리더 및 총괄 디렉팅',
        link: ''
      }
    ]
  },
  {
    id: 'lee-ji-yeong',
    name: '이지영',
    nameEn: 'Lee Ji Young',
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
    role: '3D 아티스트 / 플래너',
    roleEn: '3D Artist / Planner',
    skills: ['3D Modeling', 'Character Animation', 'AR Exhibition Planning'],
    description: '3D 모델링 및 캐릭터 애니메이션, AR 전시 기획을 담당합니다.',
    descriptionEn: 'Responsible for 3D modeling, character animation, and AR exhibition planning.',
    image: '/images/dasol.png',
    portfolio: [
      {
        title: 'GOD DOES NOT BLINK - VR 제작',
        description: 'Asset 3D Modeling 및 Character Animation 담당',
        link: ''
      },
      {
        title: '국가유산진흥원 - 실감형 디지털 문화유산 교육 콘텐츠',
        description: '실감의궤(연향) 콘텐츠 AR전시 기획 및 운영',
        link: ''
      }
    ]
  },
  {
    id: 'kim-chan-joo',
    name: '김찬주',
    nameEn: 'Kim Chan Joo',
    role: '테크 엔지니어',
    roleEn: 'Tech Engineer',
    skills: ['Music & Sound', 'Web & AI Development', 'Audio Engineering'],
    description: '사운드 디자인과 웹 개발을 담당합니다.',
    descriptionEn: 'Responsible for sound design and web development.',
    image: '/images/chanjoo.jpeg',
    portfolio: [
      {
        title: '현대 AI 리더십 코칭',
        description: '10개 핵심 가치 기반 AI 리더십 진단 및 맞춤형 코칭 시스템 (Next.js, OpenAI)',
        link: 'https://dazzlar.dev/dev'
      },
      {
        title: '9e 엔터테인먼트',
        description: 'K-POP 그룹 전문 엔터테인먼트 공식 웹사이트 (아티스트 관리 플랫폼)',
        link: 'https://dazzlar.dev/dev'
      },
      {
        title: 'Godai - 신과의 대화',
        description: 'Three.js 3D & MediaPipe AI 기반 인터랙티브 운명 상담 플랫폼',
        link: 'https://dazzlar.dev/dev'
      },
      {
        title: 'K-POP Music Production',
        description: 'X:IN, 달샤벳, 레이디스코드 등 다수 아티스트 믹싱/마스터링 (NT Studio 총괄)',
        link: ''
      },
      {
        title: 'Game Sound Design',
        description: '하이큐, 모죠의 일지, SECOND WAVE 등 모바일/PC 게임 사운드 제작',
        link: ''
      },
      {
        title: 'Artist - Dazzlar',
        description: '아티스트 활동 (2019~) - 3개 EP 앨범 발매 및 다수 피처링/프로듀싱',
        link: ''
      }
    ]
  }
];

export const supportMembers: TeamMember[] = [
  {
    id: 'park-jeong-seok',
    name: '박정석',
    nameEn: 'Park Jeong Seok',
    role: '개발 기술 지원',
    roleEn: 'Contents Development',
    skills: ['Unreal Engine Support', 'VR Tech Support'],
    description: '개발 기술 지원',
    descriptionEn: 'Contents Development Support',
    image: '/images/park.png',
    portfolio: []
  },
  {
    id: 'kim-yu-chan',
    name: '김유찬',
    nameEn: 'Kim Yu Chan',
    role: '아트 기술 지원',
    roleEn: 'Art Tech Support',
    skills: ['Unreal Engine Support', 'Art Tech Support'],
    description: '아트 기술 지원',
    descriptionEn: 'Art Tech Support',
    portfolio: []
  }
];

export const supervisors: TeamMember[] = [
  {
    id: 'jeon-woo-yeol',
    name: '전우열',
    nameEn: 'Jeon Woo Yeol',
    role: 'VENTA VR CEO',
    roleEn: 'VENTA VR CEO',
    skills: ['VR Production', 'Business Strategy'],
    description: '',
    descriptionEn: '',
    portfolio: []
  },
  {
    id: 'kim-su-ok',
    name: '김수옥',
    nameEn: 'Kim Su Ok',
    role: 'Art Advisory',
    roleEn: 'Art Advisory',
    skills: ['Art Direction', 'Creative Consulting'],
    description: '',
    descriptionEn: '',
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
