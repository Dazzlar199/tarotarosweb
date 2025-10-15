# TAROTAROS - God Does Not Blink

코스믹 호러 VR 프로젝트 팀 포트폴리오 웹사이트

## 🎯 프로젝트 소개

TAROTAROS 팀의 **God Does Not Blink** VR 프로젝트를 소개하는 웹사이트입니다.
코스믹 호러 컨셉을 살린 다크 테마와 네온 컬러로 디자인되었습니다.

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (권장)

## 🚀 시작하기

### 개발 서버 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드

```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
taro_web/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 공통 레이아웃
│   ├── page.tsx           # 메인 페이지
│   ├── globals.css        # 글로벌 스타일
│   ├── not-found.tsx      # 404 페이지
│   └── member/
│       └── [id]/
│           └── page.tsx   # 팀원 상세 페이지
├── components/            # React 컴포넌트
│   ├── Hero.tsx          # 히어로 섹션
│   ├── ProjectInfo.tsx   # 프로젝트 소개
│   ├── TeamIntro.tsx     # 팀 소개
│   └── MemberCard.tsx    # 팀원 카드
├── data/
│   └── team.ts           # 팀/프로젝트 데이터
└── public/
    └── images/           # 이미지 파일
```

## 🎨 디자인 컨셉

- **색상**:
  - 배경: 블랙 (#0a0a0a)
  - 주요: 네온 그린 (#10b981)
  - 보조: 퍼플 (#8b5cf6), 블루 (#3b82f6)

- **스타일**:
  - 다크 테마 기반
  - 코스믹 호러 분위기
  - 굵은 임팩트 타이포그래피
  - 글래스모피즘 카드 효과

## 📝 콘텐츠 수정

### 팀원 정보 수정

`data/team.ts` 파일에서 팀원 정보를 수정할 수 있습니다:

```typescript
export const teamMembers: TeamMember[] = [
  {
    id: 'kim-so-hee',
    name: '김소희',
    role: '팀 리더 / 디렉터',
    skills: ['Content Planning', 'Team Management'],
    description: '...',
    portfolio: [
      {
        title: '프로젝트 제목',
        description: '프로젝트 설명',
        link: 'https://...'
      }
    ]
  },
  // ...
]
```

### 프로젝트 정보 수정

`data/team.ts` 파일의 `projectInfo`와 `teamInfo`를 수정하세요.

## 📸 이미지 추가

팀원 사진이나 프로젝트 이미지를 추가하려면:

1. `public/images/` 폴더에 이미지 업로드
2. `data/team.ts`에서 `image` 필드 추가:

```typescript
{
  id: 'kim-so-hee',
  name: '김소희',
  image: '/images/kim-so-hee.jpg',
  // ...
}
```

3. `components/MemberCard.tsx`에서 이미지 태그로 변경

## 🌐 배포

### Vercel 배포 (권장)

1. GitHub에 레포지토리 생성 후 push
2. [Vercel](https://vercel.com)에서 Import
3. 자동 배포 완료!

### 다른 호스팅

```bash
npm run build
```

생성된 `.next` 폴더를 호스팅 서비스에 업로드

## 📧 연락처

- Email: team.tarotaros@gmail.com
- Instagram: [@team_tarotaros](https://instagram.com/team_tarotaros)

## 📄 라이선스

© 2025 TAROTAROS. All rights reserved.
